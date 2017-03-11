import React, { Component } from 'react'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './muiTheme'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class App extends Component {
  state = {
    openSidebarMenu: false
  }

  handleOpenSidebarMenu = () => {
    this.setState({
      openSidebarMenu: true
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header onLeftIconButtonTouchTap={this.handleOpenSidebarMenu}/>
          <Sidebar open={this.state.openSidebarMenu}/>
          <div className="content">
            {this.props.children}
          </div>          
        </div>
      </MuiThemeProvider>  
    ) 
  }
}

export default App
