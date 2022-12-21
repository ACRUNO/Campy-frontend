

export interface tipodato_allcampings {
    id: number,
    nombre_camping: string,
    descripcion_camping: string,
    direccion: string,
    telefono: string,
    longitud: string,
    latitud: string,
    prop_camping_Id: number,
    cerrado_fecha_desde: string, // chequear este dato"2022-12-09T23:52:13.000Z",
    cerrado_fecha_hasta: string,// chequear "2022-12-09T23:52:13.000Z",
    localidad: string,
    provincia: string,
    categoria: string,
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
    descripcion_periodo_agua: string
}

export interface datosMenu {
    idButton: string,
    button: string | React.ReactElement,
    menuItems: {key: any, value: string}[],
    handleSelectItems: (event: { currentTarget: any }) => void
}

export interface AlertType {
    open: boolean,
    title: string,
    description: string,
    confirm: string,
    type: 'success' | 'error' | 'person',
    navigateTo: string | null
};

export interface AlertConfirmType {
    open: boolean,
    title: string,
    description: string,
    confirm: () => void,
    denegate: () => void
};