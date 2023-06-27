import { useState } from 'react';
import AddForm from './add-form';
import Item from './item';

export default function TodoIndex() {
  // 陣列: 每個成員 todo = {id:number, text:string, completed:boolean}
  const [todos, setTodos] = useState([
    { id: 1, text: '學react', completed: false },
    { id: 2, text: '買牛奶', completed: false },
  ]);

  //  (單純處理狀態改變) pure
  const add = (todos, text) => {
    // 用遞增id
    const ids = todos.map((v) => v.id);

    // 狀態 todos沒資料時定義為1
    const newId = todos.length > 0 ? Math.max(...ids) + 1 : 1;

    const newTodo = {
      id: newId,
      text: text,
      completed: false,
    };

    return [newTodo, ...todos];
  };

  //  (單純處理狀態改變) pure 如果有比對到v.id是id，就作切換布林值的動作
  const toggleCompleted = (todos, id) => {
    return todos.map((v) => {
      if (v.id === id) return { ...v, completed: !v.completed };
      else return { ...v };
    });
  };

  // (單純處理狀態改變)pure 如果有比對到v.id是id，就作移除
  const remove = (todos, id) => {
    return todos.filter((v) => v.id !== id);
  };

  //專門設計組合後給AddForm元件用的
  const handleAdd = (inputText) => {
    setTodos(add(todos, inputText));
  };

  const handleToggleCompleted = (id) => {
    setTodos(toggleCompleted(todos, id));
  };

  const handleRemove = (id) => {
    setTodos(remove(todos, id));
  };

  return (
    <>
      {/* 原本要傳三個屬性，改為只需要一個 */}
      <AddForm handleAdd={handleAdd} />
      <ul>
        {todos.map((v) => {
          //先解構出裡面的屬性
          const { id, text, completed } = v;

          return (
            <Item
              key={id}
              id={id}
              text={text}
              completed={completed}
              handleToggleCompleted={handleToggleCompleted}
              handleRemove={handleRemove}
            />
          );
        })}
      </ul>
    </>
  );
}
