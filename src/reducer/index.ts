
import { GET_PROVINCIAS, GET_ALLCAMPINGS, GET_LOCALIDADES, GET_CAMPINGS_PROVINCIAS, GET_CAMPINGS_LOCALIDADES} from "../actions";
import {Campings} from './estados';

const initialState: {
    provincia: {id:number}
    allProvincias: {id:number ,nombre: string, imagen: string }[];
    allCampings: Campings[];
    allLocalidades: { id: number, nombre: string, imagen: string }[];
    campings: { id: number, nombre: string, localidad: string, provincia: string, imagen: string }[]} = {

    //ESTADOS GLOBALES
    allProvincias: [],
    allCampings:[],
    allLocalidades: [],
    campings: [],
    provincia:{id:0}


};

function rootReducer(state: any = initialState, action: any): any {
    switch (action.type) {
        case GET_PROVINCIAS:
            return {
                ...state,
                allProvincias: action.payload
            }

        case GET_ALLCAMPINGS:
            console.log(action.payload)
            return {
                ...state,
                allCampings: action.payload}
        case GET_LOCALIDADES:
            return {
                ...state,
                allLocalidades: action.payload
            }
        case GET_CAMPINGS_PROVINCIAS:
            const allCamps: Campings[] = state.allCampings
            const filteredProv = allCamps.filter(c => {
                c.id_provincia === action.payload
            })
            return {
                ...state,
                campings: filteredProv
            }

        case GET_CAMPINGS_LOCALIDADES:
            const allCampys: Campings[] = state.allCampings
            const filteredLocal = allCampys.filter(c => {
                c.id_localidad === action.payload
            })
            return {
                ...state,
                campings: filteredLocal
            }

    }

}



export default rootReducer;







/* { id:1, nombre: 'Camping anda pa alla', localidad: 'Cordoba Capital', provincia: 'Cordoba', imagen: 'https://res.cloudinary.com/pfcampy/image/upload/v1670535617/Fotos/Tierradelfuego.jpg' },
    { id:2, nombre: 'Camping bobo', localidad: 'Cordoba Capital', provincia: 'Cordoba', imagen: 'https://res.cloudinary.com/pfcampy/image/upload/v1670535755/Fotos/Chubut.jpg' } */