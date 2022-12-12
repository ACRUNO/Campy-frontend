import axios from 'axios'
import { RootState, AppDispatch } from '../store'
import{ AnyAction} from 'redux'
import { ThunkAction } from 'redux-thunk'


export const GET_PROVINCIAS: string = 'GET_PROVINCIAS'
export const GET_ALLCAMPINGS: string = 'GET_ALLCAMPINGS'
export const GET_LOCALIDADES: string = 'GET_LOCALIDADES'
export const GET_CAMPINGS_PROVINCIAS: string = 'GET_CAMPINGS_PROVINCIAS'
export const GET_CAMPINGS_LOCALIDADES: string = 'GET_CAMPINGS_LOCALIDADES'
export const GET_DETAILS: string ="GET_DETAILS"




 
export function getProvincias(): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch:AppDispatch) {
        try {
            var json = await axios.get('api/provincias/1');
            return dispatch({
                type: GET_PROVINCIAS,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getLocalidades(id:number):ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch:AppDispatch) {
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


export function getCampingsProvincias(id:number):ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch:AppDispatch) {
        try {
            var json = await axios.get(`/api/campings/provincias/${id}`);
            return dispatch({
                type: GET_CAMPINGS_PROVINCIAS,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getCampingsLocalidades(id:number):ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch:AppDispatch) {
        try {
            var json = await axios.get(`/api/campings/localidades/${id}`);
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

    return async function (dispatch:AppDispatch) {
        try {
            var json = await axios.get('http://localhost:3001/api/campings');
            console.log(json)
            return dispatch({
                type: GET_ALLCAMPINGS,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export function getDetails(id : any): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch:AppDispatch) {
        try {
            let details = await axios.get(`http://localhost:3001/api/campings/${id}`);
            
            return dispatch({
                type: GET_DETAILS,
                payload: details.data
            })
        } catch (error : any) {console.log(error.message)}
    }
}





