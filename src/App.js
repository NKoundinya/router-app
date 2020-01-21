import React, { useState, useEffect } from "react";
import './App.css';
import './CSS/Form.css';
import Login from './Login/Login'
import Admin from './Components/Admin/Admin'
import { TokenProvider } from './Contexts/TokenContext'
import { CustomInput } from './CustomTags/Form'

export default function App() {

  const [token, setToken] = useState('')
  const [role, setRole] = useState('')

  function LogOut() {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("role")
    setToken(sessionStorage.getItem("token"))
    setRole(sessionStorage.getItem("role"))
  }

  useEffect(() => {
    setToken(sessionStorage.getItem("token"))
    setRole(sessionStorage.getItem("role"))
  }, [token])

  return token ? (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <CustomInput
            type="button"
            value="LogOut"
            onClick={LogOut}
          />
        </div>

        {
          role === "admin" ?
            <div className="row">
              <TokenProvider value={token}>
                <Admin />
              </TokenProvider>
            </div>
            :
            role === "manager"
              ?
              <div>
                Manager
              </div>
              :
              <div>
                Employee
              </div>
        }
      </header>
    </div>

  )
    :
    (
      <div className="App">
        <header className="App-header">
          <Login Token={(token) => setToken(token)} Role={(role) => setRole(role)} />
        </header>
      </div>
    )
}
