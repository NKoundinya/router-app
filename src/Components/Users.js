import React, { useState, useContext } from 'react';
import Form, { CustomInput } from '../CustomTags/Form'
import TokenContext from '../Contexts/TokenContext'
import '../CSS/Form.css'

function Users() {

    const [username, setUsername] = useState('')
    const [enterUsername, setEnterUsername] = useState('')

    const [password, setPassword] = useState('')
    const [enterPassword, setEnterPassword] = useState('')

    const [role, setRole] = useState('')
    const [enterRole, setEnterRole] = useState('')

    const [data, setData] = useState(null)

    const [error, setError] = useState()

    const token = useContext(TokenContext)

    const submitData = () => {

        if (username === '') {

            setEnterUsername(true)
            setEnterPassword(false)
            setEnterRole(false)

            return false
        }

        if (password === '') {

            setEnterUsername(false)
            setEnterPassword(true)
            setEnterRole(false)

            return false
        }

        if (role === '') {

            setEnterUsername(false)
            setEnterPassword(false)
            setEnterRole(true)

            return false
        }

        debugger
        return fetch
            ('https://localhost:5000/user/add-user',
                {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            "username": username,
                            "password": password,
                            "role": role
                        }
                    ),
                    headers: {
                        "Content-Type": 'application/json',
                        "Authorization": "Bearer " + token
                    }
                }
            )
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => {
                setError(err)
                return false
            })

    }

    return (
        <div>
            <Form onSubmit={(e) => {
                e.preventDefault();
                submitData();
            }}>

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
                            onFocus={() => setEnterUsername(false)}
                        />
                    </div>
                    {enterUsername ? <label className="red">Enter Username</label> : null}
                </div>

                <div className="row">
                    <div className="col-25">
                        <label htmlFor="Password">Set Password </label>
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
                    <div className="col-25">
                        <label htmlFor="Role">Set Role</label>
                    </div>
                    <div className="col-75">
                        <CustomInput
                            type="text"
                            value={role}
                            onValueChange={(e) => setRole(e.target.value)}
                            placeholder={'Role'}
                            onFocus={() => setEnterRole(false)}
                        />
                    </div>
                    {enterRole ? <label className="red">Enter Role</label> : null}
                </div>

                <div className="row">
                    <CustomInput
                        type="submit"
                        value={"ADD"}
                    />
                </div>

            </Form>
            {
                data ?
                    (
                        <>
                            <div>
                                Id - {data.id}
                            </div>
                            <div>
                                Username - {data.username}
                            </div>
                            <div>
                                Role - {data.role}
                            </div>
                        </>
                    )
                    :
                    error ? "User Already Exists" : null
            }
        </div>
    )
}

export default Users;