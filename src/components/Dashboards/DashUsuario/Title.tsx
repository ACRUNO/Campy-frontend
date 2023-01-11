import * as React from 'react';
import Typography from '@mui/material/Typography';
import { GRIS, VERDE_OSCURO } from '../../helpers/colors';
import s from './Title.module.css';

interface TitleProps {
  children?: React.ReactNode;
}

export default function Title(props: TitleProps) {
  return (
    <Typography className={s.title} variant="h4" color={VERDE_OSCURO} gutterBottom>
      {props.children}
    </Typography>
  );
}