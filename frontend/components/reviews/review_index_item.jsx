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
    const user = () => {
      for (let i = 0; i < this.props.users.length; i++) {
        let user = this.props.users[i];
        console.log(user.id)
        if (user.id === this.state.id) {
          user.first_name
        }
      }
    }

    const { activity_date, activity_type, body, id, star_rating } = this.state
    console.log(this.props.users[0].first_name)
    return (
      <li>
        {user}
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