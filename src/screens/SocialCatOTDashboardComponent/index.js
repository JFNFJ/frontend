import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class SocialCatOTDashboardComponent extends Component {
    render() {
      return (
        <Link key={"social-thread-" + this.props.ot_id} to={"/home/charts/" + this.props.ot_id}>{this.props.ot_name}</Link>
      );
    }
  }
  
  export default SocialCatOTDashboardComponent;
  