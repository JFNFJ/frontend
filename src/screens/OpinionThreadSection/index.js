import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './styles.css';

import OpinionThreadForm from '../OpinionThreadForm';
import OpinionThreadHelp from '../OpinionThreadHelp';
import Charts from '../Charts';

class OpinionThreadSection extends Component {
  render() {
      return (
        <div className="opinion-thread-section">
            <Route exact path="/home" component={OpinionThreadHelp} />
            <Route path="/home/new" component={OpinionThreadForm} />
            <Route path="/home/charts/:id" component={Charts} />
        </div>
      );
    }
  }
  
  export default OpinionThreadSection;