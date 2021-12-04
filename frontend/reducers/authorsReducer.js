import { RECEIVE_TRAIL, RECEIVE_TRAILS } from '../actions/trail_actions'

export default (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_TRAIL:
      if (action.payload.users) {
        return action.payload.users
      } else return {};

    // nextState[action.payload.authors.id] = action.payload.authors
    // return Object.assign({}, state, { [action.payload.authors.id]: action.payload.authors })
    default:
      return state
  }
}