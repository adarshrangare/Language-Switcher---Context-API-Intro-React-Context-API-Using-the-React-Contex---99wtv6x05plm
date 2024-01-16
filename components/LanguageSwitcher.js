"use client"
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
    
    const {selectedLanguage, changeLanguage} = useLanguage();

    const handleChange = (event) => {
        changeLanguage(event.target.value);
    }

    return (
        <select value={selectedLanguage} onChange={handleChange} >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            {/* Add more languages as needed */}
        </select>
    );
};

export default LanguageSwitcher;
