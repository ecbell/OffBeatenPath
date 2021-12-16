import TrailIndexItem from '../trail_show/trail_index_item';
import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'


class ExploreTrails extends React.Component{
  constructor(props) {
    super(props)


  }

  componentDidMount() {
    this.props.fetchTrails()
  }


  render() {
    let park_average = 0
    this.props.allTrails.forEach(trail => {
      let average_rating = parseFloat(trail.average_rating)
      park_average += average_rating
    });
    park_average = (park_average / this.props.allTrails.length).toFixed(1)

    let stars = []
    for (let i = 0; i < park_average; i++) {
      if ((park_average - i) < 1 && (park_average - i) > 0.1) {
        stars.push(<FaStarHalfAlt key={i} size={20} color={'gold'} />)
      } else {
        stars.push(<FaStar key={i} size={20} color={'gold'} />)
      }
    }

    while (stars.length < 5) {
      let i = stars.length
      stars.push(<FaStar key={i} size={20} color={'#e9e9e9'} />)
    }

    return (
      <div className='explore-container'>
        <h1 className='explore-title'>All Trails</h1>
        <div className='explore-inner-container'>
          
        <div className='track'>
        <div id='trail-card'>
          <ul className='list-trail-items'>
          {this.props.allTrails.map((trail, i) => {
            return <li key={i} id='trail-item-explore'>
            <TrailIndexItem key={i} trail={trail} parks={this.props.parks}/>
            </li>
          })
          }
          </ul>
        </div>
      </div>
      </div>

        {/* <h1 className='explore-title'>All Parks</h1> */}
        <div className='explore-inner-container'>

          {/* <div className='track'>
            <div id='trail-card'>
              <ul className='list-trail-items'>
                {this.props.parks.map((park, i) => {
                  return <li key={i} id='trail-item-explore'>
                    <Link className='module-trail-link' to={`/parks/${park.id}`}>
                      <div className='module-trail-photo-container'>
                        <img className='module-trail-photo' src={`${park.photoUrl}`} />
                        <div className='module-title-bucket'>
                          <h1 className='module-trail-title'>{park.park_name}</h1>
                          <div className='module-link-to-park'>{park.state}, {park.country}</div>
                            <span id='agg-rating'>
                              <span>
                                {stars}
                              </span>
                            </span>
                            <div>
                              <span className='module-length'>{park.acreage} acres </span>
                            </div>
                          </div>
                        </div>
                    </Link>
                  </li>
                })
                }
              </ul>
            </div>
          </div> */}
        </div>
        {/* <div className="nav">
          <button className="prev" onClick={() => this.toggleCarousel('prev')}>
            <i className="arrow-left-icon">
              Back
            </i>
          </button>
          <button className="next" onClick={() => this.toggleCarousel('next')}>
            <i className="arrow-right-icon">
              Next
            </i>
          </button> */}
        {/* </div> */}
      </div>
    )
  }
}
  

export default ExploreTrails;