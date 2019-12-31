import React, { useState } from 'react';
import CustomInput from '../CustomTags/CustomInput'
import Form from '../CustomTags/Form'

function Login(props) {

    const [username, setUsername] = useState('')
    const [enterName, setEnterName] = useState(false)
    const [password, setPassword] = useState('')
    const [enterPass, setEnterPass] = useState(false)
    const [token, setToken] = useState('')

    function Log(e) {
        e.preventDefault();

        if (username === '') {
            setEnterName(true)
            setEnterPass(false)
            return false
        }
        if (password === '') {
            setEnterName(false)
            setEnterPass(true)
            return false
        }

        fetch
            (
                'https://localhost:5000/users/authenticate',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        "username": username,
                        "password": password
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            .then(res => res.json())
            .then(res => setToken(res.token))

        props.Token(token)
        sessionStorage.setItem("token", token)

        return true
    }

    return (
        <div>
            <Form onSubmit={Log} method='post'>
                <div>
                    Username:
                </div>
                <div>
                    <CustomInput
                        type="text"
                        placeholder="UserName"
                        value={username}
                        onValueChange={(e) => setUsername(e.target.value)}
                        onFocus={() => setEnterName(false)}
                    />
                </div>
                {enterName ?
                    <div>
                        Enter Proper Username
                    </div>
                    :
                    null
                }
                <div>
                    Password:
                </div>
                <div>
                    <CustomInput
                        type="password"
                        value={password}
                        placeholder="Password"
                        onValueChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setEnterPass(false)}
                    />
                </div>
                {enterPass ?
                    <div>
                        Enter Password
                    </div>
                    :
                    null
                }
                <CustomInput type="submit" value="LogIn" />
            </Form>
        </div>
    )
}

export default Login;