import './styles/App.css'
import Header from './components/Header'
import { useState } from 'react'
import { fetchWeather } from './api/weather'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import WeatherIcon from './components/WeatherIcon'

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const handleSearch = async (city) => {
    try {
      setError(null);
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };


  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      {error && <p className='error'>{error}</p>}
      {weather && (
        <div className='weather-container'>
          <WeatherCard weather={weather} />
          <WeatherIcon icon={weather.weather[0].icon} />
        </div>
      )}
    </>
  )
}

export default App
