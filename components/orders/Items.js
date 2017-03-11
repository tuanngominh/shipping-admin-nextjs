import React, {Component} from 'react'
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table'
import {getSymbolFromCurrency} from 'currency-symbol-map'
import Moment from 'moment'
import {green600, yellow600} from 'material-ui/styles/colors'

class Item extends Component {
  render() {
    const {order, ...otherProps} = this.props
    const stateToIconMap = {
      canceled: {iconName: 'warning', color: yellow600},
      paid: {iconName: 'check_circle', color: green600},
      delivered: {iconName: 'check_circle', color: green600},
      shipped: {iconName: 'check_circle', color: green600},
      received: {iconName: 'check_circle', color: green600}
    }
    let icon
    if (order.status in stateToIconMap) {
      icon = <i 
        className="material-icons" 
        style={{
          fontSize: 17, 
          paddingLeft: 4, 
          color: stateToIconMap[order.status].color
        }}>{stateToIconMap[order.status].iconName}</i>
    }
    return (
      <TableRow {...otherProps}>
        {otherProps.children[0]}
        <TableRowColumn>
          <div>
            <div style={{marginBottom: 8}}>{order.id}</div>
            <div>{Moment(order.createdAt).format('DD/MM/YY HH:mm')}</div>
          </div>              
        </TableRowColumn>
        <TableRowColumn>
          <div style={{textAlign: 'right'}}>
            <div style={{marginBottom: 8}}>{order.customer.email}{icon}</div>
            <div>
              <span>{order.shipment.to.country}</span> 
              <i className="material-icons" style={{fontSize: 14, paddingLeft: 4, paddingRight: 4}}>airplanemode_active</i>
              <i className="material-icons" style={{fontSize: 14, paddingLeft: 4, paddingRight: 4}}>perm_contact_calendar</i>
              <span style={{paddingLeft: 10, paddingRight: 10}}>{order.items.length}</span>
              <span>{getSymbolFromCurrency(order.currency)}{' '}{order.amount}</span>
            </div>
          </div>
        </TableRowColumn>
      </TableRow>
    )
  }
}

export default class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  fetchList = () => {
    //FIXME: move this impure to external code later
    fetch('https://tuanngominh.github.io/outvio-admin-material-ui/orders.json')
    .then(function(response) {
      return response.json()
    })
    .then((json) => {
      this.setState({
        items: json
      })
    })
    .catch(function(err) {
      console.error(err)
    })
  }

  componentDidMount() {
    this.fetchList()
  }

  handleSelectItem = (id) => {
    this.props.onSelectOrder(this.state.items[id])
  }

  render() {
    return (
      <Table
        selectable={true}
        onRowSelection={this.handleSelectItem}
      >
        <TableBody
        >
          {this.state.items.map((item) => (<Item key={item.id} order={item} />))}
        </TableBody>
      </Table>
    );
  }
}
