import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Eapp from "./Eapp";
import About from "./About";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <img src="/favicon.ico" alt="favicon" className="favicon" />
          <div className="logo">MealByte</div>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/eapp" className="nav-link">Meal Planner</Link>
            <Link to="/about" className="nav-link">About</Link>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/eapp" component={Eapp} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;