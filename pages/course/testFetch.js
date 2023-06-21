import { useEffect, useState } from 'react';
export default function TestFetch() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3002/test-db', {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(obj);
        setData(obj);
      });
  }, []);
  return (
    <>
      {data.map((v) => {
        return <p key={v.sid}>{v.name}</p>;
      })}
    </>
  );
}
