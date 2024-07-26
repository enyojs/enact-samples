import {Button} from '@enact/sandstone/Button';
import {Input} from '@enact/sandstone/Input';
import {Header} from '@enact/sandstone/Panels';

import kind from '@enact/core/kind';
import {Panel} from '@enact/sandstone/Panels';
import ri from '@enact/ui/resolution';

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			<Button style={{color: 'rgb(230, 230, 230)', position: 'absolute', top: ri.scaleToRem(737), left: ri.scaleToRem(190)}}>Label</Button>
			<Button style={{color: 'rgb(230, 230, 230)', position: 'absolute', top: ri.scaleToRem(1008), left: ri.scaleToRem(190)}}>Label</Button>
			<Input placeholder="Please enter a text" style={{backgroundColor: 'rgb(125, 132, 140)', color: 'rgb(230, 230, 230)', position: 'absolute', top: ri.scaleToRem(996), left: ri.scaleToRem(990)}} />
			<Header subtitle="Subtitle" title="Header title" style={{color: 'rgb(230, 230, 230)', position: 'absolute', top: ri.scaleToRem(0), left: ri.scaleToRem(0), width: ri.scaleToRem(3840), height: ri.scaleToRem(600)}} />
			<Button style={{color: 'rgb(230, 230, 230)', position: 'absolute', top: ri.scaleToRem(1279), left: ri.scaleToRem(190)}}>Label</Button>
		</Panel>
	)
});

export default MainPanel;
