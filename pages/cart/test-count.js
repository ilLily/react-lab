import { useState } from 'react';
import Counter from '@/components/counter/counter';
export default function OrderSuccess() {
  const [total, setTotal] = useState(1000);
  const totalHandler = (value) => {
    setTotal(total + value);
  };
  return (
    <>
      <h1>Total:{total}</h1>
      <Counter totalHandler={totalHandler} />
      <Counter value={3} totalHandler={totalHandler} />
      <Counter value={-2} totalHandler={totalHandler} />
    </>
  );
}
