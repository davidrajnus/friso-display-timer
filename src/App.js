import React from 'react';
import './App.css';
import EndlessImage from './EndlessImage';

function App() {
  return (
    <div className="App" style={{ position: 'relative', top: 200, left: 50 }}>
      <EndlessImage />
    </div>
  );
}

export default App;
