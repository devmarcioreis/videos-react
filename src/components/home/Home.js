import React, { useState } from 'react'
import './home.css'
import { AdBanner, WhiteLogo } from '../../assets/ImageIndex'
import Video from './Video'
import VideoData from './Videos.json'



const Home = () => {

  const categoryData = ["Todos", "Games", "Músicas", "Lives", "Comédia", "Politíca", "Esportes", "TV", "Clássicos"]

  const [category, setCategory] = useState("Todos")
  const { videos } = VideoData

  return (
    <>
      <div className='homeContainer'>
        <div className='categoryContainer'>
        {categoryData.map((tab) => {
            return <h3 className='categoryTab' key={tab} >{tab}</h3>
          })}
        </div>
        <div className='homeBanner'>
          <img src={AdBanner} className='youtubeAdBanner' />
          <div className='infoBox'>
            <div>
              <img src={WhiteLogo} alt='Logo'/>
              <h2>Vídeo Premium</h2>
            </div>
            <h1>Assista tudo que gosta</h1>
            <button>Ver agora</button>
          </div>
        </div>
        <div className="videoContainer">
          {videos.map((video)=>{
            return <Video video={video} key={video.image}/>
          })}
        </div>
      </div>
    </>
  )
}

export default Home