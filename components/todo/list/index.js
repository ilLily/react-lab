import React from 'react';
import Item from './item';
export default function List({ todos = [], ...childProps }) {
  return (
    <ul>
      {todos.map((t) => {
        const { id, text, completed } = t;
        return (
          <Item
            key={id}
            id={id}
            text={text}
            completed={completed}
            {...childProps}
          />
        );
      })}
    </ul>
  );
}
