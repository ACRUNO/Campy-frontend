import * as React from 'react';
import { Box } from '@mui/material';
import Portada from "./banner1.webp"
import Style from "./Camping.module.css"
import { Typography , TextField } from '@mui/material';
import Galery from "./portada.jpg"
import Rating from '@mui/material/Rating';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import { Dayjs } from 'dayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Details from './Details';
import Salidas from './Salidas';
import Resume from './Resume';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Footer from '../Footer';


export default function Camping() {
  












  ///////////////////////////////////////////
  let detalles = {
    baño : true,
    baño2 : false,
    baño3 : true,
    baño4 : true,
    baño5: false,
    baño6: "tengo 4"
 }
 let today = new Date();
 

 let now = today.toLocaleDateString('es-US');

  let detalles1 = {
    baño : true,
    baño2 : false,
    baño3 : true,
    baño4 : true,
    baño5: false,

    
   
  }

    const [value, setValue] = React.useState<number | null>(5);
    const [stay, setStay] = React.useState('');
    const [price, setPrice] = React.useState("")
    const [value1, setValue1] = React.useState<Dayjs | null>(null);
    const [value2, setValue2] = React.useState<Dayjs | null>(null);
    const [open, setOpen] = React.useState(false);
    const valor :number = 500
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


       const handleChange = (event: SelectChangeEvent) => {
      setStay(event.target.value as string);
    };
    const handleCotizacion = (e : any) => {
            setPrice("5000$" as string) 
            
    }
    let navigate : any = useNavigate ();
    const handleReserv = () => {
       navigate('../../');
    }
    return(
      <Box>
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
        <Box
                            component="img"
                            className={Style.galery}
                            alt="Logo"
                            src={Galery}
                            />
                            
        <Box className={Style.lugar}>
        <Typography   variant="subtitle1" color="black"> <LocationOnIcon /> Calle las piedras al 1233 - Kikin Mendoza</Typography>
        </Box>

                            </Box>

        <Box className={Style.inputCont}>
            <Box>
        <Typography className={Style.coti} variant="h5" color="black"> Cotiza tu estadia al mejor precio</Typography>
            </Box>
            <Box>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DatePicker
                            label="Ingreso"
                            openTo="day"
                            views={['year', 'month', 'day']}
                            value={value1}
                            onChange={(newValue) => {
                                setValue1(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Egreso"
                            openTo="day"
                            views={['year', 'month', 'day']}
                            value={value2}
                            onChange={(newValue) => {
                                setValue2(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </FormControl>
            </Box>
           <Box className={Style.input}>
           <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label" color="secondary">Estadia</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="estadia"
                        color="secondary"
                        >
                       
              <MenuItem value={"Carpa"}>Zona Carpas</MenuItem>
              <MenuItem value={"Trailer"}>Trailer Park</MenuItem>
       
                    </Select>
                    </FormControl>

      
                        


        <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label" color="secondary">Viajeros</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        
                        label="Viajeros"
                        color="secondary"
                        >
                       
              <MenuItem value={"Carpa"}>1-2 Personas</MenuItem>
              <MenuItem value={"Trailer"}>3-4 Personas</MenuItem>
              <MenuItem value={"Trailer"}>5+ Personas</MenuItem>
                    </Select>
                    </FormControl>

        
        
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label" color="secondary">Menores</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="estadia "
                        color="secondary"
                        >
                       
              <MenuItem value={"Carpa"}>1</MenuItem>
              <MenuItem value={"Trailer"}>2</MenuItem>
       
                    </Select>
                    </FormControl>
        </Box>

       <Box className={Style.btn2} > 
        <Stack direction="row" spacing={2}>
          
          <Button sx={{ minWidth: 190 }} onClick={handleCotizacion} variant="contained" value={price} color="warning">
            Generar Cotizacion
          </Button>
          
        </Stack>
       </Box>
        
        
            {price.length > 0 ? <Box> 
                <Box className={Style.btn1} > 
              <Typography variant="subtitle1"> Precio valido hasta el {now}  a las 24:00Hs</Typography>
        <Stack className={Style.btn3} direction="row" spacing={2}>
          
          <Button  sx={{ minWidth: 250 , minHeight : 70, fontSize : 25 }} onClick={handleClickOpen} variant="contained"  color="success">
            5000$ Reserva ya! 
           </Button>
          
        </Stack>
       </Box></Box> : <></>}
        
        </Box>
        </Box>
        <div>
                   <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Estas a un paso de convertirte en un Campy's"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Solo resta reservar y armar las valijas para vivir TU sueño por solo
                <Typography className={Style.quini} variant="h4" color="secondary">   {price} </Typography>
               
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button className={Style.red} color="info" onClick={handleClose}>Seguir mirando</Button>
              <Button className={Style.green} color="info" onClick={handleClose} autoFocus>
                Reservar!
              </Button>
            </DialogActions>
          </Dialog>
        </div>

       
        <Details detalles={detalles}></Details>
        




        <Box className={Style.endcont}>

          <Box className={Style.resume}>
              <Resume></Resume>
          </Box>
          <Box className={Style.salidas}>
              <Salidas></Salidas>
          </Box>

        </Box>
        
        </Box>
        <Footer/>
         </Box>         
                
    )}

            
   
 
    
    
    
    
      
     
    

    
    
   
      
    
     
      



  
