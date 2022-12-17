export type Campings = 
    {id: number,
    nombre_camping: string,
    descripcion_camping: string,
    direccion: string,
    telefono: string,
    longitud: string,
    latitud: string,
    prop_camping_Id: number,
    abierto_fecha_desde: string, 
    abierto_fecha_hasta: string, 
    localidad: string,
    id_localidad:number,
    provincia: string,
    id_provincia:number,
    categoria: string,
    id_categoria:number,
    cantidad_estrellas: number,
    duchas: number,
    baños: number,
    mascotas: number,
    rodantes: number,
    proveduria: number,
    salon_sum: number,
    restaurant: number,
    vigilancia: number,
    pileta: number,
    estacionamiento: 1,
    juegos_infantiles: number,
    maquinas_gimnasia: number,
    wifi: number,
    parcela_techada: number,
    parcela_agua_en_parcela: number,
    parcela_iluminacion_toma_corriente: number,
    parcela_superficie: number,
    descripcion_periodo: string,
    descripcion_periodo_agua: string,
    precio: number,
    imagenes: Array<string>
}

export type User = {
    id: number,
    nombre_completo: string, 
    email: string,
    numero_celular: string| null,
    dni: string| null,
    direccion: string| null,
    foto: string | null,
    tipo: string,
    token: string
}


export type filterCamps = {
    id_provincia: number,
    id_localidad: number,
    abierto_fecha_desde: string,
    abierto_fecha_hast: string,
    precio: number[],
    reviews: number[],
    id_categoria: number[],
    parcela_superficie: number[],
    parcela_techada: number,
    parcela_agua_en_parcela: number,
    parcela_iluminacion_toma_corriente: number,
    mascotas: number,
    rodantes: number,
    proveduria: number,
    restaurant: number,
    pileta: number,
    vigilancia: number,
    maquinas_gimnasia: number,
    juegos_infantiles: number,
    salon_sum: number,
    wifi: number,
    estacionamiento: number,
}

export const reset = {        
    id_provincia: 0,
    id_localidad: 0,
    abierto_fecha_desde: "",
    abierto_fecha_hast: "",
    precio: [0, 0],
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
}