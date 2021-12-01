import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = {}, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {type: action.modal, reviewId: action.reviewId}
    case CLOSE_MODAL:
      return {type: null};
    default:
      return state;
  }
}
