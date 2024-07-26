import {Column, Row} from '@enact/ui/Layout';
import kind from '@enact/core/kind';
import {Button} from '@enact/sandstone/Button';
import ri from '@enact/ui/resolution';

const MainPanel = kind({
	name: 'MainPanel',

	render: () => (
		<Row>
			<Column style={{width: ri.scaleToRem(540), height: ri.scaleToRem(144)}}>
				<Button>Button</Button>
				<Button>Button</Button>
			</Column>
		</Row>
	)
});

export default MainPanel;