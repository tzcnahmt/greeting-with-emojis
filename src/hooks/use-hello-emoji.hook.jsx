import React from 'react';
import useCoords from './use-coordinate.hook';

export default function useHelloEmoji(emoji) {
  const [lastCursorEmoji, setLastCursorEmoji] = React.useState([]);
  const coords = useCoords();

  const handleClick = () => {
    setLastCursorEmoji((prev) => [
      ...prev,
      {
        emoji: emoji.emoji,
        description: emoji.description,
        x: coords.x,
        y: coords.y,
      },
    ]);
  };

  return [lastCursorEmoji, handleClick];
}
