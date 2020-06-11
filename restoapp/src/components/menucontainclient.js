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
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody, MDBCol } from "mdbreact";
import ModalPage from "../components/ModalPageAjout"
import ModalPageModif from "../components/ModalPageModif"
//import { Button, ButtonToolbar } from "react-bootstrap";


import "./menucontain.css";

export class MenusContainerClient extends Component {
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
        //console.log(this.state.item);
        const { menus } = this.props;
        // console.log(menus);

        return (
            //  let addModelClose = () => this.setState({ addModelShow: false });
            <div >



                <h1>Notre cher client <span>voila notre menu</span> </h1>



                <div className="menus-item">
                    {menus.map((el, i) => (
                        <div >

                            <MDBCol className="dispo" style={{ maxWidth: "22rem" }}>
                                <MDBCard>
                                    <MDBCardImage className="img-card-menu" src={el.img}
                                        waves />
                                    <MDBCardBody>
                                        <MDBCardTitle>{el.title}</MDBCardTitle>
                                        <MDBCardText>{el.prix}</MDBCardText>

                                        <MDBBtn className="btn-blue" onClick={() => this.props.addcmd(el)}> Commender</MDBBtn>

                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </div>

                    ))}
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
    addcmd: (plats) => dispatch(addcmdFromApi(plats)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenusContainerClient);
