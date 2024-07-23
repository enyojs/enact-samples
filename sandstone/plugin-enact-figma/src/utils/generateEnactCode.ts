import createComponentImport from './createComponentImport';
import createComponentNode from './createComponentNode';
import CustomComponent from '../types/component.class';

const createComponents = (components: CustomComponent[]) => {
	const allComponents = components.map((component) => {
		return createComponentNode(component);
	}).filter(componentNode => componentNode !== '')
		.map((componentNode, index, array) => {
			if (index === 0) return '\t' + componentNode + '\n';
			if (index < array.length - 1) return componentNode + '\n';
			return componentNode;
		});

	return allComponents.toString().replace(/,</g, '\t\t\t<');
}

const generateEnactCode = (components: CustomComponent[]) => {
	return `${createComponentImport(components)}
import kind from '@enact/core/kind';
import {Panel} from '@enact/sandstone/Panels';
import ri from '@enact/ui/resolution';

const MainPanel = kind({
    name: 'MainPanel',

    render: (props) => (
        <Panel {...props}>
		${createComponents(components)}
        </Panel>
    )
});

export default MainPanel;`
}

export default generateEnactCode;
