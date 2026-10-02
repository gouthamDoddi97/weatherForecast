import VerticalGrid from './layout/VerticalGrid'
import { WeatherConditionIcons } from '../data/enums'
import StyledCard from './StyledCard'

function ClimateCard({ time, temperature, condition }: { time: string, temperature: number, condition: keyof typeof WeatherConditionIcons }) {
  return (
    <StyledCard>
      <VerticalGrid rowLength={3} height={"100%"} componentsList={[
        { component: <div>{time}</div>, height: '20%' },
        { component: <div className="text-2xl leading-none">{WeatherConditionIcons[condition]}</div>, height: '1fr' },
        { component: <div>{temperature}°</div>, height: '20%' },
      ]} />
    </StyledCard>
  )
}

export default ClimateCard
