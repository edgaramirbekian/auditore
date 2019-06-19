import React from "react";
import Slider from "react-slick";

import onement_vi from '../../resources/images/onement-vi.jpg';
import black_and_red from '../../resources/images/blckandred.jpg';
import no_5 from '../../resources/images/no5.jpeg';
import black_square from '../../resources/images/blacksquare.jpg';

const Carousel = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false
    };

    return (
        <div
        className="carousel_wrapper"
        style={{
            height: `${window.innerHeight}px`,
            overflow: "hidden",
        }}
        >
            <Slider {...settings}>
                <div>
                    <div
                        className="carousel_image"
                        style={{
                            background: `url(${onement_vi})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>
                <div>
                    <div
                        className="carousel_image"
                        style={{
                            background: `url(${black_and_red})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>
                <div>
                    <div
                        className="carousel_image"
                        style={{
                            background: `url(${no_5})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>
                <div>
                    <div
                        className="carousel_image"
                        style={{
                            background: `url(${black_square})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;