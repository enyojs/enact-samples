import {render} from 'react-dom';
import {Provider} from 'react-redux';
import 'web-animations-js';

import App from './App';
import configureStore from './store';

const store = configureStore();

const appElement = (
	<Provider store={store}>
		<App />
	</Provider>
);

// In a browser environment, render the app to the document.
if (typeof window !== 'undefined') {
	render(appElement, document.getElementById('root'));
}

export default appElement;
