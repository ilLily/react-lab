import { useState } from 'react';
export default function ScoreKeeper2({ numPlayers = 3, target = 5 }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));
  const incrementScore = (idx) => {
    setScores((prevScores) => {
      if (!prevScores.includes(target)) {
        return prevScores.map((score, i) => {
          if (i === idx && score < target) return score + 1;
          return score;
        });
      } else {
        return prevScores;
      }
    });
  };
  const reset = () => {
    setScores(new Array(numPlayers).fill(0));
  };

  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((s, i) => {
          return (
            <li key={i}>
              player{i + 1}:{s}
              <button
                onClick={() => {
                  incrementScore(i);
                }}
              >
                +1
              </button>
              {s >= target && 'Winner!'}
            </li>
          );
        })}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
