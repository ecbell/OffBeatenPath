import { RECEIVE_TRAILS, RECEIVE_TRAIL } from '../actions/trail_actions'

const trailsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRAILS:
      return action.trails;
    case RECEIVE_TRAIL:
      return action.trail
    default:
      return state;
  };
}

export default trailsReducer