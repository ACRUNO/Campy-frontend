import { Grid, Typography, TextField, Box, Button, Dialog, DialogTitle, DialogContent, Checkbox, FormControlLabel } from '@mui/material';
import { Container } from '@mui/system';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/index';
import * as actions from "../../actions/Blog.action"
import { useNavigate } from 'react-router-dom';
import Cloudinary from './Cloudinary';


export default function CrearComentario() {

    const dispatch: AppDispatch = useDispatch()

    return (
        <Grid>
            <Typography>COMENTAR</Typography>
        </Grid>
    )
}