import kind from '@enact/core/kind';
import Checkbox from '@enact/my-theme/Checkbox';
import CheckboxItem from '@enact/my-theme/CheckboxItem';
import Heading from '@enact/my-theme/Heading';
import Icon from '@enact/my-theme/Icon';
import Item from '@enact/my-theme/Item';
import RadioItem from '@enact/my-theme/RadioItem';
import SlotItem from '@enact/my-theme/SlotItem';
import ToggleItem from '@enact/my-theme/ToggleItem';
import {Panel} from '@enact/my-theme/Panels';
import Group from '@enact/ui/Group';
import {Row, Cell} from '@enact/ui/Layout';
import PropTypes from 'prop-types';

import PanelHeader from '../components/PanelHeader';

import * as commonCss from './common.module.less';

const ItemsPanel = kind({
	name: 'ItemsPanel',

	propTypes: {
		onNavHomePanel: PropTypes.func
	},

	styles: {
		css: commonCss
	},

	render: ({onNavHomePanel, ...rest}) => (
		<Panel {...rest}>
			<PanelHeader onNavHomePanel={onNavHomePanel}>Items Examples</PanelHeader>
			<Row style={{height: '100%'}}>
				<Cell>
					<section>
						<Heading>Items</Heading>
						<Item>
							This is an Item
						</Item>
						<SlotItem autoHide="after">
							<slotBefore>
								<Icon size="small">flag</Icon>
								<Icon size="small">person_add</Icon>
							</slotBefore>
							An Item that will show icons
							<Icon slot="slotAfter" size="small">delete</Icon>
						</SlotItem>
					</section>

					<section>
						<Heading>Toggleable Items</Heading>
						<ToggleItem
							iconComponent={Checkbox}
							iconPosition="before"
						>
							This is a ToggleItem with a Checkbox icon
						</ToggleItem>
						<CheckboxItem>CheckboxItem One</CheckboxItem>
						<RadioItem>RadioItem One</RadioItem>
					</section>
				</Cell>
				<Cell>
					<section>
						<Heading>Group of CheckboxItems</Heading>
						<Group
							childComponent={CheckboxItem}
							select="multiple"
							selectedProp="selected"
							defaultSelected={[1, 2]}
						>
							{['CheckboxItem One', 'CheckboxItem Two', 'CheckboxItem Three']}
						</Group>
					</section>

					<section>
						<Heading>Group of RadioItems</Heading>
						<Group
							childComponent={RadioItem}
							select="radio"
							selectedProp="selected"
							defaultSelected={1}
						>
							{['RadioItem One', 'RadioItem Two', 'RadioItem Three']}
						</Group>
					</section>
				</Cell>
			</Row>
		</Panel>
	)
});

export default ItemsPanel;
