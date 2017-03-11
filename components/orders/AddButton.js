import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

const style = {
    margin: 0,
    top: 'auto',
    right: 10,
    bottom: 10,
    left: 'auto',
    position: 'fixed',
}

const AddButton = () => (
  <FloatingActionButton style={style} mini={true}>
    <ContentAdd />
  </FloatingActionButton>
);

export default AddButton
