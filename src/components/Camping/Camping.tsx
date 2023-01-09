import * as React from 'react';
import axios from 'axios';
import { Box, Typography, TextField } from '@mui/material';
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
import Footer from '../Footer/Footer';
import { FilterEgreso, FilterEgresoMap, FilterIngreso, FilterIngresoMap, getDetails } from '../../actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from './Carousel'
import { AppDispatch, RootState } from '../../store';
import { addFavoriteCamping } from '../../actions/User.action';
import { Reviews } from '../Reviews/Reviews';
import { postReserv } from '../../actions/Checkout.action';
import { setdetailreserv } from '../../actions';
import { userTypes } from '../../auxiliar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { LocationOn as LocationOnIcon, Favorite as FavoriteIcon } from '@mui/icons-material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cleanDetails } from '../../actions/index';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';




type Anchor = 'top' | 'left' | 'bottom' | 'right';


export default function Camping() {
  const dispatch: AppDispatch = useDispatch()
  const params = useParams()
  const user = useSelector((state: RootState) => state.user);
  const favourites = useSelector((state: RootState) => state.favoritesCampings);
  const detailReserv = useSelector((state: RootState) => state.detailReserv);
  let camp = useSelector((state: any) => state.detailCamping);
  let idReserva = useSelector((state: any) => state.idReserva);



  const logInPhotos: string[] = ["https://res.cloudinary.com/pfcampy/image/upload/v1670536275/Fotos/Jujuy.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536434/Fotos/LaPampa.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536537/Fotos/Corrientes.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536684/Fotos/SanJuan.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670535617/Fotos/Tierradelfuego.jpg", "https://res.cloudinary.com/pfcampy/image/upload/v1670536350/Fotos/SantaCruz.jpg"]


  const randomPhoto: string = logInPhotos[Math.floor(Math.random() * logInPhotos.length)];




  let today = new Date();
  let now = today.toLocaleDateString('es-US');
  let navigate: any = useNavigate();

  const value1: Dayjs = useSelector((state: RootState) => state.fechaIngresoDayjs)
  const value2: Dayjs = useSelector((state: RootState) => state.fechaEgresoDayjs)

  const [back, setBack1] = React.useState(true);
  const [idm, setIdm] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  const [price, setPrice] = React.useState(0)
  // const [value1, setValue1] = React.useState<Dayjs | null>(null);
  // const [value2, setValue2] = React.useState<Dayjs | null>(null);
  const [open, setOpen] = React.useState(false);
  const [validate, setValidate] = React.useState({
    day1: value1 ? value1.date() : 0,
    alldate: value1 ? value1.format() : "",
    day2: value1 ? value1.date() : 0,
    alldate2: value2 ? value2.format() : "",
    stay: 0,
    kids: 0,
    travellers: 0,
    total: 0,
  })


  let fav = favourites.favorites.some((camp: { id: string | undefined; }) => Number(camp.id) === Number(params.id))
  const [favorite, setFavorite] = React.useState(fav);

  let mayores = camp?.precios?.filter((eso: any) => eso.descrip_tarifa == "mayores");
  let menores = camp?.precios?.filter((eso: any) => eso.descrip_tarifa == "menores");
  let rodantes = camp?.precios?.filter((eso: any) => eso.descrip_tarifa == "rodantes")

  let infoCards: { nombre_camping: string, imagenes: string, descripcion_camping: string } = { nombre_camping: camp.nombre_camping, imagenes: camp.imagenes, descripcion_camping: camp.descripcion_camping }

  useEffect(() => {
    dispatch(getDetails(params.id));
    return () => {
      dispatch(cleanDetails())
    }
  }, [dispatch, params.id])

  setTimeout(function () {
    setValue(camp.puntuacion_promedio)
  }, 500); //try to resolve better



  /*   let day1 = {
      target : {
        name : "day1",
        value : newValue?.date(),
        extra : "alldate",
        extrav : newValue?.format(),
      }
    }
    
    handleAlgo(day1)
    

  
      const [validate , setValidate] = React.useState({ 
      day1 : value1 ? value1.date() : 0,
      alldate : value1 ? value1.format() :  "",
      day2 :value1 ? value1.date() : 0,
      alldate2 : value2 ? value2.format() :  "",
         stay : 0,
      kids : 0,
      travellers : 0,
      total : 0,
    })
  

    
    ; */


  const handleAlgo = (e: any) => {

    setPrice(0)

    if (e.target?.extra) {
      { setValidate({ ...validate, [e.target.name]: e.target.value, [e.target.extra]: e.target.extrav }) }
    }
    else {
      setValidate({ ...validate, [e.target.name]: e.target.value })
    }
    console.log(validate)
  }

  let trueValid = () => {
    let counter = 0
    if (validate?.day1 !== 0) { counter += 1 }
    if (validate?.day2 !== 0) { counter += 1 }
    if (validate?.travellers !== 0) { counter += 1 }
    if (counter == 3) return false
    if (counter < 3) return true
  }

  const handleClickOpen = async () => {
    toggleDrawer('bottom', true)

    let ingreso1 = validate?.alldate.slice(0, 10).replace("-", "/").replace("-", "/")
    let ingreso2 = validate?.alldate2.slice(0, 10).replace("-", "/").replace("-", "/")
    let trailer = validate?.stay > 0 ? 1 : 0

    console.log(ingreso1)

    let data = {
      "fecha_desde_reserva": ingreso1,
      "fecha_hasta_reserva": ingreso2,
      "cant_noches": validate.total,
      "total": price,
      "UsuarioId": user?.id,
      "CampingId": camp?.id,
      "cantMayores": validate.travellers,
      "cantMenores": validate.kids,
      "extraRodante": trailer,
      "precioMayores": mayores[0].precio,
      "precioMenores": menores[0].precio,
      "precioextraRodante": validate.stay,
    }


    var json = await axios.post('/api/reservas/create', data)
    // dispatch(postReserv(data));
    let idRes = json.data
    setIdm(json.data)
    setOpen(true);
    // dispatch(setdetailreserv(validate.day1, validate.alldate, validate.day2, validate.alldate2 , validate.stay  , validate.kids  , validate.travellers  , validate.total , idRes))

  };

  const handleClose = () => {
    setOpen(false);
    setPrice(0)
  };

  const handleCloseR = () => {

    navigate("/login")
  };



  const handleCotizacion = (e: any) => {
    let idRes = 2
    dispatch(setdetailreserv(validate.day1, validate.alldate, validate.day2, validate.alldate2, validate.stay, validate.kids, validate.travellers, validate.total, idRes))

    if (value1?.month() == value2?.month()) {
      let day1: any = value1?.date();
      let day2: any = value2?.date();
      let rest = day2 - day1
      let total = 1
      if (rest > 0) { total = rest }
      setValidate({ ...validate, total: total })
      let final = (menores[0].precio * validate.kids) + (mayores[0].precio * validate.travellers)
      let finalPrice = (final * total) + validate.stay
      if (finalPrice > 60000) {
        setDiscount(finalPrice)
        setPrice((finalPrice * 95) / 100)
      }
      if (finalPrice > 120000) {
        setDiscount(finalPrice)
        setPrice((finalPrice * 90) / 100)
      }

      if (finalPrice < 60000) {
        setDiscount(finalPrice)
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
      let final = (menores[0].precio * validate.kids) + (mayores[0].precio * validate.travellers)
      setValidate({ ...validate, total: total })
      let finalPrice = (final * total) + validate.stay
      if (finalPrice > 60000) {
        setDiscount(finalPrice)
        setPrice((finalPrice * 95) / 100)
      }
      if (finalPrice > 120000) {
        setDiscount(finalPrice)
        setPrice((finalPrice * 90) / 100)
      }

      if (finalPrice < 60000) {
        setPrice((final * total) + validate.stay)
        setDiscount(finalPrice)
      }
    }

  }
  // el pop up 
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => async (event: React.KeyboardEvent | React.MouseEvent) => {
    let ingreso1 = validate?.alldate
    let ingreso2 = validate?.alldate2
    let trailer = validate?.stay > 0 ? 1 : 0
    handleClickOpen()
    console.log(detailReserv)

    if (open == false) { setPrice(0) }

    /*       let data = {
            "fecha_desde_reserva" : "2023/01/10",
            "fecha_hasta_reserva" : "2023/01/11",
            "cant_noches" : validate.total,
            "total" : price,
            "UsuarioId" : user?.id, 
            "CampingId" : camp?.id,
            "cantMayores" : validate.travellers,
            "cantMenores" : validate.kids,
            "extraRodante" : trailer,
            "precioMayores" : mayores[0].precio,
            "precioMenores" : menores[0].precio, 
            "precioextraRodante" : validate.stay,
          }
           
    
    
          
          
          var json = await axios.post('/api/reservas/create', data)
          // dispatch(postReserv(data));
            let idRes = json.data
            setIdm(json.data)
            setOpen(true);
          if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
            ) {
              return;
            }  */

    setState({ ...state, 'bottom': open });
    console.log(detailReserv.idRes)
  };

  const handleIngresoCamping = (e: Dayjs | null) => {
    dispatch(FilterIngreso(e))
    dispatch(FilterIngresoMap(e))
  }

  const handleEgresoCamping = (e: Dayjs | null) => {
    dispatch(FilterEgreso(e))
    dispatch(FilterEgresoMap(e))
    /* dispatch(FilterEgreso(e?.toDate().toLocaleDateString().split('/').reverse().join('/'))) */
  }
  // hasta ahi 
  return (

    <Box sx={{ bgcolor: 'rgb(245, 245, 245)' }}>



      <Box className={Style.all}>

        {/* Portada */}
        <Box className={Style.portadacont}>
          {console.log("hola")}
          <Box
            component="img"
            className={Style.imagencita}
            alt="Logo"
            src={randomPhoto}
          />

          <Box className={Style.text}>
            <Typography variant="h1" color="primary">
              {camp.nombre_camping}
            </Typography>
            <Box className={Style.rankingcont}>
              <Typography color="primary" component="legend">Puntuación  </Typography>
              <Rating name="read-only" value={value} readOnly />
            </Box>
          </Box>
          {
            user && user.tipo === userTypes.USER &&
            <FavoriteIcon
              onClick={!favorite ? () => {
                if (params.id) dispatch(addFavoriteCamping(Number(params.id), user.token));
                setFavorite(true)
              } : undefined}
              className={`${Style['add-fav']} ${favorite ? Style.heart : ''}`.trim()}
            />
          }


        </Box>








        {/* Carrousel imagenes y formulario de reseva */}
        <Box className={Style.booking}>
          <Box className={Style.imageplace} >

            {/* <Box className={Style.carousel}> */}
            <Carousel />
            {/* </Box> */}
          </Box>


          <Box className={Style.inputCont}>
            <Paper elevation={5} className={Style.paperContainer}>

              <Box>
                <Typography className={Style.coti} variant="h4" color="black"> Cotiza tu estadia al mejor precio</Typography>
              </Box>

              <Box className={Style.Fechas}>
                <FormControl className={Style.FechaIngreso}>
                  <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker
                      disablePast
                      maxDate={value2}
                      label="Ingreso"
                      openTo="day"
                      views={['year', 'month', 'day']}
                      value={value1}
                      onChange={(newValue) => {
                        handleIngresoCamping(newValue);
                        // setValue1(newValue) ;

                        let day1 = {
                          target: {
                            name: "day1",
                            value: newValue?.date(),
                            extra: "alldate",
                            extrav: newValue?.format(),
                          }
                        };

                        handleAlgo(day1);



                      }}

                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </FormControl>
                <FormControl className={Style.FechaEgreso}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      disablePast

                      minDate={value1}
                      maxDate={value1?.add(4, 'week')}
                      label="Egreso"
                      openTo="day"
                      views={['year', 'month', 'day']}
                      value={value2}
                      onChange={(newValue) => {
                        handleEgresoCamping(newValue);
                        // setValue2(newValue);
                        let day2 = {
                          target: {
                            name: "day2",
                            extra: "alldate2",
                            extrav: newValue?.format(),
                            value: newValue?.date(),
                          }
                        };
                        handleAlgo(day2);

                      }}


                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </FormControl>
              </Box>

              <Box className={Style.detalleReserva}>
                <FormControl className={Style.itemReserva}>
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





                <FormControl className={Style.itemReserva}>
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



                <FormControl className={Style.itemReserva}>
                  <InputLabel id="demo-simple-select-helper-label" color="secondary">Menores</InputLabel>
                  <Select
                    name="kids"
                    onChange={handleAlgo}
                    value={validate.kids}
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



                  {price == 0 ? trueValid() ? <Button size='large' disabled onClick={handleCotizacion} variant="contained" color="secondary">

                    Generar Cotizacion
                  </Button> : user == null ? <Button size='large' onClick={handleCloseR} variant="contained" color="secondary">
                    Generar Cotizacion
                  </Button> : <Button size='large' onClick={handleCotizacion} variant="contained" color="secondary">
                    Generar Cotizacion
                  </Button>
                    : []}

                </Stack>

              </Box>
              {price > 0 ?
                <Box>
                  <Box className={Style.btn1} >
                    <Typography variant="subtitle1"> Precio valido hasta el {now}  a las 24:00Hs</Typography>


                    <Stack className={Style.btn3} direction="row" spacing={1}>


                      {/* <Button sx={{ minWidth: 250, minHeight: 70, fontSize: 25 ,}}  onClick={handleClickOpen} variant="contained" color="secondary">
                    $  RESERVssssssssssssA YA! 
                           
                           </Button>
          */}

                      <Button sx={{ minWidth: 250, minHeight: 70, fontSize: 25 }} onClick={toggleDrawer('bottom', true)} variant="contained" color="secondary">

                        ${price} RESERVA YA!

                      </Button>

                      {/* <Typography> ${price} OFERTA</Typography>  */}


                      {price > 60000 ? price > 120000 ?
                        <Typography variant="subtitle1"> Acabas de obtener un descuento exclusivo de Campy, estas ahorrando $ {(price * 10) / 100} </Typography> :
                        <Typography variant="subtitle1"> Acabas de obtener un descuento exclusivo de Campy, estas ahorrando $ {(price * 5) / 100} </Typography>
                        : <></>}


                    </Stack>
                  </Box></Box> : <></>}




            </Paper>
            {/* <Box className={Style.lugar}>
              <Typography variant="subtitle1" color="black"> <LocationOnIcon /> {camp.direccion} - {camp.provincia} </Typography>
            </Box> */}
          </Box>
        </Box>




        {/* Detalle de reserva(popUp) */}
        <div>
          <React.Fragment key={'bottom'}>



            <Drawer
              anchor={'bottom'}
              open={state['bottom']}
              onClose={toggleDrawer('bottom', false)} >
              <Box className={Style.container}
                sx={{ width: 'auto' }}
                role="presentation"
              // onClick={toggleDrawer('bottom', false)}
              // onKeyDown={toggleDrawer('bottom', false)}
              >

                <Box sx={{ width: 650 }}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 100 }} aria-label="spanning table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ fontSize: 20, fontWeight: "bold" }} align="center" colSpan={4}>
                            Datos de la reserva con descuentos
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ fontSize: 17 }}>Fecha de inicio</TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell sx={{ fontSize: 17 }} align="right"> {validate?.alldate.slice(0, 10).replace("-", "/").replace("-", "/")} </TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow key={"row.desc"}>
                          <TableCell sx={{ fontSize: 17 }}>Fecha de finalización</TableCell>
                          <TableCell align="right"> </TableCell>
                          <TableCell sx={{ fontSize: 17 }} align="right"> {validate?.alldate2.slice(0, 10).replace("-", "/").replace("-", "/")}</TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell rowSpan={3} />
                          <TableCell colSpan={2}>Subtotal</TableCell>
                          <TableCell align="right"> $ {discount}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ fontWeight: "bold" }}>Descuento</TableCell>
                          <TableCell sx={{ fontWeight: "bold" }} align="right">{price > 60000 ? price > 120000 ? "10%" : "5%" : "0%"}</TableCell>

                          <TableCell sx={{ fontWeight: "bold" }} align="right">{price > 60000 ? price > 120000 ? ((price * 10) / 100) : ((price * 5) / 100) : "$0"}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ fontSize: 17 }} colSpan={2}>Precio Final</TableCell>
                          <TableCell sx={{ fontWeight: "bold", fontSize: 17 }} align="right">${price}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
                <Box className={Style.boxizq}>
                  <List>
                    <Typography sx={{ marginTop: 1 }} variant="subtitle1" color="black"> <LocationOnIcon /> {camp.nombre_camping}  </Typography>
                    <Box className={Style.tresbox}>
                      <ListItem sx={{ minWidth: 300, marginTop: 1 }}>
                        <ListItemAvatar>
                          <Avatar>
                            <PersonAddAlt1Icon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText secondary={validate.travellers} primary="Personas mayores" />
                        <Divider variant="inset" component="li" />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem sx={{ minWidth: 300, marginTop: 1 }}>
                        <ListItemAvatar>
                          <Avatar>
                            <ChildCareIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText secondary={validate.kids} primary="Niños" />
                        <Divider variant="inset" component="li" />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem sx={{ minWidth: 300, marginTop: 1 }}>
                        <ListItemAvatar>
                          <Avatar>
                            <LocalShippingIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText secondary={validate.stay} primary="Extra por Trailer" />
                        <Divider variant="inset" component="li" />
                      </ListItem>
                    </Box>
                  </List>
                </Box>
                <Box>
                  <form action={`${'https://campy-backend.onrender.com' || 'http://localhost:3001'}/api/checkout`} method="post">
                    <input type="hidden" name="price" value={price} />
                    <input type="hidden" name="mayores" value={validate.travellers} />
                    <input type="hidden" name="menores" value={validate.kids} />
                    <input type="hidden" name="stay" value={validate.stay} />
                    <input type="hidden" name="ingreso" value={validate.alldate} />
                    <input type="hidden" name="egreso" value={validate.alldate2} />

                    <input type="hidden" name="title" value={camp.nombre_camping} />
                    <input type="hidden" name="idm" value={idm} />
                    <Button sx={{ maxWidth: 90, minHeight: 70, fontSize: 18 }} type="submit" autoFocus variant="contained" endIcon={<ShoppingCartIcon />} color="success" >
                      Pagar
                    </Button>

                    {/* { user == null ? <Button className={Style.green} color="info" > Crea una cuenta para reservar </Button> : 
<Button className={Style.green} color="info" type="submit" autoFocus>
  Reservar!
</Button>            DESCOMENTAR ESTO CUANDO TE HAGAS UNA CUENTA DE USER Y BORRAR EL BUTTON DE ABAJO, DE MIENTRAS DEJAR COMENTADO  */}
                    {/* <Button className={Style.green} color="info" type="submit" autoFocus>PAGARAPRATA</Button> */}
                  </form>
                </Box>
              </Box>
            </Drawer>
          </React.Fragment>
        </div>




        <Box className={Style.ReviewsMapa}>


          <Box className={Style.resume}>
            <Resume></Resume>
          </Box>

          <Box className={Style.reviews}>
            <Reviews />
          </Box>

        </Box>

      </Box>



      {/* Comodidades */}
      <Box className={Style.detailsComodidades}>
        <Details />
      </Box>


      {/*  Mapa */}

      <Box className={Style.salidas}>
        <Salidas {...infoCards}></Salidas>
      </Box>



      <Footer />

    </Box >

  )
}

