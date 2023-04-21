import React from 'react'

import LogoImage from "../../assets/logo-dark.svg" 
import IconVertical from "../../assets/icon-vertical-ellipsis.svg"


import "./navbar.scss"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          {/* This would be the container for the navbar logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={LogoImage} alt="LogoImage" />
          </Typography>

          {/* This would be the container for the middle menu in the small version*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          {/* This would be the container for the middle menu in the normal version  */}
          <Box sx={{
            flexGrow: 2, 
            display: 'flex',
            // border: "solid red",
            justifyContent: 'flex-end',
            alignItems: 'center'
            }}>

            <Typography sx={{ fontSize: 24, display: 'flex', flexGrow: 1, marginLeft: 3.2}}>Platform Launch</Typography>
            {/* This would be the container for the add New Task button */}
            <Button sx={{
              backgroundColor: "#635FC7",
              borderRadius: "25px",
              paddingLeft: 2.5,
              paddingRight: 2.5,
              paddingTop: 1.5,
              paddingBottom: 1.5,
              marginRight: 2.6}}>+ Add New Task</Button>
            <img src={IconVertical} alt="IconVertical" />
          </Box>
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;