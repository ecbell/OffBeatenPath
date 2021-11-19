import React from "react";
import { Route, Switch, Link } from 'react-router-dom'
import NavBarContainer from './nav_bar/nav_bar_container'
import SignupFormContainer from './session/sign_up_container'
import LoginFormContainer from './session/login_container'
// import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    {/* <h1>OffBeaten Path</h1> */}
    <NavBarContainer/>
    <Route exact path='/signup' component={SignupFormContainer}/>
    <Route path="/login" component={LoginFormContainer} />
    
  </div>
);

export default App;