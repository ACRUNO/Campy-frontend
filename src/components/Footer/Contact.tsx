import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardContent } from '@mui/material';
import { Card } from '@mui/material';
import Style from "../Camping/Camping.module.css"
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlUnstyled, {
    useFormControlUnstyledContext,
} from '@mui/base/FormControlUnstyled';
import InputUnstyled, { inputUnstyledClasses } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { sendEmailContact } from '../../actions/SendEmail.action';




// const style = {
//     position: 'absolute' as 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };



interface Props {
    open: boolean;
}








const Contact: React.FC = () => {


    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        text: '',
    });

    const [error1, setError1] = useState({
        name: '',
        email: '',
        subject: '',
        text: '',
    });
    const handleChange = (event: any) => {

        setValues({ ...values, [event.target.name]: event.target.value });


    };

    const handleError = (event: any) => {
        if (values.name.length > 3) { setError1({ ...error1, name: "" }) }
        if (values.name.length < 3) { setError1({ ...error1, name: "Por favor ingresa un nombre valido" }) }



    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    };













    const logo: string = "https://res.cloudinary.com/pfcampy/image/upload/v1670466096/logo_CAMPY_rjsp9a.png"

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

    const [response, SetResponse] = React.useState({ id: 0 });
    const [thanks, setThanks] = React.useState(false);

    const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
        setThanks(false)
        setValues({
            name: '',
            email: '',
            subject: '',
            text: '',
        });
    };

    const handleClosefinal = () => {
        setOpen(false);
        setValues({
            name: '',
            email: '',
            subject: '',
            text: '',
        });
        setThanks(true)

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
            > Contacto
            </Typography>
            <Dialog

                maxWidth={false}
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Contacto</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >

                        <form className={Style.container22} onSubmit={handleSubmit} onChange={handleError}>
                            <label className={Style.label2} >
                                *Nombre:
                                <input
                                    placeholder="Ingrese su nombre"
                                    className={Style.label4}
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <label className={Style.label2}>
                                *Email:
                                <input
                                    placeholder="Ingrese por favor un mail valido"
                                    className={Style.label4}
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <label className={Style.label2}>
                                *Asunto:
                                <input
                                    className={Style.label4}
                                    placeholder="Ingrese el motivo de su consulta"
                                    type="text"
                                    name="subject"
                                    value={values.subject}
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <label className={Style.label2}>
                                *Texto:
                                <textarea
                                    className={Style.label3}
                                    placeholder="Ingrese su consulta"
                                    name="text"
                                    value={values.text}
                                    onChange={handleChange}
                                />
                            </label>
                            <br />

                            {values.name.length > 3 && /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(values.email) && values.subject.length > 3 && values.text.length > 3 ?
                                <button
                                    className={Style.buttonsub}
                                    type="submit" onClick={async () => {
                                        let tito = await sendEmailContact(values);
                                        // handleClose()
                                        handleClosefinal()

                                    }}>Enviar</button> :
                                <button
                                    className={Style.buttonsubd}
                                    disabled={true} type="submit" onClick={async () => {
                                        // let tito = await sendEmailContact(values);
                                        handleClosefinal()


                                    }}>Enviar</button>}
                        </form>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>


                </DialogActions>
            </Dialog>

            <Dialog

                maxWidth={false}
                open={thanks}
                onClose={handleClose}

                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title"> <Box component="img" className={logo} alt="Logo" src={logo} /> </DialogTitle>
                <DialogContent >
                    <DialogContentText
                        id="scroll-dialog-description"

                        tabIndex={-1}
                    >
                        < h2> Gracias por tu consulta,
                            en un plazo de 5 días habiles
                            recibiras nuestra respuesta!  </h2>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>


                </DialogActions>
            </Dialog>

        </div>
    );
}




export default Contact



