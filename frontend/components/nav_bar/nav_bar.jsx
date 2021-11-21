import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.first_name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link className="signup-btn" to="/signup">Sign Up</Link>
      <Link className="login-btn" to="/login">Log In</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <div>
        {display}
      </div>
    </header>
  );
};

