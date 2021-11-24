import React from 'react';
import { Link } from 'react-router-dom';

class TrailShow extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {

    return(
      <div>
        <h1>Trail Show Page</h1>
        <h2>{this.props.trail.trail_name}</h2>
      </div>
    )
  }
}