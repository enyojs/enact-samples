import { Input } from '@enact/sandstone/Input';
import { Button } from '@enact/sandstone/Button';
import { ActionGuide } from '@enact/sandstone/ActionGuide';
import { BodyText } from '@enact/sandstone/BodyText';
import { Checkbox } from '@enact/sandstone/Checkbox';

import kind from '@enact/core/kind';
import {Panel} from '@enact/sandstone/Panels';
import ri from '@enact/ui/resolution';

const MainPanel = kind({
    name: 'MainPanel',

    render: (props) => (
        <Panel {...props}>
			<Input placeholder={"Please enter a text"} style={{backgroundColor: 'rgb(125, 132, 140)', color: 'rgb(230, 230, 230)', position: 'absolute', top: ri.scaleToRem(611), left: ri.scaleToRem(85)}} />
			<Button style={{color: 'rgb(230, 230, 230)', position: 'absolute', top: ri.scaleToRem(285), left: ri.scaleToRem(85)}}>Button</Button>
			<ActionGuide buttonAriaLabel={"More"} icon={"arrowsmalldown"} style={{color: 'rgb(171, 174, 179)', position: 'absolute', top: ri.scaleToRem(456), left: ri.scaleToRem(85)}}>Text Label</ActionGuide>
			<BodyText centered noWrap size={'large'} style={{color: 'rgb(230, 230, 230)', position: 'absolute', top: ri.scaleToRem(150), left: ri.scaleToRem(85)}}>This is BodyText</BodyText>
			<Checkbox disabled={false} selected={false} indeterminate={false} indeterminateIcon={'minus'} onToggle={'/*Toggle Action*/'} style={{color: 'rgb(230, 230, 230)', position: 'absolute', top: ri.scaleToRem(961), left: ri.scaleToRem(205)}}>{/*Icon Name*/}</Checkbox>
        </Panel>
    )
});

export default MainPanel;