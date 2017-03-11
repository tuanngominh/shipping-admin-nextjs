[demo](https://shipping-admin.herokuapp.com/)

# Style
Using color code from [material-ui.com/#/customization/colors](http://www.material-ui.com/#/customization/colors)

The style customization (e.g. color, padding) will be defined in the custom theme `src/muiTheme.js`. The one which can't put in custom theme, they will be define as inline style in component or in SASS code (for media query style)

# To do
- Drawer:
    - Click menu item will auto close the drawer
    - Change color of menu item's selected state
    - May be we need drawer docked on none mobile viewport
- Refactor component style code for serverside rendering. Options:
    - https://github.com/FormidableLabs/radium
    - https://www.npmjs.com/package/styled-jsx
- Order Items
    - Only reduce column padding in mobile viewport
- Add Order Floating Button:
    - Increase size and right, bottom margin on desktop viewport
- Move custom color code to theme object

# Serverside rendering
[x] Rendering server with express, react, react router.

Consider not using webpack in serverside. Current clientside code is generated using [create-react-app](https://github.com/facebookincubator/create-react-app) boiler plate code. All the dev dependency like webpack already abstract away by using create-react-app's react-scripts which make the main app dependency clean. If we use webpack in serverside then we may need to eject the create-react-app which introduce a huge devDependencies in top package.json.

Without webpack on serverside, bellow method are using to load js, css:
- Load js, css bundle file: run `npm build` to build code and reference the build in express template.
- Load svg file (e.g. logo): can't load now. Can reference image url in css class.