import React, {Component} from 'react';
import {Modal, Form, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

import './styles.css';
import apiRoute from "../../config/api";

class ResetPasswordModal extends Component {
    handleResponse = response => {
        console.log(response)
    };
    handleSubmit = event => {
        event.preventDefault();
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

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Olvidé mi contraseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormGroup controlId="formEmail">
                            <ControlLabel>Email</ControlLabel>
                            <FormControl type="email" placeholder="social@cat.com" onChange={this.handleEmailChange}/>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-social-cat pull-right" type="submit" onClick={this.handleSubmit.bind(this)}>Enviar
                    </button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ResetPasswordModal;
