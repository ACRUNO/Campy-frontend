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
export const CREATE_CAMPING: string = 'CREATE_CAMPING'
export const FILTER_PROVINCIA: string = 'FILTER_PROVINCIA'
export const FILTER_LOCALIDAD: string = 'FILTER_LOCALIDAD'
export const LOGIN_USER: string = 'LOGIN_USER'
export const GET_CATEGORIAS: string = 'GET_CATEGORIAS'
export const FILTER_CATEGORIA: string = 'FILTER_CATEGORIA'
export const GET_PERIODO_AGUA: string = 'GET_PERIODO_AGUA'
export const FILTER_PERIODO_AGUA: string = 'FILTER_PERIODO_AGUA'
export const GET_PERIODO_ABIERTO: string = 'GET_PERIODO_ABIERTO'
export const FILTER_PERIODO_ABIERTO: string = 'FILTER_PERIODO_ABIERTO'





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


export function getCampingsProvincias():ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch:AppDispatch) {
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

export function getCampingsLocalidades():ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch:AppDispatch) {
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

    return async function (dispatch:AppDispatch) {
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

export function filterProvincia(id:number): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch:AppDispatch) {
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


export function filterLocalidad(id:number): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch:AppDispatch) {
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






export function createCamping(camping : any): ThunkAction<void, RootState, unknown, AnyAction> {
    return async function (dispatch:AppDispatch) {
        try {
            var json = await axios.post('/api/campings', camping)
            return dispatch({
                type: CREATE_CAMPING,
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
            let details = await axios.get(`/api/campings/${id}`);
            
            return dispatch({
                type: GET_DETAILS,
                payload: details.data
            })
        } catch (error : any) {console.log(error.message)}
    }
}

export function loginUser(data: {
        email: string, 
        clave: string,     
    }, remember: boolean): ThunkAction<void, RootState, unknown, AnyAction> {
    return async function (dispatch:AppDispatch) {
        try {
            let result = await axios.post('/api/login', data);

            return dispatch({
                type: LOGIN_USER,
                payload: {...result.data, remember}
            })
        } catch(error: any) {console.log(error.response.data)}
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





