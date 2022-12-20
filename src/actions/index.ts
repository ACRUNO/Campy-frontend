import axios from 'axios'
import { RootState, AppDispatch } from '../store'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { Dispatch } from 'react'
import { SetStateAction } from 'react'
import { AlertType } from '../components/LogIn/LogIn'
import { User } from '@auth0/auth0-react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { func } from 'prop-types'
import { filterCamps } from '../reducer/estados'


export const GET_PROVINCIAS: string = 'GET_PROVINCIAS'
export const GET_ALLCAMPINGS: string = 'GET_ALLCAMPINGS'
export const GET_LOCALIDADES: string = 'GET_LOCALIDADES'
export const GET_CAMPINGS_PROVINCIAS: string = 'GET_CAMPINGS_PROVINCIAS'
export const GET_CAMPINGS_LOCALIDADES: string = 'GET_CAMPINGS_LOCALIDADES'
export const GET_DETAILS: string = "GET_DETAILS"
export const CREATE_CAMPING: string = 'CREATE_CAMPING'
export const FILTER_PROVINCIA: string = 'FILTER_PROVINCIA'
export const FILTER_LOCALIDAD: string = 'FILTER_LOCALIDAD'
export const LOGIN_USER: string = 'LOGIN_USER'
export const LOGOUT_USER: string = 'LOGOUT_USER'
export const GET_CATEGORIAS: string = 'GET_CATEGORIAS'
export const FILTER_CATEGORIA: string = 'FILTER_CATEGORIA'
export const GET_PERIODO_AGUA: string = 'GET_PERIODO_AGUA'
export const FILTER_PERIODO_AGUA: string = 'FILTER_PERIODO_AGUA'
export const GET_PERIODO_ABIERTO: string = 'GET_PERIODO_ABIERTO'
export const FILTER_PERIODO_ABIERTO: string = 'FILTER_PERIODO_ABIERTO'
export const FILTROS_COMBINADOS: string = 'FILTROS_COMBINADOS'
export const FILTROS_BOOLEANOS: string = 'FILTROS_BOOLEANOS'
export const FILTROS_PRECIOS: string = 'FILTROS_PRECIOS'
export const FILTROS_PRINCIPALES: string = 'FILTROS_PRINCIPALES'
export const RESET_FILTROS: string = 'RESET_FILTROS'
export const GET_FILTERS_CAMPING: string = 'GET_FILTERS_CAMPING'


export function getProvincias(): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.get('/api/provincias/1');
            return dispatch({
                type: GET_PROVINCIAS,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getLocalidades(id: number): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.get(`/api/localidades/${id}`);
            return dispatch({
                type: GET_LOCALIDADES,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export function getCampingsProvincias(): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.get(`/api/campings`);
            return dispatch({
                type: GET_CAMPINGS_PROVINCIAS,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getCampingsLocalidades(): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.get(`/api/campings`);
            return dispatch({
                type: GET_CAMPINGS_LOCALIDADES,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export function getAllCampings(): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.get('/api/campings');
            return dispatch({
                type: GET_ALLCAMPINGS,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function filterProvincia(id: number): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            return dispatch({
                type: FILTER_PROVINCIA,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export function filterLocalidad(id: number): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            return dispatch({
                type: FILTER_LOCALIDAD,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export function createCamping(camping: any): ThunkAction<void, RootState, unknown, AnyAction> {
    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.post('/api/create', camping)
            return dispatch({
                type: CREATE_CAMPING,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export function getDetails(id: any): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            let details = await axios.get(`/api/campings/${id}`);

            return dispatch({
                type: GET_DETAILS,
                payload: details.data
            })
        } catch (error: any) { console.log(error.message) }
    }
}


export function loginUser(data: {
        email: string, 
        clave: string,     
    }, 
    remember: boolean, 
    setStateOpen: Dispatch<SetStateAction<AlertType>>): ThunkAction<void, RootState, unknown, AnyAction> {
    return async function (dispatch:AppDispatch) {
        try {
            let result = await axios.post('/api/login', data);

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
        }
    }
}


export function filterCategoria(id:number): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch:AppDispatch) {
        try {
            return dispatch({
                type: FILTER_CATEGORIA,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getPeriodoAgua(): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch:AppDispatch) {
        try {
            var json = await axios.get('/api/campings/agua_caliente');
            return dispatch({
                type: GET_PERIODO_AGUA,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function filterPeriodoAgua(id:number): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch:AppDispatch) {
        try {
            return dispatch({
                type: FILTER_PERIODO_AGUA,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getPeriodoAbierto(): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch:AppDispatch) {
        try {
            var json = await axios.get('/api/campings/abierto');
            return dispatch({
                type: GET_PERIODO_ABIERTO,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function filterPeriodoAbierto(id:number): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch:AppDispatch) {
        try {
            return dispatch({
                type: FILTER_PERIODO_ABIERTO,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }
}



export function loginUserWithToken(data: {token: string}): ThunkAction<void, RootState, unknown, AnyAction> {
    return async function (dispatch: AppDispatch) {
        try {
            let result = await axios.post('/api/login', data);

            return dispatch({
                type: LOGIN_USER,
                payload: result.data
            })
        } catch(error: any) {
            console.log(error.response.data)
        }
    }
}

export function getAllCategorias(): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch:AppDispatch) {
        try {
            var json = await axios.get('/api/campings/categorias');
            return dispatch({
                type: GET_CATEGORIAS,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
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
            // setStateOpen(() => ({
            //         open: true,
            //         title: `ERROR: ${error.response.data.error}`,
            //         description: error.response.data.message,
            //         confirm: 'ok...',
            //         type: 'error',
            //         navigateTo: null
            //     }))
            console.log(error)
            }
    }
}

export function logoutUser() {
    return { type: LOGOUT_USER };
}


export function filtrosCombinados(name: string, value: number){
    const data = {name: name, value: value}
    return {
        type: FILTROS_COMBINADOS,
        payload: data
    }
}

export function filtrosBooleanos(name: string, value: boolean){
    const data = {name: name, value: value}
    return {
        type: FILTROS_BOOLEANOS,
        payload: data
    }
}

export function filtrosPrecios(name: string, value: number[]){
    const data = {name: name, value: value}
    return {
        type: FILTROS_PRECIOS,
        payload: data
    }
}

export function filtrosPrincipales(provincia: number, localidad: number, ingreso: string | undefined, egreso: string | undefined){
    const data = {provincia: provincia, localidad: localidad, ingreso: ingreso, egreso: egreso}
    return {
        type: FILTROS_PRINCIPALES,
        payload: data
    }
}

export function resetFiltros() {
    return {
        type: RESET_FILTROS
    }
}

export function getFiltersCamping(filters: filterCamps) {
    return async function (dispatch: AppDispatch) {
        try {
            let result = await axios.post('/api/campings', filters);
            // return fetch('/api/campings', filters)
            // .then(r=> r.json())
            // .then(result=> dispatch({
            //     type: GET_FILTERS_CAMPING,
            //     payload: result
            // }))
            return dispatch({
                type: GET_FILTERS_CAMPING,
                payload: result.data
            })
            
        } catch(error: any) {
            console.log(error)
        }
    }
}
