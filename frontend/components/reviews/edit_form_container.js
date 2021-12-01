import React from 'react';
import { connect } from 'react-redux';
import {updateReview} from '../../actions/review_actions'
import EditReviewForm from './review_form';

const mSTP = (state, ownProps) => {
  return {
    formType: 'update'
  }
}

const mDTP = (dispatch) => {
  return {
    // requestEvent: (eventId => dispatch(requestEvent(eventId))),
    updateReview: (review => dispatch(updateReview(review)))
  }
}

export default connect(mSTP, mDTP)(EditReviewForm)
