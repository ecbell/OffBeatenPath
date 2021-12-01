import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mSTP = (state, ownProps) => {

  return {
    review: {
      star_rating: "",
      activity_type: "",
      activity_date: "",
      body: "",
      author_id: state.session.currentUserId,
      trail_id: ownProps.trail_id
    },
    formType: 'create'
  }
}

const mDTP = (dispatch) => {
  return {
    submitReview: ((review) => dispatch(createReview(review))),
    closeModal: () => dispatch(closeModal())

  }
}

export default connect(mSTP, mDTP)(ReviewForm);