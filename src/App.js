import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import Nfo from './components/venueNfo';
import Highlights from './components/highlights';

function App() {
    return (
        <div className="App" >
            <Header />
            <Featured />
            <Nfo />
            <Highlights />
        </div>
    );
}

export default App;
