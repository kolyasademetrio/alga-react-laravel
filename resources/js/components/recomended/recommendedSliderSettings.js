import React from 'react';

export const settings = {
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: <SamplePrevArrow/>,
    nextArrow: <SampleNextArrow/>,
    centerMode: false,
    focusOnSelect: false,
    autoplay: false,
    centerPadding: 0,
    swipe: false,
    responsive: [
        {
            breakpoint: 2400,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        },
    ],
};

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div type="button"
             data-role="none"
             className="slick-next slick-arrow"
             aria-label="Next"
             role="button"
             onClick={onClick}
             style={{ ...style, display: "block" }}
        />
    );
}

function SamplePrevArrow (props) {
    const { style, onClick } = props;
    return (
        <div type="button"
             data-role="none"
             className="slick-prev slick-arrow"
             aria-label="Previous"
             role="button"
             onClick={onClick}
             style={{ ...style, display: "block" }}
        />
    );
}