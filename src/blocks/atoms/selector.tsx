
import React, { useState } from 'react';
const countries = [
    { name: 'English', image: 'united-states.png' },
    { name: 'France', image: 'france.png' },
    { name: 'Russoa', image: 'russia.png' },
    { name: 'Uae', image: 'uae.png' },

    // Add more countries as needed
];

const CountrySelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({ name: 'UNITED STATE', image: 'united-states.png' });

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCountrySelect = (country: any) => {
        setSelectedCountry(country);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="bg-white text-gray-800 font-semibold py-2 px-2 border border-gray-300 rounded-md shadow-md focus:outline-none flex items-center justify-center">
                {selectedCountry.image && (
                    <img src={`/flags/${selectedCountry.image}`} alt={selectedCountry.name} className="w-6 h-6 shadow-md" />
                )}
            </button>
            {isOpen && (
                <ul className="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-md w-40">
                    {countries.map((country) => (
                        <li
                            key={country.name}
                            onClick={() => handleCountrySelect(country)}
                            className="flex items-center px-2 py-2 hover:bg-gray-100 cursor-pointer capitalize"
                        >
                            <img src={`/flags/${country.image}`} alt={country.name} className="w-6 h-6 mr-2" />{country.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CountrySelector;
