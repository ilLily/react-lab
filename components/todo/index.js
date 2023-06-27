import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import List from './list';
import AddForm from './add-form';

export default function TodoIndex() {
  const [inputText, setInputText] = useState('');

  //中文輸入法專用
  const [isCompositing, setIsCompositing] = useState(false);

  //陣列，每個成員todo = {id:uuid ,text: string, completed: boolean}
  const [todos, setTodos] = useState([
    { id: 1, text: 'learn ant design', completed: false },
    { id: 2, text: 'update db', completed: false },
  ]);

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
        onCompositionEnd={() => setIsCompositing(false)}
        onCompositionStart={() => setIsCompositing(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !isCompositing) {
            const newtodo = [
              { id: uuid(), text: inputText, completed: false },
              ...todos,
            ];
            setTodos(newtodo);
            setInputText('');
          }
        }}
      />
      <ul>
        {todos.map((t) => {
          {id,text,completed} = t;
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
