import React from 'react';
import { emoji } from '../data/emoji';

export default function useEmoji() {
  const [cursorEmoji, setCursorEmoji] = React.useState({
    emoji: '🍀',
    description: 'four leaf clover',
  });

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const random = Math.floor(Math.random() * 31);
      setCursorEmoji((prev) => {
        return {
          ...prev,
          emoji: emoji[random].emoji,
          description: emoji[random].description,
        };
      });
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return cursorEmoji;
}
