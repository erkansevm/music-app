import React from 'react'
import './Story.scss'
function Story() {
  return (
    <div className="story" style={{backgroundImage:"url(https://i.pinimg.com/originals/33/29/fa/3329fa5e690fa6c6292b967f692a9d67.jpg)"}}>
      <p className="story__number">#1</p>
      <div className="story__bottom">
        <div className="story__album">
          <p className="label">ALBUM</p>
          <h4 className="item">INSECURE</h4>
        </div>
        <div className="story__artist">
          <p className="label">ARTIST</p>
          <h4 className="item">BLA-BLA</h4>
        </div>
      </div>
    </div>
  )
}

export default Story
