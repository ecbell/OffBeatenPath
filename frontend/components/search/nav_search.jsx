import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchNav = () => {
  return (
    <form className='mini-search-form'>
      <input
        type='text'
        className='mini-search-bar'
        placeholder='Search by city, park, or trail name'
      />
      <FontAwesomeIcon id='mini-search-icon' icon={faSearch} />
    </form>
  )
}

export default SearchNav