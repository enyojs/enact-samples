/* global ENACT_PACK_ISOMORPHIC */
import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './App/App';
import reportWebVitals from './reportWebVitals';

const appElement = (<App />);

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
	createRoot(document.getElementById('root')).render(appElement);
}

export default appElement;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
// Learn more: https://github.com/enactjs/cli/blob/master/docs/measuring-performance.md
reportWebVitals();
