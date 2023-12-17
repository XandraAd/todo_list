/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext } from "react";

const ContextTheme = createContext();

export const ThemeContext = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //function to toggle color theme
  const toggleColorTheme = () => {
    setIsDarkMode((prevDark) => !prevDark);
  };
  return (
    <ContextTheme.Provider value={{ isDarkMode, toggleColorTheme }}>
      {children}
    </ContextTheme.Provider>
  );
};

export const GetThemeValues = () => {
  return useContext(ContextTheme);
};
