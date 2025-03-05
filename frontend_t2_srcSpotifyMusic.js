import React, { useState, useEffect } from 'react';
import axios from 'axios';

const fetchSpotifyMusic = async (mood) => {
  const response = await axios.get(
    `https://api.spotify.com/v1/recommendations?seed_genres=${mood}`,
    {
      headers: {
        Authorization: `Bearer YOUR_SPOTIFY_API_KEY`,
      },
    }
  );
  return response.data;
};

const SpotifyMusic = ({ mood }) => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    const fetchMusic = async () => {
      const musicData = await fetchSpotifyMusic(mood);
      setMusic(musicData.tracks);
    };

    fetchMusic();
  }, [mood]);

  return (
    <div>
      <h3>Recommended Music for {mood} mood:</h3>
      <ul>
        {music.map((track) => (
          <li key={track.id}>{track.name} - {track.artists[0].name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifyMusic;
