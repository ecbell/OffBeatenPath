import { connect } from 'react-redux';
import { requestReviews, deleteReview, updateReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';


const mSTP = (state) => {
  return {
    reviews: Object.values(state.entities.reviews)
  }
}

const mDTP = (dispatch) => {
  return {
    requestReviews: (() => dispatch(requestReviews())),
    deleteReview: ((reviewId) => dispatch(deleteReview(reviewId))),
    updateReview: ((review) => dispatch(updateReview(review)))

  }
}

export default connect(mSTP, mDTP)(ReviewIndex);