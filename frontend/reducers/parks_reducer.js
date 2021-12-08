import { RECEIVE_TRAILS, RECEIVE_TRAIL } from '../actions/trail_actions'

const parksReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
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