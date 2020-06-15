import React, { Component } from 'react';
import { connect } from "react-redux";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import {


    modifqtee
} from "../actions/CommandeAction";
import { addcmdFromApi } from "../actions/CommandeAction";
import "./ModalPage.css"
import { MDBIcon } from "mdbreact";


class Modalmodifqte extends Component {
    state = {
        id: this.props.el.id,
        title: this.props.el.title,
        prix: this.props.el.prix,
        img: this.props.el.img,
        qte: this.props.el.qte,
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
                <MDBBtn color="primary" onClick={this.toggle(3)}><MDBIcon icon="pencil-alt" /></MDBBtn>
                <MDBModal isOpen={this.state.modal3} toggle={this.toggle(3)} size="sm">
                    <MDBModalHeader toggle={this.toggle(3)}>Editer Quantite</MDBModalHeader>
                    <MDBModalBody>
                        <form>

                            <label> vous pouvez modifier quantite</label>
                            <input type="text" defaultValue={this.props.el.qte} name="img" onChange={(e) => this.setState({ qte: e.target.value })}></input>

                        </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle(8)}>Close</MDBBtn>
                        <MDBBtn color="primary" onClick={() =>

                            this.props.modifqte({
                                id: this.state.id,
                                title: this.state.title,
                                img: this.state.img,
                                prix: this.state.prix,
                                qte: this.state.qte
                            })} >Save</MDBBtn>
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

    //adModifierPlatdMenu: (plats) => dispatch(ModifierPlats(plats)),
    modifqte: (plats) => dispatch(modifqtee(plats))


});

export default connect(mapStateToProps, mapDispatchToProps)(Modalmodifqte);

