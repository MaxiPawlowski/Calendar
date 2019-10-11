import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { register as registerServiceWorker } from 'utils/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
