import { connect } from 'react-redux'
import { fetchPark } from '../../actions/park_actions'
import ParkShow from './park_show'

const mapStateToProps = (state, ownProps) => {
  console.log(state.entities)
  return {
    trails: Object.values(state.entities.trails),
    park: state.entities.parks[ownProps.match.params.id],
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPark: (id) => dispatch(fetchPark(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ParkShow);