import { connect } from 'react-redux';
import { fetchTrails } from '../../actions/trail_actions';
import { fetchTrail } from '../../actions/trail_actions';
import { deleteReview, updateReview } from '../../actions/review_actions';
import TrailShow from './trail_show';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  // console.log(state.session.id)
  // let reviews = Object.values(state.entities.reviews).filter(review => {
  //   review.trail_id === ownProps.match.params.id})
  // console.log(Object.values(state.entities.authors))
  return {
    trail: state.entities.trails[ownProps.match.params.id],
    allTrails: Object.values(state.entities.trails),
    reviews: Object.values(state.entities.reviews),
    // users: Object.values(state.entities.users),
    usersObject: state.entities.authors,
    currUserId: state.session.id,
    park: Object.values(state.entities.parks)[0]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrail: (id) => dispatch(fetchTrail(id)),
  // fetchTrails: (() => dispatch(fetchTrails())),
  deleteReview: ((reviewId) => dispatch(deleteReview(reviewId))),
  updateReview: ((review) => dispatch(updateReview(review))),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrailShow);