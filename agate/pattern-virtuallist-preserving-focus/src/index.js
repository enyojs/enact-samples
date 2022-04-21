import {createRoot} from 'react-dom/client';
import 'web-animations-js';

import App from './main';

const appElement = <App />;

// In a browser environment, render the app to the document.
if (typeof window !== 'undefined') {
	const container = document.getElementById('root');
	const root = createRoot(container);

	root.render(appElement);
}

export default appElement;
