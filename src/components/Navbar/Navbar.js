import React, { useState } from 'react';
import './index.scss';
function Navbar() {
  const [notification] = useState(true);
  return (
    <div className="navbar">
      <div className="navbar__form">
        <i className="fas fa-search navbar__item"></i>
        <input type="text" placeholder="Search for songs article etc ..." />
      </div>
      <div className="navbar__items">
        <img src="./images/Settings.svg" alt="setting" className="navbar__item " />
        <div className={`navbar__item-notification ${notification && 'navbar__item-active'}`}>
          <img src="./images/Notification.svg" alt="notification" className="navbar__item" />
        </div>
        <img alt="user" src="https://images.pexels.com/photos/7319346/pexels-photo-7319346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="navbar__item-user" />
      </div>
    </div>
  );
}

export default Navbar;
