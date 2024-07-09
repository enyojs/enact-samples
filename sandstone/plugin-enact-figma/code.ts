// Show the UI to the user
figma.showUI(__html__, {width: 600, height: 400});

// Listen for messages from the UI
figma.ui.onmessage = (msg) => {
  if (msg.type === 'create') {
    const components = (figma.currentPage.children[0] as FrameNode).children.map(children => {
      const props = children.name === 'Button' ? {childrensProps: (children as ComponentNode | InstanceNode).children} : {}
      return { name: children.name, props: props, width: children.width, height: children.height, x: children.x, y: children.y }
    });

    writeFile(mainContent(components))
  }
};

const convertToRGB = (r, g, b) => {
  const red = Math.round(r * 255);
  const green = Math.round(g * 255);
  const blue = Math.round(b * 255);

  return {red, green, blue}
}

const createImports = (components: { name: string, x: number, y: number }[]) => {
  const imports = [...new Set(components.map(component => component.name))].map(name => {
    if (name === 'Screen') return;
    return `import {${name}} from '@enact/sandstone/${name}';\n`
  });
  return imports.toString().replace(/,/g, '');
}

const createComponents = (components) => {
  const allComponents = components.map((component) => {
    if (component.name === 'Screen') return;
    const componentColors = component.props?.childrensProps[0].fills[0].color;
    const convertedComponentColors = convertToRGB(componentColors.r, componentColors.g, componentColors.b);
    const textNode = component.props?.childrensProps[1].characters;
    const textColors = component.props?.childrensProps[1].fills[0].color;
    const convertedTextColors = convertToRGB(textColors.r, textColors.g, textColors.b);
    return `<${component.name} style={{backgroundColor: 'rgb(${convertedComponentColors.red}, ${convertedComponentColors.green}, ${convertedComponentColors.blue})', color: 'rgb(${convertedTextColors.red}, ${convertedTextColors.green}, ${convertedTextColors.blue})', position: 'absolute', left: '${component.x}px', top: '${component.y}px', width: ${component.width}, height: ${component.height}}}>${textNode}</${component.name}>\n`
  });
  return allComponents.toString().replace(/,</g, '<');
}

const mainContent = (components) => {
  return `${createImports(components)}
import kind from '@enact/core/kind';
import {Panel} from '@enact/sandstone/Panels';

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

const writeFile = (content) => {
  figma.ui.postMessage({type: 'show-code', data: content })
}
