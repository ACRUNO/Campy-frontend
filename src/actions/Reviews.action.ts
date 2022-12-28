import axios from 'axios'
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppDispatch, RootState } from '../store';


export const GET_CAMPING_REVIEWS: string = "GET_CAMPING_REVIEWS";


export function getCampingReviews(id:string | undefined): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.get(`/api/reviews/${id}`);
            return dispatch({
                type: GET_CAMPING_REVIEWS,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}