import React from 'react';
import { useTheme } from './ThemeProvider';

const SurpriseMeButton = () => {
  const { handleMoodChange } = useTheme();

  const surpriseMood = () => {
    const moods = ['happy', 'calm', 'sad'];
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    handleMoodChange(randomMood);
  };

  return <button onClick={surpriseMood}>Surprise Me!</button>;
};

export default SurpriseMeButton;
