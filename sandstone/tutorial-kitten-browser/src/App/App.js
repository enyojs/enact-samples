import kind from '@enact/core/kind';
import {Panels} from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Changeable from '@enact/ui/Changeable';
import PropTypes from 'prop-types';

import Detail from '../views/Detail';
import List from '../views/List';

const kittens = [
	'Garfield',
	'Nermal',
	'Simba',
	'Nala',
	'Tiger',
	'Kitty'
];

const Sample = kind({
	name: 'App',

	propTypes: {
		kittenIndex: PropTypes.number,
		onKittenIndexChange: PropTypes.func,
		onPanelIndexChange: PropTypes.func,
		panelIndex: PropTypes.number
	},

	defaultProps: {
		kittenIndex: 0,
		panelIndex: 0
	},

	handlers: {
		onSelectKitten: (ev, {onKittenIndexChange, onPanelIndexChange}) => {
			if (onKittenIndexChange) {
				onKittenIndexChange({
					kittenIndex: ev.index
				});
			}

			// navigate to the detail panel on selection
			if (onPanelIndexChange) {
				onPanelIndexChange({
					panelIndex: 1
				});
			}
		}
	},

	render: ({kittenIndex, onPanelIndexChange, onSelectKitten, panelIndex, ...rest}) => {
		delete rest.onKittenIndexChange;

		return (
			<Panels {...rest} index={panelIndex} onBack={onPanelIndexChange}>
				<List onSelectKitten={onSelectKitten}>{kittens}</List>
				<Detail name={kittens[kittenIndex]} />
			</Panels>
		);
	}
});

const AppBase = Changeable({prop: 'panelIndex', change: 'onPanelIndexChange'},
	Changeable({prop: 'kittenIndex', change: 'onKittenIndexChange'},
		Sample
	)
);

const App = ThemeDecorator(AppBase);

export default App;
export {
	App,
	AppBase
};
