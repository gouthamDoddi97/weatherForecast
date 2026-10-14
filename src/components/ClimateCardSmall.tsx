import { WeatherConditionIcons } from '../data/enums'

function ClimateCard({ time, temperature, condition }: { time: string, temperature: number, condition: keyof typeof WeatherConditionIcons }) {
  return (
    <div className="hour-card">
      <span className="hour-card-time">{time}</span>
      <span className="hour-card-icon" aria-hidden="true">{WeatherConditionIcons[condition]}</span>
      <strong>{temperature}°</strong>
    </div>
  )
}

export default ClimateCard
