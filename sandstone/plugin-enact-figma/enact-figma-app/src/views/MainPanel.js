import {Cell} from '@enact/ui/Layout';
import {Button} from '@enact/sandstone/Button';
import {Column} from '@enact/ui/Layout';
import {Row} from '@enact/ui/Layout';

import kind from '@enact/core/kind';
import {Scroller} from '@enact/sandstone/Scroller';
import {Layout} from '@enact/ui/Layout';
import ri from '@enact/ui/resolution';

const MainPanel = kind({
	name: 'MainPanel',

	render: () => (
		<Scroller focusableScrollbar>
			<Layout>
				<Cell align={'end'} style={{position: "absolute", backgroundColor: 'rgb(255, 255, 23)', borderRadius: 0, height: ri.scaleToRem(935), left: ri.scaleToRem(2443), opacity: 1, top: ri.scaleToRem(930), width: ri.scaleToRem(1001)}}>
					<Button disabled={false} size={'small'} style={{'--sand-component-bg-color': 'rgb(125, 132, 140)', borderRadius: 12, fontSize: ri.scaleToRem(60), height: ri.scaleToRem(108), opacity: 1, paddingRight: ri.scaleToRem(48), paddingLeft: ri.scaleToRem(48), width: ri.scaleToRem(300)}}>Button</Button>
				</Cell>
				<Column style={{position: "absolute", backgroundColor: 'rgb(167, 233, 62)', borderRadius: 0, color: 'rgb(173, 192, 29)', height: ri.scaleToRem(2207), left: ri.scaleToRem(63), opacity: 1, top: ri.scaleToRem(60), width: ri.scaleToRem(923)}}>
					<Button disabled={false} size={'small'} style={{'--sand-component-bg-color': 'rgb(125, 132, 140)', borderRadius: 12, fontSize: ri.scaleToRem(60), height: ri.scaleToRem(108), opacity: 1, paddingRight: ri.scaleToRem(48), paddingLeft: ri.scaleToRem(48), width: ri.scaleToRem(300)}}>Button</Button>
					<Button disabled={false} size={'small'} style={{'--sand-component-bg-color': 'rgb(125, 132, 140)', borderRadius: 12, fontSize: ri.scaleToRem(60), height: ri.scaleToRem(108), opacity: 1, paddingRight: ri.scaleToRem(48), paddingLeft: ri.scaleToRem(48), width: ri.scaleToRem(300)}}>Button</Button>
				</Column>
				<Row style={{position: "absolute", backgroundColor: 'rgb(27, 13, 160)', borderRadius: 0, height: ri.scaleToRem(759), left: ri.scaleToRem(1062), opacity: 1, top: ri.scaleToRem(67), width: ri.scaleToRem(2721)}}>
					<Button disabled={false} size={'small'} style={{'--sand-component-bg-color': 'rgb(125, 132, 140)', borderRadius: 12, fontSize: ri.scaleToRem(60), height: ri.scaleToRem(108), opacity: 1, paddingRight: ri.scaleToRem(48), paddingLeft: ri.scaleToRem(48), width: ri.scaleToRem(300)}}>Button</Button>
					<Button disabled={false} size={'small'} style={{'--sand-component-bg-color': 'rgb(125, 132, 140)', borderRadius: 12, fontSize: ri.scaleToRem(60), height: ri.scaleToRem(108), opacity: 1, paddingRight: ri.scaleToRem(48), paddingLeft: ri.scaleToRem(48), width: ri.scaleToRem(300)}}>Button</Button>
				</Row>
				<Cell align={'start'} shrink style={{position: "absolute", backgroundColor: 'rgb(214, 58, 58)', borderRadius: 0, height: ri.scaleToRem(1349), left: ri.scaleToRem(1062), opacity: 1, top: ri.scaleToRem(933), width: ri.scaleToRem(1269)}}>
					<Button disabled={false} size={'small'} style={{'--sand-component-bg-color': 'rgb(125, 132, 140)', borderRadius: 12, fontSize: ri.scaleToRem(60), height: ri.scaleToRem(108), opacity: 1, paddingRight: ri.scaleToRem(48), paddingLeft: ri.scaleToRem(48), width: ri.scaleToRem(300)}}>Button</Button>
					<Button disabled={false} size={'small'} style={{'--sand-component-bg-color': 'rgb(125, 132, 140)', borderRadius: 12, fontSize: ri.scaleToRem(60), height: ri.scaleToRem(108), opacity: 1, paddingRight: ri.scaleToRem(48), paddingLeft: ri.scaleToRem(48), width: ri.scaleToRem(300)}}>Button</Button>
				</Cell>
			</Layout>
		</Scroller>
	)
});

export default MainPanel;
