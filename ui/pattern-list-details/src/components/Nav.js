import kind from '@enact/core/kind';
import Button from '@enact/ui/Button';
import Group from '@enact/ui/Group';
import PropTypes from 'prop-types';

import * as css from './Nav.module.less';

const Nav = kind({
	name: 'Nav',

	propTypes: {
		countryList: PropTypes.array.isRequired,
		onCountryChange: PropTypes.func.isRequired
	},

	render: ({countryList, onCountryChange, ...rest}) => {
		return (
			<Group
				{...rest}
				childComponent={Button}
				itemProps={{css}}
				onSelect={onCountryChange}
				select="radio"
				selectedProp="selected"
			>
				{countryList}
			</Group>
		);
	}
});

export default Nav;
