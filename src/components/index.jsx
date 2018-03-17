import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import { courses } from '../data/courses.json'
import $ from 'jquery'
import {
  Route,
  BrowserRouter as Router,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

import { firebaseAuth } from '../data/config'
import Home from './pages'
import About from './pages/about'
import Error404 from './pages/error404'
import Login from './pages/Login'
import Register from './pages/register'
import DashboardCourses from './pages/protected'
import { logout } from './helpers/auth'

import 'purecss'
import './index.css'
import edteamLogo from './media/edteam-logo.svg'

const PrivateRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={
      props => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }
  />
)

const PublicRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={
      props => authed === false
        ? <Component {...props} />
        : <Redirect to='/cursos' />
    }
  />
)


class App extends Component {

  constructor(...props) {
    super(...props)
    this.state = {
      authed: false,
      loading: true,
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(e) {
    console.log('click')
    if (e.target === document.getElementById('toggle')) {
      e.preventDefault()
    }
    document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
    document.getElementById('toggle').classList.toggle('x');
  }

  //cuando se renderiza por primera vez
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false
        })
      } else {
        this.setState({
          loading: false
        })
      }
    })
  }
  //se ejecuta despues
  componentWillUnmount() {
    this.removeListener()
  }


  render() {

    return this.state.loading === true ?
      <h1>Cargando</h1>
      :
      (
        <Router>
          <div>
            <header className="custom-menu-wrapper">
              <div className="pure-menu custom-menu custom-menu-top">
                <a href="#" className="pure-menu-heading custom-menu-brand">
                  <img className="edteam-logo" src={edteamLogo} alt="edteam" />
                </a>
                <a href="#" className="custom-menu-toggle" id="toggle" onClick={this.handleOnClick}><s className="bar"></s><s className="bar"></s></a>
              </div>
              <div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
                <div className="custom-menu-screen"></div>
                <ul className="pure-menu-list">
                  <li className="pure-menu-item">
                    <Link to="/" className="pure-menu-link" onClick={this.handleOnClick}>Home</Link>
                  </li>
                  <li className="pure-menu-item">
                    <Link to="/acerca" className="pure-menu-link" onClick={this.handleOnClick}>Acerca</Link>
                  </li>
                  {
                    (this.state.authed)
                      ?
                      <span>
                        <li className="pure-menu-item">
                          <Link to="/cursos" className="pure-menu-link" onClick={this.handleOnClick}>Cursos</Link>
                        </li>
                        <li className="pure-menu-item">
                          <Link
                            to="/logout"
                            className="pure-menu-link"
                            onClick={() => {
                              logout()
                              this.setState({ authed: false })
                              this.handleOnClick()
                            }}
                          >Logout</Link>
                        </li>
                      </span>
                      :
                      <span>
                        <li className="pure-menu-item">
                          <Link to="/registro" className="pure-menu-link" onClick={this.handleOnClick}>Registro</Link>
                        </li>
                        <li className="pure-menu-item">
                          <Link to="/login" className="pure-menu-link" onClick={this.handleOnClick}>Login</Link>
                        </li>
                      </span>
                  }
                </ul>
              </div>
            </header>
            <main className="Main">
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/acerca' component={About} />
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PublicRoute authed={this.state.authed} path='/registro' component={Register} />
                <PrivateRoute authed={this.state.authed} path='/cursos' component={DashboardCourses} />
                <Route component={Error404} />
              </Switch>
            </main>
          </div>
        </Router>
      )
  }
}
/*
App.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired
}
App.defaultProps = {
  id: uid(10),
  name: 'curso desconocido',
  teacher: 'Profesor no asignado'

}*/
export default App;