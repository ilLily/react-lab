import { useState } from 'react';

import Button from '@mui/material/Button';

export default function MyApp() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <Button
        variant="outlined"
        onClick={() => {
          // alert('Hi');
          setCount(count + 1);
        }}
      >
        Hello World
      </Button>
    </div>
  );
}
