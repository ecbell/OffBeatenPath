import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import TrailMap from './trail_map';
import TrailIndex from './trail_index';
import { Link } from 'react-router-dom';
import SearchNav from '../search/nav_search';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';


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
    this.props.fetchTrail(this.props.match.params.id).then(() => console.log(this.props.trail.photoUrl))
    this.props.fetchTrails()
    

  }

  showComponent() {
      this.setState({ isActive: !this.state.isActive }) 
  } 

  
  render() {
    if (!this.props.trail) {
      return '...loading'
    }
    const {phototUrl, difficulty, length, elevation_gain, route_type, description, trail_name, park_id} = this.props.trail
    
    const nearbyTrails = []
    this.props.allTrails.map(trail => {
      if (trail.trail_name !== trail_name && trail.park_id === park_id) {
        nearbyTrails.push(trail)
      }
    })
    return(
      
      <div>
        
        <div id='cover-container'>
          <div className='secondary-search'>
            <SearchNav />
          </div>
          {!this.state.isActive ? 
          (<div id='trail-photo-box'>
            <div className='trail-photo-container'>
              <img className='trail-photo' src={phototUrl}/>
              <div className='title-bucket'>
                <h1 className='trail-title'>{trail_name}</h1>
                <div className='trail-specs'>
                    <span className='difficulty' style={difficulty === 'easy' ? { backgroundColor: '#428a13' } : difficulty === 'moderate' ? { backgroundColor: '#4bafe1' } : { backgroundColor: '#676767' }}>{difficulty}</span>
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
                <div className='link-to-park'>Zion National Park</div>
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
                    <p className='trail-description-text'>{description}</p>
                  </section>
                  <section className='trail-details'>
                      <span className='trail-details-styling'>
                        <span className='trail-stat'>Length</span>
                        <span className='trail-detail-stat'>{length} miles</span>
                      </span>
                      <span className='trail-details-styling'>
                        <span className='trail-stat'>Elevation Gain</span>
                        <span className='trail-detail-stat'>{elevation_gain} ft</span>
                      </span>
                      <span className='trail-details-styling'>
                        <span className='trail-stat'>Route Type</span>
                        <span className='trail-detail-stat'>{route_type}</span>
                      </span>
                  </section>

                  <section className='reviews-box'>
                    <div>Placeholder for the review form - MVP 5</div>
                  </section>

                </article>
              </div>
              <div className='right-column'>
                <div className='link-map-box'>
                    {/* <img src=''/> */}
                    <button className='link-to-map' onClick={this.showComponent}>View Full Map <FontAwesomeIcon icon={faExpandAlt}/></button>
                </div>
                <div className='related-trails-box'>
                  <h1 className='related-trails-title'>Nearby Trails</h1>
                  <div className='related-trails'>
                      <TrailIndex allTrails={nearbyTrails} />
                  </div>
                </div>
              </div>
            </div>
            </div>) :
            (null)
            }
          </div>
        
        
        <div className='map-container'>
          {this.state.isActive ? 
            (
              <div >
                {/* <div className='left-trail-side-bar'> */}
                <div className='link-to-trail-box'>
                  <button className='link-to-trail' onClick={this.showComponent}> View Trail Details  <FontAwesomeIcon id='expand-icon' icon={faExpandAlt} /></button>
                </div>
                {/* </div> */}
                <TrailMap className='second-screen-map' trail={this.props.trail} isActive={this.state.isActive} />
              </div>
            ) :
            (null)
          }
        </div>
      </div>
    )
  }
}

export default TrailShow