class CustomComponent {
	children?: CustomComponent[];
	componentName: string;
	componentProps: InstanceNode;
	childrenProps: [ComponentNode] | [TextNode];
	parent?: string;
	x: number;
	y: number;
}

export default CustomComponent;
