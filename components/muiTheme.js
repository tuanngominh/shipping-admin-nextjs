import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {teal700, teal400, amber800} from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
  toolbar: {
    backgroundColor: 'white',
    menuHoverColor: 'white',
    height: 'auto'
  },
  chip: {
    deleteIconColor: teal400,
    backgroundColor: teal700,
    textColor: 'white'
  },
  tableRowColumn: {
    spacing: 4
  },
  floatingActionButton: {
    color: amber800
  }
})

export default muiTheme