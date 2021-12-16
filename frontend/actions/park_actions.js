import * as APIUtil from '../util/park_api_util'

export const RECEIVE_PARKS = 'RECEIVE_PARKS';
export const RECEIVE_PARK = 'RECEIVE_PARK';
export const REMOVE_PARK = 'REMOVE_PARK'

export const receiveParks = payload => ({
  type: RECEIVE_PARKS,
  payload,
});

export const receivePark = (payload) => ({
  type: RECEIVE_PARK,
  payload,
});

export const removePark = () => {
  return {
    type: REMOVE_PARK
  }
}

export const fetchParks = () => dispatch => (
  APIUtil.fetchParks()
    .then(parks => (dispatch(receiveParks(parks))))
);

export const fetchPark = (parkId) => dispatch => (
  APIUtil.fetchPark(parkId)
    .then(payload => (dispatch(receivePark(payload))))
);

