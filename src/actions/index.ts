import axios from 'axios'
import { RootState, AppDispatch } from '../store'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { func } from 'prop-types'
import { filterCamps } from '../reducer/estados'
import dayjs, { Dayjs } from 'dayjs';


export const GET_PROVINCIAS: string = 'GET_PROVINCIAS'
export const GET_ALLCAMPINGS: string = 'GET_ALLCAMPINGS'
export const GET_LOCALIDADES: string = 'GET_LOCALIDADES'
export const GET_CAMPINGS_PROVINCIAS: string = 'GET_CAMPINGS_PROVINCIAS'
export const GET_CAMPINGS_LOCALIDADES: string = 'GET_CAMPINGS_LOCALIDADES'
export const GET_DETAILS: string = "GET_DETAILS"
export const CREATE_CAMPING: string = 'CREATE_CAMPING'
export const FILTER_PROVINCIA: string = 'FILTER_PROVINCIA'
export const FILTER_LOCALIDAD: string = 'FILTER_LOCALIDAD'
export const GET_CATEGORIAS: string = 'GET_CATEGORIAS'
export const FILTER_CATEGORIA: string = 'FILTER_CATEGORIA'
export const GET_PERIODO_AGUA: string = 'GET_PERIODO_AGUA'
export const FILTER_PERIODO_AGUA: string = 'FILTER_PERIODO_AGUA'
export const GET_PERIODO_ABIERTO: string = 'GET_PERIODO_ABIERTO'
export const FILTER_PERIODO_ABIERTO: string = 'FILTER_PERIODO_ABIERTO'
export const CAMPINGS_DASH: string = 'CAMPINGS_DASH'
export const USUARIOS_DASH: string = 'USUARIOS_DASH'
export const FILTROS_COMBINADOS: string = 'FILTROS_COMBINADOS'
export const FILTROS_BOOLEANOS: string = 'FILTROS_BOOLEANOS'
export const FILTROS_PRECIOS: string = 'FILTROS_PRECIOS'
export const FILTROS_PRINCIPALES: string = 'FILTROS_PRINCIPALES'
export const RESET_FILTROS: string = 'RESET_FILTROS'
export const GET_FILTERS_CAMPING: string = 'GET_FILTERS_CAMPING'
export const FILTER_INGRESO: string = 'FILTER_INGRESO'
export const FILTER_EGRESO: string = 'FILTER_EGRESO'
export const FILTER_PARCELA:string = 'FILTER_PARCELA'
export const CLEAN_CAMPINGS_DASH:string = "CLEAN_CAMPINGS_DASH"
export const LINK_MAP:string = 'LINK_MAP'
export const POP_UP_CARD: string = 'POP_UP_CARD'
export const SET_CARD_INFO: string = 'SET_CARD_INFO'
export const FILTER_PROVINCIA_MAP: string = 'FILTER_PROVINCIA_MAP'
export const FILTER_LOCALIDAD_MAP:string= 'FILTER_LOCALIDAD_MAP'
export const FILTER_INGRESO_MAP:string ='FILTER_INGRESO_MAP'
export const FILTER_EGRESO_MAP:string='FILTER_EGRESO_MAP'
export const NUM_FILTERS_MAP:string='NUM_FILTERS_MAP'
export const RESET_NUM_FILTERS_MAP:string='RESET_NUM_FILTERS_MAP'
export const ZOOM_OUT_MAP:string='ZOOM_OUT_MAP'
export const SET_DETAIL_RESERV :string= 'SET_DETAIL_RESERV'
export const CLEAN_DETAILS :string= 'CLEAN_DETAILS'


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
            var json = await axios.get(`/api/localidades/ConCampings/${id}`);
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

export function getCampings_dash(): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.get(`/api/campings/habilitacion`);
            return dispatch({
                type: CAMPINGS_DASH,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function cleanCampings_dash()  {
            return ({
                type: CLEAN_CAMPINGS_DASH, 
            });
}

export function habilitacion_camping(id:number, habilitacion:number, { token }: {token: string }): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.put(`/api/campings/habilitacion/${id}?habilitar=${habilitacion}`, {}, { headers: { authorization: token } });

            return dispatch({
                type: "HABILITACION_CAMPING",
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getUsuarios_dash(): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.get(`/api/usuarios/habilitacion`);
            return dispatch({
                type: USUARIOS_DASH,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function habilitacion_usuario(id:number, habilitacion:number, { token }: {token: string}): ThunkAction<void, RootState, unknown, AnyAction> {
    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.put(`/api/usuarios/deshabilitar/${id}?habilitar=${habilitacion}`, {}, { headers: { authorization: token } });

            return dispatch({
                type: "HABILITACION_USUARIO",
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function tipo_usuario(id:number, {token, userType} :{token: string, userType:string}): ThunkAction<void, RootState, unknown, AnyAction> {
    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.put(`/api/usuarios/tipo/${id}`, { userType }, { headers: { authorization: token } });

            return dispatch({
                type: "TIPO_USUARIO",
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }}}
        
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

export function filtrosPrecios(name: string, value: number | number[]){
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

export function filterProvinciaMap(provincia: number){
    return{
        type: FILTER_PROVINCIA_MAP,
        payload: provincia
    }
}

export function filterLocalidadMap(localidad:number){
    return{
        type: FILTER_LOCALIDAD_MAP,
        payload: localidad
    }
}


export function FilterIngresoMap(date:Dayjs | null){
    return {
        type: FILTER_INGRESO_MAP,
        payload: date
    } 
}


export function FilterEgresoMap(date:Dayjs | null){
    return {
        type: FILTER_EGRESO_MAP,
        payload: date
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


export function FilterIngreso(date:Dayjs | null){
    return {
        type: FILTER_INGRESO,
        payload: date
    }   
}


export function FilterEgreso(date:Dayjs | null){
    return {
        type: FILTER_EGRESO,
        payload: date
    }   
}

export function FilterParcela (tamaño : number[]){
    return{
        type: FILTER_PARCELA,
        payload: tamaño
    }
}


export function LinkMap(id: any): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            let details = await axios.get(`/api/campings/${id}`);

            return dispatch({
                type: LINK_MAP,
                payload: details.data
            })
        } catch (error: any) { console.log(error.message) }
    }
}

export function popUpCard(bool: boolean) {
    return {
        type: POP_UP_CARD,
        payload: bool
    }
}

export function setCardInfo(id: number, nombre_camping: string, img: string, desc_camping: string) {
    let info = {id: id, nombre_camping: nombre_camping, imagenes: img[0], descripcion_camping: desc_camping}
    return {
        type: SET_CARD_INFO,
        payload: info
    }
}



export function zoomOutMap(){
    return {
        type: ZOOM_OUT_MAP
    }
}




export function setdetailreserv(day1: number, alldate: string, day2: number, alldate2: string , stay : number , kids : number , travellers : number , total : number , idRes : any) {
    let info = {day1 , alldate, day2, alldate2, stay, kids, travellers, total}
    return {
        type: SET_DETAIL_RESERV,
        payload: info
    }
} 


export function cleanDetails()  {
    return ({
        type: CLEAN_DETAILS, 
    });
}