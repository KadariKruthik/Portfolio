import React from 'react';
import './Portfolio.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from './ArrowComponent.jsx';

// Import images
import AvsH from "../../img/AvsH.png";
import Directors1 from "../../img/Directors1.jpg";
import GAMING from "../../img/GAMING.jpg";
import Scary from "../../img/Scary.jpg";
import RichPoor from "../../img/RichPoor.jpg";
import Trumpp from "../../img/Trumpp.jpg";

import Heroslider from "react-slick";

export const Portfolio = () => {
    // Split images into two arrays
    const imagesRow1 = [AvsH, Directors1, GAMING];
    const imagesRow2 = [Scary, RichPoor, Trumpp];

    // Settings for Slick Carousel
   const settings = {
    arrows: true,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,  // Default: Show 3 slides at once
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
        {
            breakpoint: 768, // Adjust for tablets and smaller screens
            settings: {
                slidesToShow: 2, // Show 2 slides at a time on tablets
                slidesToScroll: 1, // Scroll 1 slide at a time
            },
        },
        {
            breakpoint: 480, // Adjust for mobile screens
            settings: {
                slidesToShow: 1, // Show 2 slides at a time on mobile
                slidesToScroll: 1, // Scroll 1 slide at a time
            },
        },
    ],
};


    return (
        <div className="slider-container" id="Experience">
            <div className="slider-heading">
                <span>Most Attractive</span>
                <span>Thumbnails</span>
            </div>
            {/* First Row Carousel */}
            <div className="slider-row">
                <Heroslider {...settings}>
                    {imagesRow1.map((image, index) => (
                        <div key={index} className="slick-slide">
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </Heroslider>
            </div>

            {/* Second Row Carousel */}
            <div className="slider-row">
                <Heroslider {...settings}>
                    {imagesRow2.map((image, index) => (
                        <div key={index} className="slick-slide">
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </Heroslider>
            </div>
        </div>
    );
};
