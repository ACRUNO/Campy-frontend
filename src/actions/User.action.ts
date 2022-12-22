import axios from 'axios'
import { RootState, AppDispatch } from '../store'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { Dispatch, SetStateAction } from 'react'
import { AlertType } from '../auxiliar'

export const GET_FAVORITES_CAMPINGS = 'GET_FAVORITES_CAMPINGS';
export const REMOVE_FAVORITE_CAMPING = 'REMOVE_FAVORITE_CAMPING';
export const GET_USER_BOOKINGS = 'GET_USER_BOOKINGS';

export function getUserFavoriteCampings(userId: number, token: string): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function(dispatch: AppDispatch) {
    try {
      const result: any = await axios.post(`/api/campings/favoritos/obtener/${userId}`, { token });

      return dispatch({ type: GET_FAVORITES_CAMPINGS, payload: result.data })
    } catch(e: any) {
      console.log("ERROR: ", e);
    }
  }
}

export function addFavoriteCamping(campingId: number, token: string): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function(dispatch: AppDispatch) {
    try {
      const result: any = await axios.post(`/api/campings/favoritos/agregar/${campingId}`, { token });

      return dispatch({ type: GET_FAVORITES_CAMPINGS, payload: result.data })
    } catch(e: any) {
      console.log("ERROR: ", e);
    }
  }
}

export function removeFavoriteCamping(campingId: number, token: string): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function(dispatch: AppDispatch) {
    try {
      const result: any = await axios.delete(`/api/campings/favoritos/remover/${campingId}`, {data: { token }});

      return dispatch({ type: REMOVE_FAVORITE_CAMPING, payload: result.data })
    } catch(e: any) {
      console.log("ERROR: ", e);
    }
  }
}

export function getUserBookings(userId: number) {
  return async function(dispatch: AppDispatch) {
    try {
      const result = await axios.get(`/api/reservas/usuarios/${userId}`);

      dispatch({ type: GET_USER_BOOKINGS, payload: result.data });
    } catch(e: any) {
      console.log("ERROR: ", e);
    }
  }
}