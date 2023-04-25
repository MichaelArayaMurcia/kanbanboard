import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useThemeMode } from '../../hooks/useThemeMode';
import { lightTheme, darkTheme } from '../../styles/themes';

// const PrintName2 = ({ prop1, prop2 }: Props): JSX.Element => { /** */}

const ThemeContext = ({ children })  => {
  const { theme } = useThemeMode();

  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};

export default ThemeContext;