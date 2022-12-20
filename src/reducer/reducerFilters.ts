import { } from '../actions/index';
import { filterCamps } from './estados'

const initialState: filterCamps = {
    id_provincia: '',
    id_localidad: '',
    abierto_fecha_desde: "",
    abierto_fecha_hasta: "",
    precio: [0, 0],
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
    estacionamiento: 0,
}


function filtersReducer (state: any = initialState, action: any): any {
    switch (action.type) {
        
        default: return {...state}
    }
}
