import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('home_root');

ReactDOM.render(<App />, rootElement);

serviceWorker.unregister();
//serviceWorker.register();
