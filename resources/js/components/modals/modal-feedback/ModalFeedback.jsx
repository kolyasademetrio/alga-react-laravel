import React, {Component} from 'react';

class ModalFeedback extends Component {

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }

    render() {
        if (!this.props.showModal) {
            return null;
        }

        return (
            <React.Fragment>
                <div className="mfp-bg mfp-fade popup_inline feedbackPopup mfp-ready"></div>
                <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade popup_inline feedbackPopup mfp-ready"
                     tabindex="-1" style={{overflow: 'hidden auto'}}>
                    <div className="mfp-container mfp-s-ready mfp-inline-holder">
                        <div className="mfp-content" style={{marginTop: '47px'}}>
                            <div className="headerMiddle__infoFeedbackPopup" id="headerMiddle__infoFeedbackPopup">
                                <div role="form" className="wpcf7" id="wpcf7-f55-o1" lang="ru-RU" dir="ltr">
                                    <div className="screen-reader-response"></div>
                                    <form action="/#wpcf7-f55-o1" method="post" className="wpcf7-form" novalidate="novalidate">
                                        <div style={{display: 'none'}}>
                                            <input type="hidden" name="_wpcf7" value="55"/>
                                            <input type="hidden" name="_wpcf7_version" value="5.0.5"/>
                                            <input type="hidden" name="_wpcf7_locale" value="ru_RU"/>
                                            <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f55-o1"/>
                                            <input type="hidden" name="_wpcf7_container_post" value="0"/>
                                        </div>
                                        <div className="headerMiddle__infoFeedbackPopupTitle">Заказать звонок</div>
                                        <div className="headerMiddle__infoFeedbackPopupInner">
                                            <p><label> Имя*<br/>
                                                    <span className="wpcf7-form-control-wrap feedback-name">
                                                        <input type="text" name="feedback-name" size="40" 
                                                               className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" 
                                                               aria-required="true" aria-invalid="false" value=""/>
                                                    </span>
                                                </label>
                                            </p>
                                            <p><label> Ваш телефон*<br/>
                                                    <span className="wpcf7-form-control-wrap feedback-phone">
                                                        <input type="text" name="feedback-phone" size="40"
                                                               className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                               aria-required="true" aria-invalid="false" value=""/>
                                                    </span>
                                                </label>
                                            </p>
                                            <p>
                                                <input type="submit" className="wpcf7-form-control wpcf7-submit"
                                                      value="Заказать звонок"/>
                                            </p>
                                        </div>
                                        <div className="wpcf7-response-output wpcf7-display-none"></div>
                                    </form>
                                </div>
                                <div className="mfp-close" onClick={(e) => {this.onClose(e)}}>×</div>
                            </div>
                        </div>
                        <div className="mfp-preloader">Loading...</div>
                    </div>
                </div>
            </React.Fragment>
    );
    }
    }

    export default ModalFeedback;