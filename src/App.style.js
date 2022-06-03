import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 1;
  cursor: none;
  overflow: hidden;
  background-color: rgb(255, 252, 247);
`;

const Title = styled.h1`
  position: relative;
  mix-blend-mode: difference;
  color: rgb(219, 219, 219);
  pointer-events: none;
  z-index: 3;
  margin-left: 25px;
  margin-top: 25px;
`;

const Description = styled.p`
  font-size: 1.15rem;
  position: relative;
  mix-blend-mode: difference;
  color: rgb(219, 219, 219);
  pointer-events: none;
  z-index: 3;
  margin-left: 25px;
`;
export { Wrapper, Title, Description };
