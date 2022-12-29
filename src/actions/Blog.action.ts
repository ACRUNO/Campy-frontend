import axios from 'axios'
import { RootState, AppDispatch } from '../store'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'

export const GET_ALLPOSTS: string = 'GET_ALLPOSTS'


// TRAE TODOS LOS POSTS
export function getAll_posts(): ThunkAction<void, RootState, unknown, AnyAction> {

    return async function (dispatch: AppDispatch) {
        try {
            var json = await axios.get('/api/blog');
            return dispatch({
                type: GET_ALLPOSTS,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}