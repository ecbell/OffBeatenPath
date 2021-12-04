import { RECEIVE_REVIEW } from "../actions/review_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {RECEIVE_TRAIL, RECEIVE_TRAILS} from '../actions/trail_actions'

export default (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user })
    case RECEIVE_REVIEW:
      // return Object.assign({}, state, { [action.payload.author.id]: action.payload.author })
      nextState[action.payload.author.id] = action.payload.author
      return nextState
    // case RECEIVE_TRAIL:
    //   if (action.payload.users) {
    //     return action.payload.users
    //   } else return {};
      
      // nextState[action.payload.authors.id] = action.payload.authors
      // return Object.assign({}, state, { [action.payload.authors.id]: action.payload.authors })
    default:
      return state
  }
}