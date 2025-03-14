import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const SearchBar = ({ onSearch }) => {
    const searchBarRef = useRef(null);
    const [city, setCity] = useState('');
    const ScrollToSection = () => {
        window.scrollTo({
            top: 100,
            behavior: 'smooth',
        });
    };
    useGSAP(() => {
        gsap.from(searchBarRef.current, {
            opacity: 0,
            x: 600,
            duration: 1,
            ease: 'power2.inOut',
            delay: 3.5,
        });
    }, []);
    const handleSearch = () => {
        if(city.trim() !== ''){
            onSearch(city);
            setCity('');
            ScrollToSection();
        }
    }
    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            handleSearch();
        }
    }
    return (
        <div ref={searchBarRef} className='bg-contain bg-center rounded-[25px] bg-no-repeat bg-white/20 backdrop-blur-sm shadow-lg shadow-black/10 flex items-center justify-center w-[98%] h-1/5 mt-4'>
            <div className='flex flex-row items-center justify-center rounded-[40px] w-1/1 h-1/1 gap-2'>
            <input
                type='text'
                placeholder='Enter city name'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={handleKeyDown}
                className='bg-gray-800 text-white p-2 rounded-md w-2/8 h-1/2 rounded-l-[25px]'
            />
            <button onClick={handleSearch} className='bg-blue-800 text-white p-2 rounded-md w-1/8 h-1/2 rounded-r-[25px]'>Search</button>
            </div>
        </div>
    )
}

export default SearchBar;