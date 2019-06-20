import React from 'react';

import Carousel from './Carousel';
import Timer from './Timer';

const Featured = () => {
    return (
        <div style={{position: "relative"}}>

            <Carousel />

            <div className='artist_name'>
                <div className='wrapper'>
                    "Somebody Famous"
                </div>
            </div>

            <Timer />

        </div>
    );
};

export default Featured;