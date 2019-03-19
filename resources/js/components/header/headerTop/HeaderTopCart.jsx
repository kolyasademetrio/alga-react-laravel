import React, { Component } from 'react';
import ModalCart from '../../modals/modal-cart/ModalCart';

class HeaderTopCart extends Component {
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
                <a className="headerTop__cart" href="#cart__popup" onClick={this.showModal}
                   title="View your shopping cart">
                    <div className="headerTop__cartQtyWrap">
                        <img className="headerTop__cartQtyImg" src="images/myicons/cart.png"
                             alt="Cart Icon"/>
                        <span className="headerTop__cartQty">0</span>
                    </div>
                    <div className="headerTop__cartTotalWrap">
                        <span className="headerTop__cartTotalInner">
                            <span className="headerTop__cartTotalDivider">&ndash;</span>
                            <span className="headerTop__cartTotalLink">
                                <span className="headerTop__cartTotal">0</span>
                                <span className="headerTop__cartTotalCurrency">грн</span>
                            </span>
                        </span>
                    </div>
                </a>
                <ModalCart  showModal={this.state.showModal} onClose={this.showModal}/>
            </React.Fragment>
        );
    }
}

export default HeaderTopCart;