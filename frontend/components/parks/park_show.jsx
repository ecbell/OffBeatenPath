import React from 'react';
import SearchNav from '../search/nav_search';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';


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
          <div className='secondary-search'>
            <SearchNav />
          </div>

          <div id='park-information-box'>
            <img className='trail-photo' src={`${this.props.park.photoUrl}`} />
            <span> 1 of 60 national parks in {country} </span>
            <div className='title-bucket'>
              <h1 className='park-title'> Best Trails in {park_name}</h1>
            </div>
            <span id='agg-rating'>
              <span>
                {stars} <span id='num-reviews'>( 20,000 Reviews )</span>
              </span>
            </span>
            <div className='park_information'>
              <div>
                {park_description}
              </div>
            </div>
            <div>
              MAPBOX HERE!!! 
            </div>
            <div className='route-container' >
              <img className='route-icon' src='https://cdn-assets.alltrails.com/assets/packs/ed305b8cebf7bc15eec3.png' />
            </div>
            <section className='trail-details'>
              <h2>Park Information</h2>
              <span className='trail-details-styling'>
                <span className='trail-stat'>Acreage</span>
                <span className='trail-detail-stat'>{acreage} acres</span>
              </span>
              <span className='trail-details-styling'>
                <span className='trail-stat'>Contact</span>
                <span className='trail-detail-stat'>{contact}</span>
              </span>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default ParkShow