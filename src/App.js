import NavBar from "./components/nav";
import Login from "./components/login";
import Posts from "./components/posts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
