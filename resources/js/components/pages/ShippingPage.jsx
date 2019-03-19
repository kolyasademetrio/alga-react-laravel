import React, {Component} from 'react';

class ShippingPage extends Component {
    render() {
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
                                <span className="kb_sep"> / </span>Доставка и оплата
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container dinamyc-page-container">
                    <div className="row">
                        <div className="col-xs-12">
                            <article id="post-8" className="post-8 page type-page status-publish hentry">
                                <header className="entry-header">
                                    <h1 className="entry-title">Доставка и оплата</h1>
                                </header>
                                <div className="entry-content dinamyc-page">
                                    <h2 style={{textAlign: 'center'}}>
                                        <span style={{color: '#5edb1a'}}>
                                            <strong>Бесплатная доставка при заказе на сумму от 299 грн!</strong>
                                        </span>
                                    </h2>
                                    <p>
                                        <strong style={{fontSize: "10px"}}>
                                            <img className="size-full wp-image-794 aligncenter"
                                                 src="uploads/2018/09/samovuvoz-01-1.jpg"
                                                 alt="" width="177" height="112"
                                            />
                                        </strong>
                                    </p>
                                    <p style={{textAlign: 'left'}}>
                                        <span style={{fontSize: '10px'}}>
                                            <strong>
                                                <span style={{fontSize: '14px'}}>Самовывоз товара из ближайшего пункта выдачи</span><br/>
                                            </strong>
                                        </span>
                                        <span style={{fontSize: '14px'}}>
                                            Оформить заказ можно на нашем сайте и забрать свою покупку в ближайшем пункте выдачи.<br/>
                                            <em>С перечнем пунктов выдачи можно ознакомиться в разделе <a href="/contacts">контакты</a></em><em>.</em>
                                            <br/>
                                            При оформлении заказа оператор контакт-центра уточняет удобное для Вас место и время приезда за покупкой.
                                            <br/>
                                            Доставка товара в пункт выдачи по Вашему заказу осуществляется бесплатно.
                                        </span>
                                    </p>
                                    <hr/>
                                    <p style={{textAlign: 'left'}}>
                                        <span style={{fontSize: '10px'}}>
                                            <img className="size-full wp-image-801 aligncenter"
                                                 src="uploads/2018/09/novaya_pochta.jpg" alt=""
                                                 width="177" height="112"
                                            />
                                            <span style={{fontSize: '14px'}}>
                                                <strong>До отделения Нова пошта»</strong>
                                            </span>
                                        </span>
                                        <span style={{fontSize: '14px'}}>Сроки доставки в ближайшее к вам отделение «Нова пошта» 1 — 3 дня.</span>
                                        <br/>
                                        <span style={{fontSize: '14px'}}>После отправки заказа вы получите SMS-сообщение с номером экспресс-накладной.</span>
                                        <br/>
                                        <span style={{fontSize: '14px'}}>Уточнить конкретную дату получения вашего заказа вы можете на сайте компании «Нова пошта».</span>
                                        <span style={{fontSize: '14px'}}>Единая стоимость доставки в любое отделение «Нова пошта» — 25 грн.</span>
                                    </p>
                                    <p>&nbsp;</p>
                                    <hr/>
                                    <p style={{textAlign: 'left'}}>
                                        <span style={{fontSize: '10px'}}>
                                            <img className="size-full wp-image-806 aligncenter"
                                                 src="uploads/2018/09/dostavka.jpg" alt=""
                                                 width="177" height="112"
                                            />
                                            <span style={{fontSize: '14px'}}>
                                                <strong>Адресная доставка по Киеву</strong>
                                            </span>
                                        </span>
                                        <br/>
                                        <span style={{fontSize: '14px'}}>Адресная доставка заказов по Киеву осуществляется с понедельника по субботу с 09:00 до 19:00.</span>
                                        <br/>
                                        <span style={{fontSize: '14px'}}>При наличии товара на складе и оформлении заказа до 12.00 доставка происходит в день оформления заказа.</span>
                                        <br/>
                                        <span style={{fontSize: '14px'}}>Если заказ оформлен после 12.00 — доставка курьером осуществляется на следующий день.</span>
                                        <br/>
                                        <span style={{fontSize: '14px'}}>Если заказ оформлен в воскресенье, доставка производится в понедельник.
</span>
                                        <br/>
                                        <span style={{fontSize: '14px'}}>Единая стоимость адресной доставки в любую точку Киева — 50 грн.</span>
                                    </p>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    );
    }
    }

    export default ShippingPage;