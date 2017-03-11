import React, {Component} from 'react'
import Layout from '../components/Layout'
import Toolbar from '../components/orders/Toolbar'
import Items from '../components/orders/Items'
import ItemDetail from '../components/orders/ItemDetail'
import AddButton from '../components/orders/AddButton'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin'
try {
  injectTapEventPlugin()
} catch (e){

}

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
      <Layout>
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
      </Layout>
    )
  }
}

export default Page