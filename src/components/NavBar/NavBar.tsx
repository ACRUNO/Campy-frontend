import * as React from 'react';
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
import MenuItem from '@mui/material/MenuItem';

import { ROJO, VERDE } from "../helpers/colors";
import { Link as LinkMaterial } from "@mui/material";
import BasicMenu from "../helpers/BasicMenu";
import { Login as LoginIcon, Logout as LogoutIcon } from '@mui/icons-material';

import s from './NavBar.module.css';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useAuth0 } from "@auth0/auth0-react";
import { logoutUser } from "../../actions/Login.action";

const pages: string[] = ['blog', 'booking', 'map'];
const logo: string = "https://res.cloudinary.com/pfcampy/image/upload/v1670466096/logo_CAMPY_rjsp9a.png"

export default function NavBar() {

  const dispatch: AppDispatch = useDispatch();
  const navigate: NavigateFunction = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const { logout, isAuthenticated } = useAuth0();

  const handlerLogoutUser = () => {
    localStorage.removeItem('token')

    if (isAuthenticated) return logout();

    dispatch(logoutUser());

    navigate('/login');
  }

  const handleSelectItems = (event: { currentTarget: any }): void => {
    const { myValue } = event.currentTarget.dataset;

    if (myValue === 'logout') handlerLogoutUser();
    else if (myValue === 'propietario') navigate('/create');
    else navigate('/dashboard');
  }


  //standar
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static">
      <Container maxWidth={false}>
        <Toolbar disableGutters>

          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

          {/* LOGO CAMPY */}
          <Link className={s.links} to='/'>
            <Box
              component="img"
              sx={{
                ml: "4%"
              }}
              alt="Logo"
              src={logo}
            />
          </Link>

          {/* muestra dispositivos CHICOS */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* hamburguesa */}
              <MenuIcon />
            </IconButton>

            {/* MENU SE MUESTRA BLOCK EN DISPOSITIVOS CHICOS */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link onClick={() => document.documentElement.scrollTop = 0} className={s.links} to={`/${page}`} key={page}>

                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{ textAlign: 'left' }}>{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>

          </Box>


          {/*  <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}


          {/* muestra dispositivos GRANDES */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, px: 6, justifyContent: 'center' }}>

            {pages.map((page) => (
              <Link onClick={() => document.documentElement.scrollTop = 0} className={s.links} to={`/${page}`} key={page}>

                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, px: 3, color: 'black', display: 'block', fontSize: 'large' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          {/* LOGIN */}
          <Box
            component="span"
            sx={{
              mr: "1%"
            }}
          >
            {
              !user ?

                <LinkMaterial href='/login'>
                  <Button
                    className={s.login}
                    variant='text'
                    color="info">
                    <LoginIcon
                      fontSize="large"
                      sx={{ fill: VERDE, px: 0.5 }}
                    />
                  </Button>
                </LinkMaterial>
                :
                <BasicMenu
                  idButton='menu-perfil'
                  button={
                    user.foto
                      ? <Avatar src={user.foto} />
                      : <Avatar sx={{ bgcolor: VERDE }}>{user.username[0]}</Avatar>
                  }
                  menuItems={[
                    { key: 'Mi Perfil', value: 'perfil' },
                    { key: 'Crear camping', value: 'propietario' },
                    { key: <>Salir <LogoutIcon sx={{ fill: ROJO, ml: '10px' }} /></>, value: 'logout' }
                  ]}
                  handleSelectItems={handleSelectItems}
                />
            }
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}