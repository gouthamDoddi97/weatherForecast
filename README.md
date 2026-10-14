# WeatherForecast

WeatherForecast is a responsive weather dashboard for checking current conditions and forecasts by city. It combines a dark, glass-inspired interface with live weather data, a temperature trend chart, hourly and seven-day forecasts, recently searched places, and a wind-direction compass.

## Preview

The hero image changes with the current conditions. These are examples of the clear and overcast weather artwork used in the dashboard.

| Clear conditions | Cloudy and stormy conditions |
| --- | --- |
| ![Golden light over a clear landscape](https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85) | ![Clouds over a dark landscape](https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=900&q=85) |

## Features

- Search for a city and view its current temperature, feels-like temperature, and daily high and low.
- Browse the next 24 hours and the upcoming seven-day forecast.
- Review humidity, wind speed, and pressure alongside a live temperature chart.
- See wind speed and compass direction based on the selected location.
- Return to recently searched places, with weather summaries from their latest searches.
- Use the dashboard on desktop and mobile layouts.

## Weather Data

Weather data comes from [Open-Meteo](https://open-meteo.com/). The app uses its geocoding API to find city coordinates and its forecast API for current, hourly, and daily conditions. No API key is required.

Hero photography is served by [Unsplash](https://unsplash.com/), so an internet connection is needed to load the weather images.

## Run Locally

Install dependencies and start the Vite development server:

```sh
pnpm install
pnpm dev
```

## Checks

```sh
pnpm lint
pnpm build
```

## Tech Stack

React, TypeScript, and Vite power the application. The UI uses Tailwind CSS and Material UI, while Chart.js renders the hourly temperature chart.