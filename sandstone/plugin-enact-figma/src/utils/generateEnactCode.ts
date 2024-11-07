import createComponentImport from './createComponentImport';
import createComponentNode from './createComponentNode';
import CustomComponent from '../types/component.class';

const createComponents = (components: CustomComponent[]) => {
	const allComponents = components.map((component) => {
		if (component.componentName === 'Cell' || component.componentName === 'Column' || component.componentName === 'Row') {
			if (component.children && component.children.length > 0) {
				const childrenArray = component.children.map((child) => {
					return createComponentNode(child);
				});

				const parentsArray = createComponentNode(component);
				childrenArray.unshift(parentsArray);
				childrenArray.push(`</${component.componentName}>`);

				return childrenArray;
			} else {
				const componentNode = [createComponentNode(component)];
				componentNode.push(`</${component.componentName}>`);

				return componentNode;
			}
		}

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
	const content = [];

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

	// Helper function to check if two components overlap
	function isOverlapping (parent, child) {
		return (
			child.x >= parent.x &&
			child.y >= parent.y &&
			child.x + child.componentProps.width <= parent.x + parent.componentProps.width &&
			child.y + child.componentProps.height <= parent.y + parent.componentProps.height
		);
	}

	// Recursive function to build the nested structure
	function nestComponents (componentTags) {
		const result = [];

		componentTags.forEach((component) => {
			// Find potential parents by checking overlap
			const parent = components.find(
				(potentialParent) =>
					potentialParent !== component && isOverlapping(potentialParent, component)
			);

			if (parent) {
				// If parent exists, initialize a children array if not present
				parent.children = parent.children || [];
				parent.children.push(component);
			} else {
				// If no parent found, it is a top-level component
				result.push(component);
			}
		});

		return result;
	}

	// Get the nested structure based on overlap
	const nestedComponents = nestComponents(components);

	return `${createComponentImport(components)}
import kind from '@enact/core/kind';
import {Scroller} from '@enact/sandstone/Scroller';
import {Layout} from '@enact/ui/Layout';
import ri from '@enact/ui/resolution';
${addAdditionalContentForContextualDecorator(isContextualMenuDecorator, isContextualPopupDecorator)}
const MainPanel = kind({
    name: 'MainPanel',

    render: () => (
        <Scroller focusableScrollbar>
		<Layout>
		${createComponents(nestedComponents)}
		</Layout>
		</Scroller>
    )
});

export default MainPanel;`;
};

export default generateEnactCode;
