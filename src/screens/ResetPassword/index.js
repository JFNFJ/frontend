import React, {Component} from 'react';
import {Modal, Form, FormControl, FormGroup, ControlLabel, Alert} from 'react-bootstrap';

import './styles.css';
import apiRoute from "../../config/api";

class ResetPasswordModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            validationState: null,
            email: "",
            alertStyle: "",
            alertMessage: "",
            show: false
        };
    }

    validEmail = function () {
        let email = this.state.email;
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    success = function() {
this.setState({alertStyle: "success", alertMessage: "Se ha enviado un email con la nueva contraseña"});
    };
    fail = function() {
        this.setState({alertStyle: "danger", alertMessage: "Ha ocurrido un error"});
    };
    handleResponse = response => {
        this.success();
        this.handleShow();
    };
    handleSubmit = event => {
        event.preventDefault();
        if (this.validEmail()) {
            this.setState({validationState: "success"});
        } else {
            this.setState({validationState: "error"});
            return false;
        }
        fetch(apiRoute + 'password/reset', {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email
            })
        }).then(this.handleResponse);
    };
    handleEmailChange = e => {
        this.setState({email: e.target.value});
    };

    handleDismiss() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    renderAlert = (style, message) => {
        if (this.state.show) {
            return (
                <div class="onTop">
                <Alert bsStyle={style} onDismiss={this.handleDismiss.bind(this)}>
                {message}
            </Alert>
            </div>);
        }
    };

    render() {
        return [
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Olvidé mi contraseña</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.renderAlert(this.state.alertStyle, this.state.alertMessage)}
                        <Form>
                            <FormGroup controlId="formEmail" validationState={this.state.validationState}>
                                <ControlLabel>Email</ControlLabel>
                                <FormControl type="email"
                                             placeholder="social@cat.com"
                                             onChange={this.handleEmailChange}/>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-social-cat pull-right" type="submit"
                                onClick={this.handleSubmit.bind(this)}>Enviar
                        </button>
                    </Modal.Footer>
                </Modal>
        ];
    }
}

export default ResetPasswordModal;
