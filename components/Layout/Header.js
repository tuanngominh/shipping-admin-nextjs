import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import muiThemeable from 'material-ui/styles/muiThemeable'

import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import FontIcon from 'material-ui/FontIcon'
// import logo from '../logo.svg'
import {blueGrey800} from 'material-ui/styles/colors'

const style = {
  color: '#fff'
}

const MobileMenu = (props) => (
  <IconMenu
   className='mobile-menu' 
    {...props}
    iconButtonElement={
      <IconButton iconStyle={style}><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
)
MobileMenu.muiName = 'IconMenu'

const IconButtons = () => (
  <div>
    <IconButton iconStyle={style}><FontIcon className="material-icons">notifications</FontIcon></IconButton>
    <IconButton iconStyle={style} className='mobile-menu'><FontIcon className="material-icons">refresh</FontIcon></IconButton>
    <IconButton iconStyle={style} className='mobile-menu'><FontIcon className="material-icons">settings</FontIcon></IconButton>
    <MobileMenu />
  </div>
)
IconButtons.muiName = 'IconMenu'

const Header = (props) => {
  return (
    <AppBar
      style={{backgroundColor: blueGrey800}}
      // title={<img src={logo} alt='Outvio logo' style={{height: '1.5em', marginTop: 14}}  className='desktop-menu'/>}
      onLeftIconButtonTouchTap={props.onLeftIconButtonTouchTap}
      iconElementRight={<IconButtons />}
    />
)}

export default muiThemeable()(Header)