import React from 'react';

import './styles.css';

import HomeDescription from '../HomeDescription';
import Charts from '../Charts';

function HomeMainSection () {
    return(
      <div className="home-main">
        <div className="home-main-section">
            <span className="home-title">Social Cat</span>
            <span className="home-subtitle">Descubrí lo que piensa el mundo con tan sólo un click</span>
            <HomeDescription />
        </div>
        <Charts/>
      </div>
    );
}

export default HomeMainSection;