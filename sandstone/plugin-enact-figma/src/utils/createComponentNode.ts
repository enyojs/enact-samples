import CustomComponent from '../types/component.class';
import EnactComponentNode from '../types/componentNode.class';

// Convert Figma RGB color to CSS RGB color
const convertToRGB = (color: { r: number, g: number, b: number }) => {
	const red = Math.round(color.r * 255);
	const green = Math.round(color.g * 255);
	const blue = Math.round(color.b * 255);

	return {red, green, blue};
};

// Extract component props from Figma design
const extractComponentProps = (component: CustomComponent) => {
	const componentsNames = ['CheckboxItem', 'FormCheckboxItem']; // Components names for conditional properties extraction

	// eslint-disable-next-line
	const componentColors = component.componentProps.fills[0] !== undefined ? convertToRGB(component.componentProps.fills[0].color) : undefined;
	const childrenColors = component.childrenProps.map(childrenProps => {
		if (componentsNames.includes(component.componentName) && !!childrenProps.children[0].children) {
			return convertToRGB(childrenProps.children[0].children[0].fills[0].color);
		}

		if (childrenProps.fills.length > 0) {
			return convertToRGB(childrenProps.fills[0].color);
		}

		// eslint-disable-next-line
		return undefined;
	});
	const childrenComponents = component.childrenProps.map((childrenProps, index) => {
		if (componentsNames.includes(component.componentName) && index === 1) {
			return childrenProps.children[0].children[0].characters ?? childrenProps;
		}

		return childrenProps.characters ?? childrenProps;
	});

	return {componentColors, childrenColors, childrenComponents};
};

// Create Enact component from Figma component
const createComponentNode = (component: CustomComponent) => {
	const {componentColors, childrenColors, childrenComponents} = extractComponentProps(component);
	const {componentProps} = component;

	const {componentName, x, y} = component;
	const {height, width} = component.componentProps;

	const componentStyles = {
		backgroundColor: componentColors,
		color: childrenColors,
		top: y,
		left: x,
		height: height,
		width: width
	};

	const componentNode = new EnactComponentNode(childrenComponents, componentName);
	componentNode.createComponent()
		.addComponentStyle(componentStyles)
		.addComponentProps(componentProps);

	const generatedNode = componentNode.generatedComponentNode;
	return generatedNode ? generatedNode.replace(/(\r\n|\n|\r|\t)/gm, "") : '';
};

export default createComponentNode;
