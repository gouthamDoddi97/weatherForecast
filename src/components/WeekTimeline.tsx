import { WeatherConditionIcons } from "../data/enums";
import { useWeather } from "../context/useWeather";

function WeekTimeline() {
  const { weather, isLoading } = useWeather();
  if (!weather) return <div className="week-forecast-empty">{isLoading ? 'Loading forecast...' : 'No forecast available.'}</div>;

  return (
    <div className="week-forecast">
      {weather.daily.map((dayData) => (
        <div className="week-day" key={dayData.date}>
          <span className="week-day-name">{new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(new Date(`${dayData.date}T12:00:00`))}</span>
          <span className="week-day-icon" aria-hidden="true">{WeatherConditionIcons[dayData.condition]}</span>
          <strong>{dayData.high}°</strong>
          <span className="week-day-low">{dayData.low}°</span>
        </div>
      ))}
    </div>
  )
}

export default WeekTimeline
