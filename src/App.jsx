import './styles/App.css'
import Header from './components/Header'
import { useState } from 'react'
import { fetchWeather } from './api/weather'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import bgLight from './assets/images/bg-light.jpg'
import bgDark from './assets/images/bg-dark.jpg'



function App({isDarkMode}) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const backgroundImage = isDarkMode ? bgDark : bgLight;
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
      <div className='flex items-center justify-center bg-white-400 h-screen w-screen'>
        <div className='flex flex-col items-center rounded-[40px] bg-center bg-no-repeat bg-cover h-[96vh] w-[98vw]' style={{ backgroundImage: `url(${backgroundImage})` }}>
          <SearchBar onSearch={handleSearch} />
          {error && 
          <p className='error bg-white/20 backdrop-blur-sm shadow-lg shadow-black/10 rounded-[25px] text-center w-[52%] h-1/5 flex flex-col items-center justify-center mb-4 align-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/8 text-xl'>{error}</p>}
          {weather && (
              <WeatherCard weather={weather} />
          )}
        </div>
      </div>
    </>
  )
}

export default App
