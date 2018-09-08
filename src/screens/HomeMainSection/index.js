import React from 'react';

import './styles.css';

import HomeDescription from '../HomeDescription';

function HomeMainSection () {
    return(
      <div className="home-main">
        <div className="home-main-section">
            <h1 className="home-title">Social Cat</h1>
            <h2 className="home-subtitle">Descubrí lo que piensa el mundo con tan sólo un click</h2>
            <HomeDescription />
        </div>
      </div>
    );
}

export default HomeMainSection;
