import {CustomComponentStyles, CustomComponent, EnactComponentNode, CustomComponentProperties} from "../types";

// Convert Figma RGB color to CSS RGB color
const convertToRGB = (color: { r: number, g: number, b: number }) => {
	const red = Math.round(color.r * 255);
	const green = Math.round(color.g * 255);
	const blue = Math.round(color.b * 255);

	return `rgb(${red}, ${green}, ${blue})`;
};

// Extract component props from Figma design
const extractChildComponents = (component: CustomComponent) => {
	const componentsNames = ['CheckboxItem', 'FormCheckboxItem']; // Components names for conditional properties extraction

	return component.childrenProps.map((children, index) => {
		if (componentsNames.includes(component.componentName) && index === 1) {
			return children.children[0].children[0].characters ?? children;
		}

		return children.characters ?? children;
	});
};

const extractComponentStyles = (component: CustomComponent): CustomComponentStyles => {
	const backgroundColor = component.componentProps.fills[0] !== undefined && convertToRGB(component.componentProps.fills[0].color);
	const color = '';
	const height = component.componentProps.height;
	const left = component.x
	const top = component.y;
	const width = component.componentProps.width;

	return {backgroundColor, color, height, left, top, width};
}

const extractComponentProps = (component: CustomComponent, childrenComponents): CustomComponentProperties => {
	const align = component.componentProps.componentProperties.align?.value.toString();
	const disabled = component.componentProps.componentProperties.State?.value === 'deactivated';
	const placeholder = childrenComponents[0] ?? '';
	const selected = component.componentProps.componentProperties.Type?.value === 'selected';
	const shrink = component.componentProps.componentProperties['shrink#57:0']?.value === true;
	const size = component.componentProps.componentProperties.Size?.value;
	const subtitle = childrenComponents[1] ?? '';
	const title = childrenComponents[0] ?? '';

	return {align, disabled, placeholder, selected, shrink, size, subtitle, title};
}

// Create Enact component from Figma component
const createComponentNode = (component: CustomComponent) => {
	const childComponents = extractChildComponents(component);
	const componentStyles = extractComponentStyles(component);
	const componentProps = extractComponentProps(component, childComponents);

	const componentNode = new EnactComponentNode(component.componentName);
	componentNode.createComponent(childComponents).addComponentStyle(componentStyles).addComponentProps(componentProps);

	const generatedNode = componentNode.generatedComponentNode;
	return generatedNode ? generatedNode.replace(/(\r\n|\n|\r|\t)/gm, "") : '';
};

export default createComponentNode;
