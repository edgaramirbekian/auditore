import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const RenderApp = Component => ReactDOM.render(
    <div className="cv-app">
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