import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import List from './list';
import AddForm from './add-form';

export default function TodoIndex() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'learn ant design', completed: false },
    { id: 2, text: 'update db', completed: false },
  ]);

  const addHandler = (todos, text) => {
    return [{ id: uuid(), inputText: text, completed: false }, ...todos];
  };

  const crossHandler = (todos, id) => {
    return todos.map((v) => {
      return id === v.id ? { ...v, completed: !v.completed } : v;
    });
  };

  const delHandler = (todos, id) => {
    return todos.filter((v) => {
      return id !== v.id && v;
    });
  };

  const addItemHandler = (todos) => {
    setTodos(addHandler(todos, inputText));
    setInputText('');
  };
  return (
    <>
      <h2>TodoIndex</h2>
      <AddForm />
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !isCompositing) {
          }
        }}
      />
      <ul>
        {todos.map((t) => {
          const { id, text, completed } = t;
          return (
            <List
              key={id}
              id={id}
              text={text}
              completed={completed}
              onChange={() => {
                setTodos(crossHandler(todos, t.id));
              }}
              onClick={() => {
                setTodos(delHandler(todos, t.id));
              }}
            />
          );
        })}
      </ul>
    </>
  );
}
