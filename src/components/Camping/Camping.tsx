import * as React from 'react';
import { Box } from '@mui/material';
import Portada from "./banner1.webp"
import Style from "./Camping.module.css"
import { Typography } from '@mui/material';
import Galery from "./portada.jpg"
import Rating from '@mui/material/Rating';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'




export default function Camping() {
    const [value, setValue] = React.useState<number | null>(5);
    const [stay, setStay] = React.useState('');
    const [price, setPrice] = React.useState("")
       const handleChange = (event: SelectChangeEvent) => {
      setStay(event.target.value as string);
    };
    const handleCotizacion = (e : any) => {
            setPrice("5000$" as string) 
            console.log(price)
    }
    let navigate : any = useNavigate ();
    const handleReserv = () => {
       navigate('../../');
    }
    return(
        <Box className={Style.all}>

            <Box className={Style.portadacont}>
               
         <Box
                            component="img"
                            className={Style.imagencita}
                            alt="Logo"
                            src={Portada}
                            />
                            <Box className={Style.text}> 

            <Typography  variant="h1" color="primary"> CAMPING LAGUNA  </Typography>
            <Box className={Style.rankingcont}>
            <Typography   color="primary" component="legend">Ranking</Typography>
            <Rating     name="read-only" value={value} readOnly />
            </Box>
           
                
                            </Box>
                            </Box>

        <Box className={Style.booking}> 

        <Box className={Style.imageplace} >
        <Box className={Style.lugar}>
        <Typography   variant="subtitle2" color="black">(iconLugar) Calle las piedras al 1233 - Kikin Mendoza</Typography>
        </Box>
        <Box
                            component="img"
                            className={Style.galery}
                            alt="Logo"
                            src={Galery}
                            />
                            

                            </Box>

        <Box className={Style.inputCont}>
            <Box>
        <Typography  variant="h4" color="black"> Cotiza tu estadia al mejor precio</Typography>
            </Box>
            <Box className={Style.input}>
        <Box sx={{ minWidth: 150 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Estadia</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
                        
            >
              <MenuItem value={"Carpa"}>Zona Carpas</MenuItem>
              <MenuItem value={"Trailer"}>Trailer Park</MenuItem>
                         </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 150 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Viajeros</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={stay}
              label="stay"
              onChange={handleChange}
            >
              <MenuItem value={"Carpa"}>1-2 Personas</MenuItem>
              <MenuItem value={"Trailer"}>3-4 Personas</MenuItem>
              <MenuItem value={"Trailer"}>5+ Personas</MenuItem>
                         </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 150 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Poner calendario</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              
              label="stay"
         
            >
              <MenuItem value={"Carpa"}>Arriba de los 2 de la izquierda</MenuItem>
              <MenuItem value={"Trailer"}>mes</MenuItem>
              
                         </Select>
          </FormControl>
        </Box>
        </Box>

       <Box className={Style.btn1} > 
        <Stack direction="row" spacing={2}>
          
          <Button sx={{ minWidth: 190 }} onClick={handleCotizacion} variant="contained" value={price} color="warning">
            Generar Cotizacion
          </Button>
          
        </Stack>
       </Box>
        
        
            {price.length > 0 ? <Box> 
                <Box className={Style.btn1} > 
        <Stack direction="row" spacing={2}>
          
          <Button sx={{ minWidth: 250 , minHeight : 70, fontSize : 25 }} onClick={handleReserv} variant="contained"  color="success">
            5000$ Reserva ya! (falta darle amor)
           </Button>
          
        </Stack>
       </Box></Box> : <></>}
        
        </Box>
        </Box>
        holis
         </Box>         
                
    )}

            
   
  
   
    

    
    
   
      
    
     
      



  
