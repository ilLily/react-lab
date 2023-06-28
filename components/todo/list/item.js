import React from 'react';
import styles from '../todo.module.css';

export default function Item({
  id = '',
  text = '',
  completed = false,
  toggleHandler = () => {},
  deleteHandler = () => {},
}) {
  return (
    <li className={`${completed ? styles.completed : styles.active}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          toggleHandler(id);
        }}
      />
      {!editing && completed ? <del>{text}</del> : text}
      <button>編輯</button>
      <button
        onClick={() => {
          deleteHandler(id);
        }}
      >
        X
      </button>
    </li>
  );
}
