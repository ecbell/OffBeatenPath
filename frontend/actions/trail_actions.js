import * as APIUtil from '../util/trail_api_util'

export const RECEIVE_TRAILS = 'RECEIVE_TRAILS'
export const RECEIVE_TRAIL = 'RECEIVE TRAIL'

export const receiveTrails = trails => ({
  type: RECEIVE_TRAILS,
  trails,
});

export const receiveTrail = (trail) => ({
  type: RECEIVE_TRAIL,
  trail,
});

export const fetchTrails = () => dispatch => (
  APIUtil.fetchTrails()
  .then(trails => (dispatch(receiveTrails(trails))))
);

export const fetchTrail = (trailId) => dispatch => (
  APIUtil.fetchTrail(trailId)
  .then(trail => (dispatch(receiveTrail(trail))))
);