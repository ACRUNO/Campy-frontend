import { FILTER_PARCELA, USUARIOS_DASH, CAMPINGS_DASH, GET_PROVINCIAS, GET_ALLCAMPINGS, GET_LOCALIDADES, GET_CAMPINGS_PROVINCIAS, GET_CAMPINGS_LOCALIDADES, GET_DETAILS, FILTER_PROVINCIA, FILTER_LOCALIDAD, CREATE_CAMPING, GET_CATEGORIAS, FILTER_CATEGORIA, GET_PERIODO_AGUA, FILTER_PERIODO_AGUA, GET_PERIODO_ABIERTO, FILTER_PERIODO_ABIERTO, FILTROS_COMBINADOS, FILTROS_BOOLEANOS, FILTROS_PRECIOS, FILTROS_PRINCIPALES, RESET_FILTROS, GET_FILTERS_CAMPING, FILTER_INGRESO, FILTER_EGRESO, CLEAN_CAMPINGS_DASH, LINK_MAP, POP_UP_CARD, SET_CARD_INFO, FILTER_PROVINCIA_MAP, FILTER_LOCALIDAD_MAP, FILTER_INGRESO_MAP, FILTER_EGRESO_MAP, NUM_FILTERS_MAP, RESET_NUM_FILTERS_MAP, ZOOM_OUT_MAP, GET_ALL_LOCALIDADES } from "../actions";
import { LOGIN_USER, LOGOUT_USER } from "../actions/Login.action";
import { GET_FAVORITES_CAMPINGS, GET_OWNER_CAMPINGS, GET_USER_BOOKINGS, REMOVE_FAVORITE_CAMPING } from "../actions/User.action";
import { Bookings, Campings, FavoritesCampings, User, filterCamps, reset, Reservas } from './estados';
import { GET_CAMPINGSXPROV, GET_MASRESERVADOS, GET_USUARIOSCAMPY, GET_RESERVASCAMPY, CLEAN_USUARIOS_DASH, GET_USUARIOS_BYNAME, GET_CAMPINGS_BYNAME, GET_RESERVAS_CAMPING, CLEAN_RESERVAS_CAMPING } from "../actions/Dash.admin.action";
import { Dayjs } from 'dayjs';
import { GET_CAMPING_REVIEWS } from "../actions/Reviews.action";
import { DISABLE_OWNER_CAMPING } from "../actions/Owner.action";
import { BUSCAR_POSTS, GET_ALLPOSTS, GET_POST, /* GET_POST_IMAGENES, GET_POST_COMENTARIOS, */ CREATE_POST, CREATE_COMENTARIO } from "../actions/Blog.action";

const initialState: {
    user: User | null;
    ownerCampings: {
        campings: {id: number, nombre_camping:string, habilitado: boolean}[], 
        done: boolean
    };
    favoritesCampings: { favorites: FavoritesCampings[], done: boolean };
    userBookings: { bookings: Bookings[], done: boolean };
    allProvincias: { id: number, nombre: string, imagen: string }[];
    allLocalidades: { id: number, nombre: string, imagen: string }[];
    allCampings: Campings[];
    detailCamping: Campings[];
    campings: Campings[];
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
    campingsDash_All:{id:number, nombre_camping:string, habilitado:number, localidad:string, provincia:string,contacto_tel:string}[];
    usuariosDash_All:{id: number, username: string,email: string,tipo: string,habilitado: number}[];
    fechaIngresoDayjs: Dayjs | null;
    fechaEgresoDayjs: Dayjs | null
    campingsDash: { id: number, nombre_camping: string, habilitado: number, localidad: string, provincia: string ,contacto_tel:string}[];
    usuariosDash: { id: number, username: string, email: string, tipo: string, habilitado: number }[]
    datos_graftorta: { provincias: string, cant_campings: number }[]
    datos_graftop: { nombre_camping: string, cant_reservas: number }[],
    datos_grafusuarios: { users: number, created: string }[],
    datos_grafreservas: {reservas: number,total: number, created: string;}[],
    linkMap: { lng: number, lat: number, zoom: number }
    reviews: { id: number, puntaje: number ,username: string, fecha: string ,comentario: string }[],
    campingBooking:Reservas[],
    popUpCards: boolean,
    cardInfoMap: {id: number, nombre_camping: string, imagenes: string, descripcion: string},
    allPosts:{titulo:string,username: string, fecha: string,texto:string,}[],
    postbuscados:{titulo:string,username: string, fecha: string,texto:string}[],
    post: {id: number, username: string, fecha: string, titulo: string, texto: string, imagenes: Array<string>, comentarios:{username: string, comentario: string, createdAt: string}[]}
} = {

    //ESTADOS GLOBALES
    user: null,
    ownerCampings: {campings: [], done: false},
    favoritesCampings: { favorites: [], done: false },
    userBookings: { bookings: [], done: false },
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
    campingsDash: [],
    campingsDash_All: [],
    usuariosDash: [],
    filtrosBooking: {
        id_provincia: '',
        id_localidad: '',
        abierto_fecha_desde: "",
        abierto_fecha_hasta: "",
        precio: [],
        reviews: [],
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
    fechaIngresoDayjs: null,
    fechaEgresoDayjs: null,
    datos_graftorta: [],
    datos_graftop: [],
    usuariosDash_All: [],
    datos_grafusuarios: [],
    datos_grafreservas: [],
    reviews: [],
    linkMap: { lat: -38.40725346022871, lng: -63.617129400239264, zoom: 5 },
    campingBooking:[],
    popUpCards: false,
    cardInfoMap: { id: 0, nombre_camping: '', imagenes: '', descripcion: '' },
    allPosts:[],
    post: {id: 0, username: '', fecha: '', titulo: '', texto: '', imagenes: [''], comentarios:[{username: '', comentario: '', createdAt: ''}]},
    postbuscados:[]
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
            }
        case GET_ALL_LOCALIDADES:
            return {
                ...state,
                allLocalidades: action.payload
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


        case CAMPINGS_DASH:
            return {
                ...state,
                campingsDash: action.payload,
                campingsDash_All: action.payload
            }
        case CLEAN_CAMPINGS_DASH:
            return {
                ...state,
                campingsDash: [],
                campingsDash_All: []
            }

        case USUARIOS_DASH:
            return {
                ...state,
                usuariosDash: action.payload,
                usuariosDash_All: action.payload
            }


        case FILTROS_COMBINADOS:
            let filtrosBook: number[] = state.filtrosBooking[action.payload.name]
            if (!filtrosBook.includes(action.payload.value)) {
                filtrosBook.push(action.payload.value)
            } else {
                filtrosBook = filtrosBook.filter((r: number) => r !== action.payload.value)
            }
            return {
                ...state,
                filtrosBooking: { ...state.filtrosBooking, [action.payload.name]: filtrosBook }
            }

        case FILTROS_BOOLEANOS:
            return {
                ...state,
                filtrosBooking: { ...state.filtrosBooking, [action.payload.name]: action.payload.value }
            }

        case FILTROS_PRECIOS:
            return {
                ...state,
                filtrosBooking: { ...state.filtrosBooking, [action.payload.name]: action.payload.value }
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

        case FILTER_PROVINCIA_MAP:
            return{
                ...state,
                filtrosBooking: {
                    ...state.filtrosBooking,
                    id_provincia: action.payload,
                    id_localidad: 0
                }
            }

        case FILTER_LOCALIDAD_MAP:
            return{
                ...state,
                filtrosBooking: {
                    ...state.filtrosBooking,
                    id_localidad: action.payload,
                }
            }

        case FILTER_INGRESO_MAP:{
            return{
                ...state,
                filtrosBooking:{
                    ...state.filtrosBooking,
                    abierto_fecha_desde: action.payload?.toDate().toLocaleDateString().split('/').reverse().join('/')
                }
            }
        }

        case FILTER_EGRESO_MAP:
            return{
                ...state,
                filtrosBooking:{
                    ...state.filtrosBooking,
                    abierto_fecha_hasta: action.payload?.toDate().toLocaleDateString().split('/').reverse().join('/')

                }
            }
        

        case ZOOM_OUT_MAP:
            return{
                ...state,
                LinkMap:  {lat: -38.40725346022871, lng: -63.617129400239264, zoom: 10 }
            }

        case RESET_FILTROS:
            return {
                ...state,
                filtrosBooking: reset(),
                provincia: 0,
                localidad: 0,
                fechaIngresoDayjs: null,
                fechaEgresoDayjs: null
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
                fechaIngresoDayjs: action.payload,
            }
        case FILTER_EGRESO:
            return {
                ...state,
                fechaEgreso: action.payload?.toDate().toLocaleDateString().split('/').reverse().join('/'),
                fechaEgresoDayjs: action.payload,
            }
        case GET_FAVORITES_CAMPINGS:
            return {
                ...state,
                favoritesCampings: { favorites: action.payload, done: true }
            }
        case REMOVE_FAVORITE_CAMPING:

            return {
                ...state,
                favoritesCampings: {
                    favorites: state.favoritesCampings.favorites.filter((fav: { id: number }) => fav.id !== action.payload),
                    done: true
                }
            }
        case GET_USER_BOOKINGS:
            return {
                ...state,
                userBookings: {
                    bookings: action.payload,
                    done: true
                }
            }
        case FILTER_PARCELA:
            return {
                ...state,
                filtrosBooking: {
                    ...state.filtrosBooking,
                    parcela_superficie: action.payload
                }

            }
        case GET_CAMPINGSXPROV:
            return {
                ...state,
                datos_graftorta: action.payload
            }
        case GET_MASRESERVADOS:
            return {
                ...state,
                datos_graftop: action.payload
            }
        case GET_USUARIOSCAMPY:
            let day:Date = new Date (2022,11,14)
            let u: number = 0;
            let data: { users: number, created: string }[] = []
            let i: number = 0
            while (day.toISOString() < new Date().toISOString() && i < action.payload.length) {
                if (new Date(action.payload[i].createdAt).valueOf() < day.valueOf()) {
                    u++
                    i++
                }
                else {
                    let obj: { users: number, created: string } = { users: u, created: day.toLocaleDateString('zh-Hans-CN') }
                    data.push(obj)
                    day.setDate(day.getDate() + 7)
                }
            }
            return {
                ...state,
                datos_grafusuarios: data
            }

        case GET_RESERVASCAMPY:
            console.log(action.payload)
            let ordenado = action.payload.sort((a:{createdAt: string, total: number},b:{createdAt: string, total: number}) => (new Date(a.createdAt).valueOf() > new Date(b.createdAt).valueOf()) ? 1 : ((new Date(b.createdAt).valueOf() > new Date(a.createdAt).valueOf()) ? -1 : 0))
            console.log(ordenado)
            let dia:Date = new Date (2022,11,18)
            let r: number = 0;
            let t: number = 0;
            let datos: { reservas: number, total: number, created: string }[] = [];
            let j: number = 0;
            while (dia.toISOString().valueOf() < new Date().toISOString().valueOf() && j < ordenado.length){
                if (new Date(ordenado[j].createdAt).valueOf() < dia.valueOf()) {
                    r++
                    t = t + ordenado[j].total
                    j++
                }
                else {
                    let obj: { reservas: number, total: number, created:string} = { reservas: r, total: t, created: dia.toLocaleDateString('zh-Hans-CN') }
                    datos.push(obj)
                    //sumo 7 dias
                    dia.setDate(dia.getDate() + 7)
                    }}
                return {
                    ...state,
                    datos_grafreservas: datos
                    }
                    
            case CLEAN_USUARIOS_DASH:
                return {
                    ...state,
                    userBookings: []
                }
            case GET_OWNER_CAMPINGS:
                return {
                    ...state,
                    ownerCampings: {campings: action.payload, done: true}
                }
            case GET_USUARIOS_BYNAME:
                if (action.payload.length>0){
                  var usuariosBuscados:{id: number, username: string,email: string,tipo: string,habilitado: number}[] = state.usuariosDash_All.filter((u:{id: number, username: string,email: string,tipo: string,habilitado: number})=>u.username.toLowerCase().includes(action.payload.toLowerCase()))}
                else{var usuariosBuscados:{id: number, username: string,email: string,tipo: string,habilitado: number}[] = state.usuariosDash_All}
                return{
                    ...state,
                    usuariosDash: usuariosBuscados
            }

        case GET_CAMPING_REVIEWS:
            return {
                ...state,
                reviews: action.payload
            }      
        case LINK_MAP:
            return {
                ...state,
                linkMap: { lng: (Number(action.payload.longitud)) , lat: (Number(action.payload.latitud)), zoom: 16 }
            }
            case GET_CAMPINGS_BYNAME:
                if (action.payload.length>0){
                    var campingsBuscados:{id:number, nombre_camping:string, habilitado:number, localidad:string, provincia:string}[] = state.campingsDash_All.filter((u:{id:number, nombre_camping:string, habilitado:number, localidad:string, provincia:string})=>u.nombre_camping.toLowerCase().includes(action.payload.toLowerCase()))}
                else{var campingsBuscados: {id:number, nombre_camping:string, habilitado:number, localidad:string, provincia:string}[] = state.campingsDash_All}
                return{
                     ...state,
                    campingsDash: campingsBuscados
                    }

            case GET_RESERVAS_CAMPING:
                return{
                    ...state,
                    campingBooking: action.payload
                }
            case CLEAN_RESERVAS_CAMPING:
                return{
                    ...state,
                    campingBooking: []
                }
            case DISABLE_OWNER_CAMPING: 
                const campings = state.ownerCampings.campings.map(
                    (camping: any) => {
                        if(camping.id === action.payload) {
                            camping.habilitado = 0;
                        }
                        return camping
                    }
                )
                return {
                    ...state,
                    ownerCampings: {
                        campings,
                        done: true
                    }
                }
        case POP_UP_CARD:
                return {
                    ...state,
                    popUpCards: action.payload
                }
        case SET_CARD_INFO:
                return {
                    ...state,
                    cardInfoMap: action.payload
                }
        case GET_ALLPOSTS:
                return{ 
                    ...state,
                    allPosts: action.payload,
                    postbuscados: action.payload
                }
        case GET_POST:
            return {
                ...state,
                post: action.payload
            }
        case CREATE_POST:
            return { ...state }
        case CREATE_COMENTARIO:
            return { ...state }     
        case BUSCAR_POSTS:
            if (action.payload.length>0){
                var postsBuscados:{titulo:string,username: string, fecha: string,texto:string,}[] = state.allPosts.filter((p:{titulo:string,username: string, fecha: string,texto:string,})=>p.titulo.toLowerCase().includes(action.payload.toLowerCase()))}
            else{var postsBuscados: {titulo:string,username: string, fecha: string,texto:string,}[] = state.allPosts}
            return{
                 ...state,
                postbuscados: postsBuscados
                }

        default: return { ...state }
    }
}



export default rootReducer;



/* { id:1, nombre: 'Camping anda pa alla', localidad: 'Cordoba Capital', provincia: 'Cordoba', imagen: 'https://res.cloudinary.com/pfcampy/image/upload/v1670535617/Fotos/Tierradelfuego.jpg' },
    { id:2, nombre: 'Camping bobo', localidad: 'Cordoba Capital', provincia: 'Cordoba', imagen: 'https://res.cloudinary.com/pfcampy/image/upload/v1670535755/Fotos/Chubut.jpg' } */