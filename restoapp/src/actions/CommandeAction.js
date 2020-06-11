import { ADD_COMMANDE, DELETE_COMMANDE, GET_ALL_COMMANDE } from "./types";
import Axios from "axios";

/********ajout commande */

export const commander = (payload) => ({
  type: ADD_COMMANDE,
  payload,
});

export function addcmdFromApi(data) {
  return (dispatch) => {
    alert("ajouter au commande")
    Axios.post("http://localhost:3004/commande").then((res) =>
      dispatch(commander(res.data))
    );
  }
}
/***************get commande */
export const getAllCommande = (payload) => ({
  type: GET_ALL_COMMANDE,
  payload,
});

export function getCommandeFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:3004/commande").then((res) =>
      dispatch(getAllCommande(res.data))
    );
}