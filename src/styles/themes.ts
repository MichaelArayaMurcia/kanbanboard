const LogoImageDark = "../src/assets/logo-dark.svg";
const LogoImageLight = "../src/assets/logo-light.svg";

export interface ThemeProps {
    background: string;
    text: string;
    CTA_Button: string;
    CTA_Button_text: string;
    Navbar_container: string;
    Navbar_border: string;
    Navbar_title: string;
    Background_board: string;
    Column_background: string;
    LogoImage: string;
  }
  

  // --red-hover: #FF9898;
  //   --red: #EA5555;
  //   --main-purple-hover: #A8A4FF;
  //   --main-purple: #635FC7;
  //   --white: #FFFFFF;
  //   --lightGrey: #F4F7FD;
  //   --lines-light: #E4EBFA;
  //   --medium-grey: #828FA3;
  //   --lines-dark: #3E3F4E;
  //   --dark-grey: #2B2C37;
  //   --very-dark-grey: #20212C;
  //   --dark: #000112;






  export const darkTheme: ThemeProps = {
    background: 'var(--dark-background)',
    text: 'var(--dark-text)',
    CTA_Button: "var(--main-purple)",
    CTA_Button_text: "var(--white)",
    Navbar_container: "var(--dark-grey)",
    Navbar_border: "var(--lines-dark)",
    Navbar_title: "var(--black)",
    Background_board: "var(--very-dark-grey)",
    Column_background: "var(--lines-light)",
    LogoImage: LogoImageLight,
    
  };
  
  export const lightTheme: ThemeProps = {
    background: 'var(--light-background)',
    text: 'var(--light-text)',
    CTA_Button: "var(--main-purple)",
    CTA_Button_text: "var(--white)",
    Navbar_container: "var(--white)",
    Navbar_border: "var(--lines-light)",
    Navbar_title: "var(--black)",
    Background_board: "var(--lightGrey)",
    Column_background: "var(--lines-light)",
    LogoImage: LogoImageDark,
  };