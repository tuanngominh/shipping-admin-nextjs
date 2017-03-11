import React, { Component } from 'react'

import Header from './Layout/Header'
import Sidebar from './Layout/Sidebar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './muiTheme'

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
