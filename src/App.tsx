import { ThemeProvider } from 'styled-components';
import TogglerButton from './components/TogglerButton';
import GlobalStyle from './styles/global';
import ThemeContext from './contexts/ThemeContext';
import { lightTheme, darkTheme } from './styles/themes';
import useThemeMode from './hooks/useThemeMode';
import {Navbar, Sidebar, Board} from "./components/index";
import "./App.scss";

function App() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Navbar></Navbar>     
      <div className="mainBoardContainer">
        <div className="mainSidebarContainer">
          <Sidebar /> 
          <TogglerButton themeToggler={themeToggler} />
        </div>
        <Board />
      </div>        
      </ThemeProvider>
    </ThemeContext>
  );
}

export default App;