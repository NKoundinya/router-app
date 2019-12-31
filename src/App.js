import React, { useState, useEffect } from "react";
import Login from './Components/Login'
import Home from './Components/Home'
import { TokenProvider } from './Contexts/TokenContext'
import CustomInput from './CustomTags/CustomInput'

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
    <nav>
      {/* <Nav Bar> */}
      <CustomInput type="button" value="LogOut" onClick={LogOut} />
      <TokenProvider value={token}>
        <Home />
      </TokenProvider>
      {/* </ Nav Bar> */}
    </nav>
  )
    :
    (
      <Login Token={(token) => setToken(token)} />
    )
}
