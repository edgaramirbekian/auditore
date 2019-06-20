import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import Nfo from './components/venueNfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from  './components/location';
import Footer from './components/header_footer/Footer';
import { Element } from 'react-scroll'

function App() {
    return (
        <div className="App" >

            <Element name="header">
                <Header />
            </Element>

            <Element name="featured">
                <Featured />
            </Element>

            <Element name="info">
                <Nfo />
            </Element>

            <Element name="highlights">
                <Highlights />
            </Element>

            <Element name="pricing">
                <Pricing />
            </Element>

            <Element name="location">
                <Location />
            </Element>

            <Footer />
        </div>
    );
}

export default App;
