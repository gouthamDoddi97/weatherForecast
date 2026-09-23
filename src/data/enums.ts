

export const WeatherConditionIcons = {
  PartlyCloudy: "⛅",
  Cloudy: "☁️",
  Sunny: "☀️",
  Rain: "🌧️",
  Snow: "❄️",
  Thunderstorm: "⛈️",
  Fog: "🌫️",
  Windy: "💨",
  Hail: "🌨️",
} as const;

export type WeatherConditionIcon = typeof WeatherConditionIcons[keyof typeof WeatherConditionIcons];
