import { Toolbar, AppBar, Button, Typography, Box} from "@mui/material";
import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'
import LoginIcon from '@mui/icons-material/Login';
import s from './NavBar.module.css'

const pages: string[] = ['blog', 'booking', 'map', "create"];
const logo : string = "https://res.cloudinary.com/pfcampy/image/upload/v1670466096/logo_CAMPY_rjsp9a.png"

export default function NavBar() {


    function handleClick(){
        document.documentElement.scrollTop = 0
    }

    return (
        <>
            <AppBar className={styles.appbar} component='nav' position="fixed">
                <Toolbar>
                    <Link className={s.links} to='/' onClick={handleClick}>
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
                                    <Link className={s.links} to={`/${page}`} key={page} onClick={handleClick}>
                                        <Button
                                            className={styles.btns}
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
                        <Link className={s.links} to='/login' onClick={handleClick}>
                            <Button
                                className={styles.login}
                                variant='text'
                                color="info">
                                {/* <Typography component='div'>Log in</Typography> */}
                                <LoginIcon
                                    fontSize="large"
                                />
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </>
    )
}