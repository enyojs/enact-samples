import { Button } from '@enact/sandstone/Button';
import { Input } from '@enact/sandstone/Input';
import { Header } from '@enact/sandstone/Panels';

import kind from '@enact/core/kind';
import { Panel } from '@enact/sandstone/Panels';
import ri from '@enact/ui/resolution';

const MainPanel = kind({
name: 'MainPanel',

render: (props) => (
<Panel {...props}>
<Button style={{height: ri.scaleToRem(144), width: ri.scaleToRem(540), backgroundColor: 'rgb(125, 132, 140)', color: 'rgb(230, 230, 230)', position: 'absolute', left: ri.scaleToRem(190), top: ri.scaleToRem(737)}}>Label</Button>
<Button style={{height: ri.scaleToRem(144), width: ri.scaleToRem(540), backgroundColor: 'rgb(125, 132, 140)', color: 'rgb(230, 230, 230)', position: 'absolute', left: ri.scaleToRem(190), top: ri.scaleToRem(1008)}}>Label</Button>
<Input style={{height: ri.scaleToRem(168), width: ri.scaleToRem(1800), backgroundColor: 'rgb(125, 132, 140)', color: 'rgb(230, 230, 230)', position: 'absolute', left: ri.scaleToRem(990), top: ri.scaleToRem(996)}} placeholder='Please enter a text' />
<Header style={{height: ri.scaleToRem(600), width: ri.scaleToRem(3840), position: 'absolute', left: ri.scaleToRem(0), top: ri.scaleToRem(0)}} subtitle='Subtitle' title='Header title' />
<Button style={{height: ri.scaleToRem(144), width: ri.scaleToRem(540), backgroundColor: 'rgb(125, 132, 140)', color: 'rgb(230, 230, 230)', position: 'absolute', left: ri.scaleToRem(190), top: ri.scaleToRem(1279)}}>Label</Button>
</Panel>
)
});

export default MainPanel;