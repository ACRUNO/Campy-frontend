import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from '@mui/material/styles';

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
    const [provincia, setProvincia] = React.useState('');
    const [localidad, setLocalidad] = React.useState('');

    const handleChangeProvincia = (event: SelectChangeEvent) => {
        setProvincia(event.target.value as string);
    };

    const handleChangeLocalidad = (event: SelectChangeEvent) => {
        setProvincia(event.target.value as string);
    };

    // const handleInputChange = (event: ChangeEvent) => {
    //     return event.target.value as string;
    // }

    let provincias: Array<string> = ["Buenos Aires", "Salta", "Jujuy", "Tucumán", "Chaco", "Formosa", "Santiago del Estero", "Córdoba"]
    let localidades: Array<string> = ["Mar del Plata", "Chascomus", "San Pedro", "San Antonio de Areco"]


    return (
        <Box sx={{ minWidth: 120, display: "flex", justifyContent: "center" }}>
            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ pb: '1%' }}>
                <FormControl sx={{ m: 1, minWidth: "10rem" }}>
                    <InputLabel id="demo-simple-select-helper-label" color="secondary">Provincia</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={provincia}
                        label="provincia"
                        color="secondary"
                        onChange={handleChangeProvincia}>
                        {provincias.map(m => (
                            <MenuItem value={m}>{m}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: "10rem" }}>
                    <InputLabel id="demo-simple-select-helper-label" color="secondary">Localidad</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={localidad}
                        label="localidad"
                        color="secondary"
                        onChange={handleChangeLocalidad}>
                        {/* <MenuItem value=""><em>None</em></MenuItem> */}
                        {localidades.map(m => (
                            <MenuItem value={m}>{m}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Grid>
        </Box>
    );
}