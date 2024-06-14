import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';

//Custom component
import Counter from '../components/Counter'

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			<Header title="Hello Enact + TypeScript!" />
			<Counter />
		</Panel>
	)
});

export default MainPanel;
