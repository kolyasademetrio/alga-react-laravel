import React, {Component} from 'react';

class AboutPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="kama_breadcrumbs" itemscope="">
                                <span itemProp="itemListElement" itemscope="">
                                    <a href="/" itemProp="item">
                                        <span itemProp="name">Главная</span>
                                    </a>
                                </span>
                                <span className="kb_sep"> / </span>
                                <span className="kb_title">О косметике</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container dinamyc-page-container">
                    <div className="row">
                        <div className="col-xs-12">
                            <article id="post-14" className="post-14 page type-page status-publish hentry">
                                <header className="entry-header">
                                    <h1 className="entry-title">О косметике</h1>
                                </header>
                                <div className="entry-content dinamyc-page">
                                    <p style={{textAlign: 'right'}}>
                                        <em><span style={{fontSize: '14px'}}>“Мы семейная компания, которая сохраняет вековые традиции итальянской фармацевтики…”<br/>
                                        </span></em><span style={{fontSize: '14px'}}><em><strong>Al</strong>berto<strong> Ga</strong>lasi&nbsp;(основатель)</em></span>
                                    </p>
                                    <p>
                                        <span style={{fontSize: '14px'}}>Компания была основана в 1917 году, в Милане&nbsp;(Италия),&nbsp;и по сей день специализируется на производстве органической косметики.</span>
                                    </p>
                                    <p>
                                        <span style={{fontSize: '14px'}}>На сегодняшний момент в распоряжении компании:</span><br/>
                                        <span style={{fontSize: '14px'}}>— опыт 4 поколений фармацевтов;</span><br/>
                                        <span style={{fontSize: '14px'}}>— собственное производство;</span><br/>
                                        <span style={{fontSize: '14px'}}>— квалифицированный персонал;</span><br/>
                                        <span style={{fontSize: '14px'}}>— современная лаборатория…</span>
                                    </p>
                                    <p>
                                        <span style={{fontSize: '14px'}}>В Украине, продукция компании была впервые представлена в 2017 году серией органической косметики для лица под ТМ «Alga Ph».</span>
                                    </p>
                                    <p>
                                        <span style={{fontSize: '14px'}}>Сейчас это едва ли не единственная косметика на отечественном рынке, которая соответствует требованиям «Ecocert» и «BDIH», которые сертифицируют косметические средства, имеющие в своем составе 95 и более процентов натуральных ингредиентов растительного происхождения.</span>
                                        <span style={{fontSize: '14px'}}>
                                            <img className="size-full wp-image-828 aligncenter" src="uploads/2018/10/o_kosmetike_3.jpg" alt="" width="1245" height="420"/>
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{fontSize: '14px'}}>&nbsp;</span>
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AboutPage;