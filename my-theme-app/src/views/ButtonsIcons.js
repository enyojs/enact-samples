import kind from '@enact/core/kind';
import Button from '@enact/my-theme/Button';
import Checkbox from '@enact/my-theme/Checkbox';
import Heading from '@enact/my-theme/Heading';
import Icon from '@enact/my-theme/Icon';
import {Panel} from '@enact/my-theme/Panels';
import PropTypes from 'prop-types';

import PanelHeader from '../components/PanelHeader';

import * as commonCss from './common.module.less';

const ButtonsIconsPanel = kind({
	name: 'ButtonsIconsPanel',

	propTypes: {
		onNavHomePanel: PropTypes.func
	},

	styles: {
		css: commonCss
	},

	render: ({onNavHomePanel, ...rest}) => (
		<Panel {...rest}>
			<PanelHeader onNavHomePanel={onNavHomePanel}>Buttons & Icons Examples</PanelHeader>
			<section>
				<Heading>Buttons</Heading>
				<Button>
					This is a Large Button
				</Button>
				<Button size="small">
					This is a Small Button
				</Button>
			</section>

			<section>
				<Heading>Icons</Heading>
				<Icon>drafts</Icon>
				<Icon size="small">drafts</Icon>
				<Checkbox selected />
			</section>

			<section>
				<Heading>Icons In Buttons</Heading>
				<Button icon="star_half" />
				<Button size="small" icon="star_half" />
				<Button icon="star_border">0/5 Stars</Button>
				<Button size="small" icon="star_border">0/5 Stars</Button>
			</section>
		</Panel>
	)
});

export default ButtonsIconsPanel;
