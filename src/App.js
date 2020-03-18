import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from './components/auth/signup';
import Signin from './components/auth/Signin'
import CreateProject from './components/project/CreateProject'
import Dashboard from './components/dashboard/dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Signin" component={Signin} />
            <Route path="/CreateProject" component={CreateProject} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
