import React, { Component } from "react";
import { connect } from "react-redux";
import {
    getOrderFromApii
} from "../actions/CommandeAction";
import Flip from 'react-reveal/Flip';
import EdithItem from "./edithItem";
import { addcmdFromApi } from "../actions/CommandeAction";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody, MDBCol } from "mdbreact";
import ModalPage from "../components/ModalPageAjout"
import ModalPageModif from "../components/ModalPageModif"
//import { Button, ButtonToolbar } from "react-bootstrap";


import "./menucontainclient.css";

export class Commandepasser extends Component {
    state = {
        item: [],
        title: "",
        prix: "",
        qte: 0,
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
    /* quatite = (e) => {
         this.setState({ qte: e.target.value });
         var qte = this.state.qte
     };
     price = (e) => {
         this.setState({ prix: e.target.value });
     };
     image = (e) => {
         this.setState({ img: e.target.value });
     };
     edither = (el) => {
         this.setState({ item: el });
     };*/
    componentDidMount() {
        this.props.getOrderFromApi();
    }
    render() {
        //console.log(this.state.item);
        const { order } = this.props;
        console.log(order);

        return (
            //  let addModelClose = () => this.setState({ addModelShow: false });
            <div >



                <Flip top> <h1>Liste de commande Passer</h1></Flip>



                <div className="menus-item">
                    {(order.map((el, i) => (
                        <div>
                            <h1> {el.somme}</h1>
                            <h2>{el.nombrearticle}</h2>
                            <h3>  {el.date}</h3>
                            <h4>{el.nomuser}</h4>
                        </div>

                    )))}

                </div>

            </div >
        );
    }
}

const mapStateToProps = (state) => ({
    order: state.commande,
});

const mapDispatchToProps = (dispatch) => ({
    getOrderFromApi: () => dispatch(getOrderFromApii()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Commandepasser);
