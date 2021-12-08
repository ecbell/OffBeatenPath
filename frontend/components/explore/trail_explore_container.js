import { connect } from 'react-redux';
import { fetchTrails } from '../../actions/trail_actions';
import ExploreTrails from './trail_explore'


const mapStateToProps = (state) => {
  return {
    allTrails: Object.values(state.entities.trails),
    parks: Object.values(state.entities.parks)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTrails: (() => dispatch(fetchTrails()))
  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExploreTrails);