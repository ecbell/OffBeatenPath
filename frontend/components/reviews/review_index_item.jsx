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
    this.handleUpdate = this.handleUpdate.bind(this)
  }


  handleDelete(e) {
    e.preventDefault()
    this.props.deleteReview(this.state.id)
  }

  handleUpdate(e) {
    e.preventDefault()
    this.props.updateReview(this.state)
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
        <div className='date-star-container'>
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
          <div className='activity-type'>{activity_type}</div>
        </div>
        <div className='review-body-container'>
          <div className='review-body'>{body}</div>
        </div>
        <span >
          <button className='review-delete-button' onClick={this.handleDelete}>Delete</button>
          <button className='review-delete-button' onClick={() => this.props.openModal('edit')}>Edit</button>
        </span>
      </li>

    )
  }
}

export default ReviewIndexItem