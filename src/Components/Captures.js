import React from 'react'
import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg", width: 800, height: 600 },
  { src: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", width: 1600, height: 900 },
];

const Captures = () => {
    
  return (
    <section className='captures-container'>
        <div className='captures-heading'>My Captures</div>
        <div>
        <PhotoAlbum layout="rows" photos={photos} />
        </div>
    </section>
  )
}

export default Captures;