const createComponentImport = (components: { componentName: string }[]) => {
	const imports = [...new Set(components.map(component => component.componentName))].map(name => {
		if (name === 'Layout' || name === 'Row' || name === 'Cell' || name === 'Column') {
			return `import {${name}} from '@enact/ui/Layout';\n`
		} else if (name === 'Header') {
			return `import { ${name} } from '@enact/sandstone/Panels';\n`
		} else if (name === 'InputField') {
			return `import {${name}} from '@enact/sandstone/Input';\n`
		} else {
			return `import {${name}} from '@enact/sandstone/${name}';\n`
		}
	});
	return imports.toString().replace(/,/g, '');
}

export default createComponentImport;
