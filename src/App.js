import React from 'react';
import Player from './components/Player/Player';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Player />
    </div>
  );
}

export default App;
