import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './chapter2/ControlPanel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
