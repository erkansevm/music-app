import React from 'react';
import './Sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__brand">MUSICLY</div>
      <div className="sidebar--top">
        <div className="sidebar__item">
          <i className="fas fa-home sidebar__icon" />
          <h2 className="sidebar__text">HOME</h2>
        </div>
        <div className="sidebar__item">
          <i className="fas fa-search sidebar__icon" />
          <h2 className="sidebar__text">BROWSE</h2>
        </div>
        <div className="sidebar__item">
          <i className="fas fa-microphone sidebar__icon" />
          <h2 className="sidebar__text">RADIO</h2>
        </div>
      </div>
      <div className="sidebar--centered">
        <div className="sidebar__text sidebar__text-secondary">YOUR LIBRARY</div>
        <div className="sidebar__item">
          <i className="far fa-clock sidebar__icon" />
          <h2 className="sidebar__text">RECENTLY PLAYED</h2>
        </div>
        <div className="sidebar__item">
          <i className="far fa-heart  sidebar__icon" />
          <h2 className="sidebar__text">FAVORITE SONGS</h2>
        </div>
        <div className="sidebar__item">
          <i className="far fa-user sidebar__icon" />
          <h2 className="sidebar__text">ARTIST</h2>
        </div>
        <div className="sidebar__item">
          <img src="./images/albums.svg" className=" sidebar__icon" />
          <h2 className="sidebar__text">ALBUMS</h2>
        </div>
      </div>
      <div className="sidebar--bottom">
        <div className="sidebar__text sidebar__text-secondary">PLAYLIST</div>
        <div className="sidebar__item">
          <h2 className="sidebar__text">HINDI TOP 50 </h2>
        </div>
        <div className="sidebar__item">
          <h2 className="sidebar__text">INDIPOP SONGS</h2>
        </div>
        <div className="sidebar__item">
          <h2 className="sidebar__text">ROMANCE SEASON</h2>
        </div>
      </div>
      <div className="sidebar__button">
        <i className="fas fa-plus-circle sidebar__button__icon sidebar__icon-secondary" />
        <h2 className="sidebar__text sidebar__text-green">ADD NEW PLAYLIST</h2>
      </div>
    </div>
  );
}

export default Sidebar;
