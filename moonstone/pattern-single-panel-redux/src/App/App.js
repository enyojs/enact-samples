import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import {Panels} from '@enact/moonstone/Panels';

import MainPanel from '../views/MainPanel';

import * as css from './App.module.less';

const AppBase = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<Panels {...props}>
			<MainPanel />
		</Panels>
	)
});

const App = MoonstoneDecorator(AppBase);

export default App;
export {App, AppBase};
