import kind from '@enact/core/kind';
import {Header, Panel} from '@enact/sandstone/Panels';
import {Row} from '@enact/ui/Layout';

// In sandstone theme, the text color changes to gray tone when the button is focused.
// A custom style is needed to prevent this and maintain the white tone text color.
import LeftCell from "../components/LeftCell";
import RightCell from "../components/RightCell";

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => {
		return (
			<Panel {...props}>
				<Header title="Container queries" />
				<Row>
					<LeftCell />
					<RightCell />
				</Row>
			</Panel>
		);
	}
});

export default MainPanel;
