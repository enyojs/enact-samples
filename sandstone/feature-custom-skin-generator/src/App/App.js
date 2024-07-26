import kind from '@enact/core/kind';
import Panels from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';

import MainPanel from '../views/MainPanel';
import screenTypes from '../../screenTypes.json';

import css from './App.module.less';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<div {...props}>
			<Panels className={css.panels}>
				<MainPanel />
			</Panels>
		</div>
	)
});

export default ThemeDecorator({ri: {screenTypes}}, App);
