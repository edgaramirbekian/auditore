import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import Favicon from 'react-favicon';

const RenderApp = Component => ReactDOM.render(
    <div className="cv-app">
        <Favicon url={"https://raw.githubusercontent.com/edgaramirbekian/auditore/master/public/favicon.ico"} />
        <Component />
    </div>,
    document.getElementById('root'));

RenderApp(App);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept('./App', () => {
            // console.log('Hot reload just happened');
            const NextApp = require('./App').default;
            RenderApp(NextApp);
        });
    }
}