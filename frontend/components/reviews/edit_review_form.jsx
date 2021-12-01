import React from 'react'
import Modal from '../modal/modal'
import ReviewForm from './review_form'

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { review, formType, updateReview } = this.props;
    if (!review) return null;

    return (
      <div>
        <Modal />
        <ReviewForm review={review}
          formType={formType}
          updateReview={updateReview} />
      </div>

    )
  }
}

export default EditReviewForm