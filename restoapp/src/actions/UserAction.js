import { ADD_USER, DELETE_USER, GET_ALL_USER } from "./types";
import Axios from "axios";
/* get all USER */

export const getAllUser = (payload) => ({
  type: GET_ALL_USER,
  payload,
});

export function getUserFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:3004/user").then((res) =>
      dispatch(getAllUser(res.data))
    );
}

/*add plat to commande*/
/*export const commander = (payload) => ({
  type: COMMANDE,
  payload,
});
export function commanderPlatsFromApi() {
  return (dispatch) =>
    Axios.post("http://localhost:3004/commande").then((res) =>
      dispatch(commander(res.data))
    );
}*/
/* add  USER */
export const ADD_USER = (payload) => ({
  type: ADD_USER,
  payload,
});

/*delette USER */

export const deleteUser = (payload) => ({
  type: DELETE_USER,
  payload,
});
