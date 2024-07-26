/* global ENACT_PACK_ISOMORPHIC */
import {createRoot, hydrateRoot} from 'react-dom/client';

import App from './App';

const appElement = (<App />);

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
	const container = document.getElementById('root');

	if (ENACT_PACK_ISOMORPHIC) {
		hydrateRoot(container, appElement);
	} else {
		createRoot(container).render(appElement);
	}
}

export default appElement;
