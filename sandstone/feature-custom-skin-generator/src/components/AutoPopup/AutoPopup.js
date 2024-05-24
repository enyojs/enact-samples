import kind from '@enact/core/kind';
import BodyText from '@enact/sandstone/BodyText';
import Button from '@enact/sandstone/Button';
import Popup from '@enact/sandstone/Popup';
import PropTypes from 'prop-types';

import * as commonCss from '../../common/styles.module.less';

/**
 * A popup component containing the alert for `switch to auto` warning
 */
const AutoPopup = kind({
	name: 'AutoPopup',

	propTypes:{
		/**
		 * Indicates the auto mode
		 *
		 * @type {Boolean}
		 * @required
		 * @public
		 */
		auto: PropTypes.bool.isRequired,

		/**
		 * Opens the popup if certain conditions are met
		 *
		 * @type {Boolean}
		 * @required
		 * @public
		 */
		openWarning: PropTypes.bool.isRequired,

		/**
		 * Setter function that interacts with prop `auto`
		 *
		 * @type {Function}
		 * @required
		 * @public
		 */
		setAuto: PropTypes.func.isRequired,

		/**
		 * Setter function that resets the number of changes since `auto` was turned off
		 *
		 * @type {Function}
		 * @required
		 * @public
		 */
		setChanges: PropTypes.func.isRequired,

		/**
		 * Setter function that interacts with prop `openWarning`
		 *
		 * @type {Function}
		 * @required
		 * @public
		 */
		setOpenWarning: PropTypes.func.isRequired
	},

	handlers:{
		// Handler for the 'Yes' button of popup
		// It sets the `auto` to it's opposite value, changes to 0 and `openWarning` to false.
		onClickOk:(event, {auto, setAuto, setChanges, setOpenWarning}) => {
			setAuto(!auto);
			setChanges(0);
			setOpenWarning(false);
		},
		// Handler for the 'No' button of popup
		// It sets `openWarning` to false but it does not affect the other variables.
		onClickCancel:(event, {setOpenWarning}) => {
			setOpenWarning(false);
		}
	},

	render:({onClickCancel, onClickOk, openWarning, ...rest}) => {
		delete rest.auto;
		delete rest.setAuto;
		delete rest.setChanges;
		delete rest.setOpenWarning;

		return (
			<Popup {...rest} className={commonCss.customAlert} open={openWarning}>
				<BodyText centered size="small">Do you want to switch from manual to auto?</BodyText>
				<Button onClick={onClickOk} size="small">Yes</Button>
				<Button onClick={onClickCancel} size="small">No</Button>
			</Popup>
		);
	}
});

export default AutoPopup;
