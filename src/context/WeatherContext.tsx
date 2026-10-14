import { useEffect, useState, type ReactNode } from 'react';
import { WeatherConditionIcons } from '../data/enums';
import { WeatherContext } from './contextStore';

type WeatherKind = keyof typeof WeatherConditionIcons;

export interface HourlyWeather {
  time: string;
  temperature: number;
  condition: WeatherKind;
}

export interface DailyWeather {
  date: string;
  condition: WeatherKind;
  high: number;
  low: number;
}

export interface WeatherData {
  city: string;
  region: string;
  country: string;
  date: string;
  current: {
    temperature: number;
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    windDirection: number;
    pressure: number;
    condition: WeatherKind;
    high: number;
    low: number;
  };
  hourly: HourlyWeather[];
  daily: DailyWeather[];
}

export interface RecentWeatherLocation {
  city: string;
  region: string;
  country: string;
  temperature: number;
  condition: WeatherKind;
}

export interface WeatherContextValue {
  weather: WeatherData | null;
  recentLocations: RecentWeatherLocation[];
  isLoading: boolean;
  error: string | null;
  searchLocation: (location: string) => Promise<void>;
}

interface GeocodingResult {
  name: string;
  admin1?: string;
  country?: string;
  latitude: number;
  longitude: number;
}

interface ForecastResponse {
  current: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    weather_code: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    surface_pressure: number;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}

function weatherKind(code: number): WeatherKind {
  if (code === 0) return 'Sunny';
  if (code === 1 || code === 2) return 'PartlyCloudy';
  if (code === 3) return 'Cloudy';
  if (code === 45 || code === 48) return 'Fog';
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return 'Snow';
  if (code >= 95) return 'Thunderstorm';
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return 'Rain';
  return 'Cloudy';
}

function localTimeLabel(time: string) {
  return new Intl.DateTimeFormat(undefined, { hour: 'numeric' }).format(new Date(time));
}

async function fetchWeather(location: string): Promise<WeatherData> {
  const geocodingUrl = new URL('https://geocoding-api.open-meteo.com/v1/search');
  geocodingUrl.search = new URLSearchParams({ name: location, count: '1', language: 'en', format: 'json' }).toString();
  const geocodingResponse = await fetch(geocodingUrl);
  if (!geocodingResponse.ok) throw new Error('Could not search for that location.');
  const geocodingData = await geocodingResponse.json() as { results?: GeocodingResult[] };
  const place = geocodingData.results?.[0];
  if (!place) throw new Error('No matching location found. Try another city.');

  const forecastUrl = new URL('https://api.open-meteo.com/v1/forecast');
  forecastUrl.search = new URLSearchParams({
    latitude: String(place.latitude),
    longitude: String(place.longitude),
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,surface_pressure',
    hourly: 'temperature_2m,weather_code',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min',
    timezone: 'auto',
    forecast_days: '7',
  }).toString();
  const forecastResponse = await fetch(forecastUrl);
  if (!forecastResponse.ok) throw new Error('Could not load the weather forecast.');
  const forecast = await forecastResponse.json() as ForecastResponse;
  const matchingHour = forecast.hourly.time.findIndex((time) => time >= forecast.current.time);
  const hourStart = matchingHour < 0 ? 0 : matchingHour;

  return {
    city: place.name,
    region: place.admin1 && place.admin1.toLocaleLowerCase() !== place.name.toLocaleLowerCase() ? place.admin1 : '',
    country: place.country ?? '',
    date: new Intl.DateTimeFormat(undefined, { weekday: 'long', month: 'long', day: 'numeric' }).format(new Date(forecast.current.time)),
    current: {
      temperature: Math.round(forecast.current.temperature_2m),
      feelsLike: Math.round(forecast.current.apparent_temperature),
      humidity: forecast.current.relative_humidity_2m,
      windSpeed: Math.round(forecast.current.wind_speed_10m),
      windDirection: forecast.current.wind_direction_10m,
      pressure: Math.round(forecast.current.surface_pressure),
      condition: weatherKind(forecast.current.weather_code),
      high: Math.round(forecast.daily.temperature_2m_max[0]),
      low: Math.round(forecast.daily.temperature_2m_min[0]),
    },
    hourly: forecast.hourly.time.slice(hourStart, hourStart + 24).map((time, index) => ({
      time: index === 0 ? 'Now' : localTimeLabel(time),
      temperature: Math.round(forecast.hourly.temperature_2m[hourStart + index]),
      condition: weatherKind(forecast.hourly.weather_code[hourStart + index]),
    })),
    daily: forecast.daily.time.map((date, index) => ({
      date,
      condition: weatherKind(forecast.daily.weather_code[index]),
      high: Math.round(forecast.daily.temperature_2m_max[index]),
      low: Math.round(forecast.daily.temperature_2m_min[index]),
    })),
  };
}

export function WeatherProvider({ children }: { children: ReactNode }) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [recentLocations, setRecentLocations] = useState<RecentWeatherLocation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchLocation = async (location: string) => {
    const query = location.trim();
    if (!query) return;
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchWeather(query);
      setWeather(result);
      setRecentLocations((previous) => [{ city: result.city, region: result.region, country: result.country, temperature: result.current.temperature, condition: result.current.condition }, ...previous.filter((place) => place.city !== result.city)].slice(0, 5));
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Weather data is unavailable.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let active = true;
    void fetchWeather('New York')
      .then((result) => {
        if (!active) return;
        setWeather(result);
        setRecentLocations([{ city: result.city, region: result.region, country: result.country, temperature: result.current.temperature, condition: result.current.condition }]);
      })
      .catch((cause: unknown) => {
        if (active) setError(cause instanceof Error ? cause.message : 'Weather data is unavailable.');
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, recentLocations, isLoading, error, searchLocation }}>
      {children}
    </WeatherContext.Provider>
  );
}