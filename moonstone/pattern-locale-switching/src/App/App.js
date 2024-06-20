import kind from '@enact/core/kind';
import I18nDecorator from '@enact/i18n/I18nDecorator';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import {Panels} from '@enact/moonstone/Panels';
import {connect} from 'react-redux';

import MainPanel from '../views/MainPanel';

import * as css from './App.module.less';

const Sample = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => {
		return (
			<div {...props}>
				<Panels>
					<MainPanel />
				</Panels>
			</div>
		);
	}
});

const mapStateToProps = ({locale}) => ({locale});

const AppBase = connect(mapStateToProps, {})(I18nDecorator(Sample));
const App = connect(mapStateToProps, {})(MoonstoneDecorator(Sample));

export default App;
export {App, AppBase};
