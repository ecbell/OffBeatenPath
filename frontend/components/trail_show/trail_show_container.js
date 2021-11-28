import { connect } from 'react-redux';
import { fetchTrails } from '../../actions/trail_actions'
import { fetchTrail } from '../../actions/trail_actions';
import TrailShow from './trail_show';

const mapStateToProps = (state, ownProps) => {
  return {
    trail: state.entities.trails[ownProps.match.params.id],
    allTrails: Object.values(state.entities.trails)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrail: (id) => dispatch(fetchTrail(id)),
  fetchTrails: (() => dispatch(fetchTrails()))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrailShow);