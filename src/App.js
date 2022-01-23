import React, { useState } from 'react';
import NavBar from './components/nav';
import Login from './components/login';
import Posts from './components/posts';
import UserPage from './components/userPage';
import AppContext from './api/contex';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './api/protectedRoute';

function App() {
    const [userID, setUserID] = useState(1);
    return (
        <AppContext.Provider value={{ userID, setUserID }}>
            <Router>
                <div className="App">
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <ProtectedRoute path="/posts" component={Posts} />
                        <ProtectedRoute path="/user" component={UserPage} />
                    </Switch>
                </div>
            </Router>
        </AppContext.Provider>
    );
}

export default App;
