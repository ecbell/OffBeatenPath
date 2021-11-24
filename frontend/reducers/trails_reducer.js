import { RECEIVE_TRAILS, RECEIVE_TRAIL } from '../actions/trail_actions'

const trailsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_TRAILS:
      return action.trails;
    case RECEIVE_TRAIL:
      nextState[action.trail.id] = action.trail
      return nextState;
    default:
      return state;
  };
}

export default trailsReducer