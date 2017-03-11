[demo](https://shipping-admin-nextjs.herokuapp.com/)

# Material UI and nextjs
- [Material-ui – injectTapEventPlugin](https://github.com/zeit/next.js/issues/232)
- [Allow styling of components](https://github.com/zeit/styled-jsx/issues/142)

# Style
Using color code from [material-ui.com/#/customization/colors](http://www.material-ui.com/#/customization/colors)

The style customization (e.g. color, padding) will be defined in the custom theme `src/muiTheme.js`.

# To do
- nextjs issues
    - Keep selected menu state 
    - Move style in app.css to component's style then remove app.css
    - Add logo.svg
    - Enable SASS and storybok
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