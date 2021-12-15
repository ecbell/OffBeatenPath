import React from 'react'
import Search from '@mui/icons-material/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Results from './results';
import { Link } from 'react-router-dom';
import { FaTree, FaMapMarkerAlt } from 'react-icons/fa';

class SearchBar extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      query: '',
      displayResults: false,
      results: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleShowResults = this.toggleShowResults.bind(this);

  }

  toggleShowResults() {
    this.setState({ displayResults: !displayResults});
  }

  handleChange(e) {
    this.setState({query: e.target.value})
    this.handleSubmit(e)
  };

  handleSubmit(e) {
    e.preventDefault()
    this.props.fetchResults(this.state.query)
      .then(action => this.setState({ results: action.payload.reverse()}))
      .then(res => console.log(this.state.results))
  }

  showSearchResults(){

  }


  render(){
    return (
      <div className='search-container' onSubmit={this.handleSubmit}>
        <form className='search-form'>
          
          <Search className='search-icon' />
          <input
            type='text'
            className='search-bar'
            onChange={this.handleChange} 
            placeholder='Search by city, park, or trail name'
          />
          {<FontAwesomeIcon className='arrow-icon' icon={faArrowCircleRight} />}

          <ul className='search-results-container'>
            {this.state.query.length < 1 ? "" : 
            (this.state.results.map((result, i) => {
              return result.park_name ? 
              <li className='search-result' key={i}> 
                  <Link className='result' to={`/parks/${result.id}`}>
                  <FaTree className='searching-icon' size={20} color={'#428A13'}/> 
                  {result.park_name}
                </Link>
              </li> :
              <li className='search-result' key={i}> 
                  <Link className='result' to={`/trails/${result.id}`}>
                  <FaMapMarkerAlt className='searching-icon' size={20} color={'#428A13'} /> 
                  <div className='result'>{result.trail_name}</div>
                </Link>
              </li>
            }))
            }
          </ul>
        </form>
  
        
      </div>
    )
  }
}



export default SearchBar