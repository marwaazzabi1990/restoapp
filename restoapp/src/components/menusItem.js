import React, { Component } from "react";
import { connect } from "react-redux";

import "./menusItem.css";
export class MenuItem extends Component {
  state = {
    commande: [],
    count: 0,
  };
  render() {
    return (
      <div>
        <div>
          <span>
            <span className="colored">{this.props.menuData.id}</span>{" "}
          </span>
          <span>
            <img src={this.props.menuData.img}></img>
          </span>{" "}
          <span>
            <span className="colored">{this.props.menuData.title}</span>
          </span>
          <span>
            <span className="colored">{this.props.menuData.prix}</span>
          </span>
          <button onClick={() => this.props.addcmd()}>Commander</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addcmd: () => dispatch(addcmdFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
