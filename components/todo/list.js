import React from 'react';

export default function List({
  data,
  onChange = () => {},
  onClick = () => {},
}) {
  console.log(data);
  return (
    <li>
      <input type="checkbox" checked={data.completed} onChange={onChange} />
      {data.completed ? <del>{data.text}</del> : data.text}
      <button onClick={onClick}>X</button>
    </li>
  );
}
