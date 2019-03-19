import React, {Component} from 'react';

class ModalPoints extends Component {

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }

    render() {
        if ( !this.props.showModal ) {
            return null;
        }

        return (
            <React.Fragment>
                <div className="mfp-bg mfp-fade popup_inline pointsPopup mfp-ready"></div>
                <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade popup_inline pointsPopup mfp-ready" style={{overflow: 'hidden auto'}}>
                    <div className="mfp-container mfp-s-ready mfp-inline-holder">
                        <div className="mfp-content" style={{marginTop: '46px'}}>
                            <div className="headerMiddle__pointsPopup" id="headerMiddle__pointsPopup">
                                <div className="headerMiddle__pointsPopupHeader">Список пунктов выдачи</div>
                                <div className="headerMiddle__pointsPopupMarkerWrap">
                                    <img src="https://algaph.com/wp-content/uploads/2018/07/header_marker.png" alt=""
                                         className="headerMiddle__pointsPopupMarker"/>
                                </div>
                                <div className="headerMiddle__pointsPopupContent">
                                    <div className="headerMiddle__pointsPopupTable">
                                        <div className="headerMiddle__pointsPopupTr">
                                            <div className="headerMiddle__pointsPopupTh">Город</div>
                                            <div className="headerMiddle__pointsPopupTh">Телефон</div>
                                            <div className="headerMiddle__pointsPopupTh">Адрес</div>
                                            <div className="headerMiddle__pointsPopupTh">Название</div>
                                        </div>
                                        <div className="headerMiddle__pointsPopupTr">
                                            <div className="headerMiddle__pointsPopupTd">Киев</div>
                                            <div className="headerMiddle__pointsPopupTd">
                                                <a style={{whiteSpace: 'nowrap'}} href="tel:0997234654">0997234654</a>
                                            </div>
                                            <div className="headerMiddle__pointsPopupTd">ул. Градинская, 9</div>
                                            <div className="headerMiddle__pointsPopupTd">Je Max - салон красоты</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mfp-close"
                                     onClick={(e) => {this.onClose(e)}}>×</div>
                            </div>
                        </div>
                        <div className="mfp-preloader">Loading...</div>
                    </div>
                </div>
            </React.Fragment>
    );
    }
    }

    export default ModalPoints;