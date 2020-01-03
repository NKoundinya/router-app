import React, { useState } from 'react';
import { CustomInput } from '../CustomTags/Form'
import Form from '../CustomTags/Form'
import '../CSS/Form.css'

function Login(props) {

    const [username, setUsername] = useState('')
    const [enterName, setEnterName] = useState(false)
    const [password, setPassword] = useState('')
    const [enterPassword, setEnterPassword] = useState(false)

    const [wrongCreds, setWrongCreds] = useState(false)

    const [token, setToken] = useState(null)

    function Log(e) {
        e.preventDefault();

        if (username === '') {
            setEnterName(true)
            setEnterPassword(false)
            return false
        }
        if (password === '') {
            setEnterName(false)
            setEnterPassword(true)
            return false
        }

        fetch
            (
                'https://localhost:5000/login/authenticate',
                {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            "username": username,
                            "password": password
                        }
                    ),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            .then(res => res.json())
            .then(res => setToken(res.token))
            .catch(error => setToken(null))

        if (token == null) {
            sessionStorage.removeItem("token")
            setWrongCreds(true)
        } else {
            sessionStorage.setItem("token", token)
            props.Token(token);
            setWrongCreds(false)
        }

        return true
    }

    return (
        <div>
            <div className="container">
                <Form onSubmit={Log} method='post'>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="Username">
                                Username
                            </label>
                        </div>
                        <div className="col-75">
                            <CustomInput
                                type="text"
                                value={username}
                                onValueChange={(e) => setUsername(e.target.value)}
                                placeholder={'User Name'}
                                onFocus={() => setEnterName(false)}
                            />
                        </div>
                        {enterName ? <label className="red">Enter Username</label> : null}
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="Password">Password</label>
                        </div>
                        <div className="col-75">
                            <CustomInput
                                type="text"
                                value={password}
                                onValueChange={(e) => setPassword(e.target.value)}
                                placeholder={'Password'}
                                onFocus={() => setEnterPassword(false)}
                            />
                        </div>
                        {enterPassword ? <label className="red">Enter Password</label> : null}
                    </div>


                    <div className="row">
                        <CustomInput
                            type="submit"
                            value={"Login"}
                        />
                    </div>
                    {wrongCreds == null ? <label className="red">WRONG CREDS</label> : null}
                </Form>
            </div>
        </div>
    )
}

export default Login;