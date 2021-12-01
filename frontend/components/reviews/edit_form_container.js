import React from 'react';
import { connect } from 'react-redux';
import {updateReview} from '../../actions/review_actions'
import ReviewForm from './review_form';

const mSTP = (state, ownProps) => {
  return {
    review: state.reviews[ownProps.match.params.id],
    formType: 'update'
  }
}

const mDTP = (dispatch) => {
  return {
    requestEvent: (eventId => dispatch(requestEvent(eventId))),
    updateReview: (review => dispatch(updateReview(review)))
  }
}

export default connect(mSTP, mDTP)(EditReviewForm)


class EditReviewForm extends React.Component{
  constructor(props) {
    super(props)
  }

  render(){
    const { review, formType, updateReview } = this.props;
    if (!review) return null;

    return(
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