import React, { Component } from 'react';
import ModalMenu from '../components/modals/modal-menu/ModalMenu';

class Humburger extends Component {

    state = {
        showModal: false,
    }

    showModal = () => {
        this.setState({
            showModal: !this.state.showModal,
        });

        document.documentElement.classList.toggle('overflow-hidden');
    }

    render(){
        return (
            <React.Fragment>
                <span className="headerMiddle__humburger" onClick={this.showModal}></span>
                <ModalMenu showModal={this.state.showModal} onClose={this.showModal}/>
            </React.Fragment>
        );
    }
}

export default Humburger;