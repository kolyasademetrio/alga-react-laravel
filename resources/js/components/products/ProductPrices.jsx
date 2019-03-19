import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class ProductPrices extends Component {

    state = {
        hasSalePrice: this.props.sale_price == 0 ? false : true,
    };

    render(){

        const { regular_price, sale_price, currency } = this.props;

        return (
            <div className="good__itemPrices">
                {
                    this.state.hasSalePrice &&
                        <span className="good__itemSalePrice">
                            <span>{ ReactHtmlParser(regular_price) }</span>
                            <span>{ ReactHtmlParser(currency) }</span>
                        </span>
                }

                <span className="good__itemRegularPrice">
                    <span className="good__itemRegularPriceValue">{
                        this.state.hasSalePrice ? ReactHtmlParser(sale_price) : ReactHtmlParser(regular_price)
                    }</span>
                    <span className="good__itemRegularPriceCur">{ ReactHtmlParser(currency) }</span>
                </span>
            </div>
        );
    }
}

export default ProductPrices;