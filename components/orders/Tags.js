import React from 'react'
import Chip from 'material-ui/Chip'

export default class Tags extends React.Component {

  constructor(props) {
    super(props)
    this.state = {chipData: [
      {key: 0, label: 'New'},
      {key: 1, label: 'Paid'},
      {key: 2, label: 'International'},
      {key: 3, label: 'Express'},
    ]}
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    }
  }

  handleRequestDelete = (key) => {
    this.chipData = this.state.chipData
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key)
    this.chipData.splice(chipToDelete, 1)
    this.setState({chipData: this.chipData})
  }

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    )
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        {this.state.chipData.map(this.renderChip, this)}
      </div>
    )
  }
}