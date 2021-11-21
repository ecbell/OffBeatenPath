import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.demoUser = { 
      email: 'demo@demo.com', 
      password: 'password' 
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demologin = this.demologin.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)

  }

  errors() {
    return this.props.errors.map(error => {
      return (
        <li className="login-error" key={error}>
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

  createLink() {
    return <Link to='/signup'>Sign up for free!</Link>
   
  }

  demologin(e) {
    e.preventDefault();
    this.props.processForm(this.demoUser)
  }

  render() {

    return (
      <div className="login-image">
        <form onSubmit={this.handleSubmit}>
          <div className='login-form'>
          <h2>{this.props.formType}</h2>
          <div className="login-boxes">
            <div className="login-box">
              <label>
                <input type='text' value={this.state.email} onChange={this.handleInput('email')} placeholder='Email' />
              </label>
            </div>
            <div className="login-box">
              <label>
                <input type='password' value={this.state.password} onChange={this.handleInput('password')} placeholder='Password' />
              </label>
          </div>
            <br></br>
          <input className='login-page-btn' type='submit' value='Log In' />
          </div>
          <button className='demo-user-btn' onClick={this.demologin}>Explore as a demo user!</button>
            <p>Don't have an account? <Link className='link' to='/signup'>Sign up for free!</Link></p>
          <ul>
            {this.errors()}
          </ul>
          </div>
        </form>

      </div>
    )
  }
}

export default SessionForm