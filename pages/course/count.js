import { useState } from 'react';

export default function Count() {
  //useState(initValue)->[getter,setter]
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>計數器</h1>

      <hr />

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </>
  );
}
