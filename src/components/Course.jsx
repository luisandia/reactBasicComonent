import React, { Component } from 'react';

const Course = (props) => (

  <li>
    { props.id } -
    { props.teacher } -
    { props.name }
  </li>
)

export default Course;
