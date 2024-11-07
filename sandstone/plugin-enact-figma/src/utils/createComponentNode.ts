import {CustomComponentStyles, CustomComponent, EnactComponentNode, CustomComponentProperties} from "../types";

const componentsNames = ['CheckboxItem', 'FormCheckboxItem']; // Components names for conditional properties extraction

// Convert Figma RGB color to CSS RGB color
const convertToRGB = (color: { r: number, g: number, b: number }) => {
	const red = Math.round(color.r * 255);
	const green = Math.round(color.g * 255);
	const blue = Math.round(color.b * 255);

	return `rgb(${red}, ${green}, ${blue})`;
};

// Extract component props from Figma design
const extractChildComponents = (component: CustomComponent) => {
	return component.children.map((children, index: number) => {
		if (componentsNames.includes(component.componentName) && index === 1) {
			return children.children[0].children[0].characters ?? children;
		}

		return children.characters ?? children;
	});
};

const getComponentColor = (component: CustomComponent): string => {
	return component.children.map((children) => {
		if (componentsNames.includes(component.componentName) && !!children.children[0].children) {
			return convertToRGB(children.children[0].children[0].fills[0].color);
		}

		if (children.fills.length > 0) {
			return convertToRGB(children.fills[0].color);
		}

		return '';
	})[0];
};

const getComponentPadding = (componentProps: InstanceNode): string => {
	const {paddingBottom = 0, paddingLeft = 0, paddingRight = 0, paddingTop = 0} = componentProps;

	return Object.entries({paddingTop, paddingRight, paddingBottom, paddingLeft})
		.filter(([, value]) => value)
		.map(([key, value]) => `${key}: ri.scaleToRem(${value})`)
		.join(", ");
};

const extractComponentStyles = (component: CustomComponent): CustomComponentStyles => {
	const componentFontSize = (component.componentProps.children.find(value => (value as TextNode).fontSize) as TextNode).fontSize;

	const backgroundColor = component.componentProps.fills[0] && convertToRGB(component.componentProps.fills[0].color);
	const borderRadius = String(component.componentProps.cornerRadius);
	const color = getComponentColor(component);
	const fontSize = componentFontSize && `ri.scaleToRem(${Number(componentFontSize)})`;
	const height = component.componentProps.height && `ri.scaleToRem(${component.componentProps.height})`;
	const left = component.x && `ri.scaleToRem(${component.x})`;
	const opacity = String(component.componentProps.opacity);
	const padding = getComponentPadding(component.componentProps);
	const top = component.y && `ri.scaleToRem(${component.y})`;
	const width = component.componentProps.width && `ri.scaleToRem(${component.componentProps.width})`;

	return {backgroundColor, borderRadius, color, fontSize, height, left, opacity, padding, top, width};
};

const extractComponentProps = (component: CustomComponent, childrenComponents): CustomComponentProperties => {
	const disabled = component.componentProps.componentProperties.State.value === 'deactivated';
	const placeholder = childrenComponents[0] ?? '';
	const selected = component.componentProps.componentProperties.Type?.value === 'selected';
	const size = component.componentProps.componentProperties.Size?.value;
	const subtitle = childrenComponents[1] ?? '';
	const title = childrenComponents[0] ?? '';

	return {disabled, placeholder, selected, size, subtitle, title};
};

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
