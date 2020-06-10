import { ADD_COMMANDE, DELETE_COMMANDE, GET_ALL_COMMANDE } from "./types";
import Axios from "axios";

/********ajout commande */

export const commander = (payload) => ({
  type: ADD_COMMANDE,
  payload,
});

export function addcmdFromApi() {
  return (dispatch) =>
    Axios.post("http://localhost:3004/commande").then((res) =>
      dispatch(commander(res.data))
    );
}
