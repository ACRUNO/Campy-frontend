import { GET_PROVINCIAS } from "../actions";

const initialState: { allProvincias: {id:number ,nombre: string, imagen: string }[] } = {

    allProvincias: []

};

function rootReducer(state: any = initialState, action: any): any {
    switch (action.type) {
        case GET_PROVINCIAS:
            console.log(action.payload)
            return {
                ...state,
                allProvincias: action.payload
            }
        default:
            return{
                ...state
            }
    }

}



export default rootReducer;