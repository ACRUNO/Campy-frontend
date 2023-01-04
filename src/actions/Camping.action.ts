import axios from "axios";
import { RootState, AppDispatch } from "../store";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { Inputs } from "../reducer/estados";
import { NavigateFunction } from "react-router-dom";

export const PUT_CAMPING = "PUT_CAMPING";

export function updateCamping(
  data: Inputs,
  campingId: number,
  authorization: string,
  navigate: NavigateFunction
): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function (dispatch: AppDispatch) {
    try {
      var json = await axios.put(`/api/campings/${campingId}`, data, {
        headers: { authorization },
      });

      navigate("/dashbaord");

      return dispatch({
        type: PUT_CAMPING,
        payload: json.data,
      });
    } catch (e: any) {
      console.log(e);
    }
  };
}
