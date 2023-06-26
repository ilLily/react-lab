// import { Space_Mono } from 'next/font/google';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: ':)' }]);
  const addEmoji = () => {
    // const newEmojis = [...emojis, 'XD'];
    setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: 'XD' }]);
  };
  const removeEmogji = (id) => {
    setEmojis((oldEmojis) => oldEmojis.filter((e) => e.id !== id));
    // console.log(id);
  };
  const allHearts = () => {
    setEmojis((prevEmojis) => {
      return prevEmojis.map((e) => {
        return { ...e, emoji: '<3' };
      });
    });
  };
  return (
    <div>
      {emojis.map((e) => (
        <span
          key={e.id}
          style={{ fontSize: '4rem' }}
          onClick={() => removeEmogji(e.id)}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={allHearts}>Make them all hearts</button>
    </div>
  );
}
