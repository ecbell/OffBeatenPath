import React from 'react';
import SearchNav from '../search/nav_search';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = window.mapboxAPIKey;


class ParkShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPark(this.props.match.params.id).then(res => console.log(res))
    window.scrollTo(0, 0)
  }

  render(){
    if(!this.props.park) {
      return '...loading'
    }

    const { photo, park_name, reviews, city, state, country, acreage, park_description, contact, lng, lat } = this.props.park;
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

    let numReviews = 0
    trails.forEach(trail => {
      numReviews += trail.reviews.length
    })

    return(
      <div>
        <div id='cover-container'>
          <div className='secondary-search'>
            <SearchNav />
          </div>

          <div id='park-information-box'>
            <img className='trail-photo' src={`${this.props.park.photoUrl}`} />
            <span id='ranking'> #1 of 60 national parks in {country} </span>
            <div className='title-container'>
              <h1 className='park-title'> Best Trails in {park_name}</h1>
            </div>
            <span id='agg-rating'>
              <span>
                {stars} <span className='num-reviews'>( {numReviews} Reviews )</span>
              </span>
            </span>
            <div className='park-information'>
                {park_description}
            </div>
              <div className='park-map-container'>
                <img className='park_map' onClick={window.scrollTo(0, 0)} src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/${lng},${lat},9,0/1000x200?access_token=${mapboxgl.accessToken}`} />
              </div>
            <div id='route-container-border'>
              <div className='route-container-park' >
                <img className='route-icon-park' src='https://cdn-assets.alltrails.com/assets/packs/ed305b8cebf7bc15eec3.png' />
              </div>
            </div>
            {/* <section className='trail-details'> */}
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
            {/* </section> */}
          </div>
        </div>
      </div>
    )
  }
}

export default ParkShow