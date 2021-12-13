import * as APIUtil from '../util/park_api_util'

export const RECEIVE_PARKS = 'RECEIVE_PARKS'
export const RECEIVE_PARK = 'RECEIVE PARK'

export const receiveParks = payload => ({
  type: RECEIVE_PARKS,
  payload,
});

export const receivePark = (payload) => ({
  type: RECEIVE_PARK,
  payload,
});

export const fetchParks = () => dispatch => (
  APIUtil.fetchParks()
    .then(parks => (dispatch(receiveParks(parks))))
);

export const fetchPark = (parkId) => dispatch => (
  APIUtil.fetchPark(parkId)
    .then(payload => (dispatch(receivePark(payload))))
);