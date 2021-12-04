import React from 'react';
import TrailIndex from './trail_index_item';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';


const TrailIndexItem = ({ trail, park }) => {
    let stars = []
    for (let i = 0; i < trail.average_rating; i++) {
      // stars.push(<FaStar key={i} size={20} color={'gold'} />)
      if ((trail.average_rating - i) < 1 && (trail.average_rating - i) > 0.1) {
        stars.push(<FaStarHalfAlt key={i} size={20} color={'gold'} />)
      } else {
        stars.push(<FaStar key={i} size={20} color={'gold'} />)
      }
    }

    while (stars.length < 5) {
      let i = stars.length
      stars.push(<FaStar key={i} size={20} color={'#e9e9e9'} />)
    }

    let hours = 0
    let minutes = 0
    // 1 min for every 10 meters ascent
    let ascentTime = (trail.length * 0.3048) / 10
    if (ascentTime >= 60) {
      hours += Math.round(ascentTime / 60)
      minutes += ascentTime % 60
    }

    let hikingMiles = 0
    // 20 min per mile
      for (let i = 0; i < trail.length; i++) {
        hikingMiles += 20
      }
    
    if (hikingMiles >= 60) {
      hours += Math.round(hikingMiles / 60)
      minutes += hikingMiles % 60
    }

    

  return (
    <Link className='module-trail-link' to={`${trail.id}`}>
      <div className='module-trail-photo-container'>
        <img className='module-trail-photo' src={`${trail.photoUrl}`} />
        <div className='module-title-bucket'>
          <h1 className='module-trail-title'>{trail.trail_name}</h1>
          <div className='module-link-to-park'>{park.park_name}</div>
          <div className='module-trail-specs'>
            <span className='module-difficulty' style={trail.difficulty === 'easy' ? { backgroundColor: '#428a13' } : trail.difficulty === 'moderate' ? { backgroundColor: '#4bafe1' } : { backgroundColor: '#676767' }}>{trail.difficulty}</span>
            <span id='agg-rating'>
              <span>
                {stars}
              </span>
            </span>
            <div>
              <span className='module-length'>{trail.length} mi </span>
              <span>&nbsp;•&nbsp;</span>
              <span className='module-length'> Est. {hours} h {minutes} m </span>
              
            </div>
          </div>
        </div>
      </div>
    </Link>
    )
  }

export default TrailIndexItem