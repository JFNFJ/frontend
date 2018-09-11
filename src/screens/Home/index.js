import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import './styles.css';


import MainHeader from '../MainHeader';
import HomeMainSection from '../HomeMainSection';

class Home extends Component {
        constructor(props){
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.state = {
          errorMessage: "",
          showAlert: false
        };
  }
  handleShow = function(errorMessage) {
    this.setState({ showAlert: true, errorMessage: errorMessage });
  };

  renderAlert = function(errorMessage) {
      if(this.state.showAlert) {
       return (
           <Alert bsStyle="danger">
          <h4>Ha ocurrido un error</h4>
          <p>
              {errorMessage}
          </p>
        </Alert>);
      }
  };
  render() {
    return (
      <div className="Home">
        <MainHeader setUpHeader={true} handleShow={this.handleShow}/>
          {this.renderAlert(this.state.errorMessage)}
          <HomeMainSection />
      </div>
    );
  }
}

export default Home;
