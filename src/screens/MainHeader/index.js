import React, { Component } from 'react';
import { DropdownButton } from 'react-bootstrap';

import logo from '../../assets/logo.png';

import './styles.css';
import LogInTab from '../LogInTab';
import SignUpTab from '../SignUpTap';

class MainHeader extends Component {
  handleLogOff = e => {
    document.cookie = "user_social_cat=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "token_social_cat=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    window.location.href = "/";
  }
  render() {
    return(
      <div className="header">
        {this.props.setUpHeader ?
          <img src={logo} alt="cat" className="logo"></img> 
          : <div alt="cat" className="logo-blank"></div> 
        }
        <span className="header-title">Social Cat</span>
        {this.props.setUpHeader ?
          <div className="header-buttons">
           <DropdownButton 
             className="header-button"
             bsStyle="default"
             title="Log In"
             noCaret
             pullRight
           >
             <LogInTab showResetPasswordModal={this.props.showResetPasswordModal}/>
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
        :
         <div className="header-buttons">
           <button className="header-button" onClick={this.handleLogOff}>Log Off</button>
         </div>
        }
      </div>
    );
  }
}

export default MainHeader;