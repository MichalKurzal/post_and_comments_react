import React, { useState } from "react";
import NavBar from "./components/nav";
import Login from "./components/login";
import Posts from "./components/posts";
import UserPage from "./components/userPage";
import { AppContext } from "./api/contex";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <AppContext.Provider value={"context"}>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/posts" component={Posts} />
            <Route path="/user" component={UserPage} />
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
