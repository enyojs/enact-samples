import kind from '@enact/core/kind';
import {Panels} from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Spotlight from '@enact/spotlight';
import Changeable from '@enact/ui/Changeable';
import PropTypes from 'prop-types';

import Detail from '../views/Detail';
import List from '../views/List';

const forceFocusElement = () => {
	if (!Spotlight.getCurrent()) {
		Spotlight.focus();
		Spotlight.initialize();
	}
};

const kittens = [
	'Garfield',
	'Nermal',
	'Simba',
	'Nala',
	'Tiger',
	'Kitty'
];

const AppBase = kind({
	name: 'App',

	propTypes: {
		index: PropTypes.number,
		kitten: PropTypes.number,
		onNavigate: PropTypes.func,
		onSelectKitten: PropTypes.func
	},

	defaultProps: {
		index: 0,
		kitten: 0
	},

	handlers: {
		onSelectKitten: (ev, {onNavigate, onSelectKitten}) => {
			if (onSelectKitten) {
				onSelectKitten({
					kitten: ev.index
				});
			}

			// navigate to the detail panel on selection
			if (onNavigate) {
				onNavigate({
					index: 1
				});
			}
		}
	},

	render: ({index, kitten, onNavigate, onSelectKitten, ...rest}) => {
		// In order not to lose focus on the sample when navigating to the sample through all-samples, for now we manually focus the element
		setTimeout(forceFocusElement, 100);
		return (
			<div {...rest}>
				<Panels index={index} onBack={onNavigate}>
					<List onSelectKitten={onSelectKitten}>{kittens}</List>
					<Detail name={kittens[kitten]} />
				</Panels>
			</div>
		);
	}
});

const App = Changeable({prop: 'index', change: 'onNavigate'},
	Changeable({prop: 'kitten', change: 'onSelectKitten'},
		ThemeDecorator(AppBase)
	)
);

export default App;
export {
	App,
	AppBase
};
