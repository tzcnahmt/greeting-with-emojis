import styled from 'styled-components';

const FooterContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: right;
  align-items: center;
  bottom: 0;
  right: 0;
  padding-bottom: 3rem;
  padding-right: 3rem;
  font-size: 1.15rem;
  mix-blend-mode: difference;
  color: white;
  font-weight: 400;
  gap: 2rem;
  z-index: 3;
  pointer-events: none;
`;

export { FooterContainer };
