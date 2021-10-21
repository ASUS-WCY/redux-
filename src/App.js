import React, { Component,Fragment } from 'react'
import Count from './components/Count'
import Info from './components/Info'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Count/>
        <Info/>
      </Fragment>
    )
  }
}

