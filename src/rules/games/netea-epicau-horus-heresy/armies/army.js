'use strict'

import ListEditor from '../../../../components/games/netea/list-editor'
import ListViewer from '../../../../components/games/netea/list-viewer'
import TopBar from '../../../../components/games/netea/top-bar'
import {
  LimitedPerPoints,
  Unique
} from '../constraints'

class Army {
  constructor () {
    this.lineDetachments = []
    this.supportDetachments = []
    this.lordsOfWar = []
    this.allies = []
  }

  getEditor () {
    return ListEditor
  }

  getViewer () {
    return ListViewer
  }

  getTopBar () {
    return TopBar
  }

  validate (list, t) {
    const errors = []
    let pointsLimited = {}
    let unique = {}

    const test = (detachment) => {
      detachment.constraints.forEach(constraint => {
        if (constraint instanceof LimitedPerPoints) {
          if (!pointsLimited[detachment.type]) {
            pointsLimited[detachment.type] = {
              type: detachment,
              constraint,
              count: 0
            }
          }
          pointsLimited[detachment.type].count++
        }

        if (constraint instanceof Unique) {
          if (!unique[detachment.type]) {
            unique[detachment.type] = {
              type: detachment,
              constraint,
              count: 0
            }
          }
          unique[detachment.type].count++
        }
      })
    }

    list.lineDetachments.forEach(test)
    list.supportDetachments.forEach(test)
    list.lordsOfWar.forEach(test)

    const cost = list.getCost()

    Object.keys(pointsLimited).forEach(key => {
      const type = pointsLimited[key]

      if (type.count > Math.floor(cost / type.constraint.limit)) {
        errors.push(`Only ${t(type.constraint.count)} ${t(type.type.code)} detachment is allowed per full ${type.constraint.limit} points`)
      }
    })

    Object.keys(unique).forEach(key => {
      const type = unique[key]

      if (type.count > 1) {
        errors.push(`Only 1 ${t(type.type.code)} is allowed`)
      }
    })

    return errors
  }

  getStrategyRating (list) {
    return 1
  }
}

export default Army
