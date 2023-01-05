export type Campings = {
  id: number;
  nombre_camping: string;
  descripcion_camping: string;
  direccion: string;
  telefono: string;
  longitud: string;
  latitud: string;
  prop_camping_Id: number;
  abierto_fecha_desde: string;
  abierto_fecha_hasta: string;
  localidad: string;
  id_localidad: number;
  provincia: string;
  id_provincia: number;
  categoria: string;
  id_categoria: number;
  cantidad_estrellas: number;
  duchas: number;
  baños: number;
  mascotas: number;
  rodantes: number;
  proveduria: number;
  salon_sum: number;
  restaurant: number;
  vigilancia: number;
  pileta: number;
  estacionamiento: number;
  juegos_infantiles: number;
  maquinas_gimnasia: number;
  wifi: number;
  parcela_techada: number;
  parcela_agua_en_parcela: number;
  parcela_iluminacion_toma_corriente: number;
  parcela_superficie: number;
  descripcion_periodo: string;
  descripcion_periodo_agua: string;
  precio: number;
  puntuacion_promedio: number;
  imagenes: string[];
};

export const Campys = {
  id: 0,
  nombre_camping: "",
  descripcion_camping: "",
  direccion: "",
  telefono: "",
  longitud: "",
  latitud: "",
  prop_camping_Id: 0,
  abierto_fecha_desde: "",
  abierto_fecha_hasta: "",
  localidad: "",
  id_localidad: 0,
  provincia: "",
  id_provincia: 0,
  categoria: "",
  id_categoria: 0,
  cantidad_estrellas: 0,
  duchas: 0,
  baños: 0,
  mascotas: 0,
  rodantes: 0,
  proveduria: 0,
  salon_sum: 0,
  restaurant: 0,
  vigilancia: 0,
  pileta: 0,
  estacionamiento: 1,
  juegos_infantiles: 0,
  maquinas_gimnasia: 0,
  wifi: 0,
  parcela_techada: 0,
  parcela_agua_en_parcela: 0,
  parcela_iluminacion_toma_corriente: 0,
  parcela_superficie: 0,
  descripcion_periodo: "",
  descripcion_periodo_agua: "",
  precio: 0,
  puntuacion_promedio: 0,
  imagenes: [],
};

export type User = {
  id: number;
  nombre_completo: string;
  email: string;
  numero_celular: string | null;
  dni: string | null;
  direccion: string | null;
  foto: string | null;
  tipo: string;
  token: string;
};

export type FavoritesCampings = { id: number; nombre: string; imagen: string };

export type Bookings = {
  id: number;
  fecha_desde_reserva: string;
  fecha_hasta_reserva: string;
  cant_noches: number;
  total: number;
  id_estado: string;
  email: string;
  nombre_camping: string;
  id_campings: number;
};

export type filterCamps = {
  id_provincia: string;
  id_localidad: string;
  abierto_fecha_desde: string;
  abierto_fecha_hasta: string;
  precio: number[];
  reviews: number[];
  id_categoria: number[];
  parcela_superficie: number[];
  parcela_techada: number;
  parcela_agua_en_parcela: number;
  parcela_iluminacion_toma_corriente: number;
  mascotas: number;
  rodantes: number;
  proveduria: number;
  restaurant: number;
  pileta: number;
  vigilancia: number;
  maquinas_gimnasia: number;
  juegos_infantiles: number;
  salon_sum: number;
  wifi: number;
  estacionamiento: number;
};

export function reset() {
  return {
    id_provincia: "",
    id_localidad: "",
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
    estacionamiento: 0,
  };
}

export interface Inputs {
  nombre_camping: string;
  descripcion_camping: string;
  direccion: string;
  telefono: string;
  contacto_nombre: string;
  contacto_tel: string;
  CategoriaCampingId: number;
  LocalidadeId: number;
  ProvinciaId: number;
  wifi: boolean;
  duchas: number;
  baños: number;
  mascotas: boolean;
  rodantes: boolean;
  proveduria: boolean;
  salon_sum: boolean;
  parcela_superficie: number;
  parcela_agua_en_parcela: boolean;
  parcela_iluminacion_toma_corriente: boolean;
  parcela_techada: boolean;
  restaurant: boolean;
  vigilancia: boolean;
  pileta: boolean;
  estacionamiento: boolean;
  juegos_infantiles: boolean;
  maquinas_gimnasia: boolean;
  AbiertoPeriodoId: number;
  PeriodoAguaCalienteId: number;
  imagenes: string[];
  mayores: number;
  menores: number;
  rodante: number;
  abierto_fecha_desde: string;
  abierto_fecha_hasta: string;
  longitud: string;
  latitud: string;
  UsuarioId: number;
}

export interface PreInputsValues extends Inputs {
  id: number;
  precios: { id: number; precio: number; descrip_tarifa: string }[];
}

export type Reservas = {
  id_reserva: number;
  fecha_desde_reserva: string;
  fecha_hasta_reserva: string;
  cant_noches: number;
  total: number;
  descrip_estado: string;
  id_usuario: number;
  username: string;
  id_campings: number;
  nombre_camping: string;
  id_estado: string;
};


export type Reviews = {
  usuario: number | null;
  camping: number | undefined;
  puntaje: number | null;
  comentario: string;
}