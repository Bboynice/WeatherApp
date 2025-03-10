const WeatherIcon = ({ icon }) => {
    return (
        <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt='weather icon' className='w-16 h-16 bg-white rounded-full' />
    )
}

export default WeatherIcon;