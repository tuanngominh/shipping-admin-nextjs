import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import {grey400, grey700} from 'material-ui/styles/colors'

class ItemDetail extends Component {
  render() {
    const item = this.props.item
    return (
      <div>
        {item
          ?
          <div>
            <h3 style={{color: grey700}}>Order # {item.id}</h3>
            <TextField
              floatingLabelText={`Amount (${item.currency})`}
              floatingLabelFixed={true}
              value={item.amount}
            />
            <br/>
            <TextField
              floatingLabelText="Created at"
              floatingLabelFixed={true}
              value={item.createdAt}
            />
            <br/>
            <TextField
              floatingLabelText="Status"
              floatingLabelFixed={true}
              value={item.status}
            />
            
          </div>
          :
          <div>
            <h1 style={{textAlign: 'center', color: grey400}}> 
              Select one or more orders <br/>
              to view in detail, edit or ship
            </h1>
          </div>
        }
      </div>
    )
  }
}

export default ItemDetail
