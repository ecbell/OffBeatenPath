import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons';
import { FaAngellist, FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => {
  return (
    <div>
      <div className='divContainer'>
        {/* <img id='footer-logo' src='https://splash-page.s3.us-east-2.amazonaws.com/OffBeatenPathLogo.png' alt='logo'></img> */}
        
        <div className='favicons'>
          {/* <SocialIcon url="https://www.linkedin.com/in/emily-bell-062991/" bgColor="#414141" /> */}
          <a href="https://www.linkedin.com/in/emily-bell-062991/" target="_blank" color="#414141" ><FaLinkedin color="#414141" size={40} /></a>

        </div>
        <div className='favicons'>
          {/* <SocialIcon url="https://github.com/ecbell" bgColor="#414141"/> */}
          <a href="https://github.com/ecbell" target="_blank" color="#414141" ><FaGithub color="#414141" size={40} /></a>

        </div>
        <div className='favicons'>
          {/* <SocialIcon url="https://angel.co/u/emily-bell-11" bgColor="#414141"/> */}
          <a href="https://angel.co/u/emily-bell-11" target="_blank" color="#414141" ><FaAngellist color="#414141" size={40}/></a>
        </div>
      </div>
    </div>
  )
}


export default Footer