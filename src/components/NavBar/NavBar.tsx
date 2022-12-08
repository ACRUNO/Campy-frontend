import { Toolbar, AppBar, Button, Typography, Box } from "@mui/material";
import styles from './NavBar.module.css'
import { Link } from "react-router-dom";



const pages: string[] = ['Blog', 'Campings', 'Map'];


export default function NavBar() {

    return (
        <>
            <AppBar className={styles.appbar} component='nav' position="fixed">
                <Toolbar>
                    <Box 
                        component='span'
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            justifyContent: "space-evenly",
                        }}
                    >
                        {
                            pages.map(page => {
                                return (
                                    <Link to={`/${page}`}>
                                        <Button
                                            className={styles.btns}
                                            variant='text'
                                            color="secondary"
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
                        sx = {{
                            mr: 5
                        }}
                    >
                        <Link to='/Login'>
                            <Button 
                                className={styles.login} 
                                variant='text' 
                                color="secondary">
                                <Typography component='div'>Log in</Typography>
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}