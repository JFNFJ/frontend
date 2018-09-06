import React, { Component } from 'react';
import './styles.css';

class SocialCatDashboard extends Component {

    handleResponse(response){
        
    }

    componentWillMount() {
      fetch('http://www.mocky.io/v2/5b70a3af2e00006d0093666c')
      .then(this.handleResponse)
    }

    render() {
      return (
        <div className="social-cat-dashboard">
        </div>
      );
    }
  }
  
  export default SocialCatDashboard;
  