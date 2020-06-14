import React, { Component } from "react";
import { connect } from "react-redux";
import {
    getCommandeFromApi
    , vlidcmdFromApi
} from "../actions/CommandeAction";
import EdithItem from "./edithItem";
import { addcmdFromApi } from "../actions/CommandeAction";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MDBTableEditable, MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBIcon, MDBCardText, MDBCardBody, MDBCol, MDBCardHeader, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
//import ModalPage from "../components/ModalPageAjout"
//import ModalPageModif from "../components/ModalPageModif"
//import { Button, ButtonToolbar } from "react-bootstrap";
import "./commandecontainer.css"
import Modalmodifqte from "./Modelmodifqte"
import Axios from "axios";


import "./menucontain.css";

const columns = ["Person Name", "Age", "Company Name", "Country", "City"];

const data = [
    ["Aurelia Vega", 30, "Deepends", "Spain", "Madrid"],
    ["Guerra Cortez", 45, "Insectus", "USA", "San Francisco"],
    ["Guadalupe House", 26, "Isotronic", "Germany", "Frankfurt am Main"],
    ["Elisa Gallagher", 31, "Portica", "United Kingdom", "London"]
];





var somme = 0
let nombreaticle = 0
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
    total() {

        let a = []
        let c = []
        let d = []
        nombreaticle = this.props.commande.length;
        a = this.props.commande.map(el => el.prix)


        console.log(a)
        c = this.props.commande.map(el => el.qte)
        var qte = c.reduce((c, b) => +c + (+b))
        console.log(c)
        for (let i = 0; i < nombreaticle; i++) {
            d.push(a[i] * c[i])
        }

        //  console.log(d)

        for (let i = 0; i < d.length; i++) {
            somme = somme + d[i]
        }
        console.log(somme)
        this.state.item.push(somme)
        this.state.item.push(qte)
        console.log(this.state.item)


        this.form.current.innerHTML = `
      
     
      <ul class="list">
        <h5> Le total de votre  comande est ${somme} DT </h5>
        <h6>vous avez : ${qte} Article </h6>
      </ul>
     
    </div>
        `


    }

    componentDidMount() {
        this.props.getAllCommande();
        //this.props.getALLtotalCommande();

    }
    orderbutton() {
        let date = Date(Date.now()).toString().substring(0, 25)
        Axios.post(`http://localhost:3004/order/`, ({
            "somme": somme,
            "nombrearticle": nombreaticle,
            "date": date
        }))
            .then((res) => alert('MERCI AVOIR NOUS VISTER'))

            .catch((error) => alert(error))


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




                <p className="centre-item" ref={this.btn}><button className="btn-valider" onClick={() => this.orderbutton()}>Confirmer votre commande</button></p>


                <MDBTable>

                    <MDBTableHead>




                    </MDBTableHead>
                    {commande.map((el, i) => (
                        <div >



                            <tr>
                                <td>image</td>
                                <td>Plats</td>
                                <td>Prix</td>
                                <td>Quantite</td>
                            </tr>
                            <MDBTableBody >
                                <tr>
                                    <td className="tbody"><img className="imgcmd" src={el.img} /></td>
                                    <td className="tbody">{el.nom_plat}</td>
                                    <td className="tbody">{el.prix}</td>
                                    <td className="tbody">{el.qte}</td>
                                    <td> <Modalmodifqte el={el}></Modalmodifqte></td>
                                </tr>


                            </MDBTableBody>
                        </div>
                    ))}


                </MDBTable>
                <p> <div ref={this.form} className="positionleft">
                </div><button className="btn-valider" onClick={() => this.total()}>Total de commande</button></p>





                {/*  <div className="menus-item">
                    {commande.map((el, i) => (
                        <div >

                            <MDBCol className="dispo" style={{ maxWidth: "22rem" }}>
                                <MDBCard>
                                    <MDBCardImage className="img-card-menu" src={el.img}
                                        waves />
                                    <MDBCardBody>
                                        <MDBCardTitle>{el.title}</MDBCardTitle>
                                        <MDBCardText>{el.prix} {el.qte}</MDBCardText>




                                        <MDBBtn className="btn-blue" onClick={this.increment}> +</MDBBtn>   {el.qte}
                                        <MDBBtn className="btn-blue" onClick={this.dicrement} > -</MDBBtn>

                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </div>

                    ))}
                    </div>*/}



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
    validcmd: (item) => dispatch(vlidcmdFromApi(item))
    //  getALLtotalCommande: () => dispatch(getCommandeTotalFromApi())

});

export default connect(mapStateToProps, mapDispatchToProps)(CommandeContainer);
