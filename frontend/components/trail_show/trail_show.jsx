import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import TrailMap from './trail_map';
import TrailIndex from './trail_index';
import SearchNav from '../search/nav_search';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import CreateFormContainer from '../reviews/create_form_container'
// import ReviewIndexContainer from '../reviews/review_index_container';
import ReviewIndexItemContainer from '../reviews/review_item_container'
import Modal from '../modal/modal';
import EditReviewFormContainer from '../reviews/edit_form_container'
import EditReviewForm from '../reviews/edit_review_form'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';



class TrailShow extends React.Component{
  constructor(props) {
    super(props)
    
    this.state = {
      trail: this.props.trail,
      isActive: false,
      createReview: false,
      deleteToggle: false,
      currUser: this.props.currUserId
    }

    this.showComponent = this.showComponent.bind(this)
    this.getReviewForm = this.getReviewForm.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
  }

  componentDidMount() {
    // this.props.fetchTrails()
    this.props.fetchTrail(this.props.match.params.id)
    // this.props.requestReviews()
    
  }

  getReviewForm(){
    this.setState({ createReview: !this.state.createReview })
  }

  showComponent() {
      this.setState({ isActive: !this.state.isActive }) 
  } 

  toggleDelete() {
    this.setState({ deleteToggle: !this.state.deleteToggle })
  }

  
  render() {
    if (!this.props.trail ) {
      return '...loading'
    }
    // add reviews back in here
    const { photo, difficulty, length, elevation_gain, route_type, description, trail_name, park_id, average_rating} = this.props.trail
    
    const nearbyTrails = []
    // console.log(this.props.allTrails)
    this.props.allTrails.forEach(trail => {
      if (trail.park_id === park_id && trail.trail_name !== trail_name) {
        nearbyTrails.push(trail)
      }
    })

    let stars = []
    for (let i = 0; i < average_rating; i++) {
      stars.push(<FaStar key={i} size={20} color={'gold'} />)
    }

    while (stars.length < 5) {
      let i = stars.length
      stars.push(<FaStar key={i} size={20} color={'#e9e9e9'} />)
    }
    
    return(
      
      <div>
        <Modal />
        <div id='cover-container'>
          <div className='secondary-search'>
            <SearchNav />
          </div>
          {!this.state.isActive ? 
          (<div id='trail-photo-box'>
            <div className='trail-photo-container'>
              <img className='trail-photo' src={`${this.props.trail.photoUrl}`}/>
              <div className='title-bucket'>
                <h1 className='trail-title'>{trail_name}</h1>
                <div className='trail-specs'>
                    <span className='difficulty' style={difficulty === 'easy' ? { backgroundColor: '#428a13' } : difficulty === 'moderate' ? { backgroundColor: '#4bafe1' } : { backgroundColor: '#676767' }}>{difficulty}</span>
                  <span id='agg-rating'>
                    <span>
                      {stars}
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
                    <div>
                        <div className='reviews-title-container'>
                          <span className='reviews-title'>Reviews</span>
                        </div>
                      <div className='create-form-container'>
                          <div className='average-rating'>
                            <div className='average-rating-bucket'>{average_rating}</div>
                            <div className='stars-bucket'>{stars}</div>
                            <div className='average-rating-subtext'>(Average Rating)</div>
                          </div>
                            <div className='create-review-box'>
                            {this.props.currUserId ? (<button className='review-button' onClick={() => this.props.openModal('create')}>Write Review</button>) : (
                              <Link className='link-review-login' to='/login'><div id='review-button-link'>Login to write a Review</div></Link>)
                              }
                              {/* <button className='review-button' onClick={() => this.props.openModal('create')}>Write Review</button> */}
                          </div>
                        {/* {this.state.createReview ? <CreateFormContainer trail_id={this.props.match.params.id} closeReview={this.getReviewForm}  /> : null} */}
                      </div>
                        <div>
                          <ul>
                            {
                              this.props.reviews.map((review) => {
                                // <EditReviewForm review={review} />
                                return <ReviewIndexItemContainer key={review.id} review={review} currUser={this.props.currUserId} user={this.props.usersObject[review.author_id]} />
                              })
                            }
                          </ul>
                          {/* {(this.props.reviews) ? <ReviewIndex reviews={this.props.reviews}/> : null} */}
                        </div>
                    </div>
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
                <TrailMap className='second-screen-map' trail={this.props.trail} reviews={this.props.reviews} currUserId={this.props.currUserId} usersObject={this.props.usersObject} isActive={this.state.isActive} />
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