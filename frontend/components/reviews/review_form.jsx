import React from 'react';

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

  handleSubmit() {
    this.props.submitReview(this.state)
    
  }


  render() {
    if (!this.props.review) {
      return '...loading'
    }
    
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Create post </h1>
        <label>Rating
          <input type='text' value={this.state.star_rating} onChange={this.update('star_rating')} />
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