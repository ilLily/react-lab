import { useState } from 'react';
import Parent from './parent';
import ThemeContext from '@/context/theme-context';

export default function GrandParent() {
  const [color, setColor] = useState('red');
  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      <h1>GrandParent</h1>
      <Parent />
    </ThemeContext.Provider>
  );
}
