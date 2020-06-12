import { ADD_COMMANDE, DELETE_COMMANDE, GET_ALL_COMMANDE } from "./types";
import Axios from "axios";

/********ajout commande */
var somme = 0;
var count = 0
export const commander = (payload) => ({
  type: ADD_COMMANDE,
  payload,
});


export function addcmdFromApi(data) {
  let id = data.id
  let a = data.img
  let b = data.prix
  let c = data.title





  return (dispatch) => {
    alert("ajouter au commande")

    Axios.post(`http://localhost:3004/commande`, { img: a, nom_plat: c, prix: b }).then((res) => {
      dispatch(commander(data))

      somme = somme + data.prix
      count = count + 1
      console.log(data)

    })
    console.log(count)
    Axios.post('http://localhost:3004/total', {
      totalcommande: somme, qte: count
    }).then((res) => {
      console.log(res.data)

    })



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