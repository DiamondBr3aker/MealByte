import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Eapp from "./Eapp";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="logo">Meal Planner</div>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/eapp" className="nav-link">Meal Planner</Link>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/eapp" component={Eapp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
