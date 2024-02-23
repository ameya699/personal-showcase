import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import {Outlet} from "react-router-dom"
import Captures from './Captures'
const Layout = () => {
  return (
    <>
    <Header/>
    <Captures/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout;