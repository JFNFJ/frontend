import React, { Component } from 'react';
import './styles.css';

import SocialCatOTDashboardComponent from '../SocialCatOTDashboardComponent'

class SocialCatDashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      opinionThread: []
    }
  }

  handleElements(arrayOfElements) {
    this.setState({
      opinionThread: arrayOfElements.map(element => this.createDashboardElement(element))
    })    
  }

  createDashboardElement(element) {
    return (
      <SocialCatOTDashboardComponent ot_id={element.id} ot_name={element.name} />
    )
  }

  componentWillMount() {
    fetch('http://www.mocky.io/v2/5b8c415b2f00004e02ceebde')
      .then(response => response.json())
      .then(data => this.handleElements(data))
  }

    render() {
      return (
        this.state.opinionThread
      );
    }
  }
  
  export default SocialCatDashboard;
  