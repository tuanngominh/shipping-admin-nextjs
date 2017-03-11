import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import Tags from './Tags'

export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar className='toolbar'>
        <ToolbarGroup firstChild={true}>
          <Tags />
        </ToolbarGroup>
        <ToolbarGroup style={{'alignItems': 'flex-start'}}>
          <IconButton><FontIcon className="material-icons">refresh</FontIcon></IconButton>
          <IconButton><FontIcon className="material-icons">settings</FontIcon></IconButton>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <MoreVertIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Select All" />
            <MenuItem primaryText="Upload CSV" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}