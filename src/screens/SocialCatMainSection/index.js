import React, { Component } from 'react';
import './styles.css';

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
  