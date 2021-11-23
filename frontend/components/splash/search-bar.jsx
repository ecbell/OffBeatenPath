import React from 'react'
import Search from '@mui/icons-material/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


const SearchBar = () => {
  return (
    <div className='search-container'>
      <form className='search-form'>
        <Search className='search-icon' />
        <input
          type='text'
          className='search-bar'
          placeholder='Search by city, park, or trail name'
        />
        <FontAwesomeIcon className='arrow-icon' icon={faArrowCircleRight} />
          {/* <input className='search-btn' type='submit' value='search' /> */}
      </form>
  </div>
  )
}


export default SearchBar