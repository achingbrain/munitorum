'use strict'

import ListEditor from '../../../../components/games/netea/list-editor'
import ListViewer from '../../../../components/games/netea/list-viewer'
import TopBar from '../../../../components/games/netea/top-bar'
import {
  PointsLimitedRule,
  UniqueRule,
  NoAlliedSupremeCommanders
} from '../validations'

export default class Army {
  constructor () {
    this.lineDetachments = []
    this.supportDetachments = []
    this.lordsOfWar = []
    this.allies = []

    this.validations = [
      new PointsLimitedRule(),
      new UniqueRule(),
      new NoAlliedSupremeCommanders()
    ]
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
    this.validations.forEach(validation => validation.reset())

    const test = (detachment) => {
      this.validations.forEach(validation => {
        validation.walkDetachment(detachment)
      })

      detachment.units.forEach(unit => {
        this.validations.forEach(validation => {
          validation.walkUnit(unit)
        })
      })
    }

    this.validations.forEach(validation => {
      validation.walkList(list)
    })

    list.lineDetachments.forEach(test)
    list.supportDetachments.forEach(test)
    list.lordsOfWar.forEach(test)
    list.allies.forEach(ally => {
      this.validations.forEach(validation => {
        validation.walkAlly(ally)
      })
    })

    const errors = this.validations.reduce((acc, curr) => {
      return acc.concat(curr.getErrors(list, t))
    }, [])

    return list.allies.reduce((acc, curr) => {
      return acc.concat(curr.army.validate(curr, t))
    }, errors)
  }

  getStrategyRating (list) {
    return 1
  }
}
