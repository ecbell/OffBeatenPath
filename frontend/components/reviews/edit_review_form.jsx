import React from 'react'
import Modal from '../modal/modal'
import ReviewForm from './review_form'

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { review, formType, submitReview } = this.props;
    if (!review) return null;

    return (
      <div>
        
        <ReviewForm review={review}
          formType={formType}
          updateReview={submitReview} />
      </div>

    )
  }
}

export default EditReviewForm