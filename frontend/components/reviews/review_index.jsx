import React from 'react';
import ReviewIndexItem from './review_index_item';
import { Link } from 'react-router-dom';


class ReviewIndex extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    // this.props.requestReviews()
  }


  render() {
    if (!this.props.reviews) {
      return '...loading'
    }

    const { reviews, deleteReview, updateReview } = this.props
    return (
      <div>
        <ul>
          {
            reviews.map((review, i) => {
              return <ReviewIndexItem key={i} review={review} updateReview={updateReview} deleteReview={deleteReview} />
            })
          }
        </ul>
      </div>
    )
  }
}


export default ReviewIndex