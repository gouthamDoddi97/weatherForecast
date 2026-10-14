import { WeatherConditionIcons } from '../data/enums';
import { useWeather } from '../context/useWeather';

function HeroCard() {
  const { weather, isLoading } = useWeather();
  if (!weather) return <section className="current-weather"><p>{isLoading ? 'Loading current conditions...' : 'Search for a city to see its weather.'}</p></section>;

  return (
    <section className={`current-weather weather-${weather.current.condition.toLowerCase()}`} aria-label="Current weather">
      <div className="current-copy">
        <span className="section-kicker">Current conditions</span>
        <p className="current-temp">{weather.current.temperature}<small>°C</small></p>
        <p className="current-condition"><span className="current-icon">{WeatherConditionIcons[weather.current.condition]}</span>{weather.current.condition.replace(/([a-z])([A-Z])/g, '$1 $2')}</p>
        <p className="current-feels">Feels like {weather.current.feelsLike}°C</p>
        <div className="current-meta"><span>H {weather.current.high}°</span><span>L {weather.current.low}°</span></div>
      </div>
    </section>
  )
}

export default HeroCard
