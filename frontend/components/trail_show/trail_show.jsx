import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons'

class TrailShow extends React.Component{
  constructor(props) {
    super(props)
    
    this.state = this.props.trail
  }

  componentDidMount() {
    this.props.fetchTrail(this.props.match.params.id)
    console.log('mounting') 
  }

  render() {
    if (!this.props.trail) {
      console.log('loading')
      return '...loading'
    }
    return(
      <div>
        <div id='cover-container'>
          <div id='trail-photo-box'>
            <div className='trail-photo-container'>
              <img className='trail-photo' src='https://trail-photos.s3.us-east-2.amazonaws.com/Angels_trail_landing.jpg'/>
              <div className='title-bucket'>
                <h1 className='trail-title'>{this.props.trail.trail_name}</h1>
                <div className='trail-specs'>
                  <span className='difficulty'>{this.props.trail.difficulty}</span>
                  <span id='agg-rating'>
                    <span>
                      <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
                      <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
                      <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
                      <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
                      <img className='yellow-star' src='https://cdn-assets.alltrails.com/assets/packs/4058040f767242298c7d.svg'></img>
                    </span>
                  </span>
                </div>
                <a className='link-to-park'>Zion National Park</a>
              </div>
            </div>
            <div className='main container' style={{ top: '-10px', width: '90vw', backgroundColor: '#428a13', position: 'relative' }} >
            <div className='action-bar' />
              <div className='route-container' >
              <img className='route-icon' src='https://cdn-assets.alltrails.com/assets/packs/ed305b8cebf7bc15eec3.png'/> 
              </div> 
            </div>
          </div>
          <div className='trail-info'>
            <div className='left-column'>
              <article>
                <section id='trail-description'>
                  <p className='trail-description-text'>{this.props.trail.description}</p>
                </section>
              </article>
            </div>
          </div>

        </div>
        
        
        {/* <h1>{this.props.trail.description}</h1>
        <h1>{this.props.trail.difficulty}</h1> */}

        {/* <h2>{this.props.trail.trail_name}</h2> */}
      </div>
    )
  }
}

export default TrailShow