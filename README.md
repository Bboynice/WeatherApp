# Weather.io

Weather.io is a motion-rich React + Vite experience for exploring current weather conditions anywhere in the world. A single search delivers live conditions from OpenWeather, adaptive day/night visuals, and a curated data set designed for design-forward dashboards.

## Features

- Real-time current weather via the OpenWeather REST API (metric units)
- Smart daylight detection to flip the entire UI between sunlit and night modes
- GSAP-driven entrance animations for header, search, and data panels
- Detailed metrics including feels-like, min/max, humidity, pressure, wind, timezone, sunrise, and sunset in local time
- Custom typography, frosted glass cards, and responsive layout optimized for full-screen kiosks

## Tech Stack

- React 19 + Vite 6
- Tailwind CSS 4
- GSAP (@gsap/react) for declarative animations
- OpenWeather API for conditions and astronomy data
- Docker + docker-compose for consistent local/dev deployments

## Project Structure

```
weather-app/
├── Dockerfile
├── docker-compose.yml
├── public/
│   └── logo-combined-dark.webp
├── src/
│   ├── api/
│   │   └── weather.js
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── images/
│   │   └── logo/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.css
│   │   └── WeatherCard.jsx
│   ├── styles/
│   │   └── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js ≥ 18 (matches the Docker base image)
- npm ≥ 9
- An OpenWeather API key (free tier works fine)

### Installation

```bash
git clone https://github.com/<your-handle>/weather-app.git
cd weather-app
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```bash
VITE_WEATHER_API_KEY=your_openweather_api_key
```

Vite automatically exposes variables prefixed with `VITE_` to the client. Restart the dev server after changing the key.

### Development Server

```bash
npm run dev
```

The app defaults to `http://localhost:5173` and auto-reloads on changes.

### Quality Checks

```bash
npm run lint
```

ESLint is configured via `eslint.config.js` with React, React Hooks, and Refresh plugins.

### Production Build

```bash
npm run build
npm run preview   # serves /dist at http://localhost:4173
```

## Docker & Compose

- `Dockerfile` builds the static bundle and serves it with `serve` on port `4173`.
- `docker-compose.yml` mounts the repo for hot reloading and forwards the Vite dev server from `5173`.

Common workflows:

```bash
# Development inside Docker (hot reload)
docker compose up --build

# Production-style image
docker build -t weather-io .
docker run -p 4173:4173 --env VITE_WEATHER_API_KEY=... weather-io
```

## Usage Highlights

1. **Search** – enter a city, hit Enter or click *Search*.
2. **Watch the stage** – header contracts, cards slide in, and the illustration updates to match the condition/daylight state.
3. **Inspect insights** – review feels-like, min/max, humidity, pressure, wind, sunrise/sunset (localized), timezone, and cloud cover.
4. **Stay synced** – the app re-checks daylight status every minute to keep the background accurate while you leave it open.

## API Reference

- `GET https://api.openweathermap.org/data/2.5/weather`
  - Query params: `q` (city), `appid`, `units=metric`
  - Response is forwarded directly into `WeatherCard` after basic error handling.

## Roadmap Ideas

- Add 5-day / hourly forecast panes
- Persist recent searches
- Offline/error states with retry CTA
- Unit toggle (°C ⇄ °F) and wind speed preferences
- Automated visual regression tests


