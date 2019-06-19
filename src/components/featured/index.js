import React from 'react';
import Carousel from './Carousel';

const Featured = () => {
    return (
        <div style={{position: "relative"}}>

            <Carousel />

            <div className='artist_name'>
                <div className='wrapper'>
                    Somebody Famous
                </div>
            </div>
            
        </div>
    );
};

export default Featured;