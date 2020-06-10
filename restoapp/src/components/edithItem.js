import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPlatsFromApi,
  addmenuToApi,
  deletemenuToApi,
} from "../actions/MenuAction";
import { addcmdFromApi } from "../actions/CommandeAction";

export class EdithItem extends Component {
  render() {
    return (
      <div>
       {
         <h1>
         {this.props.el.title}</h1>
         
       }
       <h1>Eld</h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  menus: state.menus,
});

const mapDispatchToProps = (dispatch) => ({
  /* getAllPlats: () => dispatch(getPlatsFromApi()),
  addMenu: (plats) => dispatch(addmenuToApi(plats)),
  deleteMenu: (el) => dispatch(deletemenuToApi(el)),

  addcmd: (plats) => dispatch(addcmdFromApi(plats)),*/
});
export default connect(mapStateToProps, mapDispatchToProps)(EdithItem);
