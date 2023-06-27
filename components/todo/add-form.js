import { useState } from 'react';

export default function AddForm({ addItemHandler }) {
  const [inputText, setInputText] = useState('');

  //中文輸入法專用
  const [isCompositing, setIsCompositing] = useState(false);

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
          if (e.key === 'Enter' && !isCompositing && e.target.value) {
            addItemHandler(inputText);
            setInputText('');
          }
        }}
      />
    </>
  );
}
