import React from 'react'
import Search from '@mui/icons-material/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Results from './results'

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
      .then(action => this.setState({ results: action.payload}))
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
  
          {/* <input type='submit'></input> */}
          {<FontAwesomeIcon className='arrow-icon' icon={faArrowCircleRight} />}
          <ul className='search-results-container'>
            {this.state.results.map((result, i) => {
              return <li className='search-result' key={i}>{result.id}</li>
            })}
          </ul>
        </form>
  
        
      </div>
    )
  }
}



export default SearchBar