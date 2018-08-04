import React, { Component } from 'react';

import './styles.css';

import logo from '../../assets/logo.png';

class MainHeader extends Component {
  render() {
    return(
      <div className="header">
        <img src={logo} alt="cat" className="logo"></img>
        <span className="header-title">Social Cat</span>
      </div>
    );
  }
}

export default MainHeader;