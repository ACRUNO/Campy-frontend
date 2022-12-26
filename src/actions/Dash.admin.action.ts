import axios from 'axios'
import { RootState, AppDispatch } from '../store'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { func } from 'prop-types'
import { filterCamps } from '../reducer/estados'
import dayjs, { Dayjs } from 'dayjs';


export const GET_CAMPINGSXPROV: string = 'GET_CAMPINGSXPROV'
export const GET_MASRESERVADOS: string = 'GET_MASRESERVADOS'
export const GET_USUARIOSCAMPY: string = 'GET_USUARIOSCAMPY'
export const GET_RESERVASCAMPY: string = "GET_RESERVASCAMPY"

////////////////////////GRAFICOS/////////////////////////////////
//GRAFICO DE TORTA
export function getCampsxprov(): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.get('/api/provincias/campings');
            return dispatch({
                type: GET_CAMPINGSXPROV,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

//GRAFICO TOP 5 O TOP 10
export function getMasreservados(): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.get('/api/campings/reservas');
            return dispatch({
                type: GET_MASRESERVADOS,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

//GRAFICO DE USUARIOS DE CAMPY
export function getUsuariosCampy(): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.get('/api/usuarios/habilitacion');
            return dispatch({
                type: GET_USUARIOSCAMPY,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}
//GRAFICO DE RESERVAS EN CAMPY
export function getReservasCampy(): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.get('/api/reservas');
            return dispatch({
                type: GET_RESERVASCAMPY,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

////////////////////////USUARIOS/////////////////////////////////////////////////

