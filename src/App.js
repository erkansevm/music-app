import React from 'react';
import Player from './components/Player/Player';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Featured from './components/Features/Featured';
import StoryList from './components/Story/StoryList';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="container-top">
          <Sidebar />
          <Switch>
            <Route path="/" />
          </Switch>
          <div className="content">
            <Navbar />
            <StoryList/>
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
