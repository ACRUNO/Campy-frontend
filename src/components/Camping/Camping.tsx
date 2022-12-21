import * as React from 'react';
import { Box , Typography , TextField } from '@mui/material';
import Portada from "./banner1.webp"
import Style from "./Camping.module.css"
import Galery from "./portada.jpg"
import Paper from '@mui/material/Paper';
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
import { LocationOn as LocationOnIcon, Favorite as FavoriteIcon } from '@mui/icons-material';
import Footer from '../Footer/Footer';
import { getDetails } from '../../actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel'  
import { addFavoriteCamping } from '../../actions/User.action';

export default function Camping() {
  const dispatch: AppDispatch = useDispatch()
  const params = useParams()
  const user = useSelector((state: RootState) => state.user);
  let camp = useSelector((state : any) => state.detailCamping)
  let today = new Date();
  let now = today.toLocaleDateString('es-US');
  let navigate : any = useNavigate ();
  const [favorite, setFavorite] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [stay, setStay] = React.useState(0);
  const [travellers, setTravellers] = React.useState(0);
  const [kids, setKids] = React.useState(0);
  const [price, setPrice] = React.useState(0)
  const [value1, setValue1] = React.useState<Dayjs | null>(null);
  const [value2, setValue2] = React.useState<Dayjs | null>(null);
  const [open, setOpen] = React.useState(false);
  const [valid , setValid] =React.useState(true);

useEffect(() => {
     dispatch(getDetails(params.id));
    }, [dispatch , params.id])
    
setTimeout(function(){
      setValue(camp.cantidad_estrellas)
  }, 1000); //try to resolve better

const handleClickOpen = () => {
      setOpen(true);
     

    };

const handleClose = () => {
      setOpen(false);
      setPrice(0)
    };

const handleCloseR = () => {
  navigate("/booking")   
      }; 
    
const handleCloseM = () => {
        navigate("/")   
            }; 
   

const handleCotizacion = (e : any) => {
   
    let day1 : any = value1?.date();
   let day2 : any = value2?.date();
   let rest = day2 - day1 
   let total = 1
   if(rest > 0 ) { total = rest}
      let final = (500 * stay) + (200 * kids) + (350 * travellers) 
      
    setPrice(final * total)
    
  
 
   }

const handleValidate = ( e : any) => {
if(stay > 0 && travellers > 0){
  setValid(false)
}
}
  
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
           <Typography  variant="h1" color="primary">
            {camp.nombre_camping}
          </Typography>  
             <Box className={Style.rankingcont}>
              <Typography   color="primary" component="legend">Ranking</Typography>
              <Rating     name="read-only" value={value} readOnly />
           </Box>
          </Box>
         </Box>    
          
          <Box className={Style.booking}> 
          <Box className={Style.imageplace} >
          
            {/* <Box className={Style.carousel}> */}
            <Carousel/>          
            {/* </Box> */}
          </Box>                 

                           
          <Box className={Style.inputCont}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 600,
             
            },
          }}
        >
         <Paper elevation={3} > 
        <Box className={Style.inputCont}>
            <Box sx={{marginTop : 4}}>
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
           <FormControl  sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label" color="secondary">Estadia</InputLabel>
                    <Select
                         onChange={(e) => {setStay(e.target.value as number) }}
                         onClick={handleValidate}
                        value={stay}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="estadia"
                        color="secondary"
                        >
                      
              <MenuItem value={1}>Zona Carpas</MenuItem>
              { camp.rodantes > 0 ? <MenuItem value={2}>Trailer Park</MenuItem> : <></> }
         
       
                    </Select>
                    </FormControl>

      
                        


        <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label" color="secondary">Viajeros</InputLabel>
                    <Select
                     onChange={(e) => {setTravellers(e.target.value as number)}}
                     onClick={handleValidate}
                     value={travellers}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        
                        label="Viajeros"
                        color="secondary"
                        >
                       {/* { travellers >= 1 ?  <h1> {travellers}</h1> : <h1>nono</h1>} */}
              <MenuItem value={1}>1 Persona</MenuItem>
              <MenuItem value={2}>2 Personas</MenuItem>
              <MenuItem value={3}>3 Personas</MenuItem>                        
              <MenuItem value={4}>4 Personas</MenuItem>
              <MenuItem value={5}>5 Personas</MenuItem>
              <MenuItem value={6}>6 Personas</MenuItem>
                    </Select>
                    </FormControl>

        
        
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label" color="secondary">Menores</InputLabel>
                    <Select
                    onChange={(e) => {setKids(e.target.value as number)}}
                    onClick={handleValidate}
                    value={kids}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="estadia "
                        color="secondary"
                        >
              <MenuItem value={0}>Sin menores</MenuItem>
              <MenuItem value={1}>1 menor</MenuItem>
              <MenuItem value={2}>2 menores</MenuItem>
              <MenuItem value={3}>3 menores</MenuItem>                        
              <MenuItem value={4}>4 menores</MenuItem>
              <MenuItem value={5}>5 menores</MenuItem>
       
                    </Select>
                    </FormControl>
        </Box>

       <Box className={Style.btn2} > 
        <Stack direction="row" spacing={2}>
         { price == 0 ? <Button disabled={valid} sx={{ minWidth: 190 }} onClick={handleCotizacion} variant="contained" value={price} color="warning">
            Generar Cotizacion
          </Button> : <></>
}
          
        </Stack>
       </Box>
        
        
            {price > 0 ? <Box> 
                <Box className={Style.btn1} > 
              <Typography variant="subtitle1"> Precio valido hasta el {now}  a las 24:00Hs</Typography>
        <Stack className={Style.btn3} direction="row" spacing={2}>
          
          <Button  sx={{ minWidth: 250 , minHeight : 70, fontSize : 25 }} onClick={handleClickOpen} variant="contained"  color="success">
           ${price} Reserva ya! 
           </Button>
          
        </Stack>
       </Box></Box> : <></>}
        
        </Box>
        </Paper>
         </Box>
         <Box className={Style.lugar}>
            <Typography   variant="subtitle1" color="black"> <LocationOnIcon /> {camp.direccion} - {camp.provincia} </Typography>
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
                <Typography className={Style.quini} variant="h4" color="secondary">  ${price} </Typography>
               
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button className={Style.red} color="info" onClick={handleCloseR}>Seguir mirando</Button>
              <Button className={Style.green} color="info" onClick={handleCloseM} autoFocus>
                Reservar!
              </Button>
            </DialogActions>
          </Dialog>
        </div>

       
        <Details/>
        
      


        <Box className={Style.endcont}>

          <Box className={Style.resume}>
              <Resume></Resume>
          </Box>
          <Box className={Style.salidas}>
              <Salidas></Salidas>
          </Box>

        </Box>
        </Box>
         
      

         
        {
          user && 
          <Typography 
            className={Style['add-fav']}  
            variant="h5" 
            color="primary"
            onClick={() => {
              if(params.id) dispatch(addFavoriteCamping(Number(params.id), user.token));

              setFavorite(true)
            }}
          >
            Añadir a favoritos <FavoriteIcon className={favorite ? Style.heart : ''} />
          </Typography>
        }
        
        <Footer/>
       
         </Box>         
                
    )}

            
   
 
    
    
    
    
      
     
    

    
    
   
      
    
     
      



  
