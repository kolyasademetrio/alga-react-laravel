import React, {Component} from 'react';

class ModalCart extends Component {

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }

    render() {

        if ( !this.props.showModal ) {
            return null;
        }

        return (
            <React.Fragment>
                <div className="mfp-bg mfp-fade popup_inline cart__popup mfp-ready"></div>
                <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade popup_inline cart__popup mfp-ready" tabindex="-1" style={{overflow: 'hidden auto'}}>
                    <div className="mfp-container mfp-s-ready mfp-inline-holder">
                        <div className="mfp-content" style={{marginTop: '46px'}}>
                            <div id="cart__popup" className="cart__popup">
                                <div className="entry-title">Корзина</div>
                                <div className="woocommerce-cart-form__message"></div>
                                <form className="woocommerce-cart-form" action="https://algaph.com" method="post" dima-form-header="">
                                    <div className="cart__popup__header">
                                        <div className="product-quantity">Количество</div>
                                        <div className="product-name">Название</div>
                                        <div className="product-subtotal">Сумма</div>
                                    </div>
                                    <div className="cart__popup__tableWrap" style={{overflow: 'hidden',outline: 'none',height: '260px'}} tabindex="0">
                                        <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellspacing="0" style={{opacity: '1'}}>
                                            <tbody>
                                                <tr className="woocommerce-cart-form__cart-item cart_item">
                                                    <td className="product-remove">
                                                        <span className="remove" data-product_id="941">×</span>
                                                    </td>
                                                    <td className="product-thumbnail">
                                                        <a href="/">
                                                            <img width="200" height="196"
                                                                 src="https://algaph.com/wp-content/uploads/2018/10/250ml_1_07-200x196.jpg"
                                                                 className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt=""/>
                                                        </a>
                                                    </td>
                                                    <td className="product-name" data-title="Товар">
                                                        <a href="/" className="cart__good__title">Крем для рук и ногтей</a>
                                                        <div className="cart__good__exerpt">питательный крем 250 мл</div>
                                                    </td>
                                                    <td className="product-quantity" data-title="Количество">
                                                        <div className="quantity__wrap">
                                                            <div className="quantity">
                                                                <label className="screen-reader-text"
                                                                       for="quantity_5c54a8344a8d1">Количество</label>
                                                                <input type="number" id="quantity_5c54a8344a8d1"
                                                                       className="input-text qty text" step="1" min="0" max=""
                                                                       name="cart[92262bf907af914b95a0fc33c3f33bf6][qty]"
                                                                       value="1" title="Кол-во" size="4" pattern="[0-9]*"
                                                                       inputmode="numeric"
                                                                       aria-labelledby="Количество Крем для рук и ногтей"/>
                                                                    <div className="inc button">+</div>
                                                                    <div className="dec button">-</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="product-subtotal" data-title="Итого">
                                                        <span className="woocommerce-Price-amount amount">115<span className="woocommerce-Price-currencySymbol">грн</span></span>
                                                    </td>
                                                </tr>
                                                <tr className="woocommerce-cart-form__cart-item cart_item">
                                                    <td className="product-remove">
                                                        <a href="/" className="remove" aria-label="Удалить эту позицию" data-product_id="906" data-product_sku="">×</a>
                                                    </td>
                                                    <td className="product-thumbnail">
                                                        <a href="/">
                                                            <img width="200" height="196"
                                                            src="https://algaph.com/wp-content/uploads/2018/10/180-g_scrub-cream__03-200x196.jpg"
                                                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                                                            alt="dasfgsd"/>
                                                        </a>
                                                    </td>

                                                    <td className="product-name" data-title="Товар">
                                                        <a href="https://algaph.com/product/%d1%81%d0%ba%d1%80%d0%b0%d0%b1-%d0%ba%d1%80%d0%b5%d0%bc-%d0%b4%d1%8f%d0%bd%d1%8f/"
                                                           className="cart__good__title">Скраб-крем дыня</a>
                                                        <div className="cart__good__exerpt">сахарный крем-скраб 180 г</div>
                                                    </td>

                                                    <td className="product-quantity" data-title="Количество">
                                                        <div className="quantity__wrap">
                                                            <div className="quantity">
                                                                <label className="screen-reader-text" for="quantity_5c54a8344b2f2">Количество</label>
                                                                <input type="number" id="quantity_5c54a8344b2f2"
                                                                       className="input-text qty text" step="1" min="0" max=""
                                                                       name="cart[c8fbbc86abe8bd6a5eb6a3b4d0411301][qty]"
                                                                       value="1" title="Кол-во" size="4" pattern="[0-9]*"
                                                                       inputmode="numeric"
                                                                       aria-labelledby="Количество Скраб-крем дыня"/>
                                                                    <div className="inc button">+</div>
                                                                    <div className="dec button">-</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="product-subtotal" data-title="Итого">
                                                        <span className="woocommerce-Price-amount amount">75<span className="woocommerce-Price-currencySymbol">грн</span></span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="actions">
                                            <button type="submit" className="button" name="update_cart" value="Обновить корзину">Обновить корзину</button>
                                            <input type="hidden" id="woocommerce-cart-nonce"
                                                   name="woocommerce-cart-nonce"
                                                   value="af97773d9c"/>
                                            <input type="hidden" name="_wp_http_referer" value="/"/>
                                        </div>

                                    </div>

                                    <div className="cart__popup__tableBottom">
                                        <div className="cart__popup__tableBottomText">Сумма заказа:</div>
                                        <div className="cart__popup__tableBottomSumm">
                                            <span className="cart__popup__cartTotal" style={{opacity: 1}}>190</span>
                                            <span className="cart__popup__cartTotalCurrency"> грн</span>
                                        </div>
                                    </div>
                                    <div className="cart__popup__tableBtnWrap">
                                        <a href="/checkout/" className="cart__popup__btn__checkout">Оформить заказ</a>
                                    </div>

                                    <div className="cart__popup__tableFooter">
                                        <a href="https://algaph.com/shop/" className="checkout-button button alt wc-forward cart__popup__btn__forward underline__dotted">Продолжить покупки</a>
                                        <div className="coupon">
                                            <label className="underline__dotted" for="coupon_code">Код на скидку:</label>
                                            <input type="text" name="coupon_code" className="input-text" id="coupon_code"
                                                   value="" placeholder="_ _ _ _"/>
                                            <button type="submit" className="button" name="apply_coupon" value="Применить купон">Применить код</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="mfp-close" onClick={(e) => this.onClose(e)}>×</div>
                            </div>
                        </div>
                        <div className="mfp-preloader">Loading...</div>
                    </div>
                </div>
            </React.Fragment>
    );
    }
    }

    export default ModalCart;