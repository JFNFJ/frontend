import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
 
import 'react-datepicker/dist/react-datepicker.css';

class OpinionThreadHelp extends Component {
  render() {
      return (
        <Link to="/home/new">Create an Opinion Thread</Link>
      );
    }
  }
  
  export default OpinionThreadHelp;