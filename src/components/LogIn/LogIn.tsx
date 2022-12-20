import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { AppDispatch, RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions';
import axios from 'axios';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                CAMPY S.A.
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const logInPhotos: string [] = ["https://res.cloudinary.com/pfcampy/image/upload/v1670536215/Fotos/Misiones.jpg","https://res.cloudinary.com/pfcampy/image/upload/v1670536275/Fotos/Jujuy.jpg","https://res.cloudinary.com/pfcampy/image/upload/v1670536434/Fotos/LaPampa.jpg","https://res.cloudinary.com/pfcampy/image/upload/v1670536537/Fotos/Corrientes.jpg","https://res.cloudinary.com/pfcampy/image/upload/v1670536684/Fotos/SanJuan.jpg","https://res.cloudinary.com/pfcampy/image/upload/v1670535617/Fotos/Tierradelfuego.jpg","https://res.cloudinary.com/pfcampy/image/upload/v1670536350/Fotos/SantaCruz.jpg"]

const randomPhoto:string = logInPhotos[Math.floor(Math.random() * logInPhotos.length)]

export default function SignIn() {

        const user = useSelector((state: RootState) => state.user);

    console.log("user", user)

    const dispatch: AppDispatch = useDispatch()
    const [typeOfSign, setTypeOfSign] = useState('signin');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data: FormData = new FormData(event.currentTarget);
        const email: string = String(data.get('email'));
        const clave: string = String(data.get('password'));
        const nombre_completo: string = String(data.get('nombre_completo'));
        const numero_celular: string = String(data.get('numero_celular'));
        const direccion: string = String(data.get('direccion'));
        const dni: string = String(data.get('dni'));
        const tipo: number = Number(data.get('tipo'));
        const remember: boolean = Boolean(data.get('remember'));

        if(typeOfSign === 'signin') dispatch(loginUser({email, clave}, remember));
        else axios
                .post('/api/register', {
                    data, email, clave, nombre_completo, numero_celular, direccion, dni, tipo 
                }).then(res => console.log("hecho id:", res.data));

        event.currentTarget.reset();
    };

    const handleChangeSign = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        setTypeOfSign(type => type === 'signin' ? 'signup' : 'signin')
    }

    return (
            <Grid container component="main" sx={{ height: 'calc(100vh - 64px)' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${randomPhoto})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography sx={{mt: '10px'}} component="h1" variant="h5">
                            {typeOfSign === 'signin' ? 'INICIAR SESIÓN' : 'REGISTRARSE' }
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                color='secondary'
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                color='secondary'
                            />
                            {
                                typeOfSign === 'signup' && (
                                    <>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="nombre_completo"
                                            label="Nombre completo"
                                            type="text"
                                            id="nombre_completo"
                                            autoComplete="current-name"
                                            color='secondary'
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="numero_celular"
                                            label="Número celular"
                                            type="text"
                                            id="numero_celular"
                                            autoComplete="current-name"
                                            color='secondary'
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="direccion"
                                            label="Dirección"
                                            type="text"
                                            id="direccion"
                                            autoComplete="current-name"
                                            color='secondary'
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="dni"
                                            label="Dni"
                                            type="text"
                                            id="dni"
                                            autoComplete="current-name"
                                            color='secondary'
                                        />
                                        <Typography sx={{margin: '10px 0'}} variant="h6" color="text.secondary" align="left">
                                            Selecciona un rol:
                                        </Typography>
                                        <Select
                                            fullWidth
                                            id="tipo"
                                            name='tipo'
                                            label="Tipo"
                                            variant="outlined"
                                            sx={{mb: '15px'}}
                                            defaultValue={3}
                                        >
                                            <MenuItem value={2}>Propietario</MenuItem>
                                            <MenuItem value={3}>Viajero</MenuItem>
                                        </Select>
                                    </>
                                )
                            }
                            {typeOfSign === 'signin' && <FormControlLabel
                                control={<Checkbox value={true} color="secondary" />}
                                label='Recordarme'
                                name='remember'
                            />}
                            <Link onClick={handleChangeSign} color="inherit" href="/login">
                                {typeOfSign === 'signin' ? 'registrarme' : 'iniciar sesión'}
                            </Link>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                color='secondary'
                            >
                                {typeOfSign === 'signin' ? 'iniciar sesión' : 'registrarse' }
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    );
}