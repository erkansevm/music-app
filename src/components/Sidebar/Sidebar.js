import React, { useEffect, useState } from 'react';
import './Sidebar.scss';

function Sidebar() {
  const [currentLocation, setcurrentLocation] = useState(window.location.href);
  useEffect(() => {
    const currentLocation = window.location.href;
    const sideBarItems = document.querySelectorAll('.sidebar__item');
    sideBarItems.forEach((item) => {
      if (item.href === currentLocation) {
        item.className = 'sidebar__item sidebar__item-active';
      } else {
        item.className = 'sidebar__item';
      }
    });
  }, [currentLocation]);

  return (
    <div className="sidebar">
      <div className="sidebar__brand">MUSICLY</div>
      <div className="sidebar--top">
        <a href="#home" className="sidebar__item">
          <i className="fas fa-home sidebar__icon  " />
          <h2 className="sidebar__text">HOME</h2>
        </a>
        <a href="#browse" className="sidebar__item">
          <i className="fas fa-search sidebar__icon" />
          <h2 className="sidebar__text">BROWSE</h2>
        </a>
        <a href="#radıo" className="sidebar__item">
          <i className="fas fa-microphone sidebar__icon" />
          <h2 className="sidebar__text">RADIO</h2>
        </a>
      </div>
      <div className="sidebar--centered">
        <div className="sidebar__text sidebar__text-secondary">YOUR LIBRARY</div>
        <a href="#recently-played" className="sidebar__item">
          <i className="far fa-clock sidebar__icon" />
          <h2 className="sidebar__text">RECENTLY PLAYED</h2>
        </a>
        <a href="#favorıte-songs" className="sidebar__item">
          <i className="far fa-heart  sidebar__icon" />
          <h2 className="sidebar__text">FAVORITE SONGS</h2>
        </a>
        <a href="#artıst" className="sidebar__item">
          <i className="far fa-user sidebar__icon" />
          <h2 className="sidebar__text">ARTIST</h2>
        </a>
        <a href="#albums" className="sidebar__item">
          <img src="./images/albums.svg" className=" sidebar__icon" />
          <h2 className="sidebar__text">ALBUMS</h2>
        </a>
      </div>
      <div className="sidebar--bottom">
        <div className="sidebar__text sidebar__text-secondary">PLAYLIST</div>
        <a href="#playlist" className="sidebar__item">
          <h2 className="sidebar__text">HINDI TOP 50 </h2>
        </a>
        <a href="#playlist" className="sidebar__item">
          <h2 className="sidebar__text">INDIPOP SONGS</h2>
        </a>
        <a href="#playlist" className="sidebar__item">
          <h2 className="sidebar__text">ROMANCE SEASON</h2>
        </a>
      </div>{' '}
      <div className="sidebar__button">
        <i className="fas fa-plus-circle sidebar__button__icon sidebar__icon-secondary" />
        <h2 className="sidebar__text sidebar__text-green">ADD NEW PLAYLIST</h2>
      </div>
    </div>
  );
}

export default Sidebar;
