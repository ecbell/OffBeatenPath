import React from 'react';
import { connect } from 'react-redux';
import {updateReview} from '../../actions/review_actions'
import EditReviewForm from './edit_review_form';
import {closeModal} from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
  console.log(state.entities.reviews[ownProps.reviewId])
  // debugger
  return {
    formType: 'edit',
    review: state.entities.reviews[ownProps.reviewId]

  }
}

const mDTP = (dispatch) => {
  return {
    // requestEvent: (eventId => dispatch(requestEvent(eventId))),
    submitReview: (review => dispatch(updateReview(review))),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(EditReviewForm)
