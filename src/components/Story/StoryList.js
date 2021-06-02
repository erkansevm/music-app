import React,{useState} from 'react'
import './StoryList.scss'
import Story from './Story';

function StoryList() {
  const storyInfos = [
    {id:1,src:"https://hdwallpaperim.com/wp-content/uploads/2017/08/24/97682-moderat-album_covers-748x421.jpg"},
    {id:2,src:"https://i.pinimg.com/originals/33/29/fa/3329fa5e690fa6c6292b967f692a9d67.jpg"},
    {id:3,src:"https://c4.wallpaperflare.com/wallpaper/509/916/957/abstract-digital-art-selective-coloring-artwork-wallpaper-preview.jpg"},
  ]
  const [infos, setInfos] = useState(storyInfos);
  const [currentStory, setCurrentStory] = useState(1);
 
  const beforeStory = currentStory !== 0 ? <Story src={infos[currentStory-1].src} displayStatus="smallSize"/>: <Story isEmpty={true} displayStatus="smallSize"/>;
  const afterStory  = currentStory !== storyInfos.length-1 ? <Story src={infos[currentStory+1].src} displayStatus="smallSize"/> : <Story isEmpty={true} displayStatus="smallSize"/>;
  return (
    <div className="story-list">
      <div className="story-list__left"onClick={e=> {
        if (currentStory !== 0) {
          setCurrentStory(currentStory-1)
        }
      }}>
        {beforeStory}
      </div>
      {infos.map((info,index) => {
        if (currentStory === index) {
          return <Story key={info.id} id={info.id} src={info.src} displayStatus="current"/>
        }
      })}
       <div className="story-list__right"onClick={e=> {
        if (currentStory !== storyInfos.length-1) {
          setCurrentStory(currentStory+1)
        }
      }}>
          {afterStory}
        </div>
    </div>
  )
}

export default StoryList
