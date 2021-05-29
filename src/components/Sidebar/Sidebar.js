import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';

function Sidebar() {
  /* TO ADD SIDEBAR ITEM TO ACTIVE CLASS */
  const location = useLocation();
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
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar__brand">MUSICLY</div>
      <div>
        <Link to="/" className="sidebar__item">
          <i className="fas fa-home sidebar__icon  " />
          <h2 className="sidebar__text">HOME</h2>
        </Link>
        <Link to="/browse" className="sidebar__item">
          <i className="fas fa-search sidebar__icon" />
          <h2 className="sidebar__text">BROWSE</h2>
        </Link>
        <Link to="/radıo" className="sidebar__item">
          <i className="fas fa-microphone sidebar__icon" />
          <h2 className="sidebar__text">RADIO</h2>
        </Link>
      </div>
      <div>
        <div className="sidebar__text sidebar__text-secondary">YOUR LIBRARY</div>
        <Link to="/recently-played" className="sidebar__item">
          <i className="far fa-clock sidebar__icon" />
          <h2 className="sidebar__text">RECENTLY PLAYED</h2>
        </Link>
        <Link to="/favorıte-songs" className="sidebar__item">
          <i className="far fa-heart  sidebar__icon" />
          <h2 className="sidebar__text">FAVORITE SONGS</h2>
        </Link>
        <Link to="/artıst" className="sidebar__item">
          <i className="far fa-user sidebar__icon" />
          <h2 className="sidebar__text">ARTIST</h2>
        </Link>
        <Link to="/albums" className="sidebar__item">
          <i className="fas fa-compact-disc  sidebar__icon" />
          <h2 className="sidebar__text">ALBUMS</h2>
        </Link>
      </div>
      <div>
        <div className="sidebar__text sidebar__text-secondary">PLAYLIST</div>
        <Link to="/playlist" className="sidebar__item">
          <h2 className="sidebar__text">HINDI TOP 50 </h2>
        </Link>
        <Link to="/playlist" className="sidebar__item">
          <h2 className="sidebar__text">INDIPOP SONGS</h2>
        </Link>
        <Link to="/playlist" className="sidebar__item">
          <h2 className="sidebar__text">ROMANCE SEASON</h2>
        </Link>
      </div>
      <div className="sidebar__button">
        <i className="fas fa-plus-circle sidebar__button__icon sidebar__icon-secondary" />
        <h2 className="sidebar__text sidebar__text-green">ADD NEW PLAYLIST</h2>
      </div>
    </div>
  );
}

export default Sidebar;
