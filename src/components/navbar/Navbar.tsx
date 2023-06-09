import React, { useState } from 'react'

import LogoImageDark from "../../assets/logo-dark.svg" 


import IconVertical from "../../assets/icon-vertical-ellipsis.svg"



import "./navbar.scss"


function Navbar (){
  return (
    <div className="navbarContainer">
      <div className="navbarContainer_logo">
        <img id="navbarLogo" className="navbarLogo" src={LogoImageDark} alt="LogoImage"/>
      </div>
      <div className='navbarContainer_content'>
        <h1>Platform Launch</h1>
        <button className="addTaskButton">+ Add New Task</button>
        <img src={IconVertical} alt="IconVertical" />
      </div>
    </div>
  )
}

export default Navbar;