import React, { Component } from 'react';

import './styles.css';

function login(e) {
  debugger
};

class LogInTab extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      user: "",
      pass: ""
    };
  }

  handleResponse = response => {
    if (response.status >= 200 && response.status < 300) {
      response.json().then(body=> {
        localStorage.setItem('user', body.user);
        localStorage.setItem('token',body.token);
      })
      window.location.href = 'home';
    } else {
      // TODO Cuando algo sale mal
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch('http://www.mocky.io/v2/5b7090252e00002a0093665d',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: this.state.user,
        pass: this.state.pass
      })
    })
    .then(this.handleResponse);
  }
  
  handleUserChange = e => {
    this.setState({user: e.target.value});
  }

  handlePassChange = e => {
    this.setState({pass: e.target.value});
  }

  render() {
    return(
      <div className="login-tab">
        <form onSubmit={this.handleSubmit}>
          <label className="login-input">
            Usuario:
            <input value={this.state.user} onChange={this.handleUserChange} className="login-input-field" type="text" name="name" />
          </label>
          <label className="login-input">
            Contraseña:
            <input value={this.state.pass} onChange={this.handlePassChange} className="login-input-field" type="password" name="name" />
          </label>
          <button className="login-button" type="submit">Ingresar</button>
          <a className="login-href" href="www.google.com">¿Olvidó su contraseña?</a>
        </form>
      </div>
    );
  }
}

export default LogInTab;