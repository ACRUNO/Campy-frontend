import { Toolbar, AppBar, Typography, Box, Button } from "@mui/material";
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { Link as LinkMaterial } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { ROJO, VERDE } from "../helpers/colors";
import { useAuth0 } from "@auth0/auth0-react";
import { logoutUser } from "../../actions";
import s from './NavBar.module.css';
import { 
    Login as LoginIcon, 
    Logout as LogoutIcon, 
    AccountBox as AccountBoxIcon } from '@mui/icons-material';
import BasicMenu from "../helpers/BasicMenu";

const pages: string[] = ['blog', 'booking', 'map', "create"];
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
        else navigate('/dashboard');
    }

    return (
        <>
            <AppBar className={s.appbar} component='nav' position="fixed">
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
                                    <Link className={s.links} to={`/${page}`} key={page}>
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
                                button={<AccountBoxIcon fontSize="large" sx={{color: VERDE, pr: '30px'}} />}
                                menuItems={[
                                    {key: 'Mi Perfil', value: 'perfil'},
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