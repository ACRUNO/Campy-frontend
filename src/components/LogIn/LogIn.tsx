import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import {
  Avatar, Button, TextField, CssBaseline,
  FormControlLabel, Checkbox, Link, Paper, Box, Grid,
  Typography,
  Dialog
} from '@mui/material';
import {
  LockOutlined as LockOutlinedIcon,
  Google as GoogleIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon
} from '@mui/icons-material';
import { AppDispatch, RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { loginUser, loginUserWithGoogle } from '../../actions/Login.action';
import Alert from '../helpers/Alert';
import axios from 'axios';
import { ROJO } from '../helpers/colors';
import { AlertType } from '../../auxiliar';
import Loader from '../helpers/Loader';
import s from './LogIn.module.css';

function Copyright() {
  return (
    <Typography display='flex' variant="body2" color="secondary" justifyContent="center">
      {'Copyright © '}
      <Link color="primary" href="/">
        <Typography variant="body2" color="secondary"> CAMPY S.A. </Typography>
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const logInPhotos: string[] = ["https://res.cloudinary.com/pfcampy/image/upload/v1670536215/Fotos/Misiones.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536275/Fotos/Jujuy.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536434/Fotos/LaPampa.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536537/Fotos/Corrientes.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536684/Fotos/SanJuan.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670535617/Fotos/Tierradelfuego.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536350/Fotos/SantaCruz.jpg"]

const randomPhoto: string = logInPhotos[Math.floor(Math.random() * logInPhotos.length)];

export default function SignIn() {

  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } = useAuth0();

  const dispatch: AppDispatch = useDispatch();
  const globalUser = useSelector((state: RootState) => state.user);

  const [typeOfSign, setTypeOfSign] = useState<string>('signin');
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const [openLoader, setOpenLoader]: [openLoader: boolean, setOpenLoader: Dispatch<SetStateAction<boolean>>] = useState(false);
  const [stateOpen, setStateOpen]: [stateOpen: AlertType, setStateOpen: Dispatch<SetStateAction<AlertType>>] = useState<AlertType>({
    open: false,
    title: '',
    description: '',
    confirm: '',
    type: 'success',
    navigateTo: null
  });
  const [forgottenPassword, setForgottenPassword] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpenLoader(true);

    const data: FormData = new FormData(event.currentTarget);
    const email: string = String(data.get('email'));
    const clave: string = String(data.get('password'));
    const username: string = String(data.get('username'));
    const remember: boolean = Boolean(localStorage.getItem('remember'));

    if (typeOfSign === 'signin') dispatch(loginUser({ email, clave }, remember, setStateOpen, setOpenLoader));
    else axios
      .post('/api/register', {
        email, clave, username
      }).then(() => setStateOpen(() => ({
        open: true,
        title: 'REGISTRO CON ÉXITO',
        description: 'En las próximas 12hs deberás confirmar un correo de verificación por gmail.',
        confirm: 'OK',
        type: 'success',
        navigateTo: null
      }))).catch(({ response }) => setStateOpen(() => ({
        open: true,
        title: `ERROR: ${response.data.error}`,
        description: response.data.message,
        confirm: 'ok...',
        type: 'error',
        navigateTo: null
      }))).finally(() => setOpenLoader(false));

    event.currentTarget.reset();
  };

  const handlerChangeRemember = (e: any) =>
    e.target.checked ? localStorage.setItem('remember', 'true') : localStorage.removeItem('remember');

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      const remember: boolean = Boolean(localStorage.getItem('remember'));

      dispatch(loginUserWithGoogle(user, remember, setStateOpen, () => logout({
        returnTo: process.env.REACT_APP_REDIRECT_AUTH0 || 'http://localhost:3000/login'
      })));
    }
  }, [isAuthenticated]);

  useEffect(() => {
    globalUser && setStateOpen(() => ({
      open: true,
      title: 'INICIO DE SESIÓN EXITOSO',
      description: 'Disfrutá de tu estadía :)',
      confirm: 'OK!!',
      type: 'success',
      navigateTo: '/'
    }))
  }, [globalUser])

  const handleChangeSign = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    setTypeOfSign(type => type === 'signin' ? 'signup' : 'signin')
  }

  const handlePasswordSubmit = async (e: any) => {
    e.preventDefault();

    setOpenLoader(true);

    await axios.get(`/api/usuarios/password/${e.target.email.value}`);

    e.target.email.value = ""
    setOpenLoader(false);
    setStateOpen({
      open: true,
      title: 'REALIZADO',
      description: 'Se ha enviado un correo a tu mail para restablecer tu contraseña',
      confirm: 'OK!!',
      type: 'success',
      navigateTo: null
    });
    setForgottenPassword(false);
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
          <Typography sx={{ mt: '10px' }} component="h1" variant="h5">
            {typeOfSign === 'signin' ? 'INICIAR SESIÓN' : 'REGISTRARSE'}
          </Typography>
          <Box component="form" id='form-login' onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
            {
              typeOfSign === 'signup' && (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="username"
                    label="Nombre de Usuario"
                    type="username"
                    id="username"
                    autoComplete="current-password"
                    color='secondary'
                  />
                </>
              )
            }
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
            <Box position="relative">
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={seePassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                color='secondary'
              />
              {
                seePassword
                  ? <VisibilityOffIcon
                    className={s['eye-button']}
                    onClick={() => setSeePassword(false)} />
                  : <VisibilityIcon
                    className={s['eye-button']}
                    onClick={() => setSeePassword(true)} />
              }
            </Box>
            {typeOfSign === 'signin' && <FormControlLabel
              control={<Checkbox color="secondary" defaultChecked={localStorage.getItem('remember') === 'true'} />}
              onClick={handlerChangeRemember}
              label='Recordarme'
              name='remember'
            />
            }
            <Link
              onClick={handleChangeSign}
              sx={{
                '&:visited': { color: 'rgb(79, 79, 79)' },
                '&:hover': { fontFamily: 'inherit' }
              }}
              href="/login">
              {typeOfSign === 'signin' ? 'registrarme' : 'iniciar sesión'}
            </Link>
            <Typography>
              ¿Olvidaste tu contraseña?
              <Link onClick={() => setForgottenPassword(true)} className={s['click-aqui']}> click aquí</Link>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color='secondary'
            >
              {typeOfSign === 'signin' ? 'iniciar sesión' : 'registrarse'}
            </Button>
            {
              typeOfSign === 'signin' && (

                <Button
                  onClick={loginWithRedirect}
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: ROJO, color: 'white' }}
                >
                  <GoogleIcon sx={{ mr: 1 }} />
                  Iniciar con google
                </Button>
              )
            }
            <Copyright />
          </Box>
        </Box>
      </Grid>
      {
        stateOpen.open &&
        <Alert
          setStateOpen={setStateOpen}
          open={stateOpen.open}
          description={stateOpen.description}
          title={stateOpen.title}
          confirm={stateOpen.confirm}
          type={stateOpen.type}
          navigateTo={stateOpen.navigateTo}
        />
      }
      <Dialog open={forgottenPassword} onClick={(e: any) => e.target.matches("div") && setForgottenPassword(false)}>
        <Box onSubmit={handlePasswordSubmit} component='form' className={s['forgotten-password-form']}>
          <Typography variant='h5' fontWeight="bolder">Introduce tu correo: </Typography>
          <TextField name="email" color="success" type="email" variant="outlined" label="Correo" required />
          <Button type="submit" variant="contained" color="success">Enviar</Button>
        </Box>
      </Dialog>
      <Loader open={openLoader} />
    </Grid>
  );
}
