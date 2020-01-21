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
    
    const [role, setRole] = useState('')
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
                'http://localhost:5000/login/authenticate',
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
            .then(res => {
                setToken(res.token)
                setRole(res.role)
            })
            .catch(error => setToken(null))

        if (token == null) {
            sessionStorage.removeItem("token")
            sessionStorage.removeItem("role")
            setWrongCreds(true)
        } else {
            sessionStorage.setItem("token", token)
            sessionStorage.setItem("role", role)
            props.Token(token);
            props.Role(role);
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
                                type="password"
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