import { GET_PROVINCIAS, GET_ALLCAMPINGS, GET_LOCALIDADES, GET_CAMPINGS_PROVINCIAS, GET_CAMPINGS_LOCALIDADES, GET_DETAILS, FILTER_PROVINCIA, FILTER_LOCALIDAD, CREATE_CAMPING, LOGIN_USER, LOGOUT_USER, GET_CATEGORIAS, FILTER_CATEGORIA, GET_PERIODO_AGUA, FILTER_PERIODO_AGUA, GET_PERIODO_ABIERTO, FILTER_PERIODO_ABIERTO, FILTROS_COMBINADOS, FILTROS_BOOLEANOS, FILTROS_PRECIOS, FILTROS_PRINCIPALES, RESET_FILTROS, GET_FILTERS_CAMPING, FILTER_INGRESO, FILTER_EGRESO } from "../actions";
import { Campings, User, filterCamps, reset } from './estados';
import { Dayjs } from 'dayjs';



const initialState: {
    user: User | null;
    allProvincias: { id: number, nombre: string, imagen: string }[];
    allLocalidades: { id: number, nombre: string, imagen: string }[];
    allCampings: Campings[];
    detailCamping: Campings[];
    campings: Campings[]
    provincia: number;
    localidad: number;
    allCategorias: { id: number, categoria: string, cantidad_estrellas: number, descripcion_categoria: string }[];
    categoria: number;
    allPeriodoAgua: { id: number, periodo_agua: string }[];
    periodoAgua: number;
    allPeriodoAbierto: { id: number, periodo_abierto: string }[];
    periodoAbierto: number;
    filtrosBooking: filterCamps;
    fechaIngreso: string;
    fechaEgreso: string;
    fechaIngresoDayjs:Dayjs | null;
    fechaEgresoDayjs:Dayjs | null
} = {

    //ESTADOS GLOBALES
    user: null,
    allProvincias: [],
    detailCamping: [],
    allCampings: [],
    allLocalidades: [],
    campings: [],
    provincia: 0,
    localidad: 0,
    allCategorias: [],
    categoria: 0,
    allPeriodoAgua: [],
    periodoAgua: 0,
    allPeriodoAbierto: [],
    periodoAbierto: 0,
    filtrosBooking: {        
        id_provincia: '',
        id_localidad: '',
        abierto_fecha_desde: "",
        abierto_fecha_hasta: "",
        precio: [],
        // reviews: [],
        id_categoria: [],
        parcela_superficie: [],
        parcela_techada: 0,
        parcela_agua_en_parcela: 0,
        parcela_iluminacion_toma_corriente: 0,
        mascotas: 0,
        rodantes: 0,
        proveduria: 0,
        restaurant: 0,
        pileta: 0,
        vigilancia: 0,
        maquinas_gimnasia: 0,
        juegos_infantiles: 0,
        salon_sum: 0,
        wifi: 0,
        estacionamiento: 0
    },
    fechaIngreso: "",
    fechaEgreso: "",
    fechaIngresoDayjs:null,
    fechaEgresoDayjs: null
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
            const filteredLocal: Campings[] = allCampys.filter(c => {
                return c.id_localidad === state.localidad
            })
            return {
                ...state,
                campings: filteredLocal,
            }
        case GET_DETAILS:
            return {
                ...state,
                detailCamping: action.payload

            }
        case FILTER_PROVINCIA:
            return {
                ...state,
                provincia: action.payload,
                localidad: 0
            }
        case FILTER_CATEGORIA:
            const campys: Campings[] = state.campings
            const filterCampys = campys.filter(c => {
                return c.id_categoria === action.payload
            })
            return {
                ...state,
                campings: filterCampys
            }
        case CREATE_CAMPING:
            return { ...state }
        case FILTER_LOCALIDAD:
            return {
                ...state,
                localidad: action.payload
            }
        case LOGIN_USER:
            const { remember, token }: { remember: boolean, token: string } = action.payload;
            
            remember && localStorage.setItem('token', token);

            return { ...state, user: action.payload }
        case LOGOUT_USER:
            return { ...state, user: null }
        case GET_CATEGORIAS:
            return {
                ...state,
                allCategorias: action.payload
            }
        case FILTER_CATEGORIA:
            return {
                ...state,
                categoria: action.payload
            }
        case GET_PERIODO_AGUA:
            return {
                ...state,
                allPeriodoAgua: action.payload
            }
        case FILTER_PERIODO_AGUA:
            return {
                ...state,
                periodoAgua: action.payload
            }
        case GET_PERIODO_ABIERTO:
            return {
                ...state,
                allPeriodoAbierto: action.payload
            }
        case FILTER_PERIODO_ABIERTO:
            return {
                ...state,
                periodoAbierto: action.payload
            }
        case FILTROS_COMBINADOS:
            let filtrosBook: number[] = state.filtrosBooking[action.payload.name]
            if(!filtrosBook.includes(action.payload.value)){
                filtrosBook.push(action.payload.value)
            } else {
                filtrosBook = filtrosBook.filter((r: number) => r !== action.payload.value)
            }
            return{
                ...state,
                filtrosBooking: {...state.filtrosBooking, [action.payload.name]: filtrosBook} 
            }
        case FILTROS_BOOLEANOS:
            return{
                ...state,
                filtrosBooking: {...state.filtrosBooking, [action.payload.name]: action.payload.value} 
            }
        case FILTROS_PRECIOS:
            return{
                ...state,
                filtrosBooking: {...state.filtrosBooking, [action.payload.name]: action.payload.value}
            }
        case FILTROS_PRINCIPALES:
            return {
                ...state,
                filtrosBooking: {
                    ...state.filtrosBooking, 
                    id_provincia: action.payload.provincia,
                    id_localidad: action.payload.localidad,
                    abierto_fecha_desde: action.payload.ingreso,
                    abierto_fecha_hasta: action.payload.egreso
                }
            }
        case RESET_FILTROS:
            return {
                ...state,
                filtrosBooking: reset(),
                provincia:0,
                localidad:0,
                fechaIngresoDayjs:null,
                fechaEgresoDayjs:null
            }
        case GET_FILTERS_CAMPING:
            return {
                ...state,
                campings: action.payload
            }
        case FILTER_INGRESO:
            return {
                ...state,
                fechaIngreso: action.payload?.toDate().toLocaleDateString().split('/').reverse().join('/'),
                fechaIngresoDayjs: action.payload
            }
            case FILTER_EGRESO:
                return {
                    ...state,
                    fechaEgreso: action.payload?.toDate().toLocaleDateString().split('/').reverse().join('/'),
                    fechaEgresoDayjs: action.payload
                }
        default: return { ...state }
    }
}



export default rootReducer;







/* { id:1, nombre: 'Camping anda pa alla', localidad: 'Cordoba Capital', provincia: 'Cordoba', imagen: 'https://res.cloudinary.com/pfcampy/image/upload/v1670535617/Fotos/Tierradelfuego.jpg' },
    { id:2, nombre: 'Camping bobo', localidad: 'Cordoba Capital', provincia: 'Cordoba', imagen: 'https://res.cloudinary.com/pfcampy/image/upload/v1670535755/Fotos/Chubut.jpg' } */