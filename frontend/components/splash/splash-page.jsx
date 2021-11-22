import React from 'react'
import SearchBar from './search-bar'

class splashPage extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return(
      <body className='splash'>
            <h1 className='welcomeMessage'>Hello</h1>
            <SearchBar/>
      </body>
    )
  }
}

export default splashPage
