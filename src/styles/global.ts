import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './themes';

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
  :root {
    //Colors

    --red-hover: #FF9898;
    --red: #EA5555;
    --main-purple-hover: #A8A4FF;
    --main-purple: #635FC7;
    --white: #FFFFFF;
    --lightGrey: #F4F7FD;
    --lines-light: #E4EBFA;
    --medium-grey: #828FA3;
    --lines-dark: #3E3F4E;
    --dark-grey: #2B2C37;
    --very-dark-grey: #20212C;
    --dark: #000112;

    //Typography
    
    font-family: "Plus Jakarta Sans";
    --Heading-XL: 24;
    --Heading-L: 18;
    --Heading-M: 15;
    --Heading-S: 12;
    --Body-L: 13:
    --Body-M: 12


    //dark-mode
    --dark-background: #1A1B27;
    --dark-text: #F5F5F7;

    //light-mode
    --light-background: #f2f2f2;
    --light-text: #2E0509;


  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body  {
    -webkit-font-smoothing: antialiased;
    margin: 0 auto;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
  }

  h1 {
    font-size: 3.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.test};
  }

`;

export default withTheme(globalStyle);