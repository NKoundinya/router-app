import React, { useState, useEffect } from "react";
import './App.css';
import './CSS/Form.css';
import Login from './Components/Login'
import Home from './Components/Home'
import { TokenProvider } from './Contexts/TokenContext'
import { CustomInput } from './CustomTags/Form'

export default function App() {

  const [token, setToken] = useState('')

  function LogOut() {
    sessionStorage.removeItem("token")
    setToken(sessionStorage.getItem("token"))
  }

  useEffect(() => {
    setToken(sessionStorage.getItem("token"))
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

        <div className="row">
          <TokenProvider value={token}>
            <Home />
          </TokenProvider>
        </div>
      </header>
    </div>

  )
    :
    (
      <div className="App">
        <header className="App-header">
          <Login Token={(token) => setToken(token)} />
        </header>
      </div>
    )
}
