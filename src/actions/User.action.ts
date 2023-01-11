import axios from 'axios'
import { RootState, AppDispatch } from '../store'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { Dispatch, SetStateAction } from 'react'
import { AlertType } from '../auxiliar'

export const GET_FAVORITES_CAMPINGS = 'GET_FAVORITES_CAMPINGS';
export const GET_USER_BOOKINGS = 'GET_USER_BOOKINGS';
export const GET_OWNER_CAMPINGS = 'GET_OWNER_CAMPINGS';
export const REMOVE_FAVORITE_CAMPING = 'REMOVE_FAVORITE_CAMPING';


export function getUserFavoriteCampings(userId: number, token: string): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function (dispatch: AppDispatch) {
    try {
      const result: any = await axios.get(`/api/campings/favoritos/obtener/${userId}`,
        {
          headers: { authorization: token }
        });

      return dispatch({ type: GET_FAVORITES_CAMPINGS, payload: result.data })
    } catch (e: any) {
      console.log("ERROR: ", e);
    }
  }
}

export function getCampingByOwner(userId: string, token: string): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function (dispatch: AppDispatch) {
    try {
      const result = await axios.get(`/api/campings/propietario/${userId}`,
        {
          headers: { authorization: token }
        });

      dispatch({ type: GET_OWNER_CAMPINGS, payload: result.data });
    } catch (e: any) {
      console.log("ERROR: ", e);
    }
  }
}

export function getUserBookings(userId: number, token: string) {
  return async function (dispatch: AppDispatch) {
    try {
      const result = await axios.get(`/api/reservas/usuarios/${userId}`,
        {
          headers: { authorization: token }
        });

      dispatch({ type: GET_USER_BOOKINGS, payload: result.data });
    } catch (e: any) {
      console.log("ERROR: ", e);
    }
  }
}

export function getOwnerBookings(campingId: number, token: string) {
  return async function (dispatch: AppDispatch) {
    try {
      const result = await axios.get(`/api/reservas/${campingId}`,
        {
          headers: { authorization: token }
        }
      );

      dispatch({ type: GET_USER_BOOKINGS, payload: result.data });
    } catch (e: any) {
      console.log("ERROR: ", e);
    }
  }
}

export function addFavoriteCamping(campingId: number, token: string): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function (dispatch: AppDispatch) {
    try {
      const result: any = await axios.post(`/api/campings/favoritos/agregar/${campingId}`,
        {},
        {
          headers: { authorization: token }
        }
      );

      return dispatch({ type: GET_FAVORITES_CAMPINGS, payload: result.data })
    } catch (e: any) {
      console.log("ERROR: ", e);
    }
  }
}

export function removeFavoriteCamping(campingId: number, token: string): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function (dispatch: AppDispatch) {
    try {
      const result: any = await axios.delete(`/api/campings/favoritos/remover/${campingId}`,
        {
          headers: { authorization: token }
        });

      return dispatch({ type: REMOVE_FAVORITE_CAMPING, payload: result.data })
    } catch (e: any) {
      console.log("ERROR: ", e);
    }
  }
}

