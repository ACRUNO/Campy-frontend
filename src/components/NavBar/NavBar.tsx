import { Toolbar, AppBar, Button, Typography, Box, Link } from "@mui/material";
import styles from './NavBar.module.css'

const pages: string[] = ['blog', 'booking', 'map', "create"];
const logo : string = "https://res.cloudinary.com/pfcampy/image/upload/v1670466096/logo_CAMPY_rjsp9a.png"

export default function NavBar() {

    return (
        <>
            <AppBar className={styles.appbar} component='nav' position="fixed">
                <Toolbar>
                    <Link href='/'>
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
                                    <Link href={`/${page}`} key={page}>
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
                        <Link href='/login'>
                            <Button
                                className={styles.login}
                                variant='text'
                                color="info">
                                <Typography component='div'>Log in</Typography>
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </>
    )
}