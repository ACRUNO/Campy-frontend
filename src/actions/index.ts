import axios from 'axios'
import { RootState, AppDispatch } from '../store'
import{ AnyAction} from 'redux'
import { ThunkAction } from 'redux-thunk'


export const GET_PROVINCIAS: string = 'GET_PROVINCIAS'




 
function getProvincias(): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch:AppDispatch) {
        try {
            var json = await axios.get('api/provincias/1');
            console.log(json)
            return dispatch({
                type: GET_PROVINCIAS,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export default getProvincias



