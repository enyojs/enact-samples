## How to add/remove/change colors for a custom skin application: 

In order to change or add color to the app, you need 3 different things: 
1) The name you wish to display inside the app
2) Its value in hex
3) The name of the CSS property

With these three things, you must next go to the `MainPanel.js` file and create a pair of [`colorName`, `setColorName`]
using the hook `useState` with the default value in hex code mentioned above. You must add 
`colorName` to the `colors` array and the `setColorName` to `setColors` array. You must also add
the display name into `propNames` array and the CSS property name into `varNames` array.

Example: For `TextColorRGB`, we created [`TextSubColor`, `setTextSubColor`] = `useState(`'#ABAEB3'`)` 
and added them to `colors` and `setColors`. We chose 'Text Sub Color' as the display name and
added it to `propNames`. The CSS property we added to `varNames` is `--sand-text-sub-color`.

Please add RGB at the end display name if the color must be represented as a comma-separated RGB value (ex: `Component Text Color RGB`).

When we add all those variables to their arrays, please add them at the same index as this is the method
by which we do most of the operations (ex: if `TextSubColor` has index 2 in `colors` array `setTextSubColor` should have the same index in 
the `setColors` array and so on).

Next, please go to the `util.js` file for generating colors including a new color. Here, `generateColors` function returns an array
of colors that contains all the colors we use for auto mode. Please insert a new value in that array at 
the index you inserted the color in all those arrays back in the `MainPanel.js` file. The value is determined as described below:

If the default hex value for our property is equal to another's, we copy that property's return element for 
the new one (ex: `Text Sub Color` has the same default value as `Component Text Sub Color RGB` so they
both return `textColors[0].toUpperCase()`). This is the case if they are both in the same category (both are
background colors or both are text colors). If this is the first time this hex value appears, just add one
to the limit of `generateBGColors` (or `generateTextColors` for text colors) and use the new generated color.
After you add, remove, or edit a variable, please check the app to see if any unintended changes are applied
to the non-live preview components.
