import React from 'react';


class ParkShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPark(this.props.match.params.id)
    window.scrollTo(0, 0)
  }

  render(){
    if(!this.props.park) {
      return '...loading'
    }

    return(
      <div>
        {this.props.park.park_name}
      </div>
    )
  }
}

export default ParkShow