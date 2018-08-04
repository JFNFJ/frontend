import React, { Component } from 'react';

import './styles.css';

function HomeButton ({text, handleClick}) {
    return(
      <button className="Home-button" onClick={handleClick}>
          {text}
      </button>
    );
}

export default HomeButton;