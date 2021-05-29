import React from 'react';
import './Featured.scss';
import FeaturedSong from './FeaturedSong';

function Featured() {
  return (
    <div className="featured">
      <div className="featured__title">
        <div className="tooltip">SEE ALL</div>
        FEATURED
        <span>this week</span>
      </div>
      <div className="featured__songlist">
        <FeaturedSong />
        <FeaturedSong />
        <FeaturedSong />
        <FeaturedSong />
        <FeaturedSong />
        <FeaturedSong />
        <FeaturedSong />
        <FeaturedSong />
        <FeaturedSong />
        <FeaturedSong />
        <FeaturedSong />
        <FeaturedSong />
        <FeaturedSong />
        <FeaturedSong />
        <FeaturedSong />
      </div>
    </div>
  );
}

export default Featured;
