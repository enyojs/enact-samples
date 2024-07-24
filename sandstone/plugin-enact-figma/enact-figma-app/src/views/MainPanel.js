import { Button } from '@enact/sandstone/Button';
import { InputField } from '@enact/sandstone/Input';
import { Header } from '@enact/sandstone/Panels';

import kind from '@enact/core/kind';
import {Panel} from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';
import ri from '@enact/ui/resolution';

const MainPanel = kind({
    name: 'MainPanel',

    render: (props) => (
        <Panel {...props}>
        	<Scroller>
			<Button style={{width: ri.scaleToRem(540), height: ri.scaleToRem(144), position: 'absolute', top: ri.scaleToRem(737), left: ri.scaleToRem(190)}}>Label</Button>
			<Button style={{width: ri.scaleToRem(540), height: ri.scaleToRem(144), position: 'absolute', top: ri.scaleToRem(1008), left: ri.scaleToRem(190)}}>Label</Button>
			<InputField placeholder='Please enter a text' style={{width: ri.scaleToRem(1800), height: ri.scaleToRem(168), position: 'absolute', top: ri.scaleToRem(996), left: ri.scaleToRem(971)}} />
			<Header subtitle='Subtitle' title='Header title' style={{width: ri.scaleToRem(3840), height: ri.scaleToRem(600), position: 'absolute', top: ri.scaleToRem(0), left: ri.scaleToRem(0)}} />
			<Button style={{width: ri.scaleToRem(540), height: ri.scaleToRem(144), position: 'absolute', top: ri.scaleToRem(1279), left: ri.scaleToRem(190)}}>Label</Button>
		</Scroller>
        </Panel>
    )
});

export default MainPanel;