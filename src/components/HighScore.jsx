// src/components/HighScore.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HighScore = () => {
  const [highScore, setHighScore] = useState(null);

  useEffect(() => {
    const fetchHighScore = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/highscore');
        console.log('High Score Data:', response.data); // Log the response data
        setHighScore(response.data);
      } catch (error) {
        console.error('Error fetching high score:', error);
      }
    };
  
    fetchHighScore();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">High Score</h2>
      {highScore ? (
        <>
          <p>Username: {highScore.username}</p>
          <p>Score: {highScore.score}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HighScore;
