import React, { Component } from 'react';

import './styles.css';

function HomeButton ({text}) {
    return(
      <button className="Home-button">
          {text}
      </button>
    );
}

export default HomeButton;