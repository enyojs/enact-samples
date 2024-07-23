class EnactComponentNode {
	private childrenComponents: object;
	private componentName: string;
	private componentNode: string;

	constructor(childrenComponents: object, componentName: string) {
		this.childrenComponents = childrenComponents;
		this.componentName = componentName;
	}

	get generatedComponentNode() {
		return this.componentNode;
	}

	private checkForDisabled(componentProperties): boolean {
		return componentProperties.State.value.includes('deactivated');
	}

	private checkForSelected(componentProperties): boolean {
		return componentProperties.Type.value === 'selected';
	}

	// Add props to the component node
	addComponentProps(componentProps: InstanceNode) {
		let disabled = false;
		let selected = false;

		const placeholder = this.childrenComponents[0] ?? "";
		const tag = `<${this.componentName}`;
		let tagWithProps = '';

		switch (this.componentName) {
			case 'ActionGuide':
				this.componentNode = this.componentNode.replace(tag, `<${this.componentName} buttonAriaLabel={"More"} icon={"arrowsmalldown"}`);
				return this;
			case 'BodyText':
				tagWithProps = `<${this.componentName} centered noWrap size={'large'}`;
				this.componentNode = this.componentNode.replace(tag, tagWithProps);
				return this;
			case 'Button':
				disabled = (componentProps.componentProperties.State.value as string).includes('deactivated');
				return this;
			case 'Checkbox':
				disabled = this.checkForDisabled((componentProps.parent as InstanceNode).componentProperties);
				selected = this.checkForSelected((componentProps.parent as InstanceNode).componentProperties);
				tagWithProps = `<${this.componentName} disabled={${disabled}} selected={${selected}} indeterminate={false} indeterminateIcon={'minus'} onToggle={'/*Toggle Action*/'}`;
				this.componentNode = this.componentNode.replace(tag, tagWithProps)
				return this;
			case 'Input':
				tagWithProps = `<${this.componentName} placeholder={"${placeholder}"}`;
				this.componentNode = this.componentNode.replace(tag, tagWithProps);
				return this;
			default:
				return this;
		}
	}

	// Add styling to the created component node
	addComponentStyle(styles) {
		const colorIndex = this.componentName === 'ActionGuide' || this.componentName === 'CheckboxItem' ? 1 : 0;
		const tag = `<${this.componentName}`;

		const {
			backgroundColor: componentBackgroundColor,
			color: componentColor,
			top: topSize,
			left: leftSize
		} = styles;

		const backgroundColor = !!componentBackgroundColor ? `backgroundColor: 'rgb(${componentBackgroundColor.red}, ${componentBackgroundColor.green}, ${componentBackgroundColor.blue})'` : '';
		const color = !!componentColor[colorIndex] ? `color: 'rgb(${componentColor[colorIndex].red}, ${componentColor[colorIndex].green}, ${componentColor[colorIndex].blue})'` : '';
		const topLeftPosition = `position: 'absolute', top: ri.scaleToRem(${topSize}), left: ri.scaleToRem(${leftSize})`;

		switch (this.componentName) {
			case 'ActionGuide':
				this.componentNode = this.componentNode.replace(tag, `<${this.componentName} style={{${color}, ${topLeftPosition}}}`);
				return this;
			case 'BodyText':
			case 'Button':
			case 'Checkbox':
			case 'CheckboxItem':
				this.componentNode = this.componentNode.replace(tag, `<${this.componentName} style={{${color}, ${topLeftPosition}}}`);
				return this;
			case 'Input':
				this.componentNode = this.componentNode.replace(tag, `<${this.componentName} style={{${backgroundColor}, ${color}, ${topLeftPosition}}}`);
				return this;
			default:
				return this;
		}
	}

	// Create component node
	public createComponent() {
		switch (this.componentName) {
			case 'ActionGuide':
				this.componentNode = `<${this.componentName}>${this.childrenComponents[1]}</${this.componentName}>`;
				return this;
			case 'BodyText':
				this.componentNode = !!this.childrenComponents ? `<${this.componentName}>${this.childrenComponents[0]}</${this.componentName}>` : `<${this.componentName} />`;
				return this;
			case 'Button':
				this.componentNode = !!this.childrenComponents ? `<${this.componentName}>${this.childrenComponents[0]}</${this.componentName}>` : `<${this.componentName} />`;
				return this;
			case 'Checkbox':
				this.componentNode = `<${this.componentName}>{/*Icon Name*/}</${this.componentName}>`;
				return this;
			case 'CheckboxItem':
				this.componentNode = `<${this.componentName}>${this.childrenComponents[1]}</${this.componentName}>`;
				return this;
			case 'Input':
				this.componentNode = `<${this.componentName} />`
				return this;
			default:
				return this;
		}
	}
}

export default EnactComponentNode;