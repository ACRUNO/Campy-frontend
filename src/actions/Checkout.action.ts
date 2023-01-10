import axios from "axios";
import { RootState, AppDispatch } from "../store";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

export const POST_RESERV: string = "POST_RESERV";

export function postReserv(
  reserv: any
): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function (dispatch: AppDispatch) {
    try {
      var json = await axios.post("/api/reservas/create", reserv);
      return dispatch({
        type: POST_RESERV,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
