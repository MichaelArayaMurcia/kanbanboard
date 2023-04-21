import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar }from "./components/index"
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

import './App.css'

const CustomizedSlider = styled(Slider)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }
`;

function App() {


  return (
    <div className="App">
      <Navbar/>      
      <Slider defaultValue={30} />
      <CustomizedSlider defaultValue={30} />
      <h1> Prueba </h1>
    </div>
  )
}

export default App
