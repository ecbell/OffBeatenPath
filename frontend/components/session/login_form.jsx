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

  createLink() {
    return <Link to='/signup'>Sign up for free</Link>
   
  }

  demologin(e) {
    e.preventDefault();
    this.props.processForm(this.demoUser)
  }

  render() {

    return (
      <div className="session-form">

        <h2>{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input type='text' value={this.state.email} onChange={this.handleInput('email')} />
          </label>
          <label>Password:
            <input type='password' value={this.state.password} onChange={this.handleInput('password')} />
          </label>
          <input type='submit' value={this.props.formType} />
        </form>
        <button onClick={this.demologin}>Login as Demo User</button>
        <p>Don't have an account? {this.createLink()}</p>
        <ul>
          {this.errors()}
        </ul>
      </div>
    )
  }
}

export default SessionForm