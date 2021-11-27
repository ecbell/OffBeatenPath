import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import TrailMap from './trail_map'

class TrailShow extends React.Component{
  constructor(props) {
    super(props)
    
    this.state = {
      trail: this.props.trail,
      isActive: false 
    }

    this.showComponent = this.showComponent.bind(this)

  }

  componentDidMount() {
    this.props.fetchTrail(this.props.match.params.id)
    console.log('mounting') 
  }

  showComponent() {
      this.setState({ isActive: true }) 
      console.log(this.state.isActive)
    } 

    hideComponent() {
      this.setState({ isActive: false })
    }

  
  render() {
    if (!this.props.trail) {
      console.log('loading')
      return '...loading'
    }
    return(
      <div>
        
        
        <div id='cover-container'>
            <div className='secondary-search'>
              <h1>SAVE FOR SEARCH BAR</h1>
            </div>
          {!this.state.isActive ?
          (<div id='trail-photo-box'>
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
            <div className='main-container' >
            <div className='action-bar'/>
              <div className='route-container' >
              <img className='route-icon' src='https://cdn-assets.alltrails.com/assets/packs/ed305b8cebf7bc15eec3.png'/> 
              </div> 
            </div>
            <div className='trail-info'>
              <div className='left-column'>
                <article id='trail-description-box'>
                  <section id='trail-description'>
                    <p className='trail-description-text'>{this.props.trail.description}</p>
                  </section>
                  <section className='trail-details'>
                      <span className='trail-details-styling'>
                        <span className='trail-stat'>Length</span>
                        <span className='trail-detail-stat'>{this.props.trail.length} miles</span>
                      </span>
                      <span className='trail-details-styling'>
                        <span className='trail-stat'>Elevation Gain</span>
                        <span className='trail-detail-stat'>{this.props.trail.elevation_gain} ft</span>
                      </span>
                      <span className='trail-details-styling'>
                        <span className='trail-stat'>Route Type</span>
                        <span className='trail-detail-stat'>{this.props.trail.route_type}</span>
                      </span>
                  </section>
                  <section className='reviews-box'>
                    <div>Placeholder for the review form - MVP 5</div>
                  </section>
                </article>
              </div>
              <div className='right-column'>
                <div className='link-map-box'>
                    <button className='link-to-map' onClick={this.showComponent}>View Full Map <FontAwesomeIcon icon={faExpandAlt}/></button>
                </div>
              </div>
            </div>
          </div>) : ("")
          }
          </div>
        
        
        <div className='trail-map-container'>
          {this.state.isActive ? 
            (<TrailMap className='second-screen-map' trail={this.props.trail} />) :
            ("")
          }
        </div>
      </div>
    )
  }
}

export default TrailShow