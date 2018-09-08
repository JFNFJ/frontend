import React, { Component } from 'react';
import './styles.css';

class SocialCatOTDashboardComponent extends Component {
    render() {
      return (
        <a id={this.props.ot_id} href="">{this.props.ot_name}</a>
      );
    }
  }
  
  export default SocialCatOTDashboardComponent;
  