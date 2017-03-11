import React from 'react'
import Layout from '../components/Layout'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin'
try {
  injectTapEventPlugin()
} catch (e){

}

const Page = () => (
  <Layout><div>Reports Page</div></Layout>)

export default Page