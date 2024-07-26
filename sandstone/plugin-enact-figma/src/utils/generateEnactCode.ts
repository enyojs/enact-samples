import createComponentImport from './createComponentImport';
import createComponentNode from './createComponentNode';
import CustomComponent from '../types/component.class';

const createComponents = (components: CustomComponent[]) => {
	const allComponents = components.map((component) => {
		return createComponentNode(component);
	}).filter(componentNode => componentNode !== '')
		.map((componentNode, index, array) => {
			if (array.length === 1) return '\t' + componentNode;
			if (index === 0) return '\t' + componentNode + '\n';
			if (index < array.length - 1) return componentNode + '\n';
			return componentNode;
		});

	return allComponents.toString().replace(/,</g, '\t\t\t<');
};

const addAdditionalContentForContextualDecorator = (menuDecorator: boolean, popupDecorator: boolean) => {
	let content = [];
	if (menuDecorator) {
		content.push('const ContextualMenuButton = ContextualMenuDecorator(Button); // Instead of button it can be any other component');
	}
	if (popupDecorator) {
		content.push('const ContextualPopupButton = ContextualPopupDecorator(Button); // Instead of button it can be any other component');
		content.push('const popupComponent = () => <div>Hello Contextual Popup</div>;');
	}

	return content.toString().replace(/,/g, '\n');
};

const generateEnactCode = (components: CustomComponent[]) => {
	const isContextualMenuDecorator = !!components.find(component => component.componentName === 'ContextualMenuDecorator');
	const isContextualPopupDecorator = !!components.find(component => component.componentName === 'ContextualPopupDecorator');

	return `${createComponentImport(components)}
import kind from '@enact/core/kind';
import {Panel} from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';
import ri from '@enact/ui/resolution';
${addAdditionalContentForContextualDecorator(isContextualMenuDecorator, isContextualPopupDecorator)}
const MainPanel = kind({
    name: 'MainPanel',

    render: (props) => (
        <Panel {...props}>
        	<Scroller>
			${createComponents(components)}
			</Scroller>
        </Panel>
    )
});

export default MainPanel;`;
};

export default generateEnactCode;
