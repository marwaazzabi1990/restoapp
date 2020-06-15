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
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { MDBIcon } from "mdbreact";
//import { Button, ButtonToolbar } from "react-bootstrap";


import "./menucontainclient.css";
import Axios from "axios";

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
    delateallorder = (id) => {
        Axios.delete(`http://localhost:3004/order/${id}`).then(response => {
            console.log(response)

        })
        alert('vous avez refuser cette commande')
        window.location.reload(false);


    }
    accepte = () => {
        alert('cette commande est accepté')
    }


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

                <div>


                    <Flip top> <h1>Liste de commande Passer</h1></Flip>
                </div>
                <div>

                    <MDBTable>

                        <MDBTableHead>




                        </MDBTableHead>

                        {(order.map((el, i) => (

                            <div >



                                <tr>
                                    <td>nom utlisateur</td>
                                    <td>Somme</td>
                                    <td>Quantite</td>
                                    <td>Date</td>
                                    <td>Action</td>
                                </tr>
                                <MDBTableBody >
                                    <tr>
                                        <td className="tbody">{el.nomuser}</td>
                                        <td className="tbody">{el.somme}</td>
                                        <td className="tbody">{el.nombrearticle}</td>
                                        <td className="tbody">{el.date}</td>
                                        <td>
                                            <div className="pos2">
                                                <div>
                                                    <button onClick={() => this.accepte()} className="bth"><MDBIcon icon="calendar-check" /></button>
                                                </div>
                                                <div>
                                                    <button onClick={() => this.delateallorder(el.id)} className="bth"><MDBIcon icon="calendar-times" /></button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>


                                </MDBTableBody>
                            </div>


                        )))};
                        </MDBTable>
                </div>
            </div>
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
