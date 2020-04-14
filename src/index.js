import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import AllComponents from "./allcomponents";


ReactDOM.render(<AllComponents />, document.getElementById('root'));


serviceWorker.unregister();
