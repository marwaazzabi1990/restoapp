import { ADD_MENUS, DELETE_MENUS, GET_ALL_MENUS } from "./types";
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
