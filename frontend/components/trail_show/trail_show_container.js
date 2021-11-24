import { connect } from 'react-redux';

import { fetchTrail } from '../../actions/trail_actions';
import TrailShow from './trail_show';

const mapStateToProps = (state, ownProps) => {
  return {
    trail: state.trails[ownProps.match.params.trailId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrail: id => dispatch(fetchTrail(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrailShow);