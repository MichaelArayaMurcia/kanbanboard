import { ThemeProvider } from 'styled-components';
import { createContext, useContext } from "react";
import TogglerButton from './components/TogglerButton';
import GlobalStyle from './styles/global';
import ThemeContext from './contexts/ThemeContext';
import { lightTheme, darkTheme } from './styles/themes';
import useThemeMode from './hooks/useThemeMode';
import {Navbar, Sidebar, Board} from "./components/index";
import "./App.scss";

import boards from "./data/data.json";


const boardsContext = createContext(boards);


function App() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Navbar></Navbar>    
      <boardsContext.Provider value={boards}> 
        <div className="mainBoardContainer">
          <div className="mainSidebarContainer">
            <Sidebar /> 
            <TogglerButton themeToggler={themeToggler} />
          </div>
          <Board />
        </div>     
      </boardsContext.Provider>   
      </ThemeProvider>
    </ThemeContext>
  );
}
export const boardsContext1 = createContext(boards);
export default App;