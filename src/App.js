import React from 'react';
import Player from './components/Player/Player';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Featured from './components/Features/Featured';
import StoryList from './components/Story/StoryList';
import Navbar from './components/Navbar/Navbar';

function App() {
  const closeMenu = () => {
    const sidebar = document.getElementsByClassName('sidebar')[0];
    sidebar.className = 'sidebar  ';
  };
  return (
    <Router>
      <div className="container">
        <div className="container-top">
          <Sidebar />
          <Switch>
            <Route path="/" />
          </Switch>
          <div className="content" onClick={closeMenu}>
            <Navbar />
            <StoryList />
            <Featured />
          </div>
        </div>
        <div className="container-bot">
          <Player />
        </div>
      </div>
    </Router>
  );
}

export default App;
