export interface ThemeProps {
    background: string;
    text: string;
    test: string;
  }
  
  export const darkTheme: ThemeProps = {
    background: 'var(--dark-background)',
    text: 'var(--dark-text)',
    test: "blue",
  };
  
  export const lightTheme: ThemeProps = {
    background: 'var(--light-background)',
    text: 'var(--light-text)',
    test: "red",
  };