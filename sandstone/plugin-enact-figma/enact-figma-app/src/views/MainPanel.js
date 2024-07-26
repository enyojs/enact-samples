import { Button } from '@enact/sandstone/Button';
import { CheckboxItem } from '@enact/sandstone/CheckboxItem';
import { Icon } from '@enact/sandstone/Icon';
import { FormCheckboxItem } from '@enact/sandstone/FormCheckboxItem';
import { IconItem } from '@enact/sandstone/IconItem';

import kind from '@enact/core/kind';
import {Panel} from '@enact/sandstone/Panels';
import ri from '@enact/ui/resolution';

const MainPanel = kind({
    name: 'MainPanel',

    render: (props) => (
        <Panel {...props}>
			<Button disabled={false} style={{position: 'absolute', top: ri.scaleToRem(1230), left: ri.scaleToRem(336)}}>Button</Button>
			<CheckboxItem inline={false} labelPosition={'below'} style={{position: 'absolute', top: ri.scaleToRem(271), left: ri.scaleToRem(486), width: ri.scaleToRem(660), height: ri.scaleToRem(156)}}>Checkbox Item</CheckboxItem>
			<Icon size={'small'} style={{position: 'absolute', top: ri.scaleToRem(371), left: ri.scaleToRem(217)}}>trash</Icon>
			<FormCheckboxItem inline={false} labelPosition={'below'} style={{position: 'absolute', top: ri.scaleToRem(783), left: ri.scaleToRem(204), width: ri.scaleToRem(803), height: ri.scaleToRem(70)}}>A Checkbox Item for a form</FormCheckboxItem>
			<IconItem bordered icon={'info'} label={'App Title'} style={{position: 'absolute', top: ri.scaleToRem(939), left: ri.scaleToRem(942), width: ri.scaleToRem(312), height: ri.scaleToRem(240)}} />
        </Panel>
    )
});

export default MainPanel;