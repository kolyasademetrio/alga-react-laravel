import React, {Component} from "react";
import Slider from 'react-slick';
import {settings, setSliderVisibility} from "./recommendedSliderSettings";
import ProductSingle from '../products/ProductSingle';

const RecommendedList = ({productsRecommended}) => {
    const showSlider = setSliderVisibility(
        productsRecommended && productsRecommended.length, window.innerWidth
    );

    const ProductsRecommendedList = productsRecommended && productsRecommended.map(productData => (
        <ProductSingle key={productData.id} {...productData} />
    ));

    return (
        <div className="recommended__products">
            {
                showSlider ? (
                    <Slider {...settings} className={'recommended__categoryWrapper active'}>
                        { ProductsRecommendedList }
                    </Slider>
                ) : (
                    <div className="recommended__categoryWrapper active no_slider">
                        { ProductsRecommendedList }
                    </div>
                )
            }
        </div>
    );
};

export default RecommendedList;
