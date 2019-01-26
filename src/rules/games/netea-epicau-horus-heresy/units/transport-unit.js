'use strict'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import Unit from './unit'

export default class TransportUnit extends Unit {
  getQuantity () {
    // need to calculate number of transports required to transport
    // all eligible units in the detachment
    const requirement = {}

    this.detachment.units.forEach(unit => {
      if (unit instanceof TransportUnit) {
        return
      }

      const quantity = unit.getQuantity()
      const transportType = unit.getTransportType()

      if (!transportType) {
        return
      }

      if (!this.transportTypes[transportType]) {
        // cannot transport this unit, show an error?
        return
      }

      requirement[transportType] = (requirement[transportType] || 0) + quantity
    })

    let numTransports = 0

    Object.keys(requirement).forEach(transportType => {
      const capacity = this.transportTypes[transportType]

      numTransports += Math.ceil(requirement[transportType] / capacity)
    })

    return numTransports
  }

  getCost () {
    return this.getQuantity() * this.cost
  }

  getDisplay (t) {
    const quantity = this.getQuantity()
    const type = t(this.code)

    return (
      <Typography component='p'>
        {quantity}x {type}
      </Typography>
    )
  }
}
