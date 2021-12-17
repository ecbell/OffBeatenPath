import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, withRouter } from 'react-router-dom';
import { FaTree, FaMapMarkerAlt } from 'react-icons/fa';


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
    // console.log(this.state.results)
  };

  handleSubmit(e) {
    e.preventDefault()
    this.props.fetchResults(this.state.query)
      .then(action => this.setState({ results: action.payload.reverse() }))
      // .then(res => console.log(this.state.results))
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

    if (!this.props.results) {
      return '...loading'
    }
    
    return (
      <div className='search-nav-form-container' onSubmit={this.handleSubmit}>
        <form className='mini-search-form' onKeyDown={this.handleKeyDown}>
          <input
            type='text'
            className='mini-search-bar'
            onChange={this.handleChange}
            placeholder='Search by city, park, or trail'
          />
          <FontAwesomeIcon type='submit' id='mini-search-icon' icon={faSearch} onClick={this.topResult} />
          <ul className='mini-search-results-container'>
            {this.state.query.length < 1 ? "" :
              (this.state.results.map((result, i) => {
                return result.park_name ?
                  <li className={this.state.cursor === i ? 'mini-search-result-active' : 'mini-search-result'} key={i}>
                    <Link to={`/parks/${result.id}`} className='mini-result'>
                      <FaTree className='mini-searching-icon' size={10}  />
                      {result.park_name}
                      {/* <div className='mini-search-location'>{result.city}, {result.state}, {result.country}</div> */}
                    </Link>
                  </li> :
                  <li className={this.state.cursor === i ? 'mini-search-result-active' : 'mini-search-result'} key={i}>
                    <Link to={`/trails/${result.id}`} className='mini-result'>
                      <FaMapMarkerAlt className='mini-searching-icon' size={10} />
                      <div className='mini-result'>{result.trail_name}</div>
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


export default withRouter(SearchNav)