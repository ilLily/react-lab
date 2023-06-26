import { useState } from 'react';
import ScoreKeeper2 from '../../components/scoreKeeper/scoreKeeper2';

export default function ScoreKeeperApp() {
  return (
    <>
      <ScoreKeeper2 numPlayers={3} target={10}></ScoreKeeper2>
    </>
  );
}
