import Cursor from './components/Cursor/Cursor';
import Footer from './components/Footer/Footer';
import useCoords from './hooks/use-coordinate.hook';

import './App.css';

export default function App() {
  const coords = useCoords();

  return (
    <>
      <div className='container'>
        <h1 style={{ marginLeft: '25px', marginTop: '25px' }}>Greeting 101</h1>
        <h5 style={{ marginLeft: '25px' }}>
          Move cursor and click to say hello in a different language :)
        </h5>
        <Cursor cursorPos={coords} />
      </div>
      <Footer />
    </>
  );
}
