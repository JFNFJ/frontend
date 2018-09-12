import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

class ResetPasswordModal extends Component {

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Restablecer contraseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Text in a modal</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.handleClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ResetPasswordModal;
