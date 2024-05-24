import kind from '@enact/core/kind';
import Heading from '@enact/ui/Heading';

import NavContainer from '../containers/NavContainer';

import Body from './Body';

import * as css from './MainView.module.less';

const MainView = kind({
	name: 'MainView',

	render: (props) => (
		<div {...props} className={css.main}>
			<Heading spacing="small" size="title">
				<div className={css.heading}>
					City Viewer Redux
					<div>
						<NavContainer />
					</div>
				</div>
			</Heading>
			<Body />
		</div>
	)
});

export default MainView;
