import React, { Component } from 'react';
import ModalPoints from '../../modals/modal-points/ModalPoints';

class HeaderMiddlePoints extends Component {

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
            <div className="headerMiddle__points">
                <div className="headerMiddle__pointsLeft">

                </div>
                <div className="headerMiddle__pointsMiddle">
                    <img src="uploads/2018/07/header_marker.png" alt="img"
                         className="headerMiddle__pointsMarker"/>
                </div>
                <div className="headerMiddle__pointsRight">
                    <span className="headerMiddle__pointsLink" onClick={this.showModal}>1 Пункт<br/> выдачи</span>
                </div>
                <ModalPoints showModal={this.state.showModal} onClose={this.showModal}/>
            </div>
        );
    }
}

export default HeaderMiddlePoints;