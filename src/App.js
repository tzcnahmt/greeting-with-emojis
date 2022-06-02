import { useState } from 'react';
import './App.css';
import Cursor from './components/Cursor/Cursor';
import Footer from './components/Footer/Footer';

export default function App() {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });

  const handleCursorPosition = (event) => {
    setCoords({
      x: event.clientX,
      y: event.clientY,
    });
  };

  window.addEventListener('mousemove', handleCursorPosition);

  return (
    <>
      <div className='container'>
        <h1 style={{ marginLeft: '25px', marginTop: '25px' }}>Greeting 001</h1>
        <h5 style={{ marginLeft: '25px' }}>
          Move cursor and click to say hello in a different language :)
        </h5>
        <Cursor cursorPos={coords} />
      </div>
      <Footer />
    </>
  );
}
