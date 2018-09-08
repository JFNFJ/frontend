import React from 'react';

import './styles.css';

function HomeSingleDescription ({title,text}) {
    return(
      <div className="home-single-description">
        <h3 className="home-single-title">{title}</h3>
        <div className="home-single-text">{text}</div>
      </div>
    );
}

export default HomeSingleDescription;
