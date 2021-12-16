import { connect } from 'react-redux';
import SearchNav from './nav_search'
import { fetchSearch } from '../../actions/search_actions'


const mapStateToProps = (state) => {
  return {
    results: state.search
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchResults: (q => dispatch(fetchSearch(q)))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchNav);