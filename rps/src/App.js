import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ListHand from './ListHand'

function Register() {
  return (<div> Register Page</div>)
}

function Login() {
  return (<div> Login Page</div>)
}

function Logout() {
  return (<div> Logout Page</div>)
}

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/app/register">Register</Link></li>
              <li><Link to="/app/login">Login</Link></li>
              <li><Link to="/app/list-hand">List Hand</Link></li>
            </ul>
            <Route exact path="/" component={Login}/>
            <Route path="/app/register" component={Register}/>
            <Route path="/app/login" component={Login}/>
            <Route path="/app/list-hand" component={ListHand}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
/*



















*/
