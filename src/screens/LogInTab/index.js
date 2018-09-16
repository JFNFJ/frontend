import React, {Component} from 'react';
import apiRoute from '../../config/api';

import './styles.css';

class LogInTab extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            user: "",
            pass: ""
        };
    }

    getCookie = function (name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
    }

    handleResponse = response => {
        if (response.status >= 200 && response.status < 300) {
            response.json().then(body => {
                document.cookie = "user_social_cat=" + body.name + ";";
                document.cookie = "token_social_cat=" + body.token + ";";
            });
            window.location.href = 'home/' + this.getCookie("user_social_cat");
        } else {
            this.props.handleShow("Asegurate que el nombre de usuario y contraseña sean correctos.");
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        fetch(apiRoute + 'login', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.user,
                password: this.state.pass
            })
        }).then(this.handleResponse);
    };

    handleUserChange = e => {
        this.setState({user: e.target.value});
    };

    handlePassChange = e => {
        this.setState({pass: e.target.value});
    };

    render() {
        return (
            <div className="login-tab">
                <form onSubmit={this.handleSubmit}>
                    <label className="login-input">
                        Usuario:
                        <input value={this.state.user} onChange={this.handleUserChange} className="login-input-field"
                               type="text" name="name"/>
                    </label>
                    <label className="login-input">
                        Contraseña:
                        <input value={this.state.pass} onChange={this.handlePassChange} className="login-input-field"
                               type="password" name="name"/>
                    </label>
                    <button className="login-button" type="submit">Ingresar</button>
                    <a className="login-href" href="www.google.com">¿Olvidó su contraseña?</a>
                </form>
            </div>
        );
    }
}

export default LogInTab;