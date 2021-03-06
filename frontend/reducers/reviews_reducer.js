import { RECEIVE_PARK, REMOVE_PARK } from '../actions/park_actions';
import { 
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW 
} from '../actions/review_actions'
import { RECEIVE_TRAIL } from '../actions/trail_actions';



const ReviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_TRAIL:
      if (action.payload.reviews) {
        return action.payload.reviews
      } else return {};
      // return nextState;
    // case RECEIVE_REVIEWS:
    //   return action.reviews
    case RECEIVE_REVIEW:
      nextState[action.payload.review.id] = action.payload.review
      return nextState;
    case REMOVE_REVIEW:
      delete nextState[action.reviewId]
      return nextState;
    case RECEIVE_PARK:
      return action.payload.reviews
    // case REMOVE_PARK:
    //   return {}
    default:
      return oldState;
  }
}

export default ReviewsReducer;
