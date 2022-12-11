import { GET_PROVINCIAS, GET_ALLCAMPINGS} from "../actions";
import {Campings} from './estados';

const initialState: { 
    allProvincias: {id:number ,nombre: string, imagen: string }[];
    allCampings: Campings} = {

    //ESTADOS GLOBALES
    allProvincias: [],
    allCampings:[],

};

function rootReducer(state: any = initialState, action: any): any {
    switch (action.type) {
        case GET_PROVINCIAS:
            console.log(action.payload)
            return {
                ...state,
                allProvincias: action.payload
            }
        case GET_ALLCAMPINGS:
            console.log(action.payload)
            return {
                ...state,
                allCampings: action.payload
            }

        default:
            return{
                ...state
            }
    }

}



export default rootReducer;