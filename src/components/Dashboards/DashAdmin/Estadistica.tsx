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
      <Typography component="h2" variant="h6" color="black" align="center" gutterBottom>Distribución geográfica de campings registrados</Typography>
      <Torta/>
      </Paper>
      </Grid>

      <Grid item xs={6}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>  
      <Typography component="h2" variant="h6" color="black" align="center" gutterBottom>Usuarios registrados en Campy</Typography>
      <GrafUsuarios/>
      </Paper>
      </Grid>

      <Grid item xs={6}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>  
      <Typography component="h2" variant="h6" color="black" align="center" gutterBottom>Reservas realizadas en Campy</Typography>
      <GrafReservas/>
      </Paper>
      </Grid>

      <Grid item xs={6}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', color:"secondary"}}>  
      <Typography component="h2" variant="h6" color="black" align="center" gutterBottom>Top 5: Campings con mayor cantidad de reservas</Typography>
      <Top10/>
      </Paper>
      </Grid>
    </React.Fragment>
  );
}
