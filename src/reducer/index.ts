

import { GET_PROVINCIAS, GET_ALLCAMPINGS, GET_LOCALIDADES, GET_CAMPINGS_PROVINCIAS, GET_CAMPINGS_LOCALIDADES, GET_DETAILS, FILTER_PROVINCIA, FILTER_LOCALIDAD, CREATE_CAMPING } from "../actions";
import { Campings } from './estados';



const initialState: {
    provincia: number;
    localidad: number;
    allProvincias: { id: number, nombre: string, imagen: string }[];
    allCampings: Campings[];
    detailCamping : Campings[];
    allLocalidades: { id: number, nombre: string, imagen: string }[];
    campings:Campings[]} = {

    //ESTADOS GLOBALES
    allProvincias: [],

    detailCamping: [],
    allCampings:[],
    allLocalidades: [],
    campings: [],
    provincia: 0,
    localidad: 0


};

function rootReducer(state: any = initialState, action: any): any {
    switch (action.type) {
        case GET_PROVINCIAS:
            return {
                ...state,
                allProvincias: action.payload
            }

        case GET_ALLCAMPINGS:
            return {
                ...state,
                allCampings: action.payload,
               campings: action.payload
            }
        case GET_LOCALIDADES:
            return {
                ...state,
                allLocalidades: action.payload
            }
        case GET_CAMPINGS_PROVINCIAS:
            const allCamps: Campings[] = state.allCampings

            const filteredProv: Campings[] = allCamps.filter(c => {
               return (c.id_provincia === state.provincia)
            })
            return {
                ...state,
                campings: filteredProv,
            }

        case GET_CAMPINGS_LOCALIDADES:
            const allCampys: Campings[] = state.allCampings
            const filteredLocal:Campings[] = allCampys.filter(c => {
                return c.id_localidad === state.localidad
            })
            return {
                ...state,
                campings: filteredLocal,
                
            }
        case GET_DETAILS:
            return{
                ...state,
                detailCamping : action.payload

            }

        case FILTER_PROVINCIA:
            return {
                ...state,
                provincia: action.payload,
                localidad:0
            }
        case CREATE_CAMPING:
            return {
                ...state
            }


        case FILTER_LOCALIDAD:
            return {
                ...state,
                localidad: action.payload
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