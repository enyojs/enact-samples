import BodyText from "@enact/sandstone/BodyText";
import Heading from "@enact/sandstone/Heading";
import {Cell, Layout, Row} from "@enact/ui/Layout";
import {styled} from "@mui/system";

import css from './LeftCell.module.less';

const StyledLayout = styled(Layout)(({theme}) => ({
	[theme.containerQueries.down(470)]: {
		backgroundColor: '#24002d',

		[`.${css.customBodyText}`]: {
			color: 'orange',
			fontSize: '24px'
		}
	},
}));

const LeftCell = () => {
	return (
		<Cell style={{containerType: 'size'}}>
			<Row>
				<Heading>MUI System</Heading>
			</Row>
			<Row>
				<BodyText>@container<br />(max-width: 469.95px)</BodyText>
			</Row>
			<StyledLayout>
				<BodyText className={css.customBodyText}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tellus in velit ornare commodo. Nam dignissim fringilla nulla, sit amet hendrerit sapien laoreet quis. Praesent quis tellus non diam viverra feugiat. In quis mattis purus, quis tristique mi. Mauris vitae tellus tempus, convallis ligula id, laoreet eros. Nullam eu tempus odio, non mollis tellus.
				</BodyText>
			</StyledLayout>
		</Cell>
	);
};

export default LeftCell;
