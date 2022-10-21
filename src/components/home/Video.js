import React from 'react'
import { VideoImage, Avatar } from '../../assets/ImageIndex'


const Video = () => {
  return (
    <>
        <div className='videoBox'>
            <div className='thumbnailInfo'>
                <img src={VideoImage}/>
                <p>14:00</p>
            </div>
            <div className='videoInfo'>
                <img src={Avatar}/>
                <div>
                    <h2>Aprenda React</h2>
                    <h3>Devmarcioreis</h3>
                    <p>2M Visualizações</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Video