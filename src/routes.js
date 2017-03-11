import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './App'
import OrdersPage from './components/OrdersPage'
import ShipmentsPage from './components/ShipmentsPage'
import ReturnsPage from './components/ReturnsPage'
import ReportsPage from './components/ReportsPage'
import AccountPage from './components/AccountPage'
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={OrdersPage} />
    <Route path='/orders' component={OrdersPage} />
    <Route path='/shipments' component={ShipmentsPage} />
    <Route path='/returns' component={ReturnsPage} />
    <Route path='/reports' component={ReportsPage} />
    <Route path='/account' component={AccountPage} />
    <Route path="*" component={NotFoundPage}/>
  </Route>
)

export default routes