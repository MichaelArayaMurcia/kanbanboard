import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './themes';

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
  :root {

    --LogoDark:  ../assets/logo-dark.svg;
    --LogoLight:  ../assets/logo-light.svg;

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
    
    --Heading-XL: 24px;
    --Heading-L: 18px;
    --Heading-M: 15px;
    --Heading-S: 12px;
    --Body-L: 13px;
    --Body-M: 12px;


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
    background-color: ${({ theme }: GlobalThemeProps) => theme.Background_board};
  }

  h1 {
    font-size: 3.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  .navbarContainer {
    background-color: ${({ theme }: GlobalThemeProps) => theme.Navbar_container};
    border-bottom: solid ${({ theme }: GlobalThemeProps) => theme.Navbar_border};
  }

  .addTaskButton {
    background-color: ${({ theme }: GlobalThemeProps) => theme.CTA_Button};
  }

  .navbarLogo {
    content: url(${({ theme }: GlobalThemeProps) => theme.LogoImage}) ;
  }
`;

console.log();

export default withTheme(globalStyle);