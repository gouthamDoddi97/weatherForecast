import { type ComponentListType, type RecentSearchedLocationType } from "../types/components.ts"
import HeroCard from '../components/HeroCard';
import DayTimeline from '../components/DayTimeline';


export const BigComponentListForContentLayout: ComponentListType[] = [
  { component: <HeroCard />, height: "60%" },
  { component: <DayTimeline />, height: "20%" },
  { component: <HeroCard />, height: "20%" }
];

export const RecentSearchedLocations: RecentSearchedLocationType[] = [
    {
      location: "New York",
      temperature: "22°C",
      condition: "Sunny",
      time: "10:00 AM"
    }, {
      location: "Los Angeles", 
      temperature: "25°C",
      condition: "Cloudy",
      time: "11:00 AM"
    },
    {
      location: "Los Angeles", 
      temperature: "25°C",
      condition: "Cloudy",
      time: "11:00 AM"
    },
    {
      location: "Los Angeles", 
      temperature: "25°C",
      condition: "Cloudy",
      time: "11:00 AM"
    },
    {
      location: "Los Angeles", 
      temperature: "25°C",
      condition: "Cloudy",
      time: "11:00 AM"
    }
]
