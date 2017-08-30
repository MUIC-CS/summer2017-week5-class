import React from 'react'
import axios from 'axios'
function LoginView({
  username,
  password,
  errorMessage,
  onChange, //(new_username, new_password) =>
  onLogin
}) {
  return (
    <div>
      Username: <input type="text" value={username}
          onChange = {(e)=>onChange(e.target.value, password)}
      />
      Password: <input type="password" value={password}
          onChange = {(e)=>onChange(username, e.target.value)}
      />
      <input type="button" value="Login"
        onClick={() => onLogin(username, password)}
      />
      <p>Error: {errorMessage}</p>
    </div>
  )
}


export default class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      errorMessage: ''
    }
  }

  onChange(username, password) {
    this.setState({username, password})
  }

  onLogin(username, password) {
    console.log('attempt to Login', {username, password})
    axios
      .post('/login', {username, password})
      .then(res => {
        console.log("YEAHHHHHH", res.data.username)
        this.props.onLoginSuccess(res.data.username)
      }).catch(err => {
        console.log(err.response.status)
        this.setState({errorMessage: 'Something went wrong'})
      })
  }

  render() {
    const {username, password, errorMessage} = this.state
    return (<LoginView
      username = {username}
      password = {password}
      errorMessage = {errorMessage}
      onChange = {this.onChange.bind(this)}
      onLogin = {this.onLogin.bind(this)}
    />)
  }


}
/*











*/
