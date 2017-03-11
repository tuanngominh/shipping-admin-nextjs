import React, {Component} from 'react'
import Toolbar from './OrdersPage/Toolbar'
import Items from './OrdersPage/Items'
import ItemDetail from './OrdersPage/ItemDetail'
import AddButton from './OrdersPage/AddButton'

class Page extends Component {
  state = {
    currentItem: null
  }

  handleSelectItem = (item) => {
    this.setState({
      currentItem: item
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs" style={{paddingTop: '.5rem', paddingBottom: '.5rem'}}>
            <div style={{boxSizing: 'border-box'}}>
              <Toolbar />
              <Items onSelectOrder={this.handleSelectItem} />
            </div>
          </div>
          <div className="col-xs hide-mobile" style={{paddingTop: '.5rem', paddingBottom: '.5rem'}}>
            <div style={{boxSizing: 'border-box'}}>
              <ItemDetail item={this.state.currentItem} />
            </div>
          </div>
        </div>
        <AddButton />
      </div>
    )
  }
}

export default Page