import { useEffect, useState } from 'react';
import { emoji } from '../../data/emoji';
import LastEmoji from './LastEmoji';

console.log(emoji);
export default function Cursor({ cursorPos }) {
  const [cursorEmoji, setCursorEmoji] = useState({
    emoji: '🍀',
    description: 'four leaf clover',
  });

  const [lastCursorEmoji, setLastCursorEmoji] = useState([]);

  const handleClick = () => {
    setLastCursorEmoji((prev) => [
      ...prev,
      {
        emoji: cursorEmoji.emoji,
        description: cursorEmoji.description,
        x: cursorPos.x,
        y: cursorPos.y,
      },
    ]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const random = Math.floor(Math.random() * 19);
      setCursorEmoji((prev) => {
        return {
          ...prev,
          emoji: emoji[random].emoji,
          description: emoji[random].description,
        };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        className='cursor'
        style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}
        onClick={handleClick}
      >
        <div className='cursor__cursor'>{cursorEmoji.emoji}</div>
      </div>

      {lastCursorEmoji.map((el, index) => (
        <LastEmoji
          emoji={el.emoji}
          description={el.description}
          positionX={el.x}
          positionY={el.y}
          key={index}
        />
      ))}
    </>
  );
}
