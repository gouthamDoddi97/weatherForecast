import VerticalGrid from './layout/VerticalGrid'
import { WeatherConditionIcons } from '../data/enums'
import StyledCard from './StyledCard'

function ClimateCard({ time, temperature, condition }: { time: string, temperature: number, condition: keyof typeof WeatherConditionIcons }) {
  return (
    <StyledCard>
      <VerticalGrid rowLength={3} componentsList={[
        { component: <div>{time}</div>, height: '33%' },
        { component: <div>{temperature}°</div>, height: '33%' },
        { component: <div>{WeatherConditionIcons[condition]}</div>, height: '33%' },
      ]} />
    </StyledCard>
  )
}

export default ClimateCard
