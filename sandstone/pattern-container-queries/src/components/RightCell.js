import BodyText from "@enact/sandstone/BodyText";
import Heading from "@enact/sandstone/Heading";
import Image from "@enact/sandstone/Image";
import {Cell, Layout, Row} from "@enact/ui/Layout";
import styled from "styled-components";

import {svgGenerator} from '../helper/svg';
import css from './RightCell.module.less';

const StyledLayout = styled(Layout)`
	background-color: #2b2b2b;
	
	@container (max-width: 500px) {
		// higher specificity needed to override enact styles
		&& {
			flex-direction: column;
		}

		.${css.customBodyText} {
			background-color: #3399FF;
		}
	}
`;

const CustomImage = () => {
	return <Image className={css.customImage} src={svgGenerator(300, 300, '7ed31d', 'ffffff', '300 X 300')} />;
};

const RightCell = () => {
	return (
		<Cell style={{containerType: 'size'}}>
			<Row>
				<Heading>Styled components</Heading>
			</Row>
			<Row>
				<BodyText>@container<br />(max-width: 500px)</BodyText>
			</Row>
			<StyledLayout>
				<CustomImage />
				<Layout>
					<BodyText className={css.customBodyText}>Image description</BodyText>
				</Layout>
			</StyledLayout>
		</Cell>
	);
};

export default RightCell;
