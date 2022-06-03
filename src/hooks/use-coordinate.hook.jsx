import React from 'react';

export default function useCoords() {
  const [coords, setCoords] = React.useState({
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

  return coords;
}

// if you do not want to use custom hooks, you can replace it
// with the code below in App.js

// const [coords, setCoords] = useState({
//   x: 0,
//   y: 0,
// });

// const handleCursorPosition = (event) => {
//   setCoords({
//     x: event.clientX,
//     y: event.clientY,
//   });
// };

// onMouseMove={(e) => handleCursorPosition(e)} (this one goes to container div)
