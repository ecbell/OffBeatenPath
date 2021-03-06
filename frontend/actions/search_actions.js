import * as APIUtil from '../util/search_api_util'

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'

export const receiveSearch = payload => ({
  type: RECEIVE_SEARCH,
  payload,
});


export const fetchSearch = (query) => dispatch => (
  APIUtil.fetchSearch(query)
    .then(results => (dispatch(receiveSearch(results))))
);