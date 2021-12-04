import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import ReviewForm from './review_form';
import { withRouter } from 'react-router-dom'
import {closeModal} from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
  return {
    review: {
      star_rating: "",
      activity_type: "backpacking",
      activity_date: "",
      body: "",
      author_id: state.session.id,
      trail_id: ownProps.match.params.id
    },
    formType: 'create'
  }
}

const mDTP = (dispatch) => {
  return {
    submitReview: ((review) => dispatch(createReview(review))),
    closeModal: () => dispatch(closeModal()),
  

  }
}

export default withRouter(connect(mSTP, mDTP)(ReviewForm));