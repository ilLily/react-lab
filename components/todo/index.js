import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import List from './list';
import AddForm from './add-form';

export default function TodoIndex() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'learn ant design', completed: false },
    { id: 2, text: 'update db', completed: false },
  ]);

  const filterOptions = ['所有', '進行中', '已完成'];
  const [todoFilter, setTodoFilter] = useState('所有');

  const addHandler = (todos, text) => {
    return [{ id: uuid(), text: text, completed: false }, ...todos];
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

  const addItemHandler = (inputText) => {
    setTodos(addHandler(todos, inputText));
  };

  const toggleHandler = (id) => {
    setTodos(crossHandler(todos, id));
  };

  const deleteHandler = (id) => {
    setTodos(delHandler(todos, id));
  };
  const filterByType = (todos, type) => {
    if (type === '進行中') return todos.filter((v) => !v.completed);
    if (type === '已完成') return todos.filter((v) => v.completed);
    return todos;
  };
  return (
    <>
      <h2>TodoIndex</h2>
      <AddForm addItemHandler={addItemHandler} />
      <List
        todos={filterByType(todos, todoFilter)}
        toggleHandler={toggleHandler}
        deleteHandler={deleteHandler}
      />
      {filterOptions.map((v, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              setTodoFilter(v);
            }}
          >
            {v}
          </button>
        );
      })}
    </>
  );
}
