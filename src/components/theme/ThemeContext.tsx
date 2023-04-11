import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

// Declare hook to get the theme from the context.
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: ThemePropsInterface) => {
  const initTheme = () => {
    const themeFromLocalStorage =
      localStorage !== undefined && localStorage.getItem('theme') !== undefined
        ? localStorage.getItem('theme')!
        : 'light';
    setTheme(themeFromLocalStorage);
  };

  const [theme, setTheme] = useState('');
  useEffect(() => initTheme(), [theme]);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'dark') {
      setTheme('ocean');
      localStorage.setItem('theme', 'ocean');
    } else if (theme === 'ocean') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
