import React from 'react';
import { Link } from 'react-router-dom';


const ReviewIndexItem = (props) => {
  return (
    <li>
      {/* {props.revew.star_rating} */}
      {props.review.activity_date}
      {props.review.activity_type}
      {props.review.body}
      <button onClick={(() => props.updateReview(props.review))}>Edit</button>
      <button onClick={(() => props.deleteReview(props.review.id))}>Delete</button>
    </li>
  )
}

export default ReviewIndexItem