## Custom Skin

A sample Enact application that uses custom-skin feature to style the components.

Run `npm install` then `npm run serve` to have the app running on [http://localhost:8080](http://localhost:8080), where you can view it in your browser.

This app will help you to generate a stylesheet that customizes a Sandstone UI component for your application. On the left side of the app, you can see all the customizable color fields, while on the right side is the `Live Preview` area. Any value changes you make inside the color fields will be reflected `Live Preview`.

#### Customize Stylesheet

The dropdown on the top of the page allows you to choose some presets including Sandstone default skin. There is also an option to import your own CSS file.

Turning on the `Generate color automatically` switch will generate a skin configuration automatically based on the background and text color you choose.

You can interact with color fields by changing their value inside the input field, or by clicking the colored square which will open the basic color picker.

#### Save Stylesheet

At the bottom of the page, you can check out the generated custom CSS. `Show Output` will open a popup containing the contents of the generated stylesheet. The `Copy` button will copy that content to the clipboard. `Download` will generate a customized CSS file. The output shows only the modified value of CSS variables from the Sandstone default skin but you can see all the CSS variable list by turning on the `Save full set of variables`.

The `Reset` button will revert all the changes to the active selected preset.
