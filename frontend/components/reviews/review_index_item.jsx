import React from 'react';
import { Link } from 'react-router-dom';
import EditReviewForm from './edit_review_form'
import { FaStar } from 'react-icons/fa'
import Modal from '../modal/modal';



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
    for (let i = 0; i < star_rating; i++) {
      stars.push(<FaStar key={i} size={20} color={'gold'} />)
    }

    while (stars.length < 5) {
      let i = stars.length
      stars.push(<FaStar key={i} size={20} color={'#e9e9e9'} />)
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
            {stars}
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
          <Modal />
          <button className='review-delete-button' onClick={() => this.props.openModal('edit')}>Edit</button>
        </span>
      </li>

    )
  }
}

export default ReviewIndexItem