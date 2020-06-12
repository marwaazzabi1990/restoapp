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
        qte: this.props.commande.qte,
        item: [],
        addModelShow: false,
    };
    form = React.createRef()
    btn = React.createRef()
    alert = React.createRef()
    unmount = React.createRef()
    componentDidMount() {
        this.props.getcarteFromApi()
        console.log(this.btn.current.style = 'visibility: hidden;')
    }
    hidealert = () => {
        //this.alert.current.style = "visibility: hidden;"
        console.log("hh")
    }

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
    //increment = () => {
    /*  this.setState({
          qte++
 
      })*/
    somme() {
        let a = []
        let nombreaticle = this.props.commande.length;
        a = this.props.commande.map(el => el.prix)
        var somme = a.reduce((a, b) => +a + (+b))
        console.log(somme)
        this.form.current.innerHTML = `
        <div class="ui info message transition" >
      <i class="close icon" ></i> $
      <div class="header"> $
        Was this what you wanted?
          </div>
      <ul class="list">
        <li> La somme de votre panier est ${somme} DT </li>
        <li>Number of item : ${nombreaticle} </li>
      </ul>
    </div>
        `
        /*   this.form.current.style.color = "red"
           this.form.current.style.width = "1200px"
           console.log(this.btn.current.style = 'visibility: visible;')*/

    }

    componentDidMount() {
        this.props.getAllCommande();
        //this.props.getALLtotalCommande();

    }
    render() {
        const { commande } = this.props;
        const { totalCommande } = this.props;

        return (
            //  let addModelClose = () => this.setState({ addModelShow: false });
            <div >






                <h1>liste des commandes passé </h1>

                <div>


                    {console.log(this.props.totalCommande)}
                </div>



                <p> <div ref={this.form} className="positionleft">
                </div><button className="Positionright ui inverted green button" onClick={() => this.somme()}>Calculate sum</button></p>

                <div className="menus-item">
                    {commande.map((el, i) => (
                        <div >

                            <MDBCol className="dispo" style={{ maxWidth: "22rem" }}>
                                <MDBCard>
                                    <MDBCardImage className="img-card-menu" src={el.img}
                                        waves />
                                    <MDBCardBody>
                                        <MDBCardTitle>{el.title}</MDBCardTitle>
                                        <MDBCardText>{el.prix}</MDBCardText>




                                        <MDBBtn className="btn-blue" onClick={this.increment}> +</MDBBtn>   <MDBCardText>{el.qte}</MDBCardText>
                                        <MDBBtn className="btn-blue" > -</MDBBtn>

                                    </MDBCardBody>
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

    //  totalCommande: state.total,

});

const mapDispatchToProps = (dispatch) => ({
    getAllCommande: () => dispatch(getCommandeFromApi()),
    //  getALLtotalCommande: () => dispatch(getCommandeTotalFromApi())

});

export default connect(mapStateToProps, mapDispatchToProps)(CommandeContainer);
