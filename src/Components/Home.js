import React, { useEffect, useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import About from './About'
import Users from './Users'
import TokenContext, { TokenProvider } from '../Contexts/TokenContext'
import '../CSS/Form.css'

function Home() {

    const token = useContext(TokenContext);
    
    // let history = useHistory()
    
    // useEffect(() => {
    //     if (token === null) {
    //         history.push("/")
    //     }
    // }, [history, token])

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

export default Home;