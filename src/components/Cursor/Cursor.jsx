import GreetingEmoji from '../GreetingEmoji/GreetingEmoji';
import useEmoji from '../../hooks/use-emoji.hook';
import useHelloEmoji from '../../hooks/use-hello-emoji.hook';

import { CursorContainer, CursorEmoji } from './Cursor.style';

export default function Cursor({ cursorPos }) {
  const cursorEmoji = useEmoji();
  const [lastCursorEmoji, handleClick] = useHelloEmoji(cursorEmoji);

  return (
    <>
      <CursorContainer
        style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}
        onClick={handleClick}
      >
        <CursorEmoji>{cursorEmoji.emoji}</CursorEmoji>
      </CursorContainer>

      {lastCursorEmoji.map((el, index) => (
        <GreetingEmoji
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
