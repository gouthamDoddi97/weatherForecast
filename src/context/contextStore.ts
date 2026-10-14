import { createContext } from 'react';
import type { WeatherContextValue } from './WeatherContext';

export const WeatherContext = createContext<WeatherContextValue | null>(null);