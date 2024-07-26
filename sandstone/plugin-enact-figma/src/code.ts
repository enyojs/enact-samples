import generateEnactCode from './utils/generateEnactCode';

// Show the UI to the user
figma.showUI(__html__, { width: 600, height: 400 });

// Listen for messages from the UI
figma.ui.onmessage = (msg) => {
	if (msg.type === 'create') {
		const components = (figma.currentPage.children[0] as FrameNode).children.map((children: InstanceNode) => {
			let columnComponents = [];
			if (children.name === 'Column') {
				columnComponents = children.children.map(children => extractComponentProps(children, children.name));
			}

			const componentProps = extractComponentProps(children, children.name);
			const childrenProps = componentProps.children;
			const componentName = children.name;
			return { columnComponents, componentName, componentProps, childrenProps, x: children.x, y: children.y }
		});

		generateCode(generateEnactCode(components))
	}
};

const extractComponentProps = (component, componentName: string) => {
	if (typeof component.children !== 'undefined') {
		return extractComponentProps(component.children[0], componentName);
	}

	return component.parent;
}

const generateCode = (content) => {
	figma.ui.postMessage({type: 'show-code', data: content})
}
