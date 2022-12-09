import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
    const [provincia, setProvincia] = React.useState('');
    const [localidad, setLocalidad] = React.useState('');

    const handleProvincia = (event: SelectChangeEvent) => {
        setProvincia(event.target.value as string);
    };

    const handleLocalidad = (event: SelectChangeEvent) => {
        setProvincia(event.target.value as string);
    };


    return (
        <Box sx={{ minWidth: 120, display: "flex", justifyContent: "center" }}>
            <Box>
                <FormControl >
                    <InputLabel id="demo-simple-select-label">Provincia</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={provincia}
                        label="Provincia"
                        onChange={handleProvincia}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ minWidth: 120, display: "flex", justifyContent: "center" }}>
                <FormControl >
                    <InputLabel id="demo-simple-select-label">Localidad</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={localidad}
                        label="Localidad"
                        onChange={handleLocalidad}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    );
}