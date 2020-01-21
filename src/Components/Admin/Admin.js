import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './About'
import Users from './Users'
import TokenContext, { TokenProvider } from '../../Contexts/TokenContext'
import '../../CSS/Form.css'

function Admin() {

    const token = useContext(TokenContext);

    return (
        <div>
            <div className="container">
                <TokenProvider value={token}>
                    <Router>
                        <div>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/users">Users</Link>
                                    </li>
                                </ul>
                            </nav>
                            <Switch>
                                <Route path="/about">
                                    <About tokenV={token} />
                                </Route>
                                <Route path="/users">
                                    <Users />
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                    <hr></hr>
                </TokenProvider>
            </div>
        </div>
    )
}

export default Admin;