import React, { useState, createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

// ThemeProvider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [mood, setMood] = useState(localStorage.getItem('mood') || 'happy');

  const handleMoodChange = (newMood) => {
    setMood(newMood);
    switch (newMood) {
      case 'happy':
        setTheme('light');
        break;
      case 'calm':
        setTheme('calm');
        break;
      case 'sad':
        setTheme('dark');
        break;
      default:
        setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('mood', mood);
  }, [theme, mood]);

  return (
    <ThemeContext.Provider value={{ theme, mood, handleMoodChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
