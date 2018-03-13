import React from 'react';
import Course from './Course'
import uid from 'uid'

const CoursesList = (props) => (
  <div className="App">
    <form onSubmit={props.OnAddCourse}>
      <input type="text"
        placeholder="nombre del curso"
        name="name"
      />
      <input type="text"
        placeholder="profesor"
        name="teacher"
        required />
      <input type="hidden"
        name="id"
        value={uid(10)} />
      <input type="submit" value="guardar" />
    </form>
    <ul>
      {
        props.courses.map(course => (
          <Course
            key={course.id}
            id={course.id}
            name={course.name}
            teacher={course.teacher}
          />
        ))
      }
    </ul>
  </div>
)
export default CoursesList;


