import * as React from 'react';
import { Box, Typography, TextField } from '@mui/material';
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
import { useNavigate, useParams } from 'react-router-dom'
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
import { FilterEgreso, FilterEgresoMap, FilterIngreso, FilterIngresoMap, getDetails } from '../../actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from './Carousel'
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import { isGeneratorFunction } from 'util/types';
import { AppDispatch, RootState } from '../../store';
import { addFavoriteCamping } from '../../actions/User.action';
import { Reviews } from '../Reviews/Reviews';
import { type } from 'os';
import { userTypes } from '../../auxiliar';

export default function Camping() {
  const dispatch: AppDispatch = useDispatch()
  const params = useParams()
  const user = useSelector((state: RootState) => state.user);
  const favourites = useSelector((state: RootState) => state.favoritesCampings);
  let camp = useSelector((state: any) => state.detailCamping);
  let today = new Date();
  let now = today.toLocaleDateString('es-US');
  let navigate: any = useNavigate();
  
  const [valid, setValid] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
   const [kids, setKids] = React.useState(0);
  const [price, setPrice] = React.useState(0)
  const [value1, setValue1] = React.useState<Dayjs | null>(null);
  const [value2, setValue2] = React.useState<Dayjs | null>(null);
  const [open, setOpen] = React.useState(false);
  const [validate , setValidate] = React.useState({ 
    day1 : 0,
    value2,
    stay : 0,
    date2 : 0,
    travellers : 0,
    total : 0,
    day2 : 0,
  })

  const fechaIngresoDayjs:Dayjs = useSelector((state:RootState) => state.fechaIngresoDayjs)
  const fechaEgresoDayjs:Dayjs = useSelector((state:RootState) => state.fechaEgresoDayjs)

  let fav = favourites.favorites.some((camp: { id: string | undefined; }) => Number(camp.id) === Number(params.id))
  const [favorite, setFavorite] = React.useState(fav);

  let mayores = camp?.precios?.filter((eso: any) => eso.descrip_tarifa == "Mayores");
  let menores = camp?.precios?.filter((eso: any) => eso.descrip_tarifa == "Menores");
  let rodantes = camp?.precios?.filter((eso: any) => eso.descrip_tarifa == "Rodantes")
  
  let infoCards: {nombre_camping: string, imagenes: string, descripcion_camping: string} = {nombre_camping: camp.nombre_camping, imagenes: camp.imagenes, descripcion_camping: camp.descripcion_camping}

  useEffect(() => {
    dispatch(getDetails(params.id));
  }, [dispatch, params.id])

  setTimeout(function () {
    setValue(camp.puntuacion_promedio)
  }, 500); //try to resolve better





  const handleAlgo = (e: any) => {
   setValidate({...validate ,[e.target.name] : e.target.value }) 

  }

  let trueValid = () => {
    let counter = 0
    if ( validate?.day1 !== 0) { counter += 1}
    if ( validate?.day2 !== 0) { counter += 1}
    if ( validate?.travellers !== 0) { counter += 1}
    if(counter == 3) return false
    if(counter < 3 ) return true
  }

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



  const handleCotizacion = (e: any) => {
    if (value1?.month() == value2?.month()) {
      let day1: any = value1?.date();
      let day2: any = value2?.date();
      let rest = day2 - day1
      let total = 1
      if (rest > 0) { total = rest }
      let final = (menores[0].precio * kids) + (mayores[0].precio * validate.travellers)
      let finalPrice = (final * total) + validate.stay
      if(finalPrice > 60000){ 
        setDiscount((finalPrice * 95) /100 )
        setPrice((finalPrice * 95) /100 )
      }
      if(finalPrice > 120000){ 
        setDiscount((finalPrice * 90) /100 )
        setPrice((finalPrice * 90) /100 )}

        if(finalPrice < 60000){
      setPrice((final * total) + validate.stay)
        }
    }
    if (value1?.month() !== value2?.month()) {
      let count1: any = value1?.daysInMonth();
      let count2: any = value1?.date();
      let count3: any = value2?.date();
      let rest: number = parseInt(count1 - count2 + count3)

      let total = 1
      if (rest > 0) { total = rest }
      let final = (menores[0].precio * kids) + (mayores[0].precio * validate.travellers)

      let finalPrice = (final * total) + validate.stay
      if(finalPrice > 60000){
         setDiscount((finalPrice * 95) /100 )
         setPrice((finalPrice * 95) /100 )}
      if(finalPrice > 120000){ 
        setDiscount((finalPrice * 90) /100 )
        setPrice((finalPrice * 90) /100 )}

        if(finalPrice < 60000){
          setPrice((final * total) + validate.stay)
            }
    }

  }



  const handleIngresoCamping = (e:Dayjs | null) => {
    dispatch(FilterIngreso(e))
    dispatch(FilterIngresoMap(e))
}

const handleEgresoCamping = (e: Dayjs | null) => {
  dispatch(FilterEgreso(e))
  dispatch(FilterEgresoMap(e))
  /* dispatch(FilterEgreso(e?.toDate().toLocaleDateString().split('/').reverse().join('/'))) */
}


  return (
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
            <Typography variant="h1" color="primary">
              {camp.nombre_camping}
            </Typography>
            <Box className={Style.rankingcont}>
              <Typography color="primary" component="legend">Ranking</Typography>
              <Rating name="read-only" value={value} readOnly />
            </Box>
          </Box>
          {
          user && user.tipo === userTypes.USER &&
            <FavoriteIcon
                onClick={() => {
                  if(params.id) dispatch(addFavoriteCamping(Number(params.id), user.token));
                  setFavorite(true)
                }}
              className={`${Style['add-fav']} ${favorite ? Style.heart : ''}`.trim()} 
            />
          }
        </Box>

        <Box className={Style.booking}>
          <Box className={Style.imageplace} >

            {/* <Box className={Style.carousel}> */}
            <Carousel />
            {/* </Box> */}
          </Box>


          <Box className={Style.inputCont}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 720,
               

              },
            }}
          >
            <Paper elevation={5}   >
              <Box className={Style.inputCont}>
                <Box sx={{ marginTop: 4 }}>
                  <Typography className={Style.coti} variant="h5" color="black"> Cotiza tu estadia al mejor precio</Typography>
                </Box>
                <Box >
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                      <DatePicker
                        disablePast
                        maxDate={value2}
                        label="Ingreso"
                        openTo="day"
                        views={['year', 'month', 'day']}
                        value={fechaIngresoDayjs}
                        onChange={(newValue) => {
                          handleIngresoCamping(newValue) ;
                        
                          let day1 = {
                            target : {
                              name : "day1",
                              value : newValue?.date(),
                            }
                          };
                            handleAlgo(day1);
                          
                          console.log(newValue?.month())
                          console.log(newValue?.daysInMonth())
                          console.log(newValue?.date())
                          console.log(newValue?.day())
                        }}

                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        disablePast
                        
                        minDate={fechaIngresoDayjs}
                        maxDate={fechaIngresoDayjs?.add(4, 'week')}
                        label="Egreso"
                        openTo="day"
                        views={['year', 'month', 'day']}
                        value={fechaEgresoDayjs}
                        onChange={(newValue) => {
                          handleEgresoCamping(newValue);
                          let day2 = {
                            target : {
                              name : "day2",
                              value : newValue?.date(),
                            }
                          };
                            handleAlgo(day2);
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
                 
                      // onChange={(e) => { setStay(e.target.value as number) }}
                      onChange={handleAlgo}
                    

                      name="stay"
                      value={validate.stay}
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="estadia"
                      color="secondary"
                    >

                      <MenuItem value={0}>Zona Carpas</MenuItem>
                      {camp.rodantes > 0 ? <MenuItem value={rodantes[0]?.precio}>Trailer Park</MenuItem> : <></>}


                    </Select>
                  </FormControl>





                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label" color="secondary">Viajeros</InputLabel>
                    <Select
                    // onChange={(e) => { setTravellers(e.target.value as number) }}
                      onChange={handleAlgo}
                      name="travellers"
                      value={validate.travellers}
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"

                      label="Viajeros"
                      color="secondary"
                    >
                      {/* { travellers >= 1 ?  <h1> {travellers}</h1> : <h1>nono</h1>} */}
                      <MenuItem value={0}> Viajeros</MenuItem>
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
                      onChange={(e) => { setKids(e.target.value as number) }}
                      onClick={handleAlgo}
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


                    { trueValid() ? <Button disabled sx={{ minWidth: 190 }} onClick={handleCotizacion} variant="contained" color="warning">
                      Generar Cotizacion
                    </Button> : <Button sx={{ minWidth: 190 }} onClick={handleCotizacion} variant="contained" color="warning">
                      Generar Cotizacion
                    </Button>
                    }

                  </Stack>

                </Box>
                {price > 0 ? 
                <Box>
                  <Box className={Style.btn1} >
                    <Typography variant="subtitle1"> Precio valido hasta el {now}  a las 24:00Hs</Typography>
                    
                    
                    <Stack className={Style.btn3} direction="row" spacing={1}>


                    



                         {price > 60000 ? price > 120000 ? <Box>

                      <Button sx={{ minWidth: 250, minHeight: 70, fontSize: 25 }} onClick={handleClickOpen} variant="contained" color="success">

                        
                       {discount } RESERVA YA! 
                         
                         </Button>
                         



                         </Box>
                          :<></> :   <Button sx={{ minWidth: 250, minHeight: 70, fontSize: 25 }} onClick={handleClickOpen} variant="contained" color="success">

                        
                          {price } RESERVA YA! 
                            
                            </Button>
                            
}
{/* <Typography> ${price} OFERTA</Typography> */}

                      
{price > 60000 ?
                    <Typography variant="subtitle1"> Acabas de obtener un descuento exclusivo de Campy, estas ahorrando ${price - discount} </Typography>: <></> }
                    </Stack>
                  </Box></Box> : <></>}



              </Box>
            </Paper>
            <Box className={Style.lugar}>
              <Typography variant="subtitle1" color="black"> <LocationOnIcon /> {camp.direccion} - {camp.provincia} </Typography>
            </Box>
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
              <Button className={Style.red} color="info" onClick={handleCloseR} sx={{marginRight : 30}}>Seguir mirando</Button>

              <form action="http://localhost:3001/api/checkout" method="post">
                <input type="hidden" name="price" value={price} />
                <input type="hidden" name="title" value={camp.nombre_camping} />
{/* { user == null ? <Button className={Style.green} color="info" > Crea una cuenta para reservar </Button> : 
                <Button className={Style.green} color="info" type="submit" autoFocus>
                  Reservar!
                </Button>            DESCOMENTAR ESTO CUANDO TE HAGAS UNA CUENTA DE USER Y BORRAR EL BUTTON DE ABAJO, DE MIENTRAS DEJAR COMENTADO  */}
 <Button className={Style.green} color="info" type="submit" autoFocus>PAGARAPRATA</Button>
              </form>
            </DialogActions>
          </Dialog>
        </div>


        <Details />
        <Reviews />




        <Box className={Style.endcont}>

          <Box className={Style.resume}>
            <Resume></Resume>
          </Box>
          <Box className={Style.salidas}>
            <Salidas {...infoCards}></Salidas>
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
            if (params.id) dispatch(addFavoriteCamping(Number(params.id), user.token));
            setFavorite(true)
          }}
        >
          Añadir a favoritos <FavoriteIcon className={favorite ? Style.heart : ''} />
        </Typography>
      }

      <Footer />

    </Box>

  )
}

