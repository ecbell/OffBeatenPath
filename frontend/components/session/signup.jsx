import React from 'react';
import { Link } from 'react-router-dom';



class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      city: "",
      state: "",
      email: "",
      password: ""
    };

    // const errors = this.props.errors

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.eraseErrors = this.eraseErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }



  errors() {
    return this.props.errors.map(error => {
      return (
        <li className="error" key={error}>
          {error}
        </li>
      );
    });
  }

  handleInput(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  render() {

    return (
      <div className="signup-image" >
        <form onSubmit={this.handleSubmit}>
            <div className="signup-form">
            <h2>{this.props.formType}</h2>
            <div className="signup-boxes">
              <div className="signup-box">
              <label>
                <input type='text' value={this.state.first_name} onChange={this.handleInput('first_name')} placeholder='First Name'/>
              </label>
              </div>
              <div className="signup-box">
              <label>
                <input type='text' value={this.state.last_name} onChange={this.handleInput('last_name')} placeholder='Last Name'/>
              </label>
              </div>
              <div className="signup-box">
              <label>
                <input type='text' value={this.state.email} onChange={this.handleInput('email')} placeholder='Email' />
              </label>
              </div>
              {/* <label>City:
                <input type='text' value={this.state.city} onChange={this.handleInput('city')} />
              </label>
              <label>State:
                <input type='text' value={this.state.state} onChange={this.handleInput('state')} />
              </label> */}
              <div className="signup-box">
              <label>
                <input type='password' value={this.state.password} onChange={this.handleInput('password')} placeholder='Password' />
              </label>
              </div>
              <br></br>
              <input className='sign-up-btn' type='submit' value='Sign Up' />
                <p >Already have an account? <Link className='link' to='/login'>Log In</Link></p>
            </div>
            <ul>
              {this.errors()}
            </ul>
          </div>
          </form>
        </div>
    )
  }
}

export default Signup