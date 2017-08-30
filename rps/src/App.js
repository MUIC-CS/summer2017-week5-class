import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import ListHand from './ListHand'
import Login from './Login'
import SetHand from './SetHand'
import { withRouter } from 'react-router'
import axios from 'axios'

function Register() {
  return (<div> Register Page</div>)
}

function Logout() {
  return (<div> Logout Page</div>)
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {username: null}
  }

  componentDidMount() {
    axios.get('/whoami').then(res => {
      console.log(res.data)
      this.setState({username: res.data.username})
    })
  }

  onLoginSuccess(username) {
    this.setState({username})
    this.props.history.push('/app/list-hand')
  }

  onLogout() {
    axios.get('/logout').then(() =>{
      this.setState({username: null})
      this.props.history.push('/app/login')
    })
  }

  render() {
    const {username}  = this.state
    return (
      <div>
        <div>
          {username}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/app/register">Register</Link></li>
            <li><Link to="/app/login">Login</Link></li>
            <li><Link to="/app/set-hand">Set Hand</Link></li>
            <li><Link to="/app/list-hand">List Hand</Link></li>
            <li><a onClick={this.onLogout.bind(this)}>Logout</a></li>
          </ul>
          <Route exact path="/" render={() =>
            <Redirect to={username===null?'/app/login':'/app/list-hand'}/>
          }/>
          <Route path="/app/register" component={Register}/>
          <Route path="/app/login" render={()=>{
            return <Login onLoginSuccess={this.onLoginSuccess.bind(this)}/>
          }}/>
          <Route path="/app/set-hand" render={ () =>
            username === null ?
              (<Redirect to='/app/login'/>) :
              (<SetHand />)
          }/>
          <Route path="/app/list-hand" component={ListHand}/>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
/*



















*/
