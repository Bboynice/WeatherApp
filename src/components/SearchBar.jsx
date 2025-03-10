import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');
    
    const handleSearch = () => {
        if(city.trim() !== ''){
            onSearch(city);
            setCity('');
        }
    }
    return (
        <div className='bg-gray-900 text-white p-4 rounded-lg shadow-md'>
            <input
                type='text'
                placeholder='Enter city name'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className='bg-gray-800 text-white p-2 rounded-md'
            />
            <button onClick={handleSearch} className='bg-blue-500 text-white p-2 rounded-md'>Search</button>
        </div>
    )
}

export default SearchBar;