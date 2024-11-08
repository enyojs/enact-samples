const createComponentImport = (components: { componentName: string }[]) => {
	const imports = [...new Set(components.map(component => component.componentName))].map(name => {
		switch (name) {
			case 'ContextualMenuDecorator':
			case 'ContextualPopupDecorator':
				if (!components.some(component => component.componentName === 'Button')) {
					return `import { Button } from '@enact/sandstone/Button';\nimport { ${name} } from '@enact/sandstone/${name}';\n`;
				}
				return `import { ${name} } from '@enact/sandstone/${name}';\n`;
			case 'Header':
				return `import { ${name} } from '@enact/sandstone/Panels';\n`;
			case 'InputField':
				return `import { ${name} } from '@enact/sandstone/Input';\n`;
			case 'Layout':
			case 'Row':
			case 'Column':
			case 'Cell':
				return `import { ${name} } from '@enact/ui/Layout';\n`;
			default:
				return `import { ${name} } from '@enact/sandstone/${name}';\n`;
		}
	});

	return imports.toString().replace(/,/g, '');
};

export default createComponentImport;
