import React, {Component} from 'react';
import './styles.css';

import MainHeader from '../MainHeader';
import ResetPasswordModal from '../ResetPassword';
import HomeMainSection from '../HomeMainSection';

class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

        this.state = {
            showModal: false
        };
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    handleShowModal() {
        this.setState({showModal: true});
    }

    render() {
        return (
            <div className="Home">
                <ResetPasswordModal show={this.state.showModal} handleClose={this.handleCloseModal}/>
                <MainHeader setUpHeader={true} showResetPasswordModal={this.handleShowModal}/>
                <HomeMainSection/>
            </div>
        );
    }
}

export default Home;
