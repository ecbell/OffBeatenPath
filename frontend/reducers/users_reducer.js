import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {RECEIVE_TRAIL} from '../actions/trail_actions'

export default (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user })
    case RECEIVE_TRAIL:
      if (action.payload.users) {
        return action.payload.users
      } else return state;
      
      // nextState[action.payload.authors.id] = action.payload.authors
      // return Object.assign({}, state, { [action.payload.authors.id]: action.payload.authors })
    default:
      return state
  }
}