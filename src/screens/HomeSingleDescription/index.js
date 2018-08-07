import React from 'react';

import './styles.css';

function HomeSingleDescription ({title,text}) {
    return(
      <div className="home-single-description">
        <span className="home-single-title">{title}</span>
        <div className="home-single-text">{text}</div>
      </div>
    );
}

export default HomeSingleDescription;