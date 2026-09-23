import { type ComponentListType } from "../types/components.ts"
import HeroCard from '../components/HeroCard';
import DayTimeline from '../components/DayTimeline';


export const BigComponentListForContentLayout: ComponentListType[] = [
  { component: <HeroCard />, height: "60%" },
  { component: <DayTimeline />, height: "20%" },
  { component: <HeroCard />, height: "20%" }
];
