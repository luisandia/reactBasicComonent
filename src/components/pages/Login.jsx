import React, { Component } from 'react';
import { login } from '../helpers/auth'

export default class Login extends Component {

  constructor(...props) {
    super(...props)

    this.state = {
      loginMessage: null
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnSubmit(e) {
    e.preventDefault()
    login(this.email.value, this.password.value).catch(error => this.setState(this.setErrorMessage('Usuario o Password incorrecto')))

  }
  setErrorMessage(error) {
    return { loginMessage: error }
  }

  render() {
    return (
      <article className="Main-container">
        <h1>Seccion login</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input type="email" placeholder="email" ref={email => this.email = email} />
          <input type="password" placeholder="password" ref={password => this.password = password} />
          {
            this.state.loginMessage &&
            <div className="error">
              Error:{this.state.loginMessage}
            </div>
          }
          <input type="submit" value="Login" />
        </form>
      </article>
    )
  }
};
