import React from "react";
import { Route, Switch, Link } from 'react-router-dom'
import NavBarContainer from './nav_bar/nav_bar_container'
import SignupFormContainer from './session/sign_up_container'
import LoginFormContainer from './session/login_container';
import { AuthRoute } from '../util/root_util';
import Footer from './nav_bar/footer';
import SplashContainer from './splash/splash_page_container';
import TrailShowContainer from './trail_show/trail_show_container';

const App = () => (
  <div>
    <header className='header'>
      <button id='explore-btn'>Explore</button>
      <Link to="/" className='header-link'>
        <h1>Off The Beaten Path</h1>
        <img id='logo' src='https://splash-page.s3.us-east-2.amazonaws.com/OffBeatenPathLogo.jpg'alt='logo'></img>
      </Link>
      <NavBarContainer/>
    </header>

    <Switch>
      <Route exact path="/trails/:id" component={props => <TrailShowContainer {...props} />} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute className="signup-page" exact path="/signup" component={SignupFormContainer} />
      <Route exact path='/' component={props => <SplashContainer {...props}/>}/>
    </Switch>
    <Footer/>
  </div>
);

export default App;