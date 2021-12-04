import React from 'react'
// import Modal from '../modal/modal'
import ReviewForm from './review_form'

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { review, formType, submitReview, closeModal } = this.props;
    return (
      <div>
        <ReviewForm review={review}
          formType={formType}
          submitReview={submitReview}
          closeModal={closeModal} />
      </div>

    )
  }
}

export default EditReviewForm