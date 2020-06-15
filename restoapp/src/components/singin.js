import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
//import '../fichecss.css'
//import { URL } from '../../actions/baseurl'
export default function Signup() {
    const name = useRef(null)
    const lastname = useRef(null)
    const password = useRef(null)
    const email = useRef(null)
    const image = useRef(null)
    const [show, setShow] = useState(false);
    function senddata() {
        axios.post(`http://localhost:3004/user`, {
            "first_name": name.current.value,
            "last_name": lastname.current.value,
            "password": password.current.value,
            "email": email.current.value,
            "image": image.current.value
        })
            .then(response => {
                console.log(response)
                setShow(true)
            })
            .catch(error => {
                console.log(error)
                alert(error)
            })

    }
    function senddatatoserver() {
        if (name.current.value !== '' && email.current.value !== '' && password.current.value !== '' && lastname.current.value !== '') {
            alert("Bien vous avez rempli tous les champs")
            senddata()
        }
        else
            alert("remplir tous les chanps")

    }
    return (

        <div className="ui inverted segment">
            <div class="ui message">
                <div class="header">
                    <h1>Inscrivez vous</h1>

                </div>
            </div>
            <form class="ui form inverted">

                <div class="field">
                    <div class="two fields">
                        <div class=" eight wide field">

                            <input ref={name} type="text" name="first-name" placeholder="First Name" required />
                        </div>
                        <div class=" eight wide field">

                            <input ref={lastname} type="text" name="last-name" placeholder="Last Name" required />
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div class="two fields">
                        <div class=" eight wide field">

                            <input type="email" ref={email} name="first-name" placeholder="Email" required />
                        </div>
                        <div class=" eight wide field">

                            <input type="password" ref={password} name="password" placeholder="Password" required />
                        </div>
                    </div>
                </div>
                {/* <div class="field">

                    <input type="text" ref={image} name="avatar" placeholder="avatar" required />
    </div>*/}
                <button value="submit" class="ui submit button" onClick={senddatatoserver}> submit</button>
            </form>
            <div class="ui floating message">
                <p>vous avez une compte !! <Link to="/login"> connectez vous</Link> </p>
            </div>
        </div>

    )
}
