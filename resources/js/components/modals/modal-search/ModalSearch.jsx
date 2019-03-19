import React, { Component } from 'react';

class ModalSearch extends Component {

    onClosePopup = (e) => {
        this.props.onClose && this.props.onClose(e);
    }

    render(){
        if ( !this.props.showModal ) {
            return null;
        }

        return (
            <React.Fragment>
                <div className="mfp-bg mfp-fade popup_inline searchPopup mfp-ready"></div>
                <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade popup_inline searchPopup mfp-ready" tabindex="-1"
                     style={{overflow: 'hidden auto'}}>
                    <div className="mfp-container mfp-s-ready mfp-inline-holder">
                        <div className="mfp-content">
                            <div className="headerTop__searchPopup" id="headerTop__searchPopup">
                                <form action="https://algaph.com" method="get" autocomplete="off">
                                    <input type="text" name="s" placeholder="Поиск по товарам..." value=""/>
                                    <button type="submit"></button>
                                </form>
                                <div className="mfp-close" onClick={(e) => {this.onClosePopup(e)}}>Закрыть</div>
                            </div>
                        </div>
                        <div className="mfp-preloader">Loading...</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ModalSearch;