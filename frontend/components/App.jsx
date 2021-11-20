import React from "react";
import { Route, Switch, Link } from 'react-router-dom'
import NavBarContainer from './nav_bar/nav_bar_container'
import SignupFormContainer from './session/sign_up_container'
import LoginFormContainer from './session/login_container'
import { AuthRoute } from '../util/root_util';

const App = () => (
  <div>
    <div className='header'>
      <Link to="/" className='header-link'>
        <h1>Off The Beaten Path</h1>
      </Link>
      <NavBarContainer/>
    </div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      {/* <Route exact path='/' component={GreetingContainer}/> */}
    </Switch>
    
  </div>
);

export default App;