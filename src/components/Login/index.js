import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showSubmitError: true,
      errorMsg,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          className="input"
          value={username}
          type="text"
          id="username"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, showSubmitError, errorMsg} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          className="input"
          value={password}
          type="password"
          id="password"
          onChange={this.onChangePassword}
        />
        {showSubmitError && <p className="error-message">{errorMsg}</p>}
      </>
    )
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-bg-container">
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://res.cloudinary.com/chantishinagam/image/upload/v1688280362/Login-sm-website-logo_rynbfq.png"
            alt="website login"
            className="login-website-logo"
          />
          <div className="login-inputs-container">
            <div className="logo-content">
              <img
                src="https://res.cloudinary.com/chantishinagam/image/upload/v1688279990/Tasty_kitchens_website_logo_rzpmer.png"
                alt="website logo"
                className="website-logo"
              />
              <h1 className="heading">Tasty Kitchens</h1>
            </div>
            <h1 className="login-heading">Login</h1>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
        <img
          src="https://res.cloudinary.com/chantishinagam/image/upload/v1688280149/Login-lg-website-logo_tztu4g.png"
          alt="website login"
          className="login-lg-website-logo"
        />
      </div>
    )
  }
}

export default Login
