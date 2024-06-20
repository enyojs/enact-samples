import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';

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

const App = ThemeDecorator({noAutoFocus: true}, AppBase);

export default App;
export {App, AppBase};
