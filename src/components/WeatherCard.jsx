
const WeatherCard = ({ weather }) => {
    return (
      <div className="bg-gray-200 p-6 rounded-lg text-center shadow-md">
        <h2 className="text-2xl font-bold">{weather.name}</h2>
        <p className="text-lg">{weather.weather[0].description}</p>
        <h3 className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</h3>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind Speed: {weather.wind.speed.toFixed(1)} m/s</p>
      </div>
    );
  };

export default WeatherCard;