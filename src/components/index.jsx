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

import Home from './pages'
import About from './pages/about'
import Error404 from './pages/error404'
import Login from './pages/Login'
import Register from './pages/register'
import Protegida from './pages/protected'

import 'purecss'
import './index.css'
import edteamLogo from './media/edteam-logo.svg'


class App extends Component {

  constructor(...props) {
    super(...props)
    this.state = {
      authed: false,
      loading: false,
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(e) {
    console.log('click')
    document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
    document.getElementById('toggle').classList.toggle('x');
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
                  <img src={edteamLogo} alt="edteam" />
                </a>
                <a href="#" className="custom-menu-toggle" id="toggle" onClick={this.handleOnClick}><s className="bar"></s><s className="bar"></s></a>
              </div>
              <div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
                <div className="custom-menu-screen"></div>
                <ul className="pure-menu-list">
                  <li className="pure-menu-item">
                    <Link className="pure-menu-link" to="/" Onclick={this.handleOnClick}>Home</Link>
                  </li>
                  <li className="pure-menu-item">
                    <Link className="pure-menu-link" to="/acerca" Onclick={this.handleOnClick}>Acerca</Link>
                  </li>
                  <li className="pure-menu-item">
                  <Link className="pure-menu-link" to="/registro" Onclick={this.handleOnClick}>Registro</Link>
                  </li>
                  <li className="pure-menu-item">
                  <Link className="pure-menu-link" to="/login" Onclick={this.handleOnClick}>Login</Link>
                  </li>
                </ul>
              </div>
            </header>
            <main className="Main">
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/acerca" exact component={About}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/registro" exact component={Register}/>
                <Route component={Error404}/>
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

