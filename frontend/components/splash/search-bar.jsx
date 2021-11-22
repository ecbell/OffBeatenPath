import React from 'react'

const SearchBar = () => {
  return (
    <div classname='search-container'>
    <form >
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