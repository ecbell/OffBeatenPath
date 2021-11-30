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
    this.props.deleteReview(this.state.id).then(() => this.props.toggleDelete())
  }

  render(){
    const { activity_date, activity_type, body, id, star_rating } = this.state
    console.log(this.props)
    return (
      <li>
        {id}
        {activity_date}
        {star_rating}
        {activity_type}
        {body}
        <button onClick={this.handleDelete}>Delete</button>
      </li>

    )
  }
}

export default ReviewIndexItem