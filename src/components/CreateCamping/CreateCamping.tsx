import React, { useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
//import { useHistory } from 'react-router-dom';
import { createCamping } from '../../actions/index'
import { MouseEvent } from 'react';
import { url } from "inspector";
import { height } from "@mui/system";
import Alert from "../helpers/Alert";
import { AlertType } from "../../auxiliar";



function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="primary" href="https://mui.com/">
        CAMPY S.A.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Datos generales', 'Comodidades', 'Tarifas/Imágenes'];

function getStepContent(step: number, setInput: React.Dispatch<React.SetStateAction<Inputs>>, input: Inputs) {
  switch (step) {
    case 0:
      return <Page1 setInput ={setInput}
                      input={input} />;
    case 1:
      return <Page2 setInput={setInput}
                    input={input} />;
    case 2:
      return <Page3 setInput={setInput} 
                    input={input}/>
    default:
      throw new Error('Unknown step');
  }
}


export interface Inputs {
  nombre_camping: string,
  descripcion_camping: string,
  direccion: string,
  telefono: string,
  contacto_nombre: string,
  contacto_tel: string,
  CategoriaCampingId: number,
  LocalidadeId: number,
  provincia: number,
  wifi: boolean,
  duchas: number,
  baños: number,
  mascotas: boolean,
  rodantes: boolean,
  proveduria: boolean,
  salon_sum: boolean,
  restaurant: boolean,
  vigilancia: boolean,
  pileta: boolean,
  estacionamiento: boolean,
  juegos_infantiles: boolean,
  maquinas_gimnasia: boolean,
  AbiertoPeriodoId: number,
  PeriodoAguaCalienteId: number,
  techada: boolean,
  agua_en_parcela: boolean,
  iluminacion_toma_corriente: boolean,
  superficie: number,
  imagenes: string[],
  tarifa_por_mayor_dia: number,
  tarifa_por_menor_dia: number,
  tarifa_por_casa_rodante: number,
  cerrado_fecha_desde: string,
  cerrado_fecha_hasta: string,
  longitud: string,
  latitud: string,
}

//const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  // const { tipo } = useSelector((state: RootState) => state.user)
  const [alert, setAlert] = React.useState<AlertType>({
    open: true,
    title: 'Ser Propietario',
    description: '¿Querés crear servicios de campings para viajeros? ¡Convertite en propietario creando al menos un camping!',
    confirm: 'Crear Camping',
    type: 'person',
    navigateTo: null
  });

  //const history = useHistory();
  const dispatch: AppDispatch = useDispatch();

  const [input, setInput] = React.useState<Inputs>({
    nombre_camping: '',
    descripcion_camping: '',
    direccion: '',
    telefono: '',
    contacto_nombre: '',
    contacto_tel: '',
    CategoriaCampingId: 0,
    LocalidadeId: 0,
    provincia: 0,
    wifi: false,
    duchas: 0,
    baños: 0,
    mascotas: false,
    rodantes: false,
    proveduria: false,
    salon_sum: false,
    restaurant: false,
    vigilancia: false,
    pileta: false,
    estacionamiento: false,
    juegos_infantiles: false,
    maquinas_gimnasia: false,
    AbiertoPeriodoId: 0,
    PeriodoAguaCalienteId: 0,
    techada: false,
    agua_en_parcela: false,
    iluminacion_toma_corriente: false,
    superficie: 0,
    imagenes: [],
    tarifa_por_mayor_dia: 0,
    tarifa_por_menor_dia: 0,
    tarifa_por_casa_rodante: 0,
    cerrado_fecha_desde: '',
    cerrado_fecha_hasta: '',
    longitud: '5',
    latitud: '5',
  });

  let disabled =
    !(
      input.nombre_camping.length &&
      input.descripcion_camping.length &&
      input.direccion.length &&
      input.telefono.length &&
      input.contacto_nombre.length &&
      input.contacto_tel.length &&
      input.imagenes.length 
    ) ||
    input.CategoriaCampingId === 0 || 
    input.LocalidadeId === 0 ||
    input.provincia === 0 ||
    input.duchas === 0 ||
    input.baños === 0 ||
    input.AbiertoPeriodoId === 0 ||
    input.PeriodoAguaCalienteId === 0 ||
    input.superficie === 0 ;





  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const redirect: any = (url: any) => window.location.href = url

  const handleSubmit = (e: MouseEvent<HTMLElement>) => {
    /* history.push('/') */
    e.preventDefault();
    dispatch(createCamping(input))
    redirect('http://localhost:3000')
  }

  const logInPhotos: string[] = ["https://res.cloudinary.com/pfcampy/image/upload/v1670536215/Fotos/Misiones.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536275/Fotos/Jujuy.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536434/Fotos/LaPampa.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536537/Fotos/Corrientes.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536684/Fotos/SanJuan.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670535617/Fotos/Tierradelfuego.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536350/Fotos/SantaCruz.jpg"]

  const randomPhoto: string = logInPhotos[Math.floor(Math.random() * logInPhotos.length)]


  return (
    <Box sx={{ backgroundColor: "#16161F", paddingTop: "3rem", boxShadow: "0 0 6px rgb(0 0 0 / 80%)" }}>
      {/* <ThemeProvider 
    theme={theme}
    > */}
      {/* <CssBaseline />  */}

      <Container component="main" maxWidth="sm">
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Nuevo Camping
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Gracias por formar parte de la comunidad de CAMPY
              </Typography>
              <Typography variant="subtitle1">
                Tu camping ha sido creado. A la brevedad estará disponible en nuestra página,
                te enviaremos un mail de confirmación
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, setInput, input)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button variant="contained" onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Anterior
                  </Button>
                )}
                {activeStep === steps.length - 1 ?
                  <Button
                    variant="contained"
                    color='secondary'
                    onClick={handleSubmit}
                    sx={{ mt: 3, ml: 1 }}
                    disabled={disabled}
                  > Crear </Button>
                  :
                  <Button
                    variant="contained"
                    color='secondary'
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Siguiente
                  </Button>}

              </Box>
            </React.Fragment>
          )}
          {/* {
            process.env.REACT_APP_TIPO_USUARIO === tipo &&
            <Alert 
              open={alert.open}
              title={alert.title}
              description={alert.description}
              type='person'
              confirm={alert.confirm}
              setStateOpen={setAlert}
              navigateTo={null}
            />
          } */}
        </Paper>
        <Copyright />
      </Container>
    </Box>
    // </ThemeProvider>
  );
}
