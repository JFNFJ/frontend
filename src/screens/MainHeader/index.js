import React, { Component } from 'react';

import logo from '../../assets/logo.png';

import './styles.css';
import HomeButton from '../HomeButton';

class MainHeader extends Component {
  render() {
    return(
      <div className="header">
        <img src={logo} alt="cat" className="logo"></img>
        <span className="header-title">Social Cat</span>
        <div className="header-buttons">
          <HomeButton text="Log in"/>
          <HomeButton text="Sign up"/>
        </div>
      </div>
    );
  }
}

export default MainHeader;