import {Button} from '@enact/sandstone/Button';

import kind from '@enact/core/kind';
import {Panel} from '@enact/sandstone/Panels';

const MainPanel = kind({
name: 'MainPanel',

render: (props) => (
<Panel {...props}>
<Button style={{backgroundColor: 'rgb(217, 217, 217)', color: 'rgb(19, 126, 107)', position: 'absolute', left: '306px', top: '242px', width: 363, height: 121}}>Click it</Button>
<Button style={{backgroundColor: 'rgb(217, 217, 217)', color: 'rgb(232, 74, 188)', position: 'absolute', left: '960px', top: '242px', width: 363, height: 121}}>Click it</Button>

</Panel>
)
});

export default MainPanel;