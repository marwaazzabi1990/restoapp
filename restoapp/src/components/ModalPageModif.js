import React, { Component } from 'react';
import { connect } from "react-redux";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import {
    getPlatsFromApi,
    addmenuToApi,
    deletemenuToApi,
    ModifierPlats
} from "../actions/MenuAction";
import { addcmdFromApi } from "../actions/CommandeAction";
import "./ModalPage.css"

class ModalPage extends Component {
    state = {

        id: this.props.el.id,

        item: [],
        addModelShow: false,

    }
    title = (e) => {
        this.setState({ title: e.target.value });
    };
    price = (e) => {
        this.setState({ prix: e.target.value });
    };
    image = (e) => {
        this.setState({ img: e.target.value });
    };

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }


    render() {

        return (

            <MDBContainer>
                <MDBBtn color="info" onClick={this.toggle(8)}>Editer Plats</MDBBtn>
                <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="top">
                    <MDBModalHeader toggle={this.toggle(8)}>Modifier Plats</MDBModalHeader>
                    <MDBModalBody>
                        <form>

                            <label>{this.props.el.title}</label>
                            <input type="text" name="title" onChange={this.title}></input>
                            <label>{this.props.el.prix}</label>
                            <input type="text" name="prix" onChange={this.price}></input>
                            <label>{this.props.el.prix}</label>
                            <input type="text" name="img" onChange={this.image}></input>
                            <h1>{this.props.el.id}</h1>
                        </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle(8)}>Close</MDBBtn>
                        <MDBBtn color="primary" classname="primary" onClick={() =>
                         
                            this.props.adModifierPlatdMenu({
                                id: this.state.id,
                                title: this.state.title,
                                img: this.state.img,
                                prix: this.state.prix,
                            })} > Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}
const mapStateToProps = (state) => ({
    menus: state.menus,
});
const mapDispatchToProps = (dispatch) => ({

    adModifierPlatdMenu: (plats) => dispatch(ModifierPlats(plats)),


});

export default connect(mapStateToProps, mapDispatchToProps)(ModalPage);