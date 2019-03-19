import React, { Component } from 'react';

class DoyouknowPage extends Component {
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
                                <span className="kb_sep"> / </span>А вы знали ?
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="col__inner">

                                <div className="row">
                                    <div className="offers__items">
                                        <div className="offers__item">
                                            <a href="https://www.youtube.com/watch?time_continue=1&amp;v=DzwkcbTQ7ZE"
                                               className="offers__imageWrap has__video"
                                            >
                                                <img src="uploads/2018/10/977x550_2.jpg" alt="sdsd"/>
                                            </a>
                                            <div className="offers__content">
                                                <h2>
                                                    <a href="/questions/%d1%82%d0%b5%d1%81%d1%82%d0%be%d0%b2%d1%8b%d0%b9-%d0%b1%d0%bb%d0%be%d0%ba-2/" className="offers__itemTitle">
                                                        Тестовый блок 2
                                                    </a>
                                                </h2>
                                                <div className="offers__itemExcerpt">
                                                    Скидка 20% на весь ассортимент продукции представленной на сайте,
                                                    при оформлении заказа до 07.10.2018. Акционные цены приурочены ко
                                                    всемирному дню учителя. Приятных покупок. Будьте
                                                    красивыми.&nbsp;
                                                </div>
                                                <a href="/questions/%d1%82%d0%b5%d1%81%d1%82%d0%be%d0%b2%d1%8b%d0%b9-%d0%b1%d0%bb%d0%be%d0%ba-2/" className="offers__itemReadMore">
                                                    Читать далее
                                                </a>
                                            </div>
                                        </div>
                                        <div className="offers__item">
                                            <a href="/questions/%d1%82%d0%b5%d1%81%d1%82%d0%be%d0%b2%d1%8b%d0%b9-%d0%b1%d0%bb%d0%be%d0%ba-1/" className="offers__imageWrap">
                                                <img src="uploads/2018/10/977x550.jpg" alt="sds"/>
                                            </a>


                                            <div className="offers__content">
                                                <h2>
                                                    <a href="/questions/%d1%82%d0%b5%d1%81%d1%82%d0%be%d0%b2%d1%8b%d0%b9-%d0%b1%d0%bb%d0%be%d0%ba-1/" className="offers__itemTitle">
                                                        Тестовый блок 1
                                                    </a>
                                                </h2>

                                                <div className="offers__itemExcerpt">
                                                    1. Кожа&nbsp;–&nbsp;самый большой орган в человеческом теле&nbsp;
                                                    1. Кожа&nbsp;–&nbsp;самый большой орган в человеческом теле&nbsp;
                                                    1. Кожа&nbsp;–&nbsp;самый большой орган в человеческом теле
                                                </div>

                                                <a href="/questions/%d1%82%d0%b5%d1%81%d1%82%d0%be%d0%b2%d1%8b%d0%b9-%d0%b1%d0%bb%d0%be%d0%ba-1/" className="offers__itemReadMore">
                                                    Читать далее
                                                </a>
                                            </div>
                                        </div>
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

export default DoyouknowPage;