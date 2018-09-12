import React, {Component} from 'react';
import {Modal, Form, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

import './styles.css';

class ResetPasswordModal extends Component {
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
                            <FormControl type="email" placeholder="social@cat.com"/>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-social-cat pull-right" type="submit">Enviar</button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ResetPasswordModal;
