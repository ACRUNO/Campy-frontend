import { Box, Card, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import s from './CardCamping.module.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


type Props = {
    id: number,
    nombre: string,
    localidad: string,
    provincia: string,
    descripcion: string,
    categoria: string,
    imagenes: Array<string>,
    reviews: number,
    precio: number
}

export default function CardChica(props: Props) {



    let navigate = useNavigate()

    const handleNavigate = () => {
        window.scrollTo(0, 0);
        navigate(`/booking/camping/${props.id}`)
    }
    const diasReservados: number = useSelector((state: RootState) => state.diasReservadosBooking)

    var precioTotal = props.precio * diasReservados



    return (

        <Box onClick={handleNavigate} style={{ textDecoration: 'none' }}>
            <Card className={s.cardChica} sx={{ bgcolor: 'd7d7d7' }} >

                <CardMedia key={props.id} className={s.image} component="img" alt="Provincia" image={props.imagenes[0]}></CardMedia>

                <CardContent>
                    <Typography className={s.titulo} gutterBottom align="left" variant="h5">{props.nombre}</Typography>

                    <Typography gutterBottom align="left" variant="subtitle1">{`${props.provincia}, ${props.localidad}`}</Typography>

                    <Rating size='small' name="read-only" value={props.reviews} readOnly />

                    <Box display="flex" flexDirection="row" justifyContent={'space-between'} component="div" >

                        <Typography variant="subtitle1" color="text.secondary" component="div" align="left">
                            <strong>{diasReservados === 0 || diasReservados === 1 ?
                                `1 dia` :
                                `${diasReservados} dias`
                            }, 1 adulto</strong></Typography>


                        <Typography variant="h6" component="div" align="right"> <span className={s.desde} > Desde </span> <strong>${
                            diasReservados === 0 ?
                                props.precio :
                                props.precio * diasReservados
                        }</strong></Typography>

                    </Box>
                </CardContent>
            </Card>
        </Box >

    );
}