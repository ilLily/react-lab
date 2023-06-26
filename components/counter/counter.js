import { useState } from 'react';

export default function Counter({ value = 1, totalHandler = () => {} }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          const newCount = count + value;
          setCount(newCount);
          totalHandler(value);
        }}
      >
        {value > 0 ? `+${value}` : value}
      </button>
    </>
  );
}
