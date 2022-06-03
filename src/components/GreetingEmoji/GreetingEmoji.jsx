import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import {
  GreetingEmojiChild,
  GreetingEmojiContainer,
} from './GreetingEmoji.style';

export default function GreetingEmoji({
  emoji,
  description,
  positionX,
  positionY,
}) {
  let emojiRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(emojiRef.current, {
      opacity: 1,
      duration: 0.1,
      scale: 1.2,
      ease: 'back',
    })
      .to(emojiRef.current, {
        scale: 1,
        duration: 0.25,
        ease: 'back',
      })
      .to(emojiRef.current, {
        delay: 2,
        opacity: 0,
        duration: 0.5,
        scale: 0,
        ease: 'easeIn',
      });
  }, []);

  return (
    <>
      <GreetingEmojiContainer
        ref={emojiRef}
        className='last-emoji'
        style={{ transform: `translate(${positionX}px, ${positionY}px)` }}
      >
        <GreetingEmojiChild description={description}>
          {emoji}
        </GreetingEmojiChild>
      </GreetingEmojiContainer>
    </>
  );
}
