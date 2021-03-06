import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import trailsReducer from './trails_reducer';
import reviewsReducer from './reviews_reducer';
import parksReducer from './parks_reducer';
import authorsReducer from './authorsReducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  trails: trailsReducer,
  reviews: reviewsReducer,
  parks: parksReducer,
  authors: authorsReducer

});

export default entitiesReducer;