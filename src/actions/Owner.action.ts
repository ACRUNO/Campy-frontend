import axios from 'axios'
import { RootState, AppDispatch } from '../store'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AlertType } from '../auxiliar';
import { Dispatch, SetStateAction } from 'react';

export const DISABLE_OWNER_CAMPING = 'DISABLE_OWNER_CAMPING';
export const CONFIRM_RESERVE = 'CONFIRM_RESERVE';

export function disableOwnerCamping(
    campingId: string,
    authorization: string,
    setStateAlert: Dispatch<SetStateAction<AlertType>>
  ): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function(dispatch: AppDispatch) {
    try {
      const json = await axios.put(`/api/campings/inhabilitar/${campingId}`, {}, {
        headers: { authorization }
      })

      dispatch({
        type: DISABLE_OWNER_CAMPING,
        payload: json.data
      })
      setStateAlert((prev) => ({
          ...prev,
          open: true,
          title: 'Deshabilitación exitosa',
          description: 'Ya no se podrá tener acceso a este servicio de camping. Si cree que hubo un error mande un mail a campyargentina@gmail.com.',
          type: 'success'
      }));

    } catch(e: any) {
      if(e.response)
        setStateAlert((prev) => ({
          ...prev,
          open: true,
          title: `Error: ${e.response.data.error}`,
          description: e.response.data.message,
          type: 'error'
        }));

      console.log('ERROR', e);
    }
  }
}

export async function confirmReserva(
  reservaId: number,
  data: any,
  authorization: string,
  getOwnerBookings: () => {}
) {
    try {
      const newEstado: string = data.currentTarget.dataset.myValue;
      console.log(reservaId, newEstado)
      await axios.put(
        `/api/reservas/${reservaId}`,
        { newEstado },
        { headers: { authorization } }
      );

      getOwnerBookings();
    } catch(e: any) {
      console.log('ERROR', e)
    }
}