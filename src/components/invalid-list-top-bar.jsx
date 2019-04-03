import React, { Component } from 'react'
import component from './component'

class InvalidListTopBar extends Component {
  render () {
    const {
      classes
    } = this.props

    return (
      <div className={classes.topBar} />
    )
  }
}

export default component(InvalidListTopBar)
