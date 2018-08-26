import React, { Component } from 'react';
import './styles.css';
import threadLogo from '../../assets/ovillo.png';

class OpinionThreadForm extends Component {
  constructor(props){
      super(props);
      this.state = { showInput: false };
  }

  handleInputShow = function() {
      this.setState({ showInput: !this.state.showInput })
  }
  render() {
      return (
        <div className="opinion-thread-form">
          <div onClick={this.handleInputShow.bind(this)} className="opinion-thread-header">
            <img src={threadLogo} alt="Smiley face" height="42" width="42"/>
            <div className="opinion-thread-gradient-line" />
            <div className="opinion-thread-form-title">Nuevo Opinion Thread</div>          
          </div>
          { this.state.showInput && 
            <div className="opinion-thread-form-input-section">
              <label className="ot-name-label">
                Topico:
                <input className="ot-name-label-input" type="text" name="name" />
              </label>
              <input className="ot-button" type="submit" value="Crear" />
            </div>}
        </div>
      );
    }
  }
  
  export default OpinionThreadForm;