import React from 'react';
import { FiSun, FiMoon, FiCloud } from 'react-icons/fi';
import { useTheme } from './ThemeContext';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  const getIcon = () => {
    if (theme === 'light') {
      return <FiSun size="30" />;
    } else if (theme === 'dark') {
      return <FiMoon size="30" />;
    } else {
      return <FiCloud size="30" />;
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
      fixed
      top-4 left-4
      bg-gray-200
      dark:bg-gray-700
      blue:bg-blue-300
      p-2
      rounded-full
      focus:outline-none
      focus:ring-2
      focus:ring-offset-2
      focus:ring-indigo-500"
    >
      {getIcon()}
    </button>
  );
};

export default ThemeButton;
