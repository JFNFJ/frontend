import React, { Component } from 'react';

import './styles.css';
import description from '../../config/homeDescription.js'

function HomeDescription () {
    return(
      <div className="home-description">
        <div className="home-description-text">{description.example}</div>
        <div className="home-description-text">{description.example}</div>
        <div className="home-description-text">{description.example}</div>
      </div>
    );
}

export default HomeDescription;