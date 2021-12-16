import { connect } from 'react-redux'
import { fetchPark, removePark } from '../../actions/park_actions'
import ParkShow from './park_show'

const mapStateToProps = (state, ownProps) => {

  return {
    trails: Object.values(state.entities.trails),
    park: state.entities.parks[ownProps.match.params.id],
    numReviews: state.entities.reviews.length
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPark: (id) => dispatch(fetchPark(id)),
  removePark: () => dispatch(removePark())
});

export default connect(mapStateToProps, mapDispatchToProps)(ParkShow);