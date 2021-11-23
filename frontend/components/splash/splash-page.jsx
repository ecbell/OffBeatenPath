import React from 'react'
import SearchBar from './search-bar'

class splashPage extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return(
      <div className='splash'>
        <img id='beach-image' src='https://splash-page.s3.us-east-2.amazonaws.com/IMG_5994.jpeg' />
        <div className='home-container'>
          <h1 className='welcomeMessage'>Are you ready for an adventure?</h1>
          <SearchBar/>
        </div>
      </div>
    )
  }
}

export default splashPage
