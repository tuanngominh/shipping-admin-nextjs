import React, {Component, PropTypes} from 'react'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import {blueGrey800, blueGrey500, teal700, lime600, grey500} from 'material-ui/styles/colors'
import muiThemeable from 'material-ui/styles/muiThemeable'
// import logo from '../logo.svg'
import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon'
import {Card, CardHeader} from 'material-ui/Card'
import {List, ListItem, makeSelectable} from 'material-ui/List'
import Router from 'next/router'

let SelectableList = makeSelectable(List)
function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
          {...this.props}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}
SelectableList = wrapState(SelectableList)

const UserInfo = () => (
  <Card style={{backgroundColor: blueGrey500, borderRadius: 0, paddingTop: 10, paddingBottom: 10}}>
    <CardHeader
      titleStyle={{color: 'white'}}
      subtitleStyle={{color: 'white'}}
      title="Juan Borras"
      subtitle="Breastfeeling.com "
      avatar={<Avatar size={35}>JB</Avatar>}
      actAsExpander={true}
      showExpandableButton={true}
      openIcon={<FontIcon className="material-icons" color='white'>arrow_drop_up</FontIcon>}
      closeIcon={<FontIcon className="material-icons" color='white'>arrow_drop_down</FontIcon>}
    />
  </Card>
)

class SidebarMenu extends Component {
  state = {
    menuItems: [
      {label: 'Orders', icon: 'shopping_cart', link: '/orders', value: 1},
      {label: 'Shipments', icon: 'local_shipping', link: '/shipments', value: 2},
      {label: 'Returns', icon: 'keyboard_return', link: '/returns', value: 3},
      {label: 'Reports', icon: 'view_quilt', link: '/reports', value: 4},
      {label: 'Account', icon: 'settings', link: '/account', value: 5}
    ]
  }
  render(){
    return (
      <SelectableList defaultValue={1} style={{paddingTop: 0}} selectedItemStyle={{backgroundColor: lime600, color: 'black'}}>
        {
          this.state.menuItems.map((menuItem) => (
            <ListItem 
              key={menuItem.link}
              primaryText={menuItem.label} 
              style={{color: grey500}} 
              leftIcon={<FontIcon className="material-icons" color={grey500}>{menuItem.icon}</FontIcon>}
              value={menuItem.value}
              onClick={() => {Router.push(menuItem.link)}}
             />
          ))
        }
      </SelectableList>
    )
  }
}
class Sidebar extends Component {
  static propTypes = {
    open: PropTypes.bool
  }

  constructor (props) {
    super(props)
    this.state = {
      open: props.open ? props.open : false
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('open' in nextProps) {
      this.setState({
        open: nextProps.open
      })
    }
  }

  handleOnRequestChange = (open, reason) => {
    this.setState({
      open: false
    })
  }

  render () {
    return (
      <Drawer 
        open={this.state.open} 
        docked={false} 
        onRequestChange={this.handleOnRequestChange} 
        containerStyle={{backgroundColor: teal700, overflow: 'hidden'}}
      >
        <AppBar 
          style={{backgroundColor: blueGrey800}} 
          // title={<img src={logo} alt='Outvio logo' style={{height: '1.5em', marginTop: 14}} />}
          showMenuIconButton={false}
        />
        <UserInfo />
        <SidebarMenu />
      </Drawer>
    )    
  }
}

export default muiThemeable()(Sidebar)