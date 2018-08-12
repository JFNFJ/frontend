import React, { Component } from 'react';
import './styles.css';


import MainHeader from '../MainHeader';
import HomeMainSection from '../HomeMainSection';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <MainHeader setUpHeader={true} />
        <HomeMainSection />
      </div>
    );
  }
}

export default Home;
