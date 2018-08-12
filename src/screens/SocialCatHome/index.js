import React, { Component } from 'react';
import './styles.css';


import MainHeader from '../MainHeader';

class SocialCatHome extends Component {
  render() {
    return (
      <div className="Home">
        <MainHeader setUpHeader={false}/>
        <span>holis</span>
      </div>
    );
  }
}

export default SocialCatHome;
