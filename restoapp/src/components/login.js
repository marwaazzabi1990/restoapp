import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import Nav from '../nav/Nav'
//import '../fichecss.css'
import { getusersFromApi } from '../actions/UserAction'
import { connect } from 'react-redux'

let tabmail = []
let password = []
class Login extends Component {
    errormail = React.createRef();
    errorpass = React.createRef();
    state = {
        pass: "",
        email: ""
    }
    componentDidMount() {
        return this.props.getusersFromApi()
    }
    changeemail(e) {
        let regx = /^[a-zA-Z]+@[a-z]+\.[a-z]+$/
        this.setState({ email: e.target.value })
        console.log(regx.test(this.state.login))
        if (regx.test(this.state.email) === false) {
            this.errormail.current.innerHTML = "essayer une valeur email valide"
            this.errormail.current.style = "color : red"
            console.log(this.state.login)
        }
        else {
            this.errormail.current.innerHTML = "bravo votre email est valide"
            this.errormail.current.style = "color : green"
        }
    }
    changepass(e) {
        this.setState({ pass: e.target.value })
        if (this.state.pass.length > 8) {
            this.errorpass.current.innerHTML = "mot de passe suffisante";
            this.errorpass.current.style = "color : green"
            console.log("sufissante")
        }
        else if (this.state.pass.length <= 8) {
            this.errorpass.current.innerHTML = " merci de choisir une strong passe word";
            this.errorpass.current.style = 'color : red';
            console.log("innnsufissante")
        }
    }

    preparation() {
        tabmail = this.props.users.map(el => el.email)
        password = this.props.users.map(el => el.password)
    }
    verefieruser(e) {
        this.preparation()
        console.log(tabmail, password)
        let pass = this.state.pass
        let email = this.state.email
        let id = -1
        for (let i = 0; i < this.props.users.length; i++) {
            if (pass === password[i] && email === tabmail[i])
                console.log(id = i)

        }
        if (id !== -1) {
            console.log(this.props.users[id])

            let x = this.props.users
            let name = x[id].first_name;
            let lastname = x[id].last_name;
            let avatar = x[id].image;
            localStorage.setItem("name", name)
            localStorage.setItem("lastname", lastname)
            localStorage.setItem("avatar", avatar)

        }
        else {
            window.location.reload()
            e.preventDefault()
        }
    }

    render() {
        //   const { users } = this.props;
        return (
            <div>
                {/*<Nav></Nav>*/}
                <div className="contenaire">
                    <div className="ui inverted segment">
                        <form class="ui success form inverted">
                            <h4 class="ui dividing header" style={{ color: "white" }}>Sign in</h4>
                            <div class="field">
                                <label>Email</label>
                                <input type="email" name="Email" placeholder="Email" onChange={(e) => this.changeemail(e)} />
                                <small ref={this.errormail}>Please enter a valid email address </small>
                            </div>
                            <div class="field">
                                <label>Password</label>
                                <input type="password" name="Password" placeholder="Password" onChange={(e) => this.changepass(e)} />
                                <small ref={this.errorpass}>enter a password + 8 characters</small>
                            </div>
                            <Link to="/"> <div class="ui submit button" onClick={(e) => this.verefieruser(e)}>Submit</div></Link>
                        </form>
                        <div class="ui floating message">
                            <p>you D'ont have acount !! <Link to="signup"> you can sing up from here </Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    users: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    getusersFromApi: () => dispatch(getusersFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
