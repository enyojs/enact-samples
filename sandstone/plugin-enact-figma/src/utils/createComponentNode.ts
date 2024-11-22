import {CustomComponent, CustomComponentProperties, CustomComponentStyles, EnactComponentNode} from "../types";

const componentsNames = ['CheckboxItem', 'FormCheckboxItem']; // Components names for conditional properties extraction

// Convert Figma RGB color to CSS RGB color
const convertToRGB = (color: { r: number, g: number, b: number }) => {
	const red = Math.round(color.r * 255);
	const green = Math.round(color.g * 255);
	const blue = Math.round(color.b * 255);

	return `rgb(${red}, ${green}, ${blue})`;
};

const getComponentLayoutParent = (componentParent: string): boolean => {
	return componentParent === 'Cell' || componentParent === 'Column' || componentParent === 'Row' || componentParent === 'Layout';
};

// Extract component props from Figma design
const extractChildComponents = (component: CustomComponent) => {
	if (component.componentName !== component.componentProps.name) {
		let childrenNode = [];

		component.componentProps.parent.children.forEach((children) => {
			if (children.type === 'TEXT') {
				childrenNode.push(children.characters);
			}
		});

		return childrenNode;
	}

	return component.childrenProps.map((childrenProps, index: number) => {
		if (componentsNames.includes(component.componentName) && index === 1) {
			return childrenProps.children[0].children[0].characters ?? childrenProps;
		}

		return childrenProps.characters ?? childrenProps;
	});
};

const getComponentColor = (component: CustomComponent): string => {
	return component.childrenProps.map((childrenProps) => {
		if (componentsNames.includes(component.componentName) && !!childrenProps.children[0].children) {
			return convertToRGB(childrenProps.children[0].children[0].fills[0].color);
		}

		if (childrenProps.fills.length > 0) {
			return convertToRGB(childrenProps.fills[0].color);
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

const extractComponentStyles = (customComponent: CustomComponent): CustomComponentStyles => {
	let component = customComponent.componentProps;
	let componentFontSize = (component.children?.find(value => (value as TextNode).fontSize) as TextNode)?.fontSize;
	let color: string;

	if (customComponent.componentName === 'Button1') {
		component = (customComponent.componentProps.parent as InstanceNode);
		componentFontSize = (component.children?.find(value => (value as TextNode).fontSize) as TextNode)?.fontSize;
		color = convertToRGB(component.children?.find(value => value.type === 'TEXT')?.fills[0]?.color);
	} else {
		color = getComponentColor(customComponent);
	}

	const backgroundColor = component.fills[0]?.visible && convertToRGB(component.fills[0].color);
	const borderRadius = String(component.cornerRadius);
	const fontSize = componentFontSize && `ri.scaleToRem(${Number(componentFontSize)})`;
	const height = component.height && `ri.scaleToRem(${component.height})`;
	const left = component.x >= 0 ? `ri.scaleToRem(${component.x})` : (component.parent as InstanceNode).x ? `ri.scaleToRem(${(component.parent as InstanceNode).x})` : '';
	const opacity = String(component.opacity);
	const padding = getComponentPadding(component);
	const top = component.y >= 0 ? `ri.scaleToRem(${component.y})` : (component.parent as InstanceNode).y ? `ri.scaleToRem(${(component.parent as InstanceNode).y})` : '';
	const width = component.width && `ri.scaleToRem(${component.width})`;

	return {backgroundColor, borderRadius, color, fontSize, height, left, opacity, padding, top, width};
};

const extractNewComponentProps = (parentComponent: InstanceNode): CustomComponentProperties => {
	const result: Record<string, any> = {};
	const getPropsValues = (props: object) => {
		for (const key in props) {
			if (props.hasOwnProperty(key)) {
				result[key] = props[key].value;
			}
		}
	};

	getPropsValues(parentComponent.componentProperties);

	if (parentComponent.exposedInstances) {
		const exposedInstances = parentComponent.exposedInstances.filter(instance => instance.visible);
		exposedInstances.forEach(instance => {
			getPropsValues(instance.componentProperties);
		});
	}

	return result;
};

const extractComponentProps = (component: CustomComponent, childrenComponents): CustomComponentProperties => {
	if (component.componentName === 'Button1') {
		const parentComponent = (component.componentProps.parent as InstanceNode);
		component.componentName = 'Button';
		return extractNewComponentProps(parentComponent);
	}

	const align = component.componentProps.componentProperties.align?.value.toString();
	const disabled = component.componentProps.componentProperties.State?.value.toString().includes('deactivated');
	const placeholder = childrenComponents[0] ?? '';
	const selected = component.componentProps.componentProperties.Type?.value === 'selected';
	const shrink = component.componentProps.componentProperties['shrink#57:0']?.value === true;
	const size = component.componentProps.componentProperties.Size?.value;
	const subtitle = childrenComponents[1] ?? '';
	const title = childrenComponents[0] ?? '';
	const virtualListItem = component.childrenProps[0].parent?.parent?.name;

	return {align, disabled, placeholder, selected, shrink, size, subtitle, title, virtualListItem};
};

// Create Enact component from Figma component
const createComponentNode = (component: CustomComponent, parent: string = '') => {
	const childComponents = extractChildComponents(component);
	const componentStyles = extractComponentStyles(component);
	const componentProps = extractComponentProps(component, childComponents);
	const componentLayoutParent = getComponentLayoutParent(parent);

	const componentNode = new EnactComponentNode(component.componentName, componentLayoutParent);
	componentNode.createComponent(childComponents).addComponentStyle(componentStyles).addComponentProps(componentProps);

	const generatedNode = componentNode.generatedComponentNode;
	return generatedNode ?? '';
};

export default createComponentNode;
