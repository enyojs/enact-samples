class EnactComponentNode {
	private childrenComponents: object;
	private componentName: string;
	private componentNode: string;

	constructor (childrenComponents: object, componentName: string) {
		this.childrenComponents = childrenComponents;
		this.componentName = componentName;
	}

	get generatedComponentNode () {
		return this.componentNode;
	}

	private checkForDisabled (componentProperties): boolean {
		return componentProperties.State.value.includes('deactivated');
	}

	private checkForSelected (componentProperties): boolean {
		return componentProperties.Type.value === 'selected';
	}

	private extractIconName (componentProperties): string {
		// Names must match the Icon names defined in Sandstone library
		if (componentProperties.name.includes('ic_')) {
			const iconName = componentProperties.name.split('_').slice(1, -1).toString().replace(/,/g, '');
			return iconName === 'delete' ? 'trash' : iconName;
		} else {
			return this.extractIconName(componentProperties.parent);
		}
	}

	// Add props to the component node
	addComponentProps (componentProps: InstanceNode) {
		const placeholder = this.childrenComponents[0] ?? "";
		const subtitle = this.childrenComponents[1] ?? "";
		const title = this.childrenComponents[0] ?? "";

		let disabled = false;
		let selected = false;

		const tag = `<${this.componentName}`;
		let tagWithProps = '';

		switch (this.componentName) {
			case 'ActionGuide':
				tagWithProps = `<${this.componentName} buttonAriaLabel="More" icon="arrowsmalldown"`;
				this.componentNode = this.componentNode.replace(tag, tagWithProps);
				return this;
			case 'BodyText':
				tagWithProps = `<${this.componentName} centered noWrap size="large"`;
				this.componentNode = this.componentNode.replace(tag, tagWithProps);
				return this;
			case 'Button':
				disabled = this.checkForDisabled(componentProps.componentProperties);
				tagWithProps = `<${this.componentName} disabled={${disabled}}`;
				this.componentNode = this.componentNode.replace(tag, tagWithProps);
				return this;
			case 'Checkbox':
				// disabled = this.checkForDisabled((componentProps.parent as InstanceNode).componentProperties);
				// selected = this.checkForSelected((componentProps.parent as InstanceNode).componentProperties);
				tagWithProps = `<${this.componentName} disabled={${disabled}} indeterminate={false} indeterminateIcon={'minus'} onToggle={() => {}} selected={${selected}}`;
				this.componentNode = this.componentNode.replace(tag, tagWithProps);
				return this;
			case 'CheckboxItem':
				tagWithProps = `<${this.componentName} inline={false} labelPosition="below"`;
				this.componentNode = this.componentNode.replace(tag, tagWithProps);
				return this;
			case 'ContextualMenuDecorator':
				tagWithProps = `<ContextualMenuButton direction="below right" menuItems={['Option 1']} popupWidth="auto"`;
				this.componentNode = this.componentNode.replace('<ContextualMenuButton', tagWithProps);
				return this;
			case 'ContextualPopupDecorator':
				tagWithProps = `<ContextualPopupButton direction="below right" onClose={() => {}} onOpen={() => {}} popupComponent={popupComponent}`;
				this.componentNode = this.componentNode.replace('<ContextualPopupButton', tagWithProps);
				return this;
			case 'DatePicker':
				tagWithProps = `<${this.componentName} noLabel={true}`;
				this.componentNode = this.componentNode.replace(tag, tagWithProps);
				return this;
			case 'DayPicker':
				tagWithProps = `<${this.componentName} disabled={false}`;
				this.componentNode = this.componentNode.replace(tag, tagWithProps);
				return this;
			case 'Dropdown':
				tagWithProps = `<${this.componentName} direction="below" disabled={false} size="small"`;
				return this;
			// case 'FlexiblePopupPanels':
			// 	tagWithProps = `<${this.componentName} open={open}`;
			// 	return this;
			case 'FormCheckboxItem':
				tagWithProps = `<${this.componentName} inline={false} labelPosition="below"`;
				this.componentNode = this.componentNode.replace(tag, tagWithProps);
				return this;
			case 'Icon':
				tagWithProps = `<${this.componentName} size="small"`;
				this.componentNode = this.componentNode.replace(tag, tagWithProps);
				return this;
			case 'IconItem':
				tagWithProps = `<${this.componentName} bordered icon="info" label={'${this.childrenComponents[0]}'}`;
				this.componentNode = this.componentNode.replace(tag, tagWithProps);
				return this;
			case 'Header':
				tagWithProps = `<${this.componentName} subtitle='${subtitle}' title='${title}'`;
				this.componentNode = this.componentNode.replace(tag, tagWithProps);
				return this;
			case 'Input':
			case 'InputField':
				tagWithProps = `<${this.componentName} placeholder='${placeholder}'`;
				this.componentNode = this.componentNode.replace(tag, tagWithProps);
				return this;
			case 'Layout':
				tagWithProps = `<${this.componentName} align="center"`;
				this.componentNode = this.componentNode.replace(tag, tagWithProps);
				return this;
			default:
				return this;
		}
	}

	// Add styling to the created component node
	addComponentStyle (styles) {
		// const colorIndex = this.componentName === 'ActionGuide' || this.componentName === 'CheckboxItem' ? 1 : 0; /* To be decided if the color will be used */
		const tag = `<${this.componentName}`;

		const {
			backgroundColor: componentBackgroundColor,
			// color: componentColor, /* To be decided if the color will be used */
			height: componentHeight,
			left: leftSize,
			top: topSize,
			width: componentWidth
		} = styles;

		const backgroundColor = componentBackgroundColor ? `backgroundColor: "rgb(${componentBackgroundColor.red}, ${componentBackgroundColor.green}, ${componentBackgroundColor.blue})"` : '';
		// const color = componentColor[colorIndex] ? `color: "rgb(${componentColor[colorIndex].red}, ${componentColor[colorIndex].green}, ${componentColor[colorIndex].blue})"` : ''; /* To be decided if the color will be used */
		const size = `width: ri.scaleToRem(${componentWidth}), height: ri.scaleToRem(${componentHeight})`;
		const topLeftPosition = `position: "absolute", top: ri.scaleToRem(${topSize}), left: ri.scaleToRem(${leftSize})`;

		switch (this.componentName) {
			case 'ActionGuide':
				this.componentNode = this.componentNode.replace(tag, `<${this.componentName} style={{${topLeftPosition}}}`);
				return this;
			case 'BodyText':
			case 'Button':
			case 'Checkbox':
				this.componentNode = this.componentNode.replace(tag, `<${this.componentName} style={{${topLeftPosition}}}`);
				return this;
			case 'CheckboxItem':
				this.componentNode = this.componentNode.replace(tag, `<${this.componentName} style={{${topLeftPosition}, ${size}}}`);
				return this;
			case 'ContextualMenuDecorator':
				this.componentNode = this.componentNode.replace('<ContextualMenuButton', `<ContextualMenuButton style={{${topLeftPosition}, width: ri.scaleToRem(1020)}}`);
				return this;
			case 'ContextualPopupDecorator':
				this.componentNode = this.componentNode.replace('<ContextualPopupButton', `<ContextualPopupButton style={{${topLeftPosition}, width: ri.scaleToRem(1020)}}`);
				return this;
			case 'DatePicker':
			case 'DayPicker':
				this.componentNode = this.componentNode.replace(tag, `<${this.componentName} style={{${topLeftPosition}, height: ri.scaleToRem(${componentHeight})}}`);
				return this;
			case 'Dropdown':
			case 'FormCheckboxItem':
				this.componentNode = this.componentNode.replace(tag, `<${this.componentName} style={{${topLeftPosition}, ${size}}}`);
				return this;
			case 'Icon':
				this.componentNode = this.componentNode.replace(tag, `<${this.componentName} style={{${topLeftPosition}}}`);
				return this;
			case 'IconItem':
				this.componentNode = this.componentNode.replace(tag, `<${this.componentName} style={{${topLeftPosition}, ${size}}}`);
				return this;
			case 'Header':
			case 'Input':
			case 'InputField':
				this.componentNode = this.componentNode.replace(tag, `<${this.componentName} style={{${size}, ${topLeftPosition}}}`);
				return this;
			case 'Layout':
			case 'Row':
			case 'Column':
			case 'Cell':
				this.componentNode = this.componentNode.replace(tag, `<${this.componentName} style={{${size}, ${backgroundColor}, ${topLeftPosition}}}`);
				return this;
			default:
				return this;
		}
	}

	// Create component node
	public createComponent () {
		let iconName = '';

		switch (this.componentName) {
			case 'ActionGuide':
				this.componentNode = `<${this.componentName}>${this.childrenComponents[1]}</${this.componentName}>`;
				return this;
			case 'BodyText':
				this.componentNode = this.childrenComponents ? `<${this.componentName}>${this.childrenComponents[0]}</${this.componentName}>` : `<${this.componentName} />`;
				return this;
			case 'Button':
				this.componentNode = this.childrenComponents ? `<${this.componentName}>${this.childrenComponents[0]}</${this.componentName}>` : `<${this.componentName} />`;
				return this;
			case 'Checkbox':
				this.componentNode = `<${this.componentName}>{/*Icon Name*/}</${this.componentName}>`;
				return this;
			case 'CheckboxItem':
				this.componentNode = `<${this.componentName}>${this.childrenComponents[1]}</${this.componentName}>`;
				return this;
			case 'ContextualMenuDecorator':
				this.componentNode = `<ContextualMenuButton>${this.childrenComponents[0]}</ContextualMenuButton>`;
				return this;
			case 'ContextualPopupDecorator':
				this.componentNode = `<ContextualPopupButton>${this.childrenComponents[0]}</ContextualPopupButton>`;
				return this;
			case 'DatePicker':
			case 'DayPicker':
				this.componentNode = `<${this.componentName} />`;
				return this;
			case 'Dropdown':
				this.componentNode = `<${this.componentName}>{['Option 1', 'Option 2']}</${this.componentName}>`;
				return this;
			// case 'FlexiblePopupPanels':
			// 	this.componentNode = `<div><${this.componentName}><Panel size={'auto'}>Content 1</Panel><Panel size={'auto'}>Content 2</Panel></${this.componentName}><Button>${this.childrenComponents[0]}</Button></div>`;
			// 	return this;
			case 'FormCheckboxItem':
				this.componentNode = `<${this.componentName}>${this.childrenComponents[1]}</${this.componentName}>`;
				return this;
			case 'Icon':
				iconName = this.extractIconName(this.childrenComponents[0]);
				this.componentNode = `<${this.componentName}>${iconName}</${this.componentName}>`;
				return this;
			case 'Cell':
			case 'Column':
			case 'Layout':
			case 'Row':
				this.componentNode = `<${this.componentName}>`;
				return this;
			case 'IconItem':
			case 'Header':
			case 'Input':
			case 'InputField':
				this.componentNode = `<${this.componentName} />`;
				return this;
			default:
				return this;
		}
	}
}

export default EnactComponentNode;
