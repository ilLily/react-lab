import { useState } from 'react';
import ScoreKeeper from '../../components/scoreKeeper/scoreKeeper';
import { v4 as uuid } from 'uuid';

export default function ScoreKeeperApp() {
  const players = [
    { id: uuid(), p: 1, score: 0 },
    { id: uuid(), p: 2, score: 0 },
    { id: uuid(), p: 3, score: 0 },
    { id: uuid(), p: 4, score: 0 },
  ];
  const [score, setScore] = useState(players);
  const scoreHandler = (key) => {
    setScore(
      score.map((p) => {
        if (p.id === key) {
          if (p.score === 9) return { ...p, score: 'Winner!' };
          return { ...p, score: p.score + 1 };
        } else {
          return { ...p };
        }
      })
    );
  };

  return (
    <>
      {score.map((players) => {
        return (
          <ScoreKeeper
            key={players.id}
            values={players}
            clickHandler={scoreHandler}
          ></ScoreKeeper>
        );
      })}
      <button
        onClick={() => {
          setScore((updatedScore) => (updatedScore = [...players]));
        }}
      >
        Reset
      </button>
    </>
  );
}
