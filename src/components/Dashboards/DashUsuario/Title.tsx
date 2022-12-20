import * as React from 'react';
import Typography from '@mui/material/Typography';
import { GRIS, VERDE_OSCURO } from '../../helpers/colors';

interface TitleProps {
  children?: React.ReactNode;
}

export default function Title(props: TitleProps) {
  return (
    <Typography variant="h4" color={VERDE_OSCURO} gutterBottom>
      {props.children}
    </Typography>
  );
}