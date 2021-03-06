import { connect } from 'react-redux';
import { createReview, removeReviewErrors } from '../../actions/review_actions';
import ReviewForm from './review_form';
import { withRouter } from 'react-router-dom'
import {closeModal} from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
  let curr = new Date();
  curr.setDate(curr.getDate());
  let date = curr.toISOString().substr(0, 10);

  return {
    review: {
      star_rating: "",
      activity_type: "backpacking",
      activity_date: date,
      body: "",
      author_id: state.session.id,
      trail_id: ownProps.match.params.id
    },
    formType: 'create',
    trail: state.entities.trails[ownProps.match.params.id],
    errors: state.errors.reviews
  }
}

const mDTP = (dispatch) => {
  return {
    submitReview: ((review) => dispatch(createReview(review))),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(removeReviewErrors())
  

  }
}

export default withRouter(connect(mSTP, mDTP)(ReviewForm));