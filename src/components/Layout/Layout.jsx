import React from 'react'
import style from'./Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
export default function Layout() {


  const {pathname}= useLocation();
 
  
  return <>
  <Navbar/>
  <div className={`${pathname ==="/" || pathname ==="/about" ? "bg-[#1abc9c]" : ""} min-h-dvh center pt-36`}>

    <div className="container">
        <Outlet/>

    </div>
  </div>
  <Footer/>
  </>
  
}
