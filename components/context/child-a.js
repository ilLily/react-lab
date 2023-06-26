import { useContext } from 'react';
import ThemeContext from '@/context/theme-context';

export default function ChildA() {
  const { color, setColor } = useContext(ThemeContext);
  return (
    <>
      <p style={{ color }}>I am Child A</p>
      <button
        onClick={() => {
          setColor('red');
        }}
      >
        red
      </button>
      <button
        onClick={() => {
          setColor('green');
        }}
      >
        green
      </button>
    </>
  );
}
