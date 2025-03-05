import React from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider, useTheme } from './ThemeProvider';
import MoodSelector from './MoodSelector';
import SurpriseMeButton from './SurpriseMeButton';
import AIThemeSuggestion from './AIThemeSuggestion';
import SpotifyMusic from './SpotifyMusic';

const App = () => {
  const { theme, mood } = useTheme();

  const getBackgroundColor = () => {
    switch (theme) {
      case 'happy':
        return 'yellow';
      case 'calm':
        return 'lightblue';
      case 'sad':
        return 'gray';
      default:
        return 'white';
    }
  };

  const getTextColor = () => (theme === 'dark' ? 'white' : 'black');

  return (
    <motion.div
      style={{
        backgroundColor: getBackgroundColor(),
        color: getTextColor(),
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Mood-Based Theme Switcher</h1>
      <MoodSelector />
      <AIThemeSuggestion mood={mood} />
      <SpotifyMusic mood={mood} />
      <SurpriseMeButton />
    </motion.div>
  );
};

const RootApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default RootApp;
