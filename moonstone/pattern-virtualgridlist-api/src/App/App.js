import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';

import MainView from '../views/MainView';

import * as css from './App.module.less';

const AppBase = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<div {...props}>
			<MainView />
		</div>
	)
});

const App = MoonstoneDecorator({noAutoFocus: true}, AppBase);

export default App;
export {App, AppBase};
