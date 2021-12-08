import TrailIndex from '../trail_show/trail_index';
import React from 'react';


class ExploreTrails extends React.Component{
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchTrails()

  }

  render() {
    
    return (
      <div className='explore-container'>
        <TrailIndex allTrails={this.props.allTrails} parks={this.props.parks} />
      </div>
    )
  }
}
  

export default ExploreTrails;