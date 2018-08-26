import React, { Component } from 'react';
import './styles.css';
import threadLogo from '../../assets/ovillo.png';

import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';

class OpinionThreadForm extends Component {
  constructor(props){
      super(props);
      this.state = { showInput: false,
                     endDate: moment()
                    };
      this.handleInputShow = this.handleInputShow.bind(this);
      this.handleDatePicker= this.handleDatePicker.bind(this);
  }

  handleInputShow = function() {
      this.setState({ showInput: !this.state.showInput })
  }

  handleDatePicker = function(date) {
    this.setState({
      endDate: date
    });
}

  render() {
      return (
        <div className="opinion-thread-form">
          <div onClick={this.handleInputShow} className="opinion-thread-header">
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
              <div className="ot-datepicker-label">
                <span> Fecha de fin:</span>
                <DatePicker
                  dateFormat='DD/MM/YYYY'
                  selected={this.state.endDate}
                  onChange={this.handleDatePicker}
                />
              </div>
              <input className="ot-button" type="submit" value="Crear" />
            </div>
          }
        </div>
      );
    }
  }
  
  export default OpinionThreadForm;