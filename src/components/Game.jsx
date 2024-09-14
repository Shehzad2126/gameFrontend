// src/components/Game.jsx
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

function Game() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    // Retrieve the high score from localStorage
    const savedHighScore = localStorage.getItem("highScore");
    return savedHighScore ? parseInt(savedHighScore, 10) : 0;
  });
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Check if the current score is a new high score
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score); // Save the new high score
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000); // Hide confetti after 3 seconds
    }
  }, [score, highScore]);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(guess, 10) === targetNumber) {
      setScore(score + 10);
      setTargetNumber(generateRandomNumber());
    } else {
      alert("Wrong guess, try again!");
    }
    setGuess("");
  };

  const handlePlayAgain = () => {
    setScore(0);
    setTargetNumber(generateRandomNumber());
  };

  return (
    <div className="game-container  ">
    
      {/* <h1>{targetNumber}</h1> */}
      {showConfetti && <Confetti />}
      <h1 className="text-2xl m-1 font-bold">Number Guessing Game</h1>
      <p className="text-lg m-1 font-semibold">Guess the number between 1 and 100</p>
      <form onSubmit={handleSubmit}>
        {/* <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          min="1"
          max="100"
          required
          className="w-25"
        />
        <button type="submit" className="btn btn-primary">
          Submit Guess
        </button> */}
        <div class="input-group mb-3">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          min="1"
          max="100"
          required
          className="form-control m-1"
          placeholder="0"
          aria-label="0"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-secondary"
          type="submit" 
          id="button-addon2" 
        >
          Submit
        </button>
      </div>
      </form>
      <p>Current Score: {score}</p>
      <p>High Score: {highScore}</p>
      {score > 0 && <button onClick={handlePlayAgain}>Play Again</button>}
    </div>
  );
}

export default Game;
