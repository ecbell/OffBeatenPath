import React from 'react';
import SearchNav from '../search/nav_search';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import mapboxgl from 'mapbox-gl';
import TrailIndex from '../trail_show/trail_index';
import { Link } from 'react-router-dom'
import SearchNavContainer from '../search/nav_search_container';



mapboxgl.accessToken = window.mapboxAPIKey;


class ParkShow extends React.Component {
  constructor(props) {
    super(props)

    this.hikeTime = this.hikeTime.bind(this);
  }

  componentDidMount() {
    this.props.fetchPark(this.props.match.params.id)
    window.scrollTo(0, 0)
  }

  componentWillUnmount() {
    this.props.removePark()
  }

  hikeTime(trail){
    let hours = 0
    let minutes = 0
    // 1 min for every 10 meters ascent
    let ascentTime = (trail.elevation_gain * 0.3048) / 10
    if (ascentTime >= 60) {
      hours += Math.round(ascentTime / 60)
      minutes += Math.round(ascentTime % 60)
    } else {
      minutes += Math.round(ascentTime)
    }
    
    let hikingMiles = 0

    // 20 min per mile
    for (let i = 0; i < trail.length; i++) {
      hikingMiles += 20
    }

    if (hikingMiles >= 60) {
      hours += Math.round(hikingMiles / 60)
      minutes += Math.round(hikingMiles % 60)
    } else {
      minutes += Math.round(hikingMiles)
    }

    if (minutes >= 60) {
      hours += Math.round(minutes / 60)
      minutes = Math.round(minutes % 60)
    }

    return (hours + ' h ' + minutes + ' m')

  }

  render(){
    if (!this.props.park || !this.props.park.photoUrl ) {
      return '...loading'
    }

    const { photo, park_name, city, state, country, acreage, park_description, contact, lng, lat } = this.props.park;
    const { trails } = this.props;

    let park_average = 0
    this.props.trails.forEach(trail => {
      let average_rating = parseFloat(trail.average_rating)
      park_average += average_rating
    });
    park_average = (park_average / this.props.trails.length).toFixed(1)

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

    return(
      <div>
        <div id='cover-container'>
          <div id='search-box'>
            <div className='secondary-search'>
              <SearchNavContainer />
            </div>
          </div>
          <div id='park-information-box'>
            <img className='trail-photo' src={`${this.props.park.photoUrl}`} />
            <span id='ranking'> #1 of 60 national parks in {country} </span>
            <div className='title-container'>
              <h1 className='park-title'> Best Trails in {park_name}</h1>
            </div>
            <span id='agg-rating'>
              <span>
                {stars} <span className='num-reviews'>( {this.props.numReviews} Reviews )</span>
              </span>
            </span>
            <div className='park-information'>
                {park_description}
            </div>
              <div className='park-map-container'>
                {/* <img className='park_map' onClick={window.scrollTo(0, 0)} src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/${lng},${lat},9,0/1000x200?access_token=${mapboxgl.accessToken}`} /> */}
              </div>
            <div id='route-container-border'>
              <div className='route-container-park' >
                <img className='route-icon-park' src='https://cdn-assets.alltrails.com/assets/packs/ed305b8cebf7bc15eec3.png' />
              </div>
            </div>
              <div id='park-information-title'>Park Information</div>
              <div id='park-info-flex-container'>
              <span className='park-details-styling'>
                <span className='park-stat'>Acreage</span>
                <span className='park-detail-stat'>{acreage} acres</span>
              </span>
              <span className='park-details-styling'>
                <span className='park-stat'>Contact</span>
                <span className='park-detail-stat'>{contact}</span>
              </span>
            </div>
            <div className='park-trails-container'>
              <div id='trail-list-title'>
                Top Trails ({trails.length})
              </div>

              <div>
                {trails.map(trail => {
                  return <Link key={trail.id} className='module-trail-link' to={`/trails/${trail.id}`}>
                    <div className='module-park-trail-container'>
                      <img className='module-park-trail-photo' src={`${trail.photoUrl}`} />
                      <div className='module-park-title-bucket'>
                        <h1 className='module-park-trail-title'>{trail.trail_name}</h1>
                        <div className='module-park-link-to-park'>{park_name}</div>
                        <div className='module-park-trail-specs'>
                          <span className='module-difficulty' style={trail.difficulty === 'easy' ? { backgroundColor: '#428a13' } : trail.difficulty === 'moderate' ? { backgroundColor: '#4bafe1' } : { backgroundColor: '#676767' }}>{trail.difficulty}</span>
                          <span id='agg-rating'>
                            <span>
                              {stars}
                            </span>
                          </span>
                          <div>
                            <span className='module-length'>{trail.length} mi </span>
                            <span>&nbsp;•&nbsp;</span>
                            <span className='module-length'> {this.hikeTime(trail)} </span>
                          </div>
                        </div>
                        <div className='module-trail-description'>
                          {trail.description}
                        </div>
                      </div>
                    </div>
                  </Link>})
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ParkShow