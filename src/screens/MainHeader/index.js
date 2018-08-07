import React, { Component } from 'react';
import { DropdownButton } from 'react-bootstrap';

import logo from '../../assets/logo.png';

import './styles.css';
import LogInTab from '../LogInTab';
import SignUpTab from '../SignUpTap';

class MainHeader extends Component {

  render() {
    return(
      <div className="header">
        <img src={logo} alt="cat" className="logo"></img>
        <span className="header-title">Social Cat</span>
        <div className="header-buttons">
          <DropdownButton 
            className="header-button"
            bsStyle="default"
            title="Log In"
            noCaret
            pullRight
          >
            <LogInTab/>
          </DropdownButton>
          <DropdownButton 
            className="header-button"
            bsStyle="default"
            title="Sign up"
            noCaret
            pullRight
          >
            <SignUpTab/>
          </DropdownButton>
        </div>
      </div>
    );
  }
}

export default MainHeader;