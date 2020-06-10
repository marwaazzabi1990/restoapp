import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPlatsFromApi,
  addmenuToApi,
  deletemenuToApi,
} from "../actions/MenuAction";
import EdithItem from "./edithItem";
import { addcmdFromApi } from "../actions/CommandeAction";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./menucontain.css";

export class MenusContainer extends Component {
  state = {
    item: [],
  };

  /*addtocmd = (e) => {
    this.state.commande.push(e);
    console.log(this.state.commande);
  };*/

  // };*/
  //food = Object.assign({}, this.state.food);
  /* handelchange = (e) => {
    //this.setState({ ...this.state.jasper, name: "someothername" });
    this.setState({
      title: title.target.value,
      prix: prix.target.value,
      img: img.target.value,
    });

    //console.log(this.state.food.title);
  };*/
  title = (e) => {
    this.setState({ title: e.target.value });
  };
  price = (e) => {
    this.setState({ prix: e.target.value });
  };
  image = (e) => {
    this.setState({ img: e.target.value });
  };
  edither = (el) => {
    this.setState({ item: el });
  };
  componentDidMount() {
    this.props.getAllPlats();
  }
  render() {
    console.log(this.state.item);
    const { menus } = this.props;
    console.log(menus);

    return (
      <div className="menus-item">
        <div>
          {menus.map((el, i) => (
            <div>
              <span>
                <span className="colored">{el.id}</span>{" "}
              </span>
              <span>
                <img src={el.img}></img>
              </span>{" "}
              <span>
                <span className="colored">{el.title}</span>
              </span>
              <span>
                <span className="colored">{el.prix}</span>
              </span>
              <Link to='edit' el={el}>
                <button onClick={() => this.edither(el)}>Editer</button>
              </Link>
              
              <button onClick={() => this.props.addcmd(el)}>Commander</button>
              <button onClick={() => this.props.deleteMenu(el.id)}>
                Supprimer{" "}
              </button>
            </div>

            /*  <MenuItem
            key={i}
            menuData={el}
            state={this.state}
            addtocmd={this.addtocmd({id:el.id,
              title:el.title,
              price: el.price.el.price})}
          />*/
          ))}
        </div>
        <div>
          <input type="text" name="title" onChange={this.title}></input>
          <label>prix</label>
          <input type="text" name="prix" onChange={this.price}></input>
          <label>image</label>
          <input type="text" name="img" onChange={this.image}></input>
          <button
            onClick={() =>
              this.props.addMenu({
                title: this.state.title,
                img: this.state.img,
                prix: this.state.prix,
              })
            }
          >
            ajouter plat
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  menus: state.menus,
});

const mapDispatchToProps = (dispatch) => ({
  getAllPlats: () => dispatch(getPlatsFromApi()),
  addMenu: (plats) => dispatch(addmenuToApi(plats)),
  deleteMenu: (el) => dispatch(deletemenuToApi(el)),

  addcmd: (plats) => dispatch(addcmdFromApi(plats)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenusContainer);
