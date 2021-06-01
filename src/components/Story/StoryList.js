import React from 'react'
import './StoryList.scss'
import Story from './Story';

function StoryList() {
  return (
    <div className="story-list">
      <Story className="story-list__story"/>
    </div>
  )
}

export default StoryList
