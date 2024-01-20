// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  userNameField = () => {
    const {username} = this.state
    return (
      <div>
        <label htmlFor="username">UserName</label>
        <br />
        <input
          className="input"
          type="text"
          id="username"
          placeholder="username"
          value={username}
          onChange={this.onChangeUserName}
        />
      </div>
    )
  }

  passwordField = () => {
    const {password} = this.state
    return (
      <div>
        <label htmlFor="password">Password</label>
        <br />
        <input
          className="input"
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={this.onChangePassword}
        />
      </div>
    )
  }

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onLoginFail = errorMsg => {
    this.setState({errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(response)
    // console.log(data)
    if (response.ok === true) {
      this.onLoginSuccess()
    } else {
      this.onLoginFail(data.error_msg)
    }
  }

  render() {
    const {errorMsg} = this.state
    return (
      <div className="login-container">
        <div>
          <img
            className="mobile-logo-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
        </div>
        <div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
        </div>
        <form onSubmit={this.onSubmitForm} className="login-form-container">
          <img
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div>{this.userNameField()}</div>
          <div>{this.passwordField()}</div>
          <button className="login-button" type="submit">
            Login
          </button>
          <p className="error-msg">{errorMsg}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
