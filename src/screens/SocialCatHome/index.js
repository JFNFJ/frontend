import React, { Component } from 'react';
import './styles.css';


import MainHeader from '../MainHeader';
import SocialCatMainSection from '../SocialCatMainSection'

class SocialCatHome extends Component {
  render() {
    return (
      <div className="Home">
        <MainHeader setUpHeader={false}/>
        <SocialCatMainSection />
      </div>
    );
  }
}

export default SocialCatHome;
