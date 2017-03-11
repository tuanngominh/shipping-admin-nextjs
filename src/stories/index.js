import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import RaisedButton from 'material-ui/RaisedButton'
import App from '../components/App'

storiesOf('RaisedButton', module)
  .add('App', () => (
    <App />
  ))
  .add('Primary', () => (
    <RaisedButton label="Primary" primary={true} />
  ))

