import React from 'react';
import { Link } from 'react-router-dom';


// const ReviewIndexItem = ({review, deleteReview, updateReview}) => {
//   return (
//     <li>
//       {/* {props.revew.star_rating} */}
//       {review.activity_date}
//       {review.activity_type}
//       {review.body}
//       {review.id}
//       <button onClick={(() => updateReview(review))}>Edit</button>
//       <button onClick={(() => deleteReview(review.id))}>Delete</button>
//     </li>
//   )
// }

// export default ReviewIndexItem


class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.review
    this.handleDelete = this.handleDelete.bind(this)
  }


  handleDelete(e) {
    e.preventDefault()
    this.props.deleteReview(this.state.id)
  }


  render(){
    

    const { activity_date, activity_type, body, id, star_rating } = this.state

    let stars = []  
    for (let i = 1; i < 6; i++) {
      stars = stars.concat(['hello'])

    }
    
    console.log(this.props.user)

    return (
      <li className='single-review'>
        <div className='review-user-name'>
          <span>{ this.props.user.first_name } </span>
          <span> { this.props.user.last_name } </span>
        </div>
        <div>
          <span>
            <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
            <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
            <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
            <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
            <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
          </span>
            <span className='activity-date'> { activity_date } </span>
        </div>
        <div className='activity-type-container'>
          {activity_type}
        </div>
        <div className='review-body-container'>
          {body}
        </div>
        <span className='review-delete-button'>
          <button onClick={this.handleDelete}>Delete</button>
        </span>
      </li>

    )
  }
}

export default ReviewIndexItem