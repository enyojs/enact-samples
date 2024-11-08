import generateEnactCode from './utils/generateEnactCode';

// Show the UI to the user
figma.showUI(__html__, {width: 1050, height: 650});

// Listen for messages from the UI
figma.ui.onmessage = (msg) => {
	if (msg.type === 'create') {
		const components = (figma.currentPage.children[0] as FrameNode).children.map(component => {
			const componentProps = extractComponentProps(component, component.name);
			const childrenProps = componentProps.children;
			const componentName = component.name;
			return {componentName, componentProps, childrenProps, x: component.x, y: component.y};
		});

		generateCode(generateEnactCode(components));
	}
};

const extractComponentProps = (component, componentName: string) => {
	const componentsNames = ['ActionGuide', 'CheckboxItem', 'FormCheckboxItem']; // Components names for conditional properties extraction

	if (typeof component.children !== 'undefined') {
		return extractComponentProps(component.children[0], componentName);
	}

	if (componentsNames.includes(componentName)) {
		return component.parent.parent;
	}

	return component.parent;
};

const generateCode = (content: string) => {
	figma.ui.postMessage({type: 'show-code', data: content});
};
