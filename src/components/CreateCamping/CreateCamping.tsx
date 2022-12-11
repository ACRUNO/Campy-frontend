import React from "react";
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
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
//import { useHistory } from 'react-router-dom';
import { createCamping } from '../../actions/index'
import { MouseEvent } from 'react';
import { url } from "inspector";



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        CAMPY S.A.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Datos generales', 'Comodidades', 'Tarifas/Imágenes'];

function getStepContent(step: number, setInput: any) {
  switch (step) {
    case 0:
      return <Page1 setInput={setInput} />;
    case 1:
      return <Page2 setInput={setInput} />;
    case 2:
      return <Page3 setInput={setInput} />
    default:
      throw new Error('Unknown step');
  }
}

//const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  //const history = useHistory();
  const dispatch: AppDispatch = useDispatch()

  const [input, setInput] = React.useState({
    nombre_camping: '',
    telefono: '',
    direccion: '',
    provincia: '',
    localidad: '',
    categoria: '',
    contacto_nombre: '',
    contacto_tel: '',
    descripcion_camping: '',
    techado: false,
    toma_corriente: false,
    agua: false,
    superficie: 0,
    cant_banios: 0,
    cant_duchas: 0,
    periodo_agua: '',
    mascotas: false,
    casa_rodante: false,
    proveduria: false,
    salon_sum: false,
    retaurant: false,
    vigilancia: false,
    pileta: false,
    estacionamiento: false,
    juegos_infantiles: false,
    gimnasio: false,
    wifi: false,
    tarifa_por_mayor_dia: 0,
    tarifa_por_menor_dia: 0,
    tarifa_por_casa_rodante: 0,
    cerrado_fecha_desde: '',
    cerrado_fecha_hasta: '',
    imagenes: [],
    longitud: '',
    latitud: '',
  });

  console.log('createcamp', input);


  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const redirect : any = (url: any) => window.location.href = url

  const handleSubmit = (e: MouseEvent<HTMLElement>) => {
    /* history.push('/') */
    e.preventDefault();
    dispatch(createCamping(input))
    redirect('http://localhost:3000')
  }



  return (
    <Box>
      {/* <ThemeProvider 
    theme={theme}
    > */}
      {/* <CssBaseline />  */}

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
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
              {getStepContent(activeStep, setInput)}
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
        </Paper>
        <Copyright />
      </Container>
    </Box>
    // </ThemeProvider>
  );
}
