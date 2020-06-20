import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Layout/Navbar";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import UserLogin from "./components/pages/UserLogin";
import Protected from "./components/pages/Protected";

class App extends Component {
  state = { isLogedIn: localStorage.getItem("auth_success_token") ? 1 : 0 };

  onAuthHandle = (user) => {
    const isLogedIn = user;
    this.setState({ isLogedIn });
  };

  onLogoutAction = () => {
    localStorage.clear();
    const isLogedIn = 0;
    console.log(isLogedIn);
    this.setState({ isLogedIn });
  };

  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Navbar
              isLogedIn={this.state.isLogedIn}
              onLogoutAction={this.onLogoutAction}
            />
            <Switch>
              <Route exact path="/">
                <Protected component={Home} isLogedIn={this.state.isLogedIn} />
              </Route>
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/users/add" component={AddUser} />
              <Route exact path="/users/edit/:id" component={EditUser} />
              <Route exact path="/login" component={UserLogin}>
                <UserLogin onAuthHandle={this.onAuthHandle} />
              </Route>
              <Route exact path="/users/:id" component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
