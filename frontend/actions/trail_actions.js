import * as APIUtil from '../util/trail_api_util'

export const RECEIVE_TRAILS = 'RECEIVE_TRAILS'
export const RECEIVE_TRAIL = 'RECEIVE TRAIL'

export const receiveTrails = payload => ({
  type: RECEIVE_TRAILS,
  payload,
});

export const receiveTrail = (payload) => ({
  type: RECEIVE_TRAIL,
  payload,
});

export const fetchTrails = () => dispatch => (
  APIUtil.fetchTrails()
  .then(trails => (dispatch(receiveTrails(trails))))
);

export const fetchTrail = (trailId) => dispatch => (
  APIUtil.fetchTrail(trailId)
  .then(payload => (dispatch(receiveTrail(payload))))
);