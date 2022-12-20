import { Toolbar, AppBar, Typography, Box, Button, Avatar } from "@mui/material";
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { Link as LinkMaterial } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { ROJO, VERDE } from "../helpers/colors";
import { useAuth0 } from "@auth0/auth0-react";
import { logoutUser } from "../../actions/Login.action";
import s from './NavBar.module.css';
import { Login as LoginIcon, Logout as LogoutIcon } from '@mui/icons-material';
import BasicMenu from "../helpers/BasicMenu";

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

    const handleSelectItems = (event: { currentTarget: any }):void => {
        const { myValue } = event.currentTarget.dataset;

        if(myValue === 'logout') handlerLogoutUser();
        else if(myValue === 'propietario') navigate('/create');
        else navigate('/dashboard');
    }

    return (
        <>
            <AppBar className={s.appbar} component='nav' position="fixed" sx={{zIndex: 99999}}>
                <Toolbar>
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
                    <Box
                        component='span'
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            justifyContent: "center",
                            gap: "8%"
                        }}
                    >
                        {
                            pages.map(page => {
                                return (
                                    <Link onClick={() => document.documentElement.scrollTop = 0} className={s.links} to={`/${page}`} key={page}>
                                        <Button
                                            className={s.btns}
                                            variant='text'
                                            color="info"
                                        >
                                            <Typography
                                                component='div'
                                            >{page}</Typography>
                                        </Button>
                                    </Link>
                                )
                            })
                        }
                    </Box>
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
                                                sx={{ fill: VERDE }}
                                            />
                                </Button>                            
                            </LinkMaterial>
                            :
                            <BasicMenu 
                                idButton='menu-perfil'
                                button={
                                    user.foto 
                                    ? <Avatar src={user.foto} />
                                    : <Avatar sx={{bgcolor: VERDE}}>{user.username[0]}</Avatar>
                                }
                                menuItems={[
                                    {key: 'Mi Perfil', value: 'perfil'},
                                    {key: 'Mis campings', value: 'propietario'},
                                    {key: <>Salir <LogoutIcon sx={{fill: ROJO, ml: '10px'}} /></>, value: 'logout'}
                                ]}
                                handleSelectItems={handleSelectItems}
                            />
                        }
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    )
}