import React, { Component } from 'react';
import './styles.css';
import logo from '../../assets/logo.png';

import OpinionThreadForm from '../OpinionThreadForm';
import { height } from 'window-size';

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