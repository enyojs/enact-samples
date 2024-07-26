import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';

import screenTypes from '../../screenTypes.json';
import MainPanel from '../views/MainPanel';

import css from './App.module.less';

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

export default ThemeDecorator({ri: {screenTypes}}, App);
