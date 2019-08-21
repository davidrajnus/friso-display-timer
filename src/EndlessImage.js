import React, { useState } from 'react';
import image from './image.png';
import Draggable from 'react-draggable';

let resetter;

export default function EndlessImage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function resetTimer() {
    clearInterval(resetter);
    resetter = setTimeout(() => {
      setPosition({ x: 0, y: 0 });
    }, 5000);
  }

  function onControlledDrag(e, position) {
    const { x } = position;
    setPosition({ x: x > 0 ? -6156 + x : x % 6156, y: 0 });
  }

  return (
    <Draggable
      axis="x"
      defaultPosition={{x: 0, y: 0}}
      position={position}
      onDrag={onControlledDrag}
      onStop={resetTimer}
    >
      <div
        style={{
          whiteSpace: 'nowrap',
          display: 'inline-block',
          overflow: 'hidden',
          height: 600
        }}
      >
        <img
          style={{
            height: '100%',
            display: 'inline-block',
            pointerEvents: 'none'
          }}
          src={image}
        />
        <img
          style={{
            height: '100%',
            display: 'inline-block',
            pointerEvents: 'none'
          }}
          src={image}
        />
      </div>
    </Draggable>
  );
}
