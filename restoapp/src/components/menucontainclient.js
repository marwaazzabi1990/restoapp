import React, { Component } from "react";
import { connect } from "react-redux";
import {
    getPlatsFromApi,
    addmenuToApi,
    deletemenuToApi,
} from "../actions/MenuAction";
import Flip from 'react-reveal/Flip';
import EdithItem from "./edithItem";
import { addcmdFromApi } from "../actions/CommandeAction";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody, MDBCol } from "mdbreact";
import ModalPage from "../components/ModalPageAjout"
import ModalPageModif from "../components/ModalPageModif"
//import { Button, ButtonToolbar } from "react-bootstrap";


import "./menucontain.css";

export class MenusContainerClient extends Component {
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
    quatite = (e) => {
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
    };
    componentDidMount() {
        this.props.getAllPlats();
    }
    render() {
        //console.log(this.state.item);
        const { menus } = this.props;
        // console.log(menus);

        return (
            //  let addModelClose = () => this.setState({ addModelShow: false });
            <div >



                <Flip top> <h1>Notre Menu </h1></Flip>



                <div className="menus-item">
                    {menus.map((el, i) => (
                        <div >

                            <MDBCol className="dispo" style={{ maxWidth: "29rem" }}>
                                <MDBCard>
                                    <MDBCardImage className="img-card-menu" src={el.img}
                                    />
                                    <MDBCardBody>
                                        <Flip top> <MDBCardTitle > {el.title}</MDBCardTitle>
                                            <MDBCardText>{el.prix}</MDBCardText></Flip>




                                        <MDBBtn className="btn-blue" onClick={() => this.props.addcmd(el)}> Commander</MDBBtn>

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
    menus: state.menus,
});

const mapDispatchToProps = (dispatch) => ({
    getAllPlats: () => dispatch(getPlatsFromApi()),
    addcmd: (plats) => dispatch(addcmdFromApi(plats)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenusContainerClient);
