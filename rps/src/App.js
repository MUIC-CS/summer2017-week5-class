import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ListHand from './ListHand'
import Login from './Login'

function Register() {
  return (<div> Register Page</div>)
}


function Logout() {
  return (<div> Logout Page</div>)
}

class App extends Component {

  onLoginSuccess(username) {
    console.log('From App: Login Success', username)
  }

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
            <Route path="/app/login" render={()=>{
              return <Login onLoginSuccess={this.onLoginSuccess.bind(this)}/>
            }}/>
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
