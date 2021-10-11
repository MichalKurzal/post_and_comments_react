import React, { useState } from "react";
import NavBar from "./components/nav";
import Login from "./components/login";
import Posts from "./components/posts";
import { AppContext } from "./api/contex";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [_login, setLogin] = useState(false);
  return (
    <AppContext.Provider value={{ _login, setLogin }}>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/posts" component={Posts} />
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
