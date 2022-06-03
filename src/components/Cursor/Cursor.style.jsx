import styled from 'styled-components';

const CursorContainer = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  left: -20px;
  top: -20px;
  /* transition: transform 75ms ease; */
  will-change: transform;
  z-index: 2;
  background: transparent;
  user-select: none;
`;

const CursorEmoji = styled.div`
  width: 100%;
  height: 100%;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { CursorContainer, CursorEmoji };
