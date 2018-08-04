import React, { Component } from 'react';

import './styles.css';

import HomeDescription from '../HomeDescription';

function HomeMainSection () {
    return(
      <div className="home-main-section">
        <span className="home-title">Social Cat</span>
        <span className="home-subtitle">bacon itsum</span>
        <HomeDescription />
      </div>
    );
}

export default HomeMainSection;