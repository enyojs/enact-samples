import kind from '@enact/core/kind';
import Group from '@enact/ui/Group';
import Item from '@enact/ui/Item';
import PropTypes from 'prop-types';

import * as css from './SideBar.module.less';

const SideBar = kind({
	name: 'SideBar',

	propTypes: {
		onCityChange: PropTypes.func.isRequired,
		selectedCountry: PropTypes.string.isRequired,
		cities: PropTypes.object
	},

	render: ({cities, onCityChange, selectedCountry, ...rest}) => {
		return (
			<Group
				{...rest}
				childComponent={Item}
				itemProps={{css}}
				onSelect={onCityChange}
				select="radio"
				selectedProp="selected"
			>
				{cities[selectedCountry]}
			</Group>
		);
	}
});

export default SideBar;
