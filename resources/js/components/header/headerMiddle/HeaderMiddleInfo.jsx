import React, { Component } from 'react';
import ModalFeedback from '../../modals/modal-feedback/ModalFeedback';

class HeaderMiddleInfo extends Component {

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
            <div className="headerMiddle__info">
                <a href="tel:+380997234654" className="headerMiddle__infoPhone">
                    +38 (099) 7 234 654 </a>
                <a href="#headerMiddle__infoFeedbackPopup"
                   className="headerMiddle__infoFeedback"
                   onClick={this.showModal}>
                    Заказать звонок </a>
                <div className="headerMiddle__infoSchedule">
                    ПН-ПТ: 09:00-19:00
                </div>
                <ModalFeedback showModal={this.state.showModal} onClose={this.showModal}/>
            </div>
        );
    }
}

export default HeaderMiddleInfo;