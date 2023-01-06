import { Grid, Typography, TextField, Box, Button, Dialog, DialogTitle, DialogContent, Checkbox, FormControlLabel } from '@mui/material';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/index';
import * as actions from "../../actions/Blog.action"
import { useNavigate } from 'react-router-dom';


type Props = {
    id: number,
    reload: number,
    setReload: React.Dispatch<React.SetStateAction<number>>
}

export default function CrearComentario(props: Props) {

    const dispatch: AppDispatch = useDispatch()
    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate()
    const [boton, setBoton] = React.useState(true)
    const [input, setInput] = React.useState<{ comentario: string, usuarioId: number, postId: number }>({
        comentario: '',
        usuarioId: 0,
        postId: props.id
    })

    const [habilitar, setHabilitar] = React.useState<boolean>(false)


    const handleChangeComentario = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            comentario: e.target.value,
            usuarioId: user.id
        })
        if (user.id) { setHabilitar(true) }
        if (e.target.value.length) { setBoton(false) }
        if (e.target.value.length === 0) { setBoton(true) }
    }


    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (habilitar == true)
            dispatch(actions.crearComentario(input, user.token))

        setInput({
            ...input,
            comentario: ""
        })
        props.setReload(props.reload + 1)
    }


    return (
        <React.Fragment>
            <Grid container spacing={2} display="flex" flexDirection="column" alignItems="stretch" sx={{ mt: 1, pr: 2 }} >
                <Grid item xs={12}>
                    <TextField
                        color="secondary"
                        required
                        fullWidth
                        id="Comentario"
                        label="Comentar"
                        name="Comentario"
                        value={input.comentario}
                        multiline
                        minRows={5}
                        onChange={(e) => { handleChangeComentario(e) }}
                    />
                </Grid>
                <Grid display="flex" justifyContent="flex-end" sx={{ mt: 1 }}>
                    <Button disabled={boton} color="secondary" variant='contained' id='Crear' sx={{ mt: 1 }} onClick={(e) => { handleSubmit(e) }} value="Crear comentario">Crear comentario</Button>
                </Grid>
            </Grid>
        </React.Fragment>


    )
}