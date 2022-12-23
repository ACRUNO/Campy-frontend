import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {Typography, Grid, Paper} from '@mui/material';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import Torta from './Estadistica/Graftorta';
import GrafUsuarios from './Estadistica/GrafUsuarios'
import GrafReservas from './Estadistica/GrafReservas'
import Top10 from './Estadistica/Top10';




export default function Estadistica() {
  

  return (
    <React.Fragment>

      <Grid item xs={6} color="secondary">
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>  
      <Title >Distribución geográfica de campings registrados</Title>
      {/* <Typography align="center" variant="subtitle2">Total de campings: 1200</Typography> */}
      <Torta/>
      </Paper>
      </Grid>

      <Grid item xs={6}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>  
      <Title>Usuarios registrados en Campy</Title>
      <GrafUsuarios/>
      </Paper>
      </Grid>

      <Grid item xs={6}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>  
      <Title>Reservas realizadas en Campy</Title>
      <GrafReservas/>
      </Paper>
      </Grid>

      <Grid item xs={6}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', color:"secondary"}}>  
      <Title>Top 5: Campings con mayor cantidad de reservas</Title>
      <Top10/>
      </Paper>
      </Grid>
    </React.Fragment>
  );
}
