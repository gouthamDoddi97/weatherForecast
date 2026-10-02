import { WeatherConditionIcons } from "../data/enums";

export  interface ComponentListType { 
  component: React.ReactNode,
  height?: string 
};

export interface WeekTimelineDataType {
  day: string,
  date: string,
  weatherIcon: keyof typeof WeatherConditionIcons,
  highestTemperature: string,
  lowestTemperature: string,
  windSpeed?: string,
  humidity?: string,
  rainChance?: string,
}

export interface RecentSearchedLocationType {
  location: string,
  temperature: string,
  condition: keyof typeof WeatherConditionIcons,
  time: string,
}
