import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import CoursesList from './CoursesList.jsx'


class App extends Component {

  constructor(...props) {
    super(...props)
    this.state = {
      courses: [{
        id: 1,
        name: 'react desde 0',
        teacher: 'luis andia'
      }, {
        id: 2,
        name: 'jquery',
        teacher: 'juan'
      }]
    }
    this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
  }

  handleOnAddCourse(e) {
    alert('evento')
    e.preventDefault()

    let form = e.target,
      course = {
        id: form.id.value,
        name: form.name.value? form.name.value:App.defaultProps.name,
        teacher: form.teacher.value
      }

    this.setState({
      courses: this.state.courses.concat([course])
    })

  }

  render() {
    return (< CoursesList courses={this.state.courses} OnAddCourse={this.handleOnAddCourse} />
    )
  }
}

App.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired
}
App.defaultProps = {
  name:'curso desconocido',
  teacher:'Profesor no asignado'

}
export default App;

