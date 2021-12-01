import { connect } from 'react-redux';
import { requestReviews, deleteReview, updateReview } from '../../actions/review_actions';
import ReviewIndexItem from './review_index_item';


const mDTP = (dispatch) => {
  return {
    // requestReviews: (() => dispatch(requestReviews())),
    deleteReview: ((reviewId) => dispatch(deleteReview(reviewId))),
    updateReview: ((review) => dispatch(updateReview(review)))

  }
}

export default connect(null, mDTP)(ReviewIndexItem);