import React from 'react';
import Player from './components/Player/Player';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Featured from './components/Features/Featured';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" />
      </Switch>
      <Featured />
      <Player />
    </Router>
  );
}

export default App;
