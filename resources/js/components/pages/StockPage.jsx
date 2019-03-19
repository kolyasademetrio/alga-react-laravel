import React, { Component } from 'react';

class StockPage extends Component {
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
                                <span className="kb_sep"> / </span>Акции
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
                                            <a href="/offers/%d1%82%d0%b5%d1%81%d1%82%d0%be%d0%b2%d0%b0%d1%8f-%d0%b0%d0%ba%d1%86%d0%b8%d1%8f-3-%d1%81-%d0%ba%d0%b0%d1%80%d1%82%d0%b8%d0%bd%d0%ba%d0%b0%d0%bc%d0%b8/"
                                               className="offers__imageWrap"
                                            >
                                                <span className="offers_date">
                                                    <span>2018-10-24</span>
                                                    <span>19:00:00</span>
                                                </span>
                                                <img src="uploads/2018/10/400x200.jpg" alt="dewr"/>
                                            </a>


                                            <div className="offers__content">
                                                <h2>
                                                    <a href="/offers" className="offers__itemTitle">
                                                        Тестовая акция 3 с картинками
                                                    </a>
                                                </h2>

                                                <div className="offers__itemExcerpt">
                                                    Скидка 20% на весь ассортимент продукции представленной на сайте,
                                                    при оформлении заказа до 07.10.2018. Акционные цены приурочены ко
                                                    всемирному дню учителя. Приятных покупок. Будьте красивыми. <br/><br/>
                                                    Скидка 20% на весь ассортимент продукции представленной на
                                                    сайте, при оформлении заказа до 07.10.2018. Акционные цены
                                                    приурочены ко всемирному дню учителя. Приятных покупок. Будьте
                                                    красивыми.
                                                </div>

                                                <a href="/offers" className="offers__itemReadMore">Читать далее</a>
                                            </div>
                                        </div>
                                        <div className="offers__item">

                                            <a href="https://www.youtube.com/watch?v=DzwkcbTQ7ZE&amp;list=RD2-MBfn8XjIU&amp;index=20"
                                               className="offers__imageWrap has__video">
                                                <span className="offers_date">
                                                    <span>2018-10-17</span>
                                                    <span>00:00:00</span>
                                                </span>
                                                <img src="uploads/2018/10/977x550_3.jpg" alt="wrewhj"/>
                                            </a>

                                            <div className="offers__content">
                                                <h2>
                                                    <a href="/offers" className="offers__itemTitle">
                                                        Тестовая акция 2 с видео
                                                    </a>
                                                </h2>

                                                <div className="offers__itemExcerpt">
                                                    Скидка 20% на весь ассортимент продукции представленной на сайте,
                                                    при оформлении заказа до 07.10.2018. Акционные цены приурочены ко
                                                    всемирному дню учителя. Приятных покупок.
                                                </div>

                                                <a href="/offers" className="offers__itemReadMore">
                                                    Читать далее
                                                </a>
                                            </div>
                                        </div>
                                        <div className="offers__item">
                                            <a href="/offers/20-%d0%bd%d0%b0-%d0%b2%d0%b5%d1%81%d1%8c-%d0%b0%d1%81%d1%81%d0%be%d1%80%d1%82%d0%b8%d0%bc%d0%b5%d0%bd%d1%82/" className="offers__imageWrap">
                                                <span className="offers_date">
                                                    <span>2018-10-25</span>
                                                    <span>10:17:00</span>
                                                </span>
                                                <img src="uploads/2018/10/400х200_1.jpg" alt="sfsfdkoj"/>
                                            </a>


                                            <div className="offers__content">
                                                <h2>
                                                    <a href="/offers/20-%d0%bd%d0%b0-%d0%b2%d0%b5%d1%81%d1%8c-%d0%b0%d1%81%d1%81%d0%be%d1%80%d1%82%d0%b8%d0%bc%d0%b5%d0%bd%d1%82/" className="offers__itemTitle">
                                                        Тестовая акция 1 с картинками
                                                    </a>
                                                </h2>

                                                <div className="offers__itemExcerpt">
                                                    Скидка 20% на весь ассортимент продукции представленной на сайте,
                                                    при оформлении заказа до 07.10.2018. Акционные цены приурочены ко
                                                    всемирному дню учителя. Приятных покупок. Будьте красивыми. <br/><br/>
                                                    Скидка 20% на весь ассортимент продукции представленной на
                                                    сайте, при оформлении заказа до 07.10.2018. Акционные цены
                                                    приурочены ко всемирному дню учителя. Приятных покупок. Будьте
                                                    красивыми.
                                                </div>

                                                <a href="/offers" className="offers__itemReadMore">
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

export default StockPage;