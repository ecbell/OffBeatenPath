import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaStar } from '@fortawesome/free-solid-svg-icons';
import ActivityDropdown from './dropdown'
import { FaStar } from 'react-icons/fa'



class ReviewForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.review
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    let nextState = Object.assign({}, this.state, {trail_id: this.props.match.params.id})
    // console.log(nextState)
    this.props.submitReview(nextState).then(this.props.closeModal)
      // .then(this.props.closeReview)
  }


  render() {
    if (!this.props.review) {
      return '...loading'
    }
    


    return (
      <form className='form-container' onSubmit={this.handleSubmit}>
        <h1 className='create-form-title'> Review this Trail! </h1>
        <label>
          {/* <input type='text' value={this.state.star_rating} onChange={this.update('star_rating')} /> */}
          <input className='radio' type='radio' name='rating' value='1' onClick={this.update('star_rating')}/>
          <FaStar key='1' size={30}
            color={(this.state.star_rating) >= 1 ? 'gold' : 'gray'} />
        </label>
        <label>
          {/* <input type='text' value={this.state.star_rating} onChange={this.update('star_rating')} /> */}
          <input className='radio' type='radio' name='rating' value='2' onClick={this.update('star_rating')} />
          <FaStar key='2' size={30}
            color={(this.state.star_rating) >= 2 ? 'gold' : 'gray'} />
        </label>
        <label>
          {/* <input type='text' value={this.state.star_rating} onChange={this.update('star_rating')} /> */}
          <input className='radio' type='radio' name='rating' value='3' onClick={this.update('star_rating')} />
          <FaStar key='3' size={30}
            color={(this.state.star_rating) >= 3 ? 'gold' : 'gray'} />
        </label>
        <label>
          {/* <input type='text' value={this.state.star_rating} onChange={this.update('star_rating')} /> */}
          <input className='radio' type='radio' name='rating' value='4' onClick={this.update('star_rating')} />
          <FaStar key='4' size={30}
            color={(this.state.star_rating) >= 4 ? 'gold' : 'gray'} />
        </label>
        <label>
          {/* <input type='text' value={this.state.star_rating} onChange={this.update('star_rating')} /> */}
          <input className='radio' type='radio' name='rating' value='5' onClick={this.update('star_rating')} />
          <FaStar key='5' size={30}
            color={(this.state.star_rating) >= 5 ? 'gold' : 'gray'} />
        </label>

        <label className='review-textarea'>
          <textarea className='review-textbox' type='textarea' value={this.state.body} onChange={this.update('body')} style={{ top:'-100px'}} placeholder='Give back to the community. Share your thought about the trail so others know what to expect.'/>
        </label>

      <div className='flex-form-container'>
        <label className='activity-type-title'> Activity Type
          {/* <input type='textarea' value={this.state.activity_type} onChange={this.update('activity_type')} /> */}
          <select className='activity-type-dropdown' value={this.state.activity_type} onChange={this.update('activity_type')}>
            <option value="backpacking">Backpacking</option>
            <option value="bike touring">Bike Touring</option>
            <option value="bird watching">Bird Watching</option>
            <option value="camping">Camping</option>
            <option value="cross-country skiing">Cross-country Skiing</option>
            <option value="fishing">Fishing</option>
            <option value="hiking">Hiking</option>
            <option value="horseback riding">Horseback Riding</option>
            <option value="mountain biking">Mountain Biking</option>
            <option value="rock climbing">Rock Climbing</option>
            <option value="scenic driving">Scenic Driving</option>
            <option value="skiing">Skiing</option>
            <option value="via ferrata">Via Ferrata</option>
            <option value="walking">Walking</option>
          </select>
        </label>

        <label className="input-container"> 
          <input type='date' name='date-picker' value={this.state.activity_date} onChange={this.update('activity_date')} />
        </label>
        </div>
        <div className='submit-button-review-container'>
        <input className='review-submit-button' type='submit' value={this.props.formType} />
        </div>
      </form>
    )
  }
}

export default ReviewForm;