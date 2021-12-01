import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';



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
    console.log(nextState)
    this.props.submitReview(nextState).then(this.props.closeModal)
      // .then(this.props.closeReview)
  }


  render() {
    if (!this.props.review) {
      return '...loading'
    }
    


  
    return (
      <form className='form-container' onSubmit={this.handleSubmit}>
        {/* <h1>Write Review </h1> */}
        <label>Rating
          {/* <input type='text' value={this.state.star_rating} onChange={this.update('star_rating')} /> */}
          {/* <input type='radio' name='rating' value='1' onClick={this.update('star_rating')}/> */}
          <fas className='star' size={100}/>
        </label>
        <label>Activity Type
          <input type='text' value={this.state.activity_type} onChange={this.update('activity_type')} />
        </label>
        <label>Activity Date
          <input type='date' value={this.state.activity_date} onChange={this.update('activity_date')} />
        </label>
        <label>Review
          <input type='text' value={this.state.body} onChange={this.update('body')} />
        </label>
        <input type='submit' value={this.props.formType} />
      </form>
    )
  }
}

export default ReviewForm;