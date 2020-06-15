import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./singin.css"
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
        alert('rrrrrraaaaaaaaaaa')


        console.log(name.current.value)
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
                    <h1 className="title">Inscrivez vous</h1>

                </div>
            </div>
            <form class="ui form inverted">

                <div class="field">
                    <div class="two fields">
                        <div class=" eight wide field">
                            <label class="lb">Nom</label>

                            <input ref={name} type="text" name="first-name" className="innp" required />
                        </div>
                        <div class=" eight wide field">
                            <label class="lb">Prenom</label>

                            <input ref={lastname} type="text" className="inn" name="last-name" required />
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div class="two fields">
                        <div class=" eight wide field">
                            <label class="lb">Email</label>

                            <input type="email" ref={email} className="input" name="first-name" required />
                        </div>
                        <div class=" eight wide field">
                            <label class="lb">Mot de pass</label>

                            <input type="password" ref={password} name="password" className="input2" required />
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="lb">Image</label>

                    <input type="text" ref={image} name="avatar" class="input" required />
                </div>
                <button value="submit" class="ui submit button" onClick={senddatatoserver}> submit</button>
            </form>
            <div class="ui floating message">
                <p className="pp">vous avez une compte !! <Link to="/login"> connectez vous</Link> </p>
            </div>
        </div>

    )
}
