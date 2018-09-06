import React, { Component } from 'react';
import './styles.css';

import OpinionThreadForm from '../OpinionThreadForm';

class OpinionThreadSection extends Component {
  render() {
      return (
        <div className="opinion-thread-section">
          <OpinionThreadForm />
        </div>
      );
    }
  }
  
  export default OpinionThreadSection;