import { RECEIVE_PARK, REMOVE_PARK } from '../actions/park_actions';
import { RECEIVE_TRAILS, RECEIVE_TRAIL } from '../actions/trail_actions'

const trailsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_TRAILS:
      return action.payload.trails;
    case RECEIVE_TRAIL:
      nextState[action.payload.trail.id] = action.payload.trail
      for (let i = 0; i < action.payload.nearbyTrails.length; i++) {
        const trail = action.payload.nearbyTrails[i];
        nextState[trail.id] = action.payload.nearbyTrails[i]
      }
      return nextState;
    case RECEIVE_PARK:
      // for (let i = 0; i < action.payload.nearbyTrails.length; i++) {
      //   const trail = action.payload.nearbyTrails[i];
      //   nextState[trail.id] = action.payload.nearbyTrails[i]
      // }
      return action.payload.nearbyTrails;
    case REMOVE_PARK:
      return {}
    default:
      return state;
  };
}

export default trailsReducer