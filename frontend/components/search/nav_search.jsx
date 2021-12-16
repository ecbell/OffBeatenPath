import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, withRouter } from 'react-router-dom';


class SearchNav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      displayResults: false,
      results: [],
      cursor: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleShowResults = this.toggleShowResults.bind(this);
    this.topResult = this.topResult.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  toggleShowResults() {
    this.setState({ displayResults: !displayResults });
  }

  handleChange(e) {
    this.setState({ query: e.target.value })
    this.handleSubmit(e)
  };

  handleSubmit(e) {
    e.preventDefault()
    this.props.fetchResults(this.state.query)
      .then(action => this.setState({ results: action.payload.reverse() }))
      .then(res => console.log(this.state.results))
  }

  showSearchResults() {

  }

  topResult() {
    let topResult = this.state.results[0]
    if (this.state.results.length > 0) {
      return topResult.park_name ? this.props.history.push(`/parks/${topResult.id}`) :
        this.props.history.push(`/trails/${topResult.id}`)
    }
  }

  handleKeyDown(e) {
    const { cursor, results } = this.state
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      this.setState(prevState => ({
        cursor: prevState.cursor - 1
      }))
    } else if (e.keyCode === 40 && cursor < results.length - 1) {
      this.setState(prevState => ({
        cursor: prevState.cursor + 1
      }))
    } else if (e.key === "Enter") {
      let i = this.state.cursor;
      results[i].trail_name ? this.props.history.push(`/trails/${this.state.results[i].id}`) :
        this.props.history.push(`/parks/${this.state.results[i].id}`)
    }
  }



  render(){
    return (
      <div onSubmit={this.handleSubmit}>
        <form className='mini-search-form' onKeyDown={this.handleKeyDown}>
          <input
            type='text'
            className='mini-search-bar'
            placeholder='Search by city, park, or trail name'
          />
          <FontAwesomeIcon id='mini-search-icon' icon={faSearch} onClick={this.topResult} />
          {/* <ul className='search-results-container'>
            {this.state.query.length < 1 ? "" :
              (this.state.results.map((result, i) => {
                return result.park_name ?
                  <li className={this.state.cursor === i ? 'search-result-active' : 'search-result'} key={i}>
                    <Link to={`/parks/${result.id}`} className='result'>
                      <FaTree className='searching-icon' size={20} color={'#428A13'} />
                      {result.park_name}
                      <div className='search-location'>{result.city}, {result.state}, {result.country}</div>
                    </Link>
                  </li> :
                  <li className={this.state.cursor === i ? 'search-result-active' : 'search-result'} key={i}>
                    <Link to={`/trails/${result.id}`} className='result'>
                      <FaMapMarkerAlt className='searching-icon' size={20} color={'#428A13'} />
                      <div className='result'>{result.trail_name}</div>
                    </Link>
                  </li>
              }))
            }
          </ul> */}
        </form>
      </div>
    )
  }
}


export default withRouter(SearchNav)