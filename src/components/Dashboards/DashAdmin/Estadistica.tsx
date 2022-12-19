import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {Typography, Grid, Paper} from '@mui/material';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import Torta from './Estadistica/Graftorta';
import GrafUsuarios from './Estadistica/GrafUsuarios'
import GrafReservas from './Estadistica/GrafReservas'
import Top10 from './Estadistica/Top10';

// Generate Sales Data
function createData(time: string, amount?: number) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

export default function Estadistica() {
  const theme = useTheme();

  return (
    <React.Fragment>

      <Grid item xs={6}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>  
      <Title>Grafico de torta, campings totales y % por provincia</Title>
      <Torta/>
      </Paper>
      </Grid>

      <Grid item xs={6}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>  
      <Title>Aca se muestran los nuevos usuarios por mes y el total acumulado</Title>
      <GrafUsuarios/>
      </Paper>
      </Grid>

      <Grid item xs={6}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>  
      <Title>Acá se muestran las reservas $ por mes y el acumulado</Title>
      <GrafReservas/>
      </Paper>
      </Grid>

      <Grid item xs={6}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>  
      <Title>top 10 de campings con mas reservas</Title>
      <Top10/>
      </Paper>
      </Grid>
    </React.Fragment>
  );
}
