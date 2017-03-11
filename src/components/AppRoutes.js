import React, {Component} from 'react'
import {Router} from 'react-router'
import history from '../history'
import routes from '../routes'

export default class AppRoutes extends Component {
  render() {
    return (
      <Router history={history} routes={routes} />
    );
  }
}