import React from 'react';
import { connect } from 'react-redux';
import {updateReview} from '../../actions/review_actions'
import EditReviewForm from './edit_review_form';
import {closeModal} from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {

  return {
    formType: 'edit',
    review: state.entities.reviews[ownProps.reviewId],

  }
}

const mDTP = (dispatch) => {
  return {
    submitReview: (review => dispatch(updateReview(review))),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(EditReviewForm)
