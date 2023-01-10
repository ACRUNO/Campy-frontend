import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CardContent } from '@mui/material';
import { Fade } from '@mui/material';
import { Card } from '@mui/material';
import { Rating } from '@mui/material';
import Style from "../Camping/Camping.module.css"
import { Backdrop } from '@mui/material';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



interface Props {
    open: boolean;
}









export default function ScrollDialog() {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

    const [response, SetResponse] = React.useState({ id: 0 });
    const faqs: any = [
        {
            id: 1,
            pregunta: "¿Qué es Campy? ",
            respuesta: "Campy es una aplicación destinada a la comunidad del mundo camping, en la misma podés reservar al mejor precio un camping o compartir tu experiencia."
        },
        {
            id: 2,
            pregunta: "¿Cómo puedo registrarme?",
            respuesta: "Puedes dirigirte a la sección de login, que se encuentra arriba a la derecha, ahí mismo podés ingresar con un usuario nuevo o tu cuenta de Google."
        },
        {
            id: 3,
            pregunta: "¿Es gratis Campy?",
            respuesta: "Puedes ver las mejores locaciones y camping de manera gratuita. La sección de reserva es la única que es paga, pero esta misma solo se puede acceder siendo usuario registrado."
        },
        {
            id: 4,
            pregunta: "¿Si quiero reservar, se cobra algún extra?",
            respuesta: "Uno de los pilares de Campy es la transparencia, al momento de reservar se explican detalladamente los costos, sin ninguna sorpresa ni impuestos extra."
        },
        {
            id: 5,
            pregunta: "Soy propietario y me gustaría sumar mi camping.",
            respuesta: " Solo debes registrarte e ir a la sección de crear camping, esta misma se encuentra en el menú superior derecho."
        },
        {
            id: 6,
            pregunta: "¿Qué beneficios tiene Campy?",
            respuesta: "Uno de sus principales beneficios es la forma rápida y sencilla de realizar la reserva, junto con los grandes descuentos que brindamos a nuestros usuarios."
        },
        {
            id: 7,
            pregunta: "¿Si tuviera inconvenientes mayores en mi estadía en el camping que sucede?",
            respuesta: "En ese caso, debes iniciar sesión con tu cuenta Campy y dirigirte a la parte inferior, en el enunciado contacto. Ahí mismo se abre un caso sobre lo sucedido y en el plazo de 7 días hábiles vas a recibir una respuesta."
        },
        {
            id: 8,
            pregunta: "¿Es seguro Campy?",
            respuesta: "Campy brinda total tranquilidad a sus usuarios, evitando los posibles fraudes y estafas que suceden todo el tiempo con la modalidad de alquiler particular."
        },
        {
            id: 9,
            pregunta: "Mi viaje terminó y me gustaría compartirlo con los demás.",
            respuesta: "¡Excelente! Para eso puedes dirigirte a la parte superior, el apartado BLOG, en ese mismo vas a ver muchas experiencias de otros usuarios y poder dejar la tuya."
        },
        {
            id: 5,
            pregunta: "¿Cómo puedo reservar?",
            respuesta: "Una vez seleccionado el camping, verás tu tarifa actualizada basándose en días y cantidad de personas. Una vez que aceptes, serás redirigido a la plataforma de pago, en esta misma se hará el cobro por el medio que consideres más conveniente."
        },
    ]

    //     ¿Si quisiera cancelar una reserva?
    // -----NO TENEMOS ESO TODAVIA!!!!!!!!- se podría solucionar con que Campy queda sujeto a la disponibilidad del propietario del mismo.


    const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleResponse = (e: any) => {

        SetResponse({ id: e.target.value })

    }

    const descriptionElementRef = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Typography sx={{ cursor: "pointer" }}
                onClick={handleClickOpen('paper')}
                variant="h5" component="h6" textAlign='center'
            > Preguntas frequentes
            </Typography>
            <Dialog
                className={Style.height}
                maxWidth={false}
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                sx={{ mt: "2.5rem" }}
            >
                <DialogTitle id="scroll-dialog-title">Preguntas frequentes</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                        sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
                    >
                        {faqs?.map((faqs: { pregunta: string, respuesta: string, id: number }) => {
                            return (



                                <Card className={Style.card} sx={{ display: 'flex', mt: 2, mb: 2, height: "fit-content", width: "100%", p: 1, boxShadow: 3, justifyContent: "center" }}>

                                    <Box >
                                        <CardContent sx={{ display: 'flex', flexDirection: 'column', p: 0, m: 0 }}>
                                            <Typography component="div" variant="h4" sx={{ mb: 1 }}>
                                                <Button
                                                    value={faqs.id}
                                                    onClick={handleResponse}
                                                    sx={{ color: "black" }}>
                                                    {faqs.pregunta}
                                                </Button>
                                            </Typography>
                                            {response.id == faqs.id ? <Typography variant="body1" color="text.secondary" component="div">
                                                {faqs.respuesta}
                                            </Typography> :
                                                []
                                            }

                                        </CardContent>
                                    </Box>


                                </Card>

                            )
                        })}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
        </div>
    );
}


















