import React, { Component } from 'react';
import { connect } from "react-redux";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import {
    getPlatsFromApi,
    addmenuToApi,
    deletemenuToApi,
} from "../actions/MenuAction";
import { addcmdFromApi } from "../actions/CommandeAction";
import "./ModalPage.css"

class ModalPage extends Component {
    state = {
        modal8: false,
        modal9: false,

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
                <MDBBtn color="info" onClick={this.toggle(8)}>Ajouter Plat</MDBBtn>
                <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="top">
                    <MDBModalHeader toggle={this.toggle(8)}>Ajouter Plats</MDBModalHeader>
                    <MDBModalBody>
                        <form>
                            <label>title de plats</label>
                            <input type="text" name="title" onChange={this.title}></input>
                            <label>prix</label>
                            <input type="text" name="prix" onChange={this.price}></input>
                            <label>image</label>
                            <input type="text" name="img" onChange={this.image}></input>

                        </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle(8)}>Close</MDBBtn>
                        <MDBBtn color="primary" classname="primary" onClick={() =>
                            this.props.addMenu({
                                title: this.state.title,
                                img: this.state.img,
                                prix: this.state.prix,
                                qte: 1
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
    getAllPlats: () => dispatch(getPlatsFromApi()),
    addMenu: (plats) => dispatch(addmenuToApi(plats)),
    deleteMenu: (el) => dispatch(deletemenuToApi(el)),

    addcmd: (plats) => dispatch(addcmdFromApi(plats)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalPage);