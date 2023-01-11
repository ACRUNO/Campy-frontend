import axios from "axios";
import { RootState, AppDispatch } from "../store";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

export const GET_ALLPOSTS: string = "GET_ALLPOSTS";
export const GET_POST: string = "GET_POST";
export const GET_POST_IMAGENES: string = "GET_POST_IMAGENES";
export const GET_POST_COMENTARIOS: string = "GET_POST_COMENTARIOS";
export const CREATE_POST: string = "CREATE_POST";
export const CREATE_COMENTARIO: string = "CREATE_COMENTARIO ";
export const BUSCAR_POSTS = "BUSCAR_POSTS";
export const VISITAS = "VISITAS";
export const LIMPIAR_DETALLE = "LIMPIAR_DETALLE";
export const DELETE_POST = "DELETE_POST";
export const DELETE_COMENTARIO = "DELETE_COMENTARIO";
export const COMENT_VISTOS = "COMENT_VISTOS";
export const MODIFICAR_COMENTARIO = "MODIFICAR_COMENTARIO";

// TRAE TODOS LOS POSTS
export function getAll_posts(): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> {
  return async function (dispatch: AppDispatch) {
    try {
      let json = await axios.get(`/api/blog`);
      return dispatch({
        type: GET_ALLPOSTS,
        payload: json.data,
      });
    } catch (error) {
      return (error);
    }
  };
}

// TRAE EL POST EN DETALLE (C/ IMAGENES Y COMENTARIOS)
export function getPostById(
  id: any
): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function (dispatch: AppDispatch) {
    try {
      let json = await axios.get(`/api/blog/${id}`);
      return dispatch({
        type: GET_POST,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// TRAE LAS IMAGENES DE UN POST
export function getImagenesByPostId(
  id: number
): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function (dispatch: AppDispatch) {
    try {
      let json = await axios.get(`/api/blog/imagenes/${id}`);
      return dispatch({
        type: GET_POST_IMAGENES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// TRAE LOS COMENTARIOS DE UN POST
export function getComentariosByPostId(
  id: number
): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function (dispatch: AppDispatch) {
    try {
      let json = await axios.get(`/api/blog/comentarios/${id}`);
      return dispatch({
        type: GET_POST_COMENTARIOS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// MODIFICA EL TEXTO O IMAGEN DE UN POST
export function modificarPost(
  id: number,
  token: string,
  texto: any,
  imagenes: any,
  reload: () => void
): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function (dispatch: AppDispatch) {
    try {


      let json = await axios.put(
        `/api/blog/${id}?texto=${texto}&imagenes=${imagenes.imagenes.length ? imagenes.imagenes.join(",") : ""
        }`,
        {},
        {
          headers: { authorization: token },
        }
      );

      dispatch({
        type: "MODIFICAR_POST",
        payload: json.data,
      });

      reload();
    } catch (error) {
      console.log(error);
    }
  };
}

// MODIFICA EL COMENTARIO DE UN POST
export function modificarComentario(
  idComentario: any,
  token: string,
  comentario: string
): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function (dispatch: AppDispatch) {
    try {
      let json = await axios.put(
        `/api/blog/comentarios/${idComentario}?comentario=${comentario}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      return dispatch({
        type: "MODIFICAR_COMENTARIO",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function crearPost(
  data: {
    titulo: string;
    texto: string;
    imagenes: string[];
    usuarioId: number;
  },
  token: string, navigate: () => void
) {
  return async function (dispatch: AppDispatch) {
    try {
      let result = await axios.post("/api/blog/create", data, {
        headers: { authorization: token },
      });
      dispatch({
        type: CREATE_POST,
        payload: result.data,
      });
      navigate()
    } catch (error: any) {
      console.log(error);
    }
  };
}

export function crearComentario(
  data: { comentario: string; usuarioId: number; postId: number },
  token: string
) {
  return async function (dispatch: AppDispatch) {

    try {
      let result = await axios.post("/api/blog/comentario", data, {
        headers: { authorization: token },
      });
      return dispatch({
        type: CREATE_COMENTARIO,
        payload: result.data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
}

export function getPosts_byname(name: string) {
  return { type: BUSCAR_POSTS, payload: name };
}

export function visualizaciones(
  id: number,
  data: { visitas: number },
  navigate: () => void
): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function (dispatch: AppDispatch) {
    try {
      let json = await axios.put(`/api/blog/visualizaciones/${id}`, data);

      dispatch({
        type: VISITAS,
        payload: json.data,
      });

      navigate();
    } catch (error) {
      console.log(error);
    }
  };
}

/* export function limpiarDetalle() {

    return { type: LIMPIAR_DETALLE }
} */

export function cambiarComentariosVistos(
  id: number,
  callback: () => void
): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function (dispatch: AppDispatch) {
    try {
      let json = await axios.put(`/api/blog/comentarios/vistos/${id}`);
      dispatch({
        type: COMENT_VISTOS,
        payload: json.data,
      });
      callback();
    } catch (error) {
      console.log(error);
    }
  };
}

export function limpiarDetalle() {
  return { type: LIMPIAR_DETALLE };
}

export function deletePost(
  id: any,
  token: string
): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function (dispatch: AppDispatch) {
    try {
      let json = await axios.delete(`/api/blog/${id}`, {
        headers: { authorization: token },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteComentario(
  id: any,
  token: string
): ThunkAction<void, RootState, unknown, AnyAction> {
  return async function (dispatch: AppDispatch) {
    try {
      let json = await axios.delete(`/api//blog/comentarios/${id}`, {
        headers: { authorization: token },
      });
      return dispatch({
        type: "DELETE_COMENTARIO",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
