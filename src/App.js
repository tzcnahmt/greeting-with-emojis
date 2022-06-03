import { Wrapper, Title, Description } from './App.style';
import Cursor from './components/Cursor/Cursor';
import Footer from './components/Footer/Footer';
import useCoords from './hooks/use-coordinate.hook';

export default function App() {
  const coords = useCoords();

  return (
    <>
      <Wrapper className='container'>
        <Title>Greeting with emojis</Title>
        <Description>
          Move cursor and click to say hello in a different language :)
        </Description>
        <Cursor cursorPos={coords} />
      </Wrapper>
      <Footer />
    </>
  );
}
