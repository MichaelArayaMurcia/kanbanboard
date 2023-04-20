import React from 'react'

import LogoImage from "../../assets/logo-dark.svg" 
import IconVertical from "../../assets/icon-vertical-ellipsis.svg"

import "./navbar.scss"

function Navbar() {
  return (
    <div className="navbarContainer">
        <div className="navbarLogoContainer">
            <button><img src={LogoImage} alt="logo-dark" /></button>
        </div>
        <div className="navbarContentContainer">
            <h1> Platform Launch </h1>
            <button>+ Add New Task</button>
            <button><img src={IconVertical} alt="IconVertical" /></button>
        </div>
    </div>
  )
}

export default Navbar