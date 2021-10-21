import React, { Component,Fragment } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Count/>
        <Person/>
      </Fragment>
    )
  }
}
