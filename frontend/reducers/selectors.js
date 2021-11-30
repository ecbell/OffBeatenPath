
export const selectReviewsForTrail = (state, trailId) => {
  return state.entities.trails[trailId].reviews.map(review => reviews[review.id]);
};