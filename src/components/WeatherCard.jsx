import gsap from 'gsap';
import { useGSAP } from '@gsap/react';  
import { useRef } from 'react';
import bgLight from '../assets/images/bg-light.jpg'
import bgDark from '../assets/images/bg-dark.jpg'
const WeatherCard = ({ weather, isDarkMode}) => {
    const cardRef = useRef(null);
    const textRefs = useRef([]);
    const backgroundImage = isDarkMode ? bgDark : bgLight;
    
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
            delay: 1,
            stagger: 0.1,
            ease: 'power2.inOut',
        });

        
    }, []);

    const formattedDate = new Date().toLocaleDateString("en-GB", {
        weekday: "long", // "Sunday"
        day: "2-digit",  // "12"
        month: "short",  // "Dec"
        year: "numeric", // "2025"
      });
      
    return (
      <div className="text-center w-1/1 flex flex-row items-center justify-center h-4/5 m-4">
        <div className="m-4 rounded-[25px] text-center w-1/1 h-1/1 flex flex-row items-center justify-center gap-4" ref={cardRef}>
            <div className='  bg-center bg-no-repeat bg-cover rounded-[25px] text-center w-2/5 h-1/1 flex flex-col items-center justify-center gap-4' style={{ backgroundImage: `url(${backgroundImage})` }}>
              <div className='bg-white/20 backdrop-blur-sm shadow-lg shadow-black/5  rounded-[25px] text-center w-[82%] h-1/3 flex flex-col items-start justify-center mt-4'>
              <h3 ref={(el) => (textRefs.current[0] = el)} className="text-2xl font-bold ml-10 mb-8">{weather.name}, {weather.sys.country}</h3>
              <h1 ref={(el) => (textRefs.current[1] = el)} className="text-lg ml-10">{weather.weather[0].description}</h1>
              <h1 ref={(el) => (textRefs.current[2] = el)} className="text-4xl font-bold ml-10">{Math.round(weather.main.temp)}°C</h1>
            


              </div>
              <div className='bg-white/20 backdrop-blur-sm shadow-lg shadow-black/5  rounded-[25px] text-center w-[82%] h-1/3 flex flex-col items-start justify-center'>
              <div ref={(el) => (textRefs.current[3] = el)} className="text-lg ml-10">Date: {formattedDate.replace(",", " |")}</div>
              <p ref={(el) => (textRefs.current[4] = el)} className="text-l ml-10">Sunrise: {weather.sys.sunrise}</p>
              <p ref={(el) => (textRefs.current[5] = el)} className="text-l ml-10">Sunset: {weather.sys.sunset}</p>
              <p ref={(el) => (textRefs.current[6] = el)} className="text-l ml-10">Timezone: {weather.timezone}</p>


              </div>
              
              <div className=' bg-white/30 backdrop-blur-sm shadow-lg shadow-black/5  rounded-[25px] text-center w-[82%] h-1/3 flex flex-col items-start justify-center mb-4'>
  
                  <p ref={(el) => (textRefs.current[7] = el)} className="text-lg ml-10">Feels like: {Math.round(weather.main.feels_like)}°C</p>
                  <p className="ml-10" ref={(el) => (textRefs.current[8] = el)}>Wind Speed: {weather.wind.speed.toFixed(1)} m/s</p>
                  <p ref={(el) => (textRefs.current[9] = el)} className="text-lg ml-10">Min: {Math.round(weather.main.temp_min)}°C Max: {Math.round(weather.main.temp_max)}°C</p>
                  <p className="ml-10" ref={(el) => (textRefs.current[10] = el)}>Cloud Coverage: {weather.clouds.all}</p>
                  <p className="ml-10" ref={(el) => (textRefs.current[11] = el)}>Humidity: {weather.main.humidity}%</p>
                  <p ref={(el) => (textRefs.current[12] = el)} className="text-l ml-10">Pressure: {weather.main.pressure}</p>
                  
                  
                
              </div>


            </div>
            <div className='  rounded-[25px] text-center w-3/5 h-1/1 flex flex-row items-center justify-center gap-4 bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className='  bg-white/20 backdrop-blur-sm shadow-lg shadow-black/5 rounded-[25px] text-center w-2/5 h-[95%] flex flex-col items-center justify-center ml-4'></div>
                <div className='bg-white/20 backdrop-blur-sm shadow-lg shadow-black/5  rounded-[25px] text-center w-3/5 h-[95%] flex flex-col items-center justify-center mr-4'></div>
            </div>
        </div>
      </div>
    );
  };

export default WeatherCard;