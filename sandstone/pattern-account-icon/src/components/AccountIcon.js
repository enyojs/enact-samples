import Icon from '@enact/sandstone/Icon';
import PropTypes from 'prop-types';

// For custom style of account icon
import * as css from './AccountIcon.module.less';

const AccountIcon = ({bgColor, children}) => {
	const accountStyle = {
		backgroundColor: bgColor
	};

	return (
		<Icon css={css} style={accountStyle} size="small">{children}</Icon>
	);
};

AccountIcon.propTypes = {
	bgColor: PropTypes.string
};

export default AccountIcon;
