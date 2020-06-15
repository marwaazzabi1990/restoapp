import React, { Component } from 'react';
import { connect } from "react-redux";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import {
    getPlatsFromApi,
    addmenuToApi,
    deletemenuToApi,
    ModifierPlats
} from "../actions/MenuAction";
import { MDBIcon } from "mdbreact";

import "./ModalPage.css"

class ModalPage extends Component {
    state = {
        id: this.props.el.id,
        title: this.props.el.title,
        prix: this.props.el.prix,
        img: this.props.el.img,
        item: [],
        addModelShow: false,

    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }


    render() {

        return (

            <MDBContainer>
                <MDBBtn color="info" onClick={this.toggle(8)}><MDBIcon icon="pencil-alt" /></MDBBtn>
                <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="top">
                    <MDBModalHeader toggle={this.toggle(8)}>Modifier Plats</MDBModalHeader>
                    <MDBModalBody>
                        <form>

                            <label></label>
                            <input type="text" name="title" defaultValue={this.props.el.title} onChange={(e) => this.setState({ title: e.target.value })} ></input>

                            <input type="text" name="prix" defaultValue={this.props.el.prix} onChange={(e) => this.setState({ prix: e.target.value })}></input>

                            <input type="text" defaultValue={this.props.el.img} name="img" onChange={(e) => this.setState({ img: e.target.value })}></input>
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
                            })} >Enrigistrer</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer >
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