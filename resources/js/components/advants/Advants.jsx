import React, { Component } from 'react';
import advants from '../database/advants-data';
import AdvantItem from '../advants/AdvantItem';
import uniqueId from 'react-html-id';
import ModalPoints from '../modals/modal-points/ModalPoints';

class Advants extends Component {

    state = {
        advants: advants,
        showModal: false,
    }

    constructor() {
        super()
        uniqueId.enableUniqueIds(this)
    }

    showModal = () => {
        this.setState({
            showModal: !this.state.showModal,
        });

        document.documentElement.classList.toggle('overflow-hidden');
    }

    render(){
        return (
            <div className="advants">
                <div className="container advantsTitle__container">
                    <div className="row advantsTitle__row">
                        <div className="col-xs-12 advantsTitle__col">
                            <div className="advantsTitle__inner">
                                <h3 className="advants__title home__sectionTitle home__sectionTitleAfter">
                                    Наши преимущества </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container advants__container">
                    <div className="row advants__row">
                        {
                            this.state.advants.map( advantItem =>
                                <AdvantItem key={this.nextUniqueId()} {...advantItem}/>
                            )
                        }
                    </div>
                </div>

                <div className="container advants__container">
                    <div className="row advants__row">
                        <div className="advants__col col-xs-12">
                            <div className="advants__btnWrap rayBtn__wrap">
                                <a href="#headerMiddle__pointsPopup"
                                   className="advants__btnLink homepage__rayBtn"
                                   onClick={this.showModal}
                                >
                                    Протестировать бесплатно
                                </a>
                                <ModalPoints showModal={this.state.showModal} onClose={this.showModal}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Advants;