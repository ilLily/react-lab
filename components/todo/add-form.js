import React from 'react';

export default function AddForm() {
  return (
    <>
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
    </>
  );
}
