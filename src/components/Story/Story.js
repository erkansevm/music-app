import React from 'react'
import './Story.scss'
function Story({src,opacity,displayStatus,isEmpty}) {
  return (
    <div className={`story ${displayStatus === 'current'? '':'smallSize'}`} style={{backgroundImage:`url(${src})`}}>
      {isEmpty === true ? <h4>No Song</h4>:<>
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
      </>}
    </div>
  )
}

export default Story
