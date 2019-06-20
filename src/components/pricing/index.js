import React, { useState } from 'react';

import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom';

const Pricing = () => {
    const [prices] = useState([150,250,500]);
    const [descriptions] = useState([
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis urna",
        "Integer facilisis quam eget ligula placerat, id interdum lorem pharetra",
        "Suspendisse eros eros, tincidunt at sagittis at, malesuada a enim"
    ]);
    const [category] = useState(["Regular", "Medium", "Premium"]);
    const [linksTo] = useState([
        "https://sales/reg",
        "https://sales/med",
        "https://sales/pre"
    ]);
    const [delay] = useState([500,0,500])

    const ShowBoxes = () => {
        return prices.map((price, index) => (
            <Zoom key={price[index]} delay={delay[index]}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>{price}$</span>
                            <span>{category[index]}</span>
                        </div>
                        <div className="pricing_description">
                            <span>{descriptions[index]}</span>
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase Tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link={linksTo[index]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    };

    return (
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2> Pricing </h2>
                <div className="pricing_wrapper">
                    <ShowBoxes />
                </div>
            </div>
        </div>
    );
};

export default Pricing;