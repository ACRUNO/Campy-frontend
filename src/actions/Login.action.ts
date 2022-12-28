import axios from 'axios'
import { RootState, AppDispatch } from '../store'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { Dispatch, SetStateAction } from 'react'
import { AlertType } from '../auxiliar'
import { User } from '@auth0/auth0-react'

export const LOGIN_USER: string = 'LOGIN_USER'
export const LOGOUT_USER: string = 'LOGOUT_USER'

export function loginUser(data: {
        email: string, 
        clave: string,     
    }, 
    remember: boolean, 
    setStateOpen: Dispatch<SetStateAction<AlertType>>,
    setOpenLoader: Dispatch<SetStateAction<boolean>>): ThunkAction<void, RootState, unknown, AnyAction> {
    return async function (dispatch:AppDispatch) {
        try {
            let result: any = await axios.post('/api/login', data);

            return dispatch({
                type: LOGIN_USER,
                payload: {...result.data, remember}
            })
        } catch(error: any) {
            setStateOpen(() => ({
                open: true,
                title: 'USUARIO INVÁLIDO',
                description: 'El correo o clave proporcionado son erróneos.',
                confirm: 'ok...',
                type: 'error',
                navigateTo: null
            }))
            console.log(error.response.data)
        } finally {
            setOpenLoader(false)
        }
    }
}

export function loginUserWithToken(token: string): ThunkAction<void, RootState, unknown, AnyAction> {
    return async function (dispatch: AppDispatch) {
        try {
            let result: any = await axios.post('/api/login', {},
            {
                headers: { authorization: token }
            });

            return dispatch({
                type: LOGIN_USER,
                payload: result.data
            })
        } catch(error: any) {
            console.log(error?.response.data)
        }
    }
}

export function loginUserWithGoogle(data: User | undefined,  remember: boolean, setStateOpen: Dispatch<SetStateAction<AlertType>>): ThunkAction<void, RootState, unknown, AnyAction> {
    return async function (dispatch: AppDispatch) {
        try {
            console.log(process.env.REACT_APP_API_KEY)
            let result = await axios.post('/api/login/google', {...data, apikey: process.env.REACT_APP_API_KEY});

            return dispatch({
                type: LOGIN_USER,
                payload: {...result.data, remember}
            })
            
        } catch(error: any) {
            error && setStateOpen(() => ({
                    open: true,
                    title: `ERROR: ${error.response.data.error}`,
                    description: error.response.data.message,
                    confirm: 'ok...',
                    type: 'error',
                    navigateTo: null
                }));

                console.log(error)
            }
    }
}

export function logoutUser() {
    return { type: LOGOUT_USER };
}

export function updateUser(
    queries: string, 
    data: { token: string, userId: number }): ThunkAction<void, RootState, unknown, AnyAction> {
    return async function(dispatch: AppDispatch) {
        try {
            const result: any = await axios.put(`/api/usuarios/actualizar?${queries}`, data);
           
            dispatch({ type:  LOGIN_USER, payload: { ...result.data, remember: localStorage.getItem('remember') === 'true' } });
        } catch(e) {}
    }
}