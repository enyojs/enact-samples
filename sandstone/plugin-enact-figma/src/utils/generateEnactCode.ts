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
import {Button} from '@enact/sandstone/Button';
import {Row} from '@enact/ui/Layout';
import ri from '@enact/ui/resolution';

const MainPanel = kind({
    name: 'MainPanel',

    render: () => (
        <Row>
		${createComponents(components)}
        </Row>
    )
});

export default MainPanel;`
}

export default generateEnactCode;
