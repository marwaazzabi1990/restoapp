import { ADD_COMMANDE, DELETE_COMMANDE, GET_ALL_COMMANDE, GEt_ALL_TOTAL, VALIDCMD, MODIF_QTE } from "./types";
import Axios from "axios";


/*******************editer quantite*************** */

export const modifqte = (payload) => ({
  type: MODIF_QTE,
  payload,
})
export function modifqtee(data) {
  let id = data.id
  let a = data.img
  let b = data.prix
  let c = data.title
  let qte = data.qte
  return (dispatch) =>
    Axios.put(`http://localhost:3004/commande/${data.id}`, { img: a, prix: b, title: c, qte: qte }).then((res) => {
      dispatch(modifqte(res.data));
      window.location.reload(false);
    });
}










/*******VALID QTE */
export const validcmd = (payload) => ({
  type: VALIDCMD,
  payload
})
export function vlidcmdFromApi(data) {
  let id = data.id
  let somme = data.somme
  let nombrearticle = data.nombrearticle

  return (dispatch) =>
    Axios.post(`http://localhost:3004/order/`, { somme: somme, nombrearticle: nombrearticle }).then((res) => {
      dispatch(validcmd(res.data));
      window.location.reload(false);
    });
}



/********ajout commande */
var somme = 0;
var count = 0
export const commander = (payload) => ({
  type: ADD_COMMANDE,
  payload,
});


export function addcmdFromApi(data) {
  console.log(data)
  let id = data.id
  let a = data.img
  let b = data.prix
  let c = data.title
  let qte = data.qte

  /******* */



  /******** */
  return (dispatch) => {
    alert("ajouter au commande")

    Axios.post(`http://localhost:3004/commande`, { img: a, nom_plat: c, prix: b, qte: qte }).then((res) => {
      dispatch(commander(data))


    })
    /*  console.log(count)
      Axios.post('http://localhost:3004/total', {
        totalcommande: somme, qte: count
      }).then((res) => {
        console.log(res.data)
  
      })*/



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

/*******************************total */
/*export const getALLtotalCommande = (payload) => ({
  type: GEt_ALL_TOTAL,
  payload,
})

export function getCommandeTotalFromApi() {
  return (dispatch) =>
    Axios.get('http://localhost:3004/total').then((res) => {
      dispatch(getALLtotalCommande(res.data));
      //console.log(res.data)
    }
    );
}
*/