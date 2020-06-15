import { ADD_MENUS, DELETE_MENUS, GET_ALL_MENUS, MODIF_MENUS } from "./types";
import Axios from "axios";

/* get all PLAT */

export const getAllPlats = (payload) => ({
  type: GET_ALL_MENUS,
  payload,
});

export function getPlatsFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:3004/menu").then((res) =>
      dispatch(getAllPlats(res.data))
    );
}

/* add  menu */
export const addMenu = (payload) => ({
  type: ADD_MENUS,
  payload,
});
export function addmenuToApi(data) {
  return (dispatch) =>
    Axios.post("http://localhost:3004/menu", data).then((res) =>
      dispatch(addMenu(data))
    );
}
/*modif menu*/
export const ModifierPlat = (payload) => ({
  type: MODIF_MENUS,
  payload,
});
export function ModifierPlats(data) {
  let id = data.id
  let a = data.img
  let b = data.prix
  let c = data.title
  
  return (dispatch) =>
    Axios.put(`http://localhost:3004/menu/${data.id}`, { img: a, prix: b, title: c }).then((res) => {
      dispatch(ModifierPlat(res.data));
      window.location.reload(false);
    });
}


/*delette menu */

export const deleteMenu = (payload) => ({
  type: DELETE_MENUS,
  payload,
});
export function deletemenuToApi(id) {
  return (dispatch) =>
    Axios.delete(`http://localhost:3004/menu/${id}`).then((res) => {
      dispatch(deleteMenu(res.data));
      window.location.reload(false);
    });
}
