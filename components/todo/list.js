import React from 'react';

export default function List({
  id = '',
  text = '',
  completed = false,
  toggleHandler = () => {},
  deleteHandler = () => {},
}) {
  return (
    <li>
      <input type="checkbox" checked={completed} onChange={toggleHandler} />
      {completed ? <del>{text}</del> : text}
      <button onClick={deleteHandler}>X</button>
    </li>
  );
}
