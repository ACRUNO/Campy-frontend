import axios from "axios";
import { RootState, AppDispatch } from "../store";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { Inputs } from "../reducer/estados";
import { NavigateFunction } from "react-router-dom";

export async function updateCamping(
  data: Inputs,
  campingId: number,
  authorization: string,
  navigate: NavigateFunction
) {
  try {
    await axios.put(`/api/campings/${campingId}`, data, {
      headers: { authorization },
    });

    navigate("/dashboard");
  } catch (e: any) {
    console.log(e);
  }
}
