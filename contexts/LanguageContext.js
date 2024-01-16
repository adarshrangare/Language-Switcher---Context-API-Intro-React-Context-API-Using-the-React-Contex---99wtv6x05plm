'use client'
import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext();

export function useLanguage() {
    return useContext(LanguageContext);
}


const LanguageProvider = ({children}) => {

    const [selectedLanguage, setSelectedLanguage] = useState('en');

    function changeLanguage(lang) {
        setSelectedLanguage(lang);
    }


  return (
    <LanguageContext.Provider value={{selectedLanguage, changeLanguage}}>
        {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider