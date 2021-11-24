import React from 'react';

class TrailShow extends React.Component{
  constructor(props) {
    super(props)
    
    this.state = this.props.trail
  }

  componentDidMount() {
    this.props.fetchTrail(this.props.match.params.id)
    console.log('mounting') 
  }

  render() {
    if (!this.props.trail) {
      console.log('loading')
      return '...loading'
    }
    return(
      <div>
        
        <h1 >Trail Show Page</h1>
        <h1 >Trail Show Page</h1>
        <h1 >Trail Show Page</h1>
        <h1 >Trail Show Page</h1>
        <h1 >Trail Show Page</h1>
        <h1 >Trail Show Page</h1>
        <h1 >Trail Show Page</h1>
        <h1 >Trail Show Page</h1>
        <h1 >Trail Show Page</h1>
        <h1>{this.props.trail.trail_name}</h1>
        <h1>{this.props.trail.description}</h1>
        <h1>{this.props.trail.difficulty}</h1>

        {/* <h2>{this.props.trail.trail_name}</h2> */}
      </div>
    )
  }
}

export default TrailShow