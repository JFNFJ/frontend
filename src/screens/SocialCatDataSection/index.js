import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import './styles.css';
import logo from '../../assets/logo.png';
import menuStyles from './menuStyles';

import OpinionThreadSection from '../OpinionThreadSection';
import SocialCatDashboard from '../SocialCatDashboard';

class SocialCatDataSection extends Component {
  render() {
      const MenuSettings = {
        isOpen: true,
        width: '200px',
        pageWrapId: "page-wrap",
        outerContainerId: "outer-container",
        customBurgerIcon: <img src={logo} alt="cat" className="logo"></img>
      };
      return (
        <div id="outer-container" className="social-cat-data-section">
          <Menu styles={menuStyles} noOverlay {...MenuSettings}>
            <SocialCatDashboard />
          </Menu>
          <OpinionThreadSection />
        </div>
      );
    }
  }
  
  export default SocialCatDataSection;
  