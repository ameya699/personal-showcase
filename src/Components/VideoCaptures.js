import React, { useEffect, useState } from 'react'

const vids=['https://youtube.com/embed/ajdu-eHFI-I','https://www.youtube.com/embed/TdNGjTL5BcQ','https://www.youtube.com/embed/2MPX-CLYXqc','https://www.youtube.com/embed/GV5xGzPs1hM']

const VideoCaptures = () => {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    setVideos(vids);
  },[])
  return (
    <section className='captures-container'>
        <div className='captures-heading'>Video Captures</div>
        <div style={{display:'flex',gap:"1.4rem",flexWrap:'wrap'}}>
          {
            videos.map((element,index)=>
            <iframe src={element} key={index} height="250px" width="400px" style={{border:"none"}}></iframe>
            )
          }
        </div>
    </section>
  )
}

export default VideoCaptures