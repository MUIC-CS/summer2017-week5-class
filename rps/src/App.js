import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

function Register() {
  return (<div> Register Page</div>)
}

function Login() {
  return (<div> Register Page</div>)
}

function Logout() {
  return (<div> Register Page</div>)
}

function ListHand() {
  return (<div>List Hand Page</div>)
}

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/app/register" component={Register}/>
          <Route path="/app/login" component={Login}/>
          <Route path="/app/list-hand" component={ListHand}/>
        </Router>
      </div>
    );
  }
}

export default App;
/*



















*/
