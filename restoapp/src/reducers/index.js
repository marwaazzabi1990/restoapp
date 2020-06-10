import { combineReducers } from "redux";
import MenusReducer from "./MenusReducers";
import CommandeReducer from "./CommandeReducers";
import useReducer from "./UserReducers";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const allReducers = combineReducers({
  menus: MenusReducer,
  commande: CommandeReducer,
  user: useReducer,
});

export default allReducers;
