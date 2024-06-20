import kind from '@enact/core/kind';
import Button from '@enact/sandstone/Button';
import {Header, Panel} from '@enact/sandstone/Panels';
import {Cell, Row} from '@enact/ui/Layout';
import PropTypes from 'prop-types';

import AccountIcon from '../components/AccountIcon';

// In sandstone theme, the text color changes to gray tone when the button is focused.
// A custom style is needed to prevent this and maintain the white tone text color.
import * as css from './MainPanel.module.less';

const MainPanel = kind({
	name: 'MainPanel',

	propTypes: {
		bgColor: PropTypes.string,
		initials: PropTypes.string
	},

	defaultProps: {
		bgColor: 'red'
	},

	render: ({bgColor, initials, ...rest}) => {
		return (
			<Panel {...rest}>
				<Header title="Account Icon" />
				<Row>
					<Cell shrink>
						<Button css={css} size="small" icon iconComponent={<AccountIcon bgColor={bgColor}>{initials}</AccountIcon>} />
					</Cell>
					<Cell shrink>
						<Button size="small" icon="profile" />
					</Cell>
				</Row>
			</Panel>
		);
	}
});

export default MainPanel;
