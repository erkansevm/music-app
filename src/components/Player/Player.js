import React,{useState} from 'react'
import './Player.scss';

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="player-container">
      <div className="player">
        <div className="music">
          <div className="music__img">
            {isPlaying ? <img className="image__rotate"  src="https://yt3.ggpht.com/ytc/AAUvwnjsIT9AkWfCNqn0duKLee2X5NpSJGRZZTgL-O-XAw=s900-c-k-c0x00ffffff-no-rj"></img> : <img src="https://yt3.ggpht.com/ytc/AAUvwnjsIT9AkWfCNqn0duKLee2X5NpSJGRZZTgL-O-XAw=s900-c-k-c0x00ffffff-no-rj"></img>}
            
            <div className="music__img__center"></div>
          </div>
          <div className="music__info">
            <h4>INSECURE</h4>
            <p>Love in air</p>
          </div>
        </div>
        
        <div className="player__control"> 
          <i class="fas fa-chevron-left arrow"></i>
          <div 
          className="play-pause"
          onClick={()=>{
            setIsPlaying(!isPlaying);
          }} 
          >
            {isPlaying ?  <i class="fas fa-pause"></i> :  <i class="fas fa-play"></i>}
          </div>
          <i class="fas fa-chevron-right arrow"></i>
        </div>

        <div className="player__time-bar">
          <span className="player__current-time player__time">1:15</span>
          <div className="player__progress-bar">
            
          </div>
          <span className="player__max-time player__time">5:00</span>
        </div>

        <div className="player__options">
          <i class="fas fa-redo-alt"></i>
          <i class="fas fa-list"></i>
        </div>
      </div>
    </div>
  )
}

export default Player
