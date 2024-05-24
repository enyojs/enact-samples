import kind from '@enact/core/kind';
import Button from '@enact/my-theme/Button';
import Heading from '@enact/my-theme/Heading';
import {Row, Cell} from '@enact/ui/Layout';
import PropTypes from 'prop-types';

import * as css from './PanelHeader.module.less';

const PanelHeader = kind({
	name: 'PanelHeader',

	propTypes: {
		onNavHomePanel: PropTypes.func
	},

	styles: {
		css,
		className: 'panelHeader'
	},

	render: ({children, onNavHomePanel, ...rest}) => (
		<Row align="center" {...rest}>
			{onNavHomePanel ? <Cell shrink>
				<Button size="small" onClick={onNavHomePanel} icon="arrow_back" />
			</Cell> : null}
			<Cell>
				<Heading size="title" spacing="none">
					{children}
				</Heading>
			</Cell>
		</Row>
	)
});

// Set up PanelHeader so when it's used in a slottable layout (like Panel), it is automatically
// recognized as this specific slot.
PanelHeader.defaultSlot = 'header';

export default PanelHeader;
