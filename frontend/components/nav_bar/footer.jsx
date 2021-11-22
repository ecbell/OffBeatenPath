import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
  return (
    <footer>
      <div className='footerContainer'>
        {/* <img id='footer-logo' src='https://splash-page.s3.us-east-2.amazonaws.com/OffBeatenPathLogo.png' alt='logo'></img> */}
        
        <div className='favicons'>
          <SocialIcon url="https://www.linkedin.com/in/emily-bell-062991/" bgColor="#414141" />
        </div>
        <div className='favicons'>
          <SocialIcon url="https://github.com/ecbell" bgColor="#414141"/>
        </div>
        <div className='favicons'>
          <SocialIcon url="https://angel.co/" bgColor="#414141"/>
        </div>
      </div>
    </footer>
  )
}


export default Footer