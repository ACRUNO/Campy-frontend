import axios from 'axios'
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Reviews } from '../reducer/estados';
import { AppDispatch, RootState } from '../store';


export const GET_CAMPING_REVIEWS: string = "GET_CAMPING_REVIEWS";
export const SUBMIT_REVIEW: string = 'SUBMIT_REVIEW';


export function getCampingReviews(id: string | undefined): ThunkAction<void, RootState, unknown, AnyAction> {

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

export function submitReview(input: Reviews): ThunkAction<void, RootState, unknown, AnyAction> {
    return async function (dispatch: AppDispatch) {
        try {
            let json = await axios.post("/api/reviews", input);
            return dispatch({
                type: SUBMIT_REVIEW,
            })
        } catch (error) {
            console.log(error);

        }
    }
}