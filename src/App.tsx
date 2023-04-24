// 1: Import
import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from "styled-components"
import WebFont from 'webfontloader'
import { Navbar } from './components';


function App() {

  return (
    <>
    {
      <Navbar/>
    }
    </>
  );
}

export default App;