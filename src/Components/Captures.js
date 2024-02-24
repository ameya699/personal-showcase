import React, { useEffect, useState } from 'react'
import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg", width: 800, height: 600 },
  { src: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", width: 1600, height: 900 },
  {src:"https://media.istockphoto.com/id/1458215547/photo/brown-bear.webp?b=1&s=612x612&w=0&k=20&c=iYDAbb3cqlONzwOkwDfGKrJFNrDT3GtHenKwvNyaXoQ=",width:500,height:420},
  {src:"https://media.istockphoto.com/id/1486287149/photo/group-of-multiracial-asian-business-participants-casual-chat-after-successful-conference-event.jpg?s=1024x1024&w=is&k=20&c=3IFYpgorUA9326qw3vLib5M-4jEobA_ck3Wromjyyb0=",width:420,height:420},
  {src:"https://media.istockphoto.com/id/1486287149/photo/group-of-multiracial-asian-business-participants-casual-chat-after-successful-conference-event.jpg?s=1024x1024&w=is&k=20&c=3IFYpgorUA9326qw3vLib5M-4jEobA_ck3Wromjyyb0=",width:420,height:420}
  
];

const Captures = () => {
   
  const [images,setImages]=useState([]);
  useEffect(()=>{
    setImages(photos);
    //make an api call to mongo to get the images
  },[])
  return (
    <section className='captures-container'>
        <div className='captures-heading'>Photo Captures</div>
        <div style={{display:"flex",flexWrap:'wrap',gap:"2rem"}}>
        {/* <PhotoAlbum layout="rows" photos={images} /> */}
        {
          photos.map((image,index)=>{
            return (
              <div>
                <img src={image.src} height="300px" style={{objectFit:"cover",aspectRatio:"1/1"}} />
              </div>
            )
          })
        }
        </div>
    </section>
  )
}

export default Captures;