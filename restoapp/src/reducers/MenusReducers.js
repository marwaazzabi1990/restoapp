import { ADD_MENUS, DELETE_MENUS, GET_ALL_MENUS } from "../actions/types";
const initialState = [];
export default function MenusReducer(state = initialState, action) {
  if (action.type === GET_ALL_MENUS) {
    return action.payload;
  }
  if (action.type === ADD_MENUS) {
    return [action.payload, ...state];
  }
  if (action.type === DELETE_MENUS) {
    return state.filter((menu) => menu.id !== action.payload);
  }
  return state;
}
