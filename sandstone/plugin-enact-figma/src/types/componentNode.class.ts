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

	// Add props to the component node
	addComponentProps() {
		const placeholder = this.childrenComponents[0] ?? "";
		const subtitle = this.childrenComponents[1] ?? "";
		const title = this.childrenComponents[0] ?? "";

		const tag = `<${this.componentName}`;
		let tagWithProps = '';

		switch (this.componentName) {
			case 'Button':
				return this;
			case 'Header':
				tagWithProps = `<${this.componentName} subtitle='${subtitle}' title='${title}'`;
				this.componentNode = this.componentNode.replace(tag, tagWithProps);
				return this;
			case 'Input':
				tagWithProps = `<${this.componentName} placeholder='${placeholder}'`;
				this.componentNode = this.componentNode.replace(tag, tagWithProps);
				return this;
			default:
				return this;
		}
	}

	// Add styling to the created component node
	addComponentStyle(styles) {
		const colorIndex = 0;
		const tag = `<${this.componentName}`;

		const {
			backgroundColor: componentBackgroundColor,
			color: componentColor,
			height: componentHeight,
			left: leftSize,
			top: topSize,
			width: componentWidth
		} = styles;

		const backgroundColor = !!componentBackgroundColor ? `backgroundColor: 'rgb(${componentBackgroundColor.red}, ${componentBackgroundColor.green}, ${componentBackgroundColor.blue})'` : '';
		const color = !!componentColor[colorIndex] ? `color: 'rgb(${componentColor[colorIndex].red}, ${componentColor[colorIndex].green}, ${componentColor[colorIndex].blue})'` : '';
		const size = `width: ri.scaleToRem(${componentWidth}), height: ri.scaleToRem(${componentHeight})`;
		const topLeftPosition = `position: 'absolute', top: ri.scaleToRem(${topSize}), left: ri.scaleToRem(${leftSize})`;

		switch (this.componentName) {
			case 'Button':
				this.componentNode = this.componentNode.replace(tag, `<${this.componentName} style={{${color}, ${topLeftPosition}}}`);
				return this;
			case 'Header':
				this.componentNode = this.componentNode.replace(tag, `<${this.componentName} style={{${color}, ${topLeftPosition}, ${size}}}`);
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
			case 'Button':
				this.componentNode = !!this.childrenComponents ? `<${this.componentName}>${this.childrenComponents[0]}</${this.componentName}>` : `<${this.componentName} />`;
				return this;
			case 'Header':
			case 'Input':
				this.componentNode = `<${this.componentName} />`
				return this;
			default:
				return this;
		}
	}
}

export default EnactComponentNode;
