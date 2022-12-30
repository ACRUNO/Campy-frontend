import axios from 'axios'
import { RootState, AppDispatch } from '../store'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'

export const GET_ALLPOSTS: string = 'GET_ALLPOSTS'
export const GET_POST: string = 'GET_POST'
export const GET_POST_IMAGENES: string = 'GET_POST_IMAGENES'
export const GET_POST_COMENTARIOS: string = 'GET_POST_COMENTARIOS'
export const CREATE_POST: string = 'CREATE_POST'
export const CREATE_COMENTARIO: string = 'CREATE_COMENTARIO '
export const BUSCAR_POSTS = 'BUSCAR_POSTS';


// TRAE TODOS LOS POSTS
export function getAll_posts(): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.get('/api/blog');
            return dispatch({
                type: GET_ALLPOSTS,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

// TRAE EL POST EN DETALLE (C/ IMAGENES Y COMENTARIOS)
export function getPostById(id: any): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.get(`/api/blog/${id}`);
            return dispatch({
                type: GET_POST,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

// TRAE LAS IMAGENES DE UN POST
export function getImagenesByPostId(id: number): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.get(`/api/blog/imagenes/${id}`);
            return dispatch({
                type: GET_POST_IMAGENES,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

// TRAE LOS COMENTARIOS DE UN POST
export function getComentariosByPostId(id: number): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.get(`/api/blog/comentarios/${id}`);
            return dispatch({
                type: GET_POST_COMENTARIOS,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

// MODIFICA EL TEXTO O IMAGEN DE UN POST
export function modificarPost(id: number, token: string): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.put(`/api//blog/${id}`, {
                headers: { authorization: token }
            });
            return dispatch({
                type: "MODIFICAR_POST",
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

// MODIFICA EL COMENTARIO DE UN POST
export function modificarComentario(id: number, token: string): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.put(`/api//blog/comentarios/${id}`, {
                headers: { authorization: token }
            });
            return dispatch({
                type: "MODIFICAR_COMENTARIO",
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function crearPost(token: string) {
    return async function (dispatch: AppDispatch) {
        try {
            let result = await axios.post('/api/blog/create',{},
                {
                    headers: { authorization: token }
                });
            return dispatch({
                type: CREATE_POST,
                payload: result.data
            })

        } catch (error: any) {
            console.log(error)
        }
    }
}

export function crearComentario() {
    return async function (dispatch: AppDispatch) {
        try {
            let result = await axios.post('/api/blog/comentario');
            return dispatch({
                type: CREATE_COMENTARIO,
                payload: result.data
            })

        } catch (error: any) {
            console.log(error)
        }
    }
}

export function getPosts_byname(name: string){
    return { type: BUSCAR_POSTS, payload: name}    
}