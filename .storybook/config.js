import React from 'react'
import { configure, addDecorator } from '@kadira/storybook'

// Needed for onTouchTap of material-ui.com components
import injectTapEventPlugin from 'react-tap-event-plugin'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//Add decorator to init Material UI theme
const WrapMuiThemeProvider = (story) => {
  //hack so hot reload still working
  try {
    injectTapEventPlugin()
  } catch (e) {

  }
    
  return (
    <MuiThemeProvider>
      {story()}
    </MuiThemeProvider>
  )
}

addDecorator(WrapMuiThemeProvider)

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
