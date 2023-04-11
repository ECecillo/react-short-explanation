import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const themeFromLocalStorage = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(themeFromLocalStorage);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'dark') {
      setTheme('ocean');
      localStorage.setItem('theme', 'ocean');
    } else if(theme === 'ocean') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

