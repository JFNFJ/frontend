import React, { Component } from 'react';
import './styles.css';

import SocialCatDashboard from '../SocialCatDashboard';
import SocialCatDataSection from '../SocialCatDataSection';

class SocialCatMainSection extends Component {
    render() {
      return (
        <div className="social-cat-main-section">
          <SocialCatDataSection />
        </div>
      );
    }
  }
  
  export default SocialCatMainSection;
  