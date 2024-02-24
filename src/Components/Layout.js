import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import {Outlet} from "react-router-dom"
import Captures from './Captures'
import VideoCaptures from './VideoCaptures'
const Layout = () => {
  return (
    <>
    <Header/>
    <Captures/>
    <VideoCaptures/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout;