import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataList from '../MenuPlan/Contents'
import './styles.css';

function PersonalPlan() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='allContain'>
            <div>
                <h2>choose your meal</h2>
                <Slider {...settings}>
                    {[1, 2, 3, 4].map((item, index) => {
                        return <div key={index}>{item}</div>
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default PersonalPlan