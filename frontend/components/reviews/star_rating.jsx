import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = () => {
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1
        return <label>
          <input type='radio' name='rating' value={ratingValue}/>
          <FaStar className='star'/>
        </label>
      })}
    </div>
  )
}

export default StarRating