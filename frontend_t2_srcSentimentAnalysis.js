import React, { useState } from 'react';
import Sentiment from 'sentiment';

const SentimentAnalysis = ({ setMood }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);

    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);
    const mood = result.score > 0 ? 'happy' : result.score < 0 ? 'sad' : 'calm';
    setMood(mood);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something to analyze mood"
      />
    </div>
  );
};

export default SentimentAnalysis;
