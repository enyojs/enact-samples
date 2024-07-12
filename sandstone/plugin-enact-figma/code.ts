// Show the UI to the user
figma.showUI(__html__, { width: 600, height: 400 });

// Listen for messages from the UI
figma.ui.onmessage = (msg) => {
  if (msg.type === 'create') {
    const components = (figma.currentPage.children[0] as FrameNode).children.map(children => {
      const componentProps = extractComponentProps(children);
      const childrenProps = componentProps.children;
      const componentName = componentProps.parent.name;
      return { componentName, componentProps, childrenProps, x: children.x, y: children.y }
    });
    writeFile(mainContent(components))
  }
};

const extractComponentProps = (component) => {
  if (typeof component.children !== 'undefined') {
    return extractComponentProps(component.children[0]);
  }

  return component.parent;
}

const convertToRGB = (color: { r: number, g: number, b: number }) => {
  const red = Math.round(color.r * 255);
  const green = Math.round(color.g * 255);
  const blue = Math.round(color.b * 255);

  return {red, green, blue};
}

const createImports = (components: { componentName: string }[]) => {
  const imports = [...new Set(components.map(component => component.componentName))].map(name => {
    if (name === 'Header') {
      return `import { ${name} } from '@enact/sandstone/Panels';\n`
    } else {
      return `import { ${name} } from '@enact/sandstone/${name}';\n`
    }
  });
  return imports.toString().replace(/,/g, '');
}

const createComponents = (components) => {
  const allComponents = components.map((component, index) => {
    const componentColors = component.componentProps.fills.length > 0 ? convertToRGB(component.componentProps.fills[0].color) : undefined;
    const childrenColors = component.childrenProps.map(childrenProps => childrenProps.fills.length > 0 ? convertToRGB(childrenProps.fills[0].color) : undefined);
    const childrenText = component.childrenProps.map(childrenProps => childrenProps.characters);
    let componentNode;
    switch (component.componentName) {
      case 'Button': componentNode = `<${component.componentName} style={{height: ri.scaleToRem(${component.componentProps.height}), width: ri.scaleToRem(${component.componentProps.width}), backgroundColor: 'rgb(${componentColors.red}, ${componentColors.green}, ${componentColors.blue})', color: 'rgb(${childrenColors[0].red}, ${childrenColors[0].green}, ${childrenColors[0].blue})', position: 'absolute', left: ri.scaleToRem(${component.x}), top: ri.scaleToRem(${component.y})}}>${childrenText[0]}</${component.componentName}>`
            break;
      case 'Header': componentNode = `<${component.componentName} style={{height: ri.scaleToRem(${component.componentProps.height}), width: ri.scaleToRem(${component.componentProps.width}), position: 'absolute', left: ri.scaleToRem(${component.x}), top: ri.scaleToRem(${component.y})}} subtitle='${childrenText[1]}' title='${childrenText[0]}' />`
        break;
      case 'Input': componentNode = `<${component.componentName} style={{height: ri.scaleToRem(${component.componentProps.height}), width: ri.scaleToRem(${component.componentProps.width}), backgroundColor: 'rgb(${componentColors.red}, ${componentColors.green}, ${componentColors.blue})', color: 'rgb(${childrenColors[0].red}, ${childrenColors[0].green}, ${childrenColors[0].blue})', position: 'absolute', left: ri.scaleToRem(${component.x}), top: ri.scaleToRem(${component.y})}} placeholder='${childrenText[0]}' />`
        break;
    }
    if (index < components.length - 1) componentNode += '\n';
    return componentNode;
  });
  return allComponents.toString().replace(/,</g, '\t\t\t<');
}

const mainContent = (components) => {
  return `${createImports(components)}
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

const writeFile = (content) => {
  figma.ui.postMessage({type: 'show-code', data: content})
}
