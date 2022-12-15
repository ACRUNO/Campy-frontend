import * as React from 'react';
import Link from '@mui/material/Link';
import {Typography, Grid, Paper} from '@mui/material';
import Title from './Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Misdatos() {
  return (
    <React.Fragment>
        <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>  
      <Title>Mis Datos</Title>
      <Typography component="p" variant="h4">
        Nombre, apellido, foto?, mail???, que mas????
      </Typography>
      {/* <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
      </Paper>
      </Grid>
    </React.Fragment>
  );
}
