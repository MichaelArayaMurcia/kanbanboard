import React from 'react'

import LogoImageDark from "../../assets/logo-dark.svg" 
import LogoImageLight from "../../assets/logo-light.svg"

import IconVertical from "../../assets/icon-vertical-ellipsis.svg"

import styled from 'styled-components'
import DevDesk from './assets/images/dev-desk.jpg'

import "./navbar.scss"

const LogoImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
min-width: 10px;
`



function Navbar (){
  return (
    <div className="navbarContainer">
      <div className="navbarContainer_logo">
        <LogoImage id="navbarLogo" className="navbarLogo" src={LogoImageDark} alt="LogoImage"/>
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