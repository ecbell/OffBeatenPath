import React from 'react'

const SearchBar = () => {
  return (
    <div className='search-container'>
      <form className='search-form'>
        <input
          type='text'
          className='search-bar'
          placeholder='Search by city, park, or trail name'
        />
          {/* <input className='search-btn' type='submit' value='search' /> */}
      </form>
  </div>
  )
}


export default SearchBar