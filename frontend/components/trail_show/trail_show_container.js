import { connect } from 'react-redux';
import { fetchTrails } from '../../actions/trail_actions';
import { fetchTrail } from '../../actions/trail_actions';
import { deleteReview, updateReview } from '../../actions/review_actions';
import TrailShow from './trail_show';

const mapStateToProps = (state, ownProps) => {
  // console.log(state.entities.reviews)
  // let reviews = Object.values(state.entities.reviews).filter(review => {
  //   review.trail_id === ownProps.match.params.id})

  return {
    trail: state.entities.trails[ownProps.match.params.id],
    allTrails: Object.values(state.entities.trails),
    reviews: Object.values(state.entities.reviews),
    // users: Object.values(state.entities.users),
    usersObject: state.entities.users
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrail: (id) => dispatch(fetchTrail(id)),
  // fetchTrails: (() => dispatch(fetchTrails())),
  deleteReview: ((reviewId) => dispatch(deleteReview(reviewId))),
  updateReview: ((review) => dispatch(updateReview(review))),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrailShow);