import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';

import * as css from './App.module.less';

const AppBase = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: function (props) {
		return (
			<div className={props.className}>
				Hello Enact!
			</div>
		);
	}
});

const App = MoonstoneDecorator(AppBase);

export default App;
export {App, AppBase};
