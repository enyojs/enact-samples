import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Changeable from '@enact/ui/Changeable';

import FileBrowser from '../components/FileBrowser';

import * as css from './App.module.less';

// This would be replaced by redux but Changeable is a handy single-value, single-event state HOC
const Browser = Changeable(
	{prop: 'path', change: 'onNavigate'},
	FileBrowser
);

const AppBase = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<div {...props}>
			<Browser defaultPath={{path: '/a', directory: true}} />
		</div>
	)
});

const App = ThemeDecorator(AppBase);

export default App;
export {App, AppBase};
