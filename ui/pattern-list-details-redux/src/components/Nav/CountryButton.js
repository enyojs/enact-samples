import kind from '@enact/core/kind';
import Button from '@enact/ui/Button';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as css from './CountryButton.module.less';

const CountryButton = kind({
	name: 'CountryButton',

	propTypes: {
		country: PropTypes.string.isRequired,
		onCountryChange: PropTypes.func.isRequired,
		selected: PropTypes.bool
	},

	handlers: {
		onClick: (ev, {onCountryChange, country}) => {
			onCountryChange({country});
		}
	},

	render: ({country, onClick, selected, ...rest}) => {
		delete rest.onCountryChange;

		return (
			<Button
				{...rest}
				className={css.button}
				onClick={onClick}
				selected={selected}
			>
				{country}
			</Button>
		);
	}
});

const mapStateToProps = (state, ownProps) => {
	const country = ownProps.country;
	return {
		selected: state.data[country].selected
	};
};

const CountryButtonContainer = connect(mapStateToProps, {})(CountryButton);

export default CountryButtonContainer;
