import { Column } from '@enact/ui/Layout';
import { Row } from '@enact/ui/Layout';
import { Button } from '@enact/sandstone/Button';

import kind from '@enact/core/kind';
import {Panel} from '@enact/sandstone/Panels';
import {Layout} from '@enact/ui/Layout';
import ri from '@enact/ui/resolution';

const MainPanel = kind({
    name: 'MainPanel',

    render: (props) => (
        <Panel {...props}>
		<Layout>
			<Column style={{width: ri.scaleToRem(923), height: ri.scaleToRem(2207), backgroundColor: "rgb(232, 40, 40)", position: "absolute", top: ri.scaleToRem(60), left: ri.scaleToRem(63)}} />
			<Row style={{width: ri.scaleToRem(2721), height: ri.scaleToRem(759), backgroundColor: "rgb(142, 85, 203)", position: "absolute", top: ri.scaleToRem(67), left: ri.scaleToRem(1062)}} />
			<Button disabled={false} style={{position: "absolute", top: ri.scaleToRem(522), left: ri.scaleToRem(1215)}}>Button</Button>
			<Button disabled={false} style={{position: "absolute", top: ri.scaleToRem(310), left: ri.scaleToRem(1215)}}>Button</Button>
		</Layout>
        </Panel>
    )
});

export default MainPanel;