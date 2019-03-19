import React, {Component} from 'react';
import HeaderBottomMenu from '../../header/headerBottom/headerBottomMenu/HeaderBottomMenu';

class ModalMenu extends Component {

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }

    render() {

        if ( !this.props.showModal ) {
            return null;
        }

        return (
            <React.Fragment>
                <div class="mfp-bg mfp-fade popup_inline mainMenuPopup mfp-ready"></div>
                <div class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade popup_inline mainMenuPopup mfp-ready"
                     tabindex="-1" style={{overflow: 'hidden auto'}}>
                    <div class="mfp-container mfp-s-ready mfp-inline-holder">
                        <div class="mfp-content" style={{marginTop: '90px'}}>
                            <HeaderBottomMenu/>
                            <div class="mfp-close" onClick={(e) => this.onClose(e)}>×</div>
                        </div>
                        <div class="mfp-preloader">Loading...</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ModalMenu;