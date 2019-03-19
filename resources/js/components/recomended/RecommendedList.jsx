import React, {Component} from "react";
import Slider from 'react-slick';
import {settings} from "./recommendedSliderSettings";
import ProductSingle from '../products/ProductSingle';

/*const RecommendedList = ({productsRecommended, categoriesRelationship, categories, filterBy}) => {
    return (
        <div className="recommended__products">
            <Slider {...settings} className={'recommended__categoryWrapper active'}>
                {
                    productsRecommended && productsRecommended.map(productData => (
                        <ProductSingle key={productData.id} {...productData} />
                    ))
                }
            </Slider>
        </div>
    );
};*/

class RecommendedList extends Component {
    constructor(state){
        super(state);

        this.setState({
            showSlider: this.setSliderVisibility(this.props.productsRecommended && this.props.productsRecommended.length, window.innerWidth),
        });
    }

    setSliderVisibility(childQty, windowWidth){
        if ( (childQty > 4 && windowWidth > 1199) ) {
            return true;
        } else if ( childQty > 3 && windowWidth <= 1199 ) {
            return true;
        } else if ( childQty > 2 && windowWidth <= 991 ) {
            return true;
        } else if ( childQty > 1 && windowWidth <= 500 ) {
            return true;
        } else {
            return false;
        }
    }

    render(){
        return (
            <div className="recommended__products">

                {
                    this.state.showSlider ? (
                        <Slider {...settings} className={'recommended__categoryWrapper active'}>
                            {
                                this.props.productsRecommended && this.props.productsRecommended.map(productData => (
                                    <ProductSingle key={productData.id} {...productData} />
                                ))
                            }
                        </Slider>
                    ) : (
                        this.props.productsRecommended && this.props.productsRecommended.map(productData => (
                            <ProductSingle key={productData.id} {...productData} />
                        ))
                    )
                }

                {/*<Slider {...settings} className={'recommended__categoryWrapper active'}>
                    {
                        this.props.productsRecommended && this.props.productsRecommended.map(productData => (
                            <ProductSingle key={productData.id} {...productData} />
                        ))
                    }
                </Slider>*/}
            </div>
        );
    }



}

export default RecommendedList;
