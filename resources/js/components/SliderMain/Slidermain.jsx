import React, { Component } from 'react';
import Slider from 'react-slick';

class Slidermain extends Component {
    render(){
        var settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            centerMode: true,
            focusOnSelect: true,
            autoplay: false,
            centerPadding: 0,
        };

        return (
            <div className="sliderMain">
                <Slider {...settings}>
                    <li className="sliderMain__listItem">
                        <div className="sliderMain__link">
                            <img src="uploads/2018/11/Slider_1266x425_v2__.jpg" alt="" className="sliderMain__img"/>
                        </div>
                    </li>
                    <li className="sliderMain__listItem">
                        <div className="sliderMain__link">
                            <img src="uploads/2018/11/Slider_1266x425_v4__.jpg" alt="" className="sliderMain__img"/>
                        </div>
                    </li>
                </Slider>
            </div>
        );
    }
}

export default Slidermain;