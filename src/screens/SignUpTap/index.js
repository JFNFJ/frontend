import React, { Component } from 'react';
import apiRoute from '../../config/api';

import './styles.css';

class SignUpTab extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      user_sign: "",
      pass_sign: "",
      pass_confirm: "",
      email_sign: ""
    };
  }

  getCookie = function(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
  }

  handleSubmit = e => {
    // TODO Validar datos
    e.preventDefault();
    fetch(apiRoute + 'sign_up',{
      method: 'POST',
      body: JSON.stringify({
        name: this.state.user_sign,
        password: this.state.pass_sign,
        email: this.state.email_sign
      })
    })
    .then(this.handleResponse);
  }

  handleResponse = response => {
    if (response.status >= 200 && response.status < 300) {
      response.json().then(body=> {
        document.cookie = "user_social_cat=" + body.name + ";"
        document.cookie = "token_social_cat=" + body.token + ";";
      })
      window.location.href = 'home/' + this.getCookie("user_social_cat");
    } else {
      // TODO Cuando algo sale mal
    }
  }

  handleUserSignChange = e => {
    this.setState({user_sign: e.target.value});
  }

  handlePassSignChange = e => {
    this.setState({pass_sign: e.target.value});
  }

  handlePassConfirmSignChange = e => {
    this.setState({pass_confirm: e.target.value});
  }

  handleEmailChange = e => {
    this.setState({email_sign: e.target.value});
  }

  render() {
    return(
      <div className="login-tab">
        <form onSubmit={this.handleSubmit}>
          <label className="login-input">
            Usuario:
            <input onChange={this.handleUserSignChange} className="login-input-field" type="text" name="name" />
          </label>
          <label className="login-input">
            Email:
            <input onChange={this.handleEmailChange} className="login-input-field" type="text" name="name" />
          </label>
          <label className="login-input">
            Contraseña:
            <input onChange={this.handlePassSignChange} className="login-input-field" type="password" name="name" />
          </label>
          <label className="login-input">
            Confirmar:
            <input onChange={this.handlePassConfirmSignChange} className="login-input-field" type="password" name="name" />
          </label>
          <input className="sign-button" type="submit" value="Registrar" />
        </form>
      </div>
    );
  };
}

export default SignUpTab;