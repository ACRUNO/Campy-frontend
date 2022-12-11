import { GET_LOCALIDADES, GET_PROVINCIAS, GET_CAMPINGS_PROVINCIAS, GET_CAMPINGS_LOCALIDADES } from "../actions";

const initialState: {
    allProvincias: { id: number, nombre: string, imagen: string }[], allLocalidades: { id: number, nombre: string, imagen: string }[],
    campings: { id: number, nombre: string, localidad: string, provincia: string, imagen: string }[]
} = {

    allProvincias: [],
    allLocalidades: [],
    campings: []



};

function rootReducer(state: any = initialState, action: any): any {
    switch (action.type) {
        case GET_PROVINCIAS:
            return {
                ...state,
                allProvincias: action.payload
            }
        case GET_LOCALIDADES:
            return {
                ...state,
                allLocalidades: action.payload
            }
        case GET_CAMPINGS_PROVINCIAS:
            return {
                ...state,
                campings: action.payload
            }
        case GET_CAMPINGS_LOCALIDADES:
            return {
                ...state,
                campings: action.payload
            }

        default:
            return {
                ...state
            }

    }

}



export default rootReducer;







/* { id:1, nombre: 'Camping anda pa alla', localidad: 'Cordoba Capital', provincia: 'Cordoba', imagen: 'https://res.cloudinary.com/pfcampy/image/upload/v1670535617/Fotos/Tierradelfuego.jpg' },
    { id:2, nombre: 'Camping bobo', localidad: 'Cordoba Capital', provincia: 'Cordoba', imagen: 'https://res.cloudinary.com/pfcampy/image/upload/v1670535755/Fotos/Chubut.jpg' } */