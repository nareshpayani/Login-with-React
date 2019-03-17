import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <div className="app-right  rounded">
              <h1 className="center">Welcome to Log In Page</h1>

              <div className="PageSwitcher">
                <NavLink
                  to="/sign-in"
                  activeClassName="PageSwitcher_Item_Active"
                  className="PageSwitcher_Item"
                >
                  Sign In
                </NavLink>
                <NavLink
                  exact
                  to="/"
                  activeClassName="PageSwitcher_Item_Active"
                  className="PageSwitcher_Item"
                >
                  Sign Up
                </NavLink>
              </div>

              <div className="FormTitle">
                <NavLink
                  to="/sign-in"
                  activeClassName="FormTitle_Link_Active"
                  className="FormTitle_link "
                >
                  Sign In
                </NavLink>{" "}
                Or
                <NavLink
                  exact
                  to="/"
                  activeClassName="FormTitle_Link_Active"
                  className="FormTitle_link "
                >
                  Sign Up
                </NavLink>
              </div>

              <Route path="/sign-in" component={SignIn} />
              <Route exact path="/" component={SignUp} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
