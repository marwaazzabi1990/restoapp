import React, { Component } from "react";
import { connect } from "react-redux";
import {
    getCommandeFromApi

} from "../actions/CommandeAction";
import EdithItem from "./edithItem";
import { addcmdFromApi } from "../actions/CommandeAction";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody, MDBCol } from "mdbreact";
//import ModalPage from "../components/ModalPageAjout"
//import ModalPageModif from "../components/ModalPageModif"
//import { Button, ButtonToolbar } from "react-bootstrap";


import "./menucontain.css";

export class CommandeContainer extends Component {
    state = {
        item: [],
        addModelShow: false,
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

    componentDidMount() {
        this.props.getAllCommande();

    }
    render() {
        const { commande } = this.props;

        return (
            //  let addModelClose = () => this.setState({ addModelShow: false });
            <div >





                <div className="menus-item">
                    <h1>liste des commandes passé </h1>

                </div>
                <div className="menus-item">
                    {commande.map((el, i) => (
                        <div >

                            <MDBCol className="dispo" style={{ maxWidth: "22rem" }}>
                                <MDBCard>



                                    <MDBCardText> {el.platid}{el.nom_plat} {el.total}</MDBCardText>


                                    <MDBBtn className="btn-blue" onClick={() => this.props.addcmd(el)}> Commender</MDBBtn>

                                    <MDBBtn className="btn-red" onClick={() => this.props.deleteMenu(el.id)}><i class="fas fa-trash"></i>   Supprimer</MDBBtn>

                                </MDBCard>
                            </MDBCol>
                        </div>

                    ))}
                </div>



            </div >
        );
    }
}

const mapStateToProps = (state) => ({
    commande: state.commande,
});

const mapDispatchToProps = (dispatch) => ({
    getAllCommande: () => dispatch(getCommandeFromApi()),

});

export default connect(mapStateToProps, mapDispatchToProps)(CommandeContainer);
