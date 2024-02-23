import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { PiYoutubeLogo } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCall } from "react-icons/md";


const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className='footerdetails-wrapper'>
        <div className='footermoreinfo-container'>
            <h3>More About Me</h3>
        <div className='aboutme-details'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised</div></div>            
        <div className='social-container'>
        <h3>Stay connected!</h3>
        <div className='social-details'>
                <Link className='social-icon' to='https://www.linkedin.com/in/ameyaawatade/' target='__blank'><CiLinkedin /><p className='social-description'>Connect with me on LinkedIn</p></Link>
                <Link className='social-icon' to='https://www.youtube.com/@ameyaawatade' target='__blank'><PiYoutubeLogo /><p className='social-description'>Subscribe to my youtube channel</p></Link>
                <Link className='social-icon' to='https://www.instagram.com/ameyaawatade/' target='__blank'><FaInstagram /><p className='social-description'>Follow me on instagram</p></Link>
                <Link className='social-icon' to='https://twitter.com/AmeyaAwatade' target='__blank'><RiTwitterXLine /><p className='social-description'>Follow me on twitter</p></Link>
                <Link className='social-icon' to='https://github.com/ameya699' target='__blank'><FiGithub /><p className='social-description'>Connect with me on LinkedIn</p></Link>
            </div>
        </div>
        <div className='contact-container'>
            <h3>Contact</h3>
            <div className='social-details'>
                <Link className='social-icon' to='mailto:awatadeameya68@gmail.com' target='__blank'><MdOutlineEmail /><p className='social-description'>awatadeameya68@gmail.com</p></Link>
                <Link className='social-icon' to='tel:+917057868456' target='__blank'><MdOutlineCall /><p className='social-description'>+91 7057868456</p></Link>
                <Link className='social-icon' to="https://www.google.com/maps/place/18%C2%B034'55.6%22N+73%C2%B045'53.2%22E/@18.582121,73.7621961,17z/data=!3m1!4b1!4m4!3m3!8m2!3d18.582121!4d73.764771?entry=ttu" target='__blank'><CiLocationOn /><p className='social-description'>C-301 Emerald Park ,Patil Nagar, Balewadi 411045, Pune </p></Link>
            </div>
        </div>
        </div>
        <div className='copyright'><small>2024 - All Rights Reserved &copy; Copyright, Ameya Awatade.</small></div>
    </footer>
  )
}

export default Footer