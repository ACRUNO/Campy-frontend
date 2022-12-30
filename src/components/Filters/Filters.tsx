import * as React from 'react';
import { useEffect, useState } from "react";
import { Button, Box, Grid, InputLabel, MenuItem, FormControl, InputBase } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MouseEvent } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from '../../store/index';
import { getProvincias, getLocalidades, getCampingsProvincias, getCampingsLocalidades,filterProvincia,filterLocalidad,getAllCampings, filtrosPrincipales} from "../../actions";
import { Link, useNavigate } from "react-router-dom";



const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: '85%'
      }
    }
  }

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.secondary.dark, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.secondary.dark, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
            '&:focus': {
                width: '30ch',
            },
        },
    },
}));

export default function BasicSelect() {

    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()


   
    
    const allProvincias: { id: number, nombre: string, imagen: string }[] = useSelector((state: RootState) => state.allProvincias)
    const allLocalidades: { id: number, nombre: string, imagen: string }[] = useSelector((state: RootState) => state.allLocalidades)
    const provincia: number = useSelector((state: RootState) => state.provincia)
    const localidad: number = useSelector((state: RootState) => state.localidad)

    useEffect(() => {
        dispatch(getAllCampings())
    }, [dispatch]);




    const handleChangeProvincia = (e: SelectChangeEvent<unknown>) => {
        e.preventDefault();
        dispatch(filterProvincia(Number(e.target.value) as number))
        dispatch(getLocalidades(Number(e.target.value) as number))

    };

    const handleChangeLocalidad = (e: SelectChangeEvent<unknown>) => {
        e.preventDefault();
        dispatch(filterLocalidad(Number(e.target.value) as number))
    };

    const handleSubmit = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        // if (provincia !== 0 && localidad === 0) dispatch(getCampingsProvincias())
        // if (provincia !== 0 && localidad !== 0) dispatch(getCampingsLocalidades())
        dispatch(filtrosPrincipales(provincia, localidad, undefined, undefined))
        navigate("/booking")
        document.documentElement.scrollTop = 0
    }
    


    return (
        <Box sx={{ minWidth: 120, display: "flex", justifyContent: "center", boxShadow: "0 0 6px rgb(0 0 0 / 100%)", pt: 1.25, pb: 1.25}}>
            <Grid container direction="row" justifyContent="center" alignItems="center" >

{/*                 <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search> */}


                <FormControl sx={{ m: 1, minWidth: "10rem" }}>
                    <InputLabel id="demo-simple-select-helper-label" color="secondary">Provincia</InputLabel>

                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="provincia"
                        color="secondary"
                        MenuProps={MenuProps}
                        onChange={handleChangeProvincia}>
                        {allProvincias?.map((m, i) => (
                            <MenuItem value={m.id} key={i}>{m.nombre}</MenuItem>
                        ))}
                    </Select>
                </FormControl>


                <FormControl sx={{ m: 1, minWidth: "10rem" }}>
                    <InputLabel id="demo-simple-select-helper-label" color="secondary">Localidad</InputLabel>
                    <Select
                        disabled={provincia === 0}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="localidad"
                        color="secondary"
                        MenuProps={MenuProps}
                        onChange={handleChangeLocalidad}>
                        {allLocalidades?.map((m, i) => (
                            <MenuItem value={m.id} key={i}>{m.nombre}</MenuItem>
                        ))}
                    </Select>
                </FormControl>


                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Button onClick={handleSubmit} variant="contained" color="success" sx={{ m: 0, height: 56 }} disabled={provincia === 0}>Buscar</Button>
                </FormControl>

            </Grid>
        </Box>
    );
}