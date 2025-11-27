import gsap from 'gsap';
import { useGSAP } from '@gsap/react';  
import { useRef } from 'react';
import bgLight from '../assets/images/bg-light.jpg'
import bgDark from '../assets/images/bg-dark.jpg'
import bright_broken_clouds from '../assets/icons/bright-brokenclouds.svg'
import bright_clear_sky from '../assets/icons/bright-clearsky.svg'
import bright_few_clouds from '../assets/icons/bright-fewclouds.svg'
import bright_overcast_clouds from '../assets/icons/bright-overcastclouds.svg'
import bright_scattered_clouds from '../assets/icons/bright-scatteredclouds.svg'
import dark_broken_clouds from '../assets/icons/dark-brokenclouds.svg'
import dark_clear_sky from '../assets/icons/dark-clearsky.svg'
import dark_few_clouds from '../assets/icons/dark-fewclouds.svg'
import dark_overcast_clouds from '../assets/icons/dark-overcastclouds.svg'
import dark_scattered_clouds from '../assets/icons/dark-scatteredclouds.svg'
import dark_light_snow from '../assets/icons/dark-snow.svg'
import bright_light_snow from '../assets/icons/bright-snow.svg'
import './WeatherCard.css'


const WeatherCard = ({ weather, isDarkMode, Text, isDaytime }) => {
    const cardRef = useRef(null);
    const textRefs = useRef([]);
    const iconRef = useRef(null);
    const backgroundImage = isDarkMode ? bgDark : bgLight;
    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    // 1.	Clear sky – No clouds at all 🌞
    // 2.	Few clouds – 11-25% cloud cover ⛅
    // 3.	Scattered clouds – 25-50% cloud cover 🌤️
    // 4.	Broken clouds – 51-84% cloud cover 🌥️
    // 5.	Overcast clouds – 85-100% cloud cover ☁️
    
    useGSAP(() => {
        gsap.from(cardRef.current, {
            opacity: 0,
            x: 500,
            duration: 1,
            ease: 'power2.inOut',
        });
        gsap.from(textRefs.current, {
            opacity: 0,
            x: 200,
            duration: 1,
            delay: 1.5,
            stagger: 0.1,
            ease: 'power2.inOut',
        });

        gsap.from(iconRef.current, {
            opacity: 0,
            x: 200,
            duration: 1,
            delay: 2,
            ease: 'power2.inOut',
        });
        
    }, [Text]);

    const formattedDate = new Date().toLocaleDateString("en-GB", {
        weekday: "long", // "Sunday"
        day: "2-digit",  // "12"
        month: "short",  // "Dec"
        year: "numeric", // "2025"
      });

      const weatherIcons = {
        "dark_broken_clouds": dark_broken_clouds,
        "dark_clear_sky": dark_clear_sky,
        "dark_few_clouds": dark_few_clouds,
        "dark_overcast_clouds": dark_overcast_clouds,
        "dark_scattered_clouds": dark_scattered_clouds,
        "bright_broken_clouds": bright_broken_clouds,
        "bright_clear_sky": bright_clear_sky,
        "bright_few_clouds": bright_few_clouds,
        "bright_overcast_clouds": bright_overcast_clouds,
        "bright_scattered_clouds": bright_scattered_clouds,
        "dark_light_snow": dark_light_snow,
        "bright_light_snow": bright_light_snow,
        
    };



      const offsetInSeconds = weather.timezone; 
      const offsetInHours = offsetInSeconds / 3600; 
      const timezoneString = `GMT${offsetInHours >= 0 ? '+' : ''}${offsetInHours}`;

      const sunrise = new Date((weather.sys.sunrise + weather.timezone) * 1000)
      .toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false }) + ` (By local time)`;
    
    const sunset = new Date((weather.sys.sunset + weather.timezone) * 1000)
      .toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false }) + ` (By local time)`;


    const textColor = isDaytime ? 'black' : 'white';
    const iconColor = isDaytime ? 'dark' : 'bright';

    const weatherKey   = iconColor + "_" + weather.weather[0].description.toLowerCase().replace(" ", "_");
    const weatherIcon = weatherIcons[weatherKey] || "dark_clear_sky";
    
    return (
      <div className="text-center w-1/1 flex flex-row items-center justify-center h-4/5 m-4 " style={{ color: textColor}}>
        <div className="m-4 rounded-[25px] text-center w-1/1 h-1/1 flex flex-row items-center justify-center" ref={cardRef}>
            <div className=' rounded-[25px] text-center w-3/10 h-1/1 flex flex-col items-end justify-center gap-4'>
              <div className='bg-white/20 backdrop-blur-sm rounded-[25px] text-center w-[100%] h-1/3 flex flex-col items-start justify-center mt-4'>
              <h3 ref={(el) => (textRefs.current[0] = el)} className="text-2xl font-bold ml-10 mb-8 ">{weather.name}, {weather.sys.country}</h3>
              <h1 ref={(el) => (textRefs.current[1] = el)} className="text-lg ml-10 ">{weather.weather[0].description}</h1>
              <h1 ref={(el) => (textRefs.current[2] = el)} className="text-4xl font-bold ml-10 ">{Math.round(weather.main.temp)}°C</h1>
            


              </div>
              <div className='bg-white/20 backdrop-blur-sm  rounded-[25px] text-center w-[100%] h-1/3 flex flex-col items-start justify-center'>
              <div ref={(el) => (textRefs.current[5] = el)} className="text-lg ml-10 font-bold text-3xl ">Feels like: {Math.round(weather.main.feels_like)}°C</div>
              <p className="ml-10 " ref={(el) => (textRefs.current[7] = el)}>Wind Speed: {weather.wind.speed.toFixed(1)} m/s</p>
              <p ref={(el) => (textRefs.current[9] = el)} className="text-lg ml-10 ">Min: {Math.round(weather.main.temp_min)}°C Max: {Math.round(weather.main.temp_max)}°C</p>
              </div>
              
              <div className=' bg-white/30 backdrop-blur-sm   rounded-[25px] text-center w-[100%] h-1/3 flex flex-col items-start justify-center mb-4'>
  
                  <p className="ml-10 " ref={(el) => (textRefs.current[11] = el)}>Cloud Coverage: {weather.clouds.all}%</p>
                  <p className="ml-10 " ref={(el) => (textRefs.current[12] = el)}>Humidity: {weather.main.humidity}%</p>
                  <p ref={(el) => (textRefs.current[13] = el)} className="text-l ml-10 ">Pressure: {weather.main.pressure}</p>
                  
                  
                
              </div>


            </div>
            <div className='  rounded-[25px] text-center w-7/10 h-1/1 flex flex-row items-center justify-center gap-4'>
                <div className='  bg-white/20 backdrop-blur-sm  rounded-[25px] text-center w-2/5 h-[95%] flex flex-col items-center justify-center ml-4'>
                  <div className='w-[60%] h-[60%] rounded-[25px] flex items-center justify-center select-none '>
                    <img ref={iconRef} src={weatherIcon} alt="Weather Icon" className='w-full h-full ' />
                  </div>
                </div>
                <div className='bg-white/20 backdrop-blur-sm   rounded-[25px] text-center w-3/5 h-[95%] flex flex-col items-center justify-center'>
                  <div className='flex flex-col items-start justify-center gap-8 h-[90%] w-[90%] rounded-[25px]'>
                    <p ref={(el) => (textRefs.current[4] = el)} className="text-3xl ml-10 font-bold ">Date: {formattedDate.replace(",", " |")}</p>
                    <p ref={(el) => (textRefs.current[6] = el)} className="text-xl ml-10 ">Sunrise: {sunrise}</p>
                    <p ref={(el) => (textRefs.current[8] = el)} className="text-xl ml-10 ">Sunset: {sunset}</p>
                    <p ref={(el) => (textRefs.current[10] = el)} className="text-xl ml-10 ">Timezone: {timezoneString}</p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    );
  };

export default WeatherCard;