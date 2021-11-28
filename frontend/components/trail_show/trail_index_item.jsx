import React from 'react'
import TrailIndex from './trail_index_item'
import { Link } from 'react-router-dom'

const TrailIndexItem = ({ trail }) => {
  return (
    <Link className='module-trail-link' to={`${trail.id}`}>
      <div className='module-trail-photo-container'>
        <img className='module-trail-photo' src={`${trail.photoUrl}`} />
        <div className='module-title-bucket'>
          <h1 className='module-trail-title'>{trail.trail_name}</h1>
          <div className='module-link-to-park'>Zion National Park</div>
          <div className='module-trail-specs'>
            <span className='module-difficulty' style={trail.difficulty === 'easy' ? { backgroundColor: '#428a13' } : trail.difficulty === 'moderate' ? { backgroundColor: '#4bafe1' } : { backgroundColor: '#676767' }}>{trail.difficulty}</span>
            <span id='agg-rating'>
              <span>
                <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
                <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
                <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
                <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
                <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
              </span>
            </span>
            <div>
              <span className='module-length'>{trail.length} mi </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
    )
  }

export default TrailIndexItem