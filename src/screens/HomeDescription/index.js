import React from 'react';

import './styles.css';
import description from '../../config/homeDescription.js';
import HomeSingleDescription from '../HomeSingleDescription';

function HomeDescription () {
    return(
      <div className="home-description">
        <HomeSingleDescription text={description.firstColumn} title={"AUTONOMIA"} />
        <HomeSingleDescription text={description.secondColumn} title={"PROCESAMIENTO"} />
        <HomeSingleDescription text={description.thirdColumn} title={"VISUALIZACIÓN"} />
      </div>
    );
}

export default HomeDescription;