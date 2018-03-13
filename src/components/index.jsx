import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import CoursesList from './CoursesList.jsx'
import uid from 'uid'
import { courses } from '../data/courses.json'
import $ from 'jquery'



class App extends Component {

  constructor(...props) {
    super(...props)
    this.state = { courses: [] };
    this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.resetData = this.resetData.bind(this)
  }

  handleOnAddCourse(e) {
    alert('evento')
    e.preventDefault()

    let form = e.target,
      course = {
        id: form.id.value,
        name: form.name.value ? form.name.value : App.defaultProps.name,
        teacher: form.teacher.value
      }

    this.setState({
      courses: this.state.courses.concat([course])
    })

  }

  fetchData() {
    //setTimeout(() => this.setState({ courses: courses }), 2000)
    $("#root")
      .fadeOut(3000, () => this.setState({ courses: courses }))
      .fadeIn()
  }
  resetData() {

    //this.setState({ courses: [] })
    $("#root")
      .fadeOut(3000, () => this.setState({ courses: [] }))
      .fadeIn()

  }


  //se ejecuta despues del primer render
  componentDidMount() {
    this.fetchData();
  }



  render() {

    if (!this.state.courses.length) {
      return (
        <div>
          <p>No hay cursos :(</p>
          <button onClick={this.fetchData}>Cargar Cursos</button>
        </div>
      )
    } else {
      return (
        <div>
          <CoursesList courses={this.state.courses} OnAddCourse={this.handleOnAddCourse} />
          <button onClick={this.resetData}>Borrar Cursos</button>
        </div>
      )
    }
  }
}

App.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired
}
App.defaultProps = {
  id: uid(10),
  name: 'curso desconocido',
  teacher: 'Profesor no asignado'

}
export default App;

