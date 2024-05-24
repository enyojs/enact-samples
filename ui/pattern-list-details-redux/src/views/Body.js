import kind from '@enact/core/kind';
import {Cell, Row} from '@enact/ui/Layout';

import ContentContainer from '../containers/ContentContainer';
import SideBarContainer from '../containers/SideBarContainer';

import * as css from './Body.module.less';

const Body = kind({
	name: 'Body',

	styles: {
		css,
		className: 'body'
	},

	render: ({...rest}) => (
		<Row {...rest}>
			<Cell className={css.sidebar} size="30%">
				<SideBarContainer />
			</Cell>
			<Cell className={css.content}>
				<ContentContainer />
			</Cell>
		</Row>
	)
});

export default Body;
