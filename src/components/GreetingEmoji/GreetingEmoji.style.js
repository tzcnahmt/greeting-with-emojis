import styled from 'styled-components';

const GreetingEmojiContainer = styled.div`
  position: absolute;
  font-size: 2.5rem;
  left: -15px;
  top: -100px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 5rem;
  opacity: 0;
  font-family: 'Clash Display', sans-serif;
`;
const GreetingEmojiChild = styled.p`
  &:after {
    position: absolute;
    font-size: 1rem;
    content: '${(props) => props.description}';
    width: max-content;
    left: 40px;
    top: -35px;
    background-color: aliceblue;
    padding: 1rem 1.25rem;
    border-radius: 50px;
    font-weight: 500;
    font-family: 'Satoshi', sans-serif;
  }
`;
export { GreetingEmojiContainer, GreetingEmojiChild };
