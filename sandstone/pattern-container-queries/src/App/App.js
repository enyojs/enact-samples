import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';

import MainPanel from '../views/MainPanel';

const AppBase = kind({
	name: 'App',

	render: function (props) {
		return (
			<div {...props}>
				<MainPanel initials="K" />
			</div>
		);
	}
});

const App = ThemeDecorator(AppBase);

export default App;
export {
	App,
	AppBase
};
