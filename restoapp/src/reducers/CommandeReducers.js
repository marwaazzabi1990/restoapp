import {
  ADD_COMMANDE,
  DELETE_COMMANDE,
  GET_ALL_COMMANDE,
} from "../actions/types";
const initialState = [];
export default function CommandeReducer(state = initialState, action) {
  if (action.type === GET_ALL_COMMANDE) {
    return action.payload;
  }
  if (action.type === ADD_COMMANDE) {
    return [action.payload, ...state];
  }
  if (action.type === DELETE_COMMANDE) {
    return state.filter((commande) => commande.id !== action.payload);
  }
  return state;
}
