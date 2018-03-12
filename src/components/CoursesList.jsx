import React from 'react';
import Course from './Course'

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
        value={Math.floor(Math.random() * 100)} />
      <input type="submit" value="guardar" />
    </form>
    <ul>
      {props.courses.map(course => (
        <Course key={course.id}
          id={course.id}
          name={course.name}
          teacher={course.teacher} />
      ))}
    </ul>
  </div>
)
export default CoursesList;


