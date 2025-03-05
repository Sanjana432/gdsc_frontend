import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AIThemeSuggestion = ({ mood }) => {
  const [aiTheme, setAiTheme] = useState('');

  useEffect(() => {
    const fetchAiTheme = async () => {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/completions',
          {
            model: 'text-davinci-003',
            prompt: `Suggest a color theme for a ${mood} mood.`,
            max_tokens: 50,
          },
          {
            headers: {
              'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
            },
          }
        );
        setAiTheme(response.data.choices[0].text.trim());
      } catch (error) {
        console.error('Error fetching AI theme:', error);
      }
    };

    fetchAiTheme();
  }, [mood]);

  return aiTheme ? <p>AI Suggestion: {aiTheme}</p> : null;
};

export default AIThemeSuggestion;
