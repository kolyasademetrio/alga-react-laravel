import React, { Component } from 'react';

class ContactsPage extends Component {
    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="kama_breadcrumbs" itemScope="" itemType="http://schema.org/BreadcrumbList">
                                <span itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
                                    <a href="/" itemProp="item">
                                        <span itemProp="name">Главная</span>
                                    </a>
                                </span>
                                <span className="kb_sep"> / </span>Контакты
                            </div>
                        </div>
                    </div>
                </div>
                <div id="map">
                    <iframe title="iframe-google-map" src="https://www.google.com/maps/d/u/1/embed?mid=1_NSG7EEHK-leU4BdWa-8m3qy6ZXR7p6O" width="100%" height="480"></iframe>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="contacts__formInner">
                                <div className="contacts__form">
                                    <div role="form" className="wpcf7" id="wpcf7-f1040-o2" lang="ru-RU" dir="ltr">
                                        <div className="screen-reader-response"></div>
                                        <form action="/contacts/#wpcf7-f1040-o2"
                                              method="post"
                                              className="wpcf7-form"
                                              noValidate="novalidate"
                                              onChange={() => {}}
                                        >
                                            <div style={{display: 'none'}}>
                                                <input type="hidden" name="_wpcf7" value="1040"/>
                                                <input type="hidden" name="_wpcf7_version" value="5.0.5"/>
                                                <input type="hidden" name="_wpcf7_locale" value="ru_RU"/>
                                                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f1040-o2"/>
                                                <input type="hidden" name="_wpcf7_container_post" value="0"/>
                                            </div>
                                            <div className="feedback__wrap">
                                                <div className="col-1">
                                                    <p>
                                                        <label>
                                                            <span>Ваше имя*</span><br/>
                                                            <span className="wpcf7-form-control-wrap feedback-form-name">
                                                                <input type="text"
                                                                       name="feedback-form-name"
                                                                       value="" size="40"
                                                                       className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                       aria-required="true"
                                                                       aria-invalid="false"
                                                                />
                                                            </span>
                                                        </label>
                                                    </p>
                                                    <p>
                                                        <label>
                                                            <span>Телефон*</span><br/>
                                                            <span className="wpcf7-form-control-wrap feedback-form-phone">
                                                                <input type="text"
                                                                       name="feedback-form-phone"
                                                                       value="" size="40"
                                                                       className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                       aria-required="true"
                                                                       aria-invalid="false"
                                                                />
                                                            </span>
                                                        </label>
                                                    </p>
                                                    <p>
                                                        <label>
                                                            <span>E-Mail*</span><br/>
                                                            <span className="wpcf7-form-control-wrap feedback-form-email">
                                                                <input type="text"
                                                                       name="feedback-form-email"
                                                                       value="" size="40"
                                                                       className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                                       aria-required="true"
                                                                       aria-invalid="false"
                                                                />
                                                            </span>
                                                        </label>
                                                    </p>
                                                </div>
                                                <div className="col-2">
                                                    <p className="textarea__wrap">
                                                        <label>
                                                            <span>Сообщение</span><br/>
                                                            <span className="wpcf7-form-control-wrap feedback-form-message">
                                                                <textarea name="feedback-form-message"
                                                                          cols="40" rows="10"
                                                                          className="wpcf7-form-control wpcf7-textarea"
                                                                          aria-invalid="false"
                                                                />
                                                            </span>
                                                        </label>
                                                    </p>
                                                    <p className="submit__wrap">
                                                        <input type="submit" value="Отправить"
                                                               className="wpcf7-form-control wpcf7-submit"
                                                        />
                                                            <span className="ajax-loader"></span>
                                                        </p>
                                                </div>
                                            </div>
                                            <div className="wpcf7-response-output wpcf7-display-none"></div>
                                        </form>
                                    </div>
                                </div>
                                <div className="contacts__info">
                                    <div className="contacts__infoTitle">Приглашаем<br/> на чашечку кофе!</div>
                                    <div className="contacts__infoContent">
                                        <p>
                                            С удовольствием обсудим все интересующие вас вопросы в нашем главном офисе за
                                            чашечкой кофе.
                                        </p>
                                        <p></p>
                                        <div>г.Киев, пл.Спортивная 1 А</div>
                                        <div>Моб.: +38 099 7 234 654</div>
                                        <div>Email: marketing@algaph.com</div>
                                        <div>www.algaph.com</div>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ContactsPage;