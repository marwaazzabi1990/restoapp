import React, { Component } from "react";
import { connect } from "react-redux";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
} from "mdbreact";


export class Singin extends Component {
    render() {


        return (
            <div>
                <MDBContainer >
                    <MDBRow>
                        <MDBCol md="9">
                            <form >>
                                <p className="h5 text-center mb-4">Sign in</p>
                                <div className="grey-text">
                                    <MDBInput label="Type your email" md="9" icon="envelope" type="email" validate error="wrong"
                                        success="right" />
                                    <MDBInput label="Type your password" icon="lock" group type="password" validate />
                                </div>
                                <div className="text-center">
                                    <MDBBtn>Login</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer></div>
        )
    }

}
const mapStateToProps = (state) => ({
    menus: state.menus,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Singin);