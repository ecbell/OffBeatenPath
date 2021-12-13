import { RECEIVE_TRAILS, RECEIVE_TRAIL } from '../actions/trail_actions'
import {RECEIVE_PARK, RECEIVE_PARKS } from '../actions/park_actions'

const parksReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_PARKS:
      return action.payload.parks;
    case RECEIVE_PARK:
      nextState[action.payload.park.id] = action.payload.park;
      return nextState;
    case RECEIVE_TRAIL:
      if (action.payload.park) {
        return action.payload.park
      } else return {};
    case RECEIVE_TRAILS: 
      if (action.payload.parks) {
        return action.payload.parks
      } else {
        return {}
      }
    default:
      return state;
  };
}

export default parksReducer