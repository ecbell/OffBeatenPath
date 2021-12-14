import { connect } from 'react-redux';
import SearchBar from './search-bar';
import { fetchSearch } from '../../actions/search_actions'


const mapStateToProps = (state) => {
  return {
    results: state.search
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchSearch: ((q) => dispatch(fetchSearch(q)))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);