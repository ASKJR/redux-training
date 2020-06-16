import React, { Component } from "react";
import "./App.css";
import UsersContainer from "./containers/Users/UsersContainer";
import UserContainer from "./containers/User/UserContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/user/:userId" component={UserContainer} />
            <Route path="/" component={UsersContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
