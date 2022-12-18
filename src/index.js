// import 3 libs for render for web tv
import 'core-js/es6/map'; // <-- added this line after installed packages
import 'core-js/es6/set'; // <-- added this line after installed packages
import 'raf/polyfill'; // <-- added this line after installed packages
import 'core-js/fn/array/find';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
