import { WeatherConditionIcons } from "../data/enums";
import type { WeekTimelineDataType } from "../types/components";
import VerticalGrid from "./layout/VerticalGrid";
import StyledCard from "./StyledCard";

const data: WeekTimelineDataType[] = [
  // dummy data for 2 weeks
  {
    day: "Monday",
    date: "2023-10-02",
    weatherIcon: "Sunny",
    highestTemperature: "25°C",
    lowestTemperature: "18°C",
    windSpeed: "10 km/h",
    humidity: "60%",
    rainChance: "20%"
  },
  {
    day: "Tuesday",
    date: "2023-10-03",
    weatherIcon: "Cloudy",
    highestTemperature: "23°C",
    lowestTemperature: "16°C",
    windSpeed: "15 km/h",
    humidity: "70%",
    rainChance: "40%"
  },
  {
    day: "Wednesday",
    date: "2023-10-04",
    weatherIcon: "Rain",
    highestTemperature: "20°C",
    lowestTemperature: "14°C",
    windSpeed: "20 km/h",
    humidity: "80%",
    rainChance: "80%"
  },
  {
    day: "Thursday",
    date: "2023-10-05",
    weatherIcon: "Sunny",
    highestTemperature: "26°C",
    lowestTemperature: "19°C",
    windSpeed: "12 km/h",
    humidity: "55%",
    rainChance: "10%"
  },
  {
    day: "Friday",
    date: "2023-10-06",
    weatherIcon: "Cloudy",
    highestTemperature: "24°C",
    lowestTemperature: "17°C",
    windSpeed: "18 km/h",
    humidity: "65%",
    rainChance: "30%"
  },
  {
    day: "Saturday",
    date: "2023-10-07",
    weatherIcon: "Rain",
    highestTemperature: "21°C",
    lowestTemperature: "15°C",
    windSpeed: "22 km/h",
    humidity: "75%",
    rainChance: "70%"
  },
  {
    day: "Sunday",
    date: "2023-10-08",
    weatherIcon: "Sunny",
    highestTemperature: "27°C",
    lowestTemperature: "20°C",
    windSpeed: "14 km/h",
    humidity: "50%",
    rainChance: "5%"
  },
]

function WeekTimeline() {
  return (
    <div className="w-full h-full flex justify-center items-center space-x-2 p-2">
      {data.map((dayData, index) => (

        <StyledCard>

          <VerticalGrid key={index} rowLength={1} componentsList={[
              { component: <div>{dayData.day}</div>, height: "20%" },
              { component: <div className="flex justify-center items-center text-2xl leading-none">{
                WeatherConditionIcons[dayData.weatherIcon]
              }</div>, height: "30%" },
              { component: <div>{dayData.highestTemperature}</div>, height: "10%" },
              { component: <div>{dayData.lowestTemperature}</div>, height: "10%" },
            ]}
            />

        </StyledCard>

      ))}
    </div>
  )
}

export default WeekTimeline
