import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Body from './components/Body';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Body />, document.getElementById('root'));
serviceWorker.unregister();