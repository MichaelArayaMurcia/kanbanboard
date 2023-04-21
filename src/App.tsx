import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Navbar }from "./components/index";
import Slider from "@mui/material/Slider";
import { styled, createTheme } from "@mui/material/styles";
import ThemeProvider from '@mui/material/styles/ThemeProvider';


import './App.css'

// +++++++++++++++++
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
// +++++++++++++++++

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: '#f44336',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar/>      

        <h1> Prueba </h1>
      </div>
    </ThemeProvider>

  )
}

export default App
