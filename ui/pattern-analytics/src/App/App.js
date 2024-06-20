import kind from '@enact/core/kind';

import MainPanel from '../views/MainPanel';

import * as css from './App.module.less';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<div {...props}>
			<MainPanel />
		</div>
	)
});

export default App;
