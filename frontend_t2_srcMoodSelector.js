import React from 'react';
import { useTheme } from './ThemeProvider';

const MoodSelector = () => {
  const { mood, handleMoodChange } = useTheme();

  return (
    <div>
      <h2>Current Mood: {mood}</h2>
      <button onClick={() => handleMoodChange('happy')}>Happy</button>
      <button onClick={() => handleMoodChange('calm')}>Calm</button>
      <button onClick={() => handleMoodChange('sad')}>Sad</button>
    </div>
  );
};

export default MoodSelector;
