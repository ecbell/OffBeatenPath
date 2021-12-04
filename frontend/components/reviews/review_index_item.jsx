import React from 'react';
import EditReviewForm from './edit_review_form'
import { FaStar, FaUserCircle } from 'react-icons/fa'
import Modal from '../modal/modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';







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
    
    const { activity_date, activity_type, body, id, star_rating, author_id } = this.state

    let stars = []
    for (let i = 0; i < star_rating; i++) {
      stars.push(<FaStar key={i} size={20} color={'gold'} />)
    }

    while (stars.length < 5) {
      let i = stars.length
      stars.push(<FaStar key={i} size={20} color={'#e9e9e9'} />)
    }
    

    const date = new Date(activity_date + 'T00:00')
    const formatDate = date.toString().split(" ").slice(1)
    const formattedDate = formatDate[0] + ' ' + formatDate[1] + ' ' + formatDate[2]


    return (
      <li className='single-review'>
        <div className='flexbox-pic-name'>
        <span className='profile-pic'><FaUserCircle size={50} color={'#f2f2f2'} /></span>
        <div className='flexbox-name-date'>
        { this.props.user ? 
        (<div className='review-user-name'>
            <div id='reviewer-name'>
              <span >{ this.props.user.first_name } </span>
              <span > {this.props.user.last_name} </span>
            </div>
        </div>)
          : 
          (<div className='review-user-name'>

            <span>{this.props.currUserName.first_name} </span>
            <span> {this.props.currUserName.last_name} </span>
          </div>) }

        <div className='date-star-container'>
          <span>
            {stars}
          </span>
            <span className='activity-date'> { formattedDate } </span>
        </div>
        </div>
      </div>
        <div className='activity-type-container'>
          <div className='activity-type'>{activity_type}</div>
        </div>
        <div className='review-body-container'>
          <div className='review-body'>{body}</div>
        </div>
        { author_id === this.props.currUser ? (<span>
          <button className='review-delete-button' onClick={this.handleDelete}>Delete</button>
          <Modal />
          <button className='review-delete-button' onClick={() => this.props.openModal('edit', id)}>Edit</button>
        </span>) : ""}
      </li>

    )
  }
}

export default ReviewIndexItem