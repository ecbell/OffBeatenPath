import React from 'react';
import { connect } from 'react-redux';
import {updateReview} from '../../actions/review_actions'
import EditReviewForm from './review_form';

const mSTP = (state, ownProps) => {
  console.log(state)
  return {
    formType: 'edit'
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
