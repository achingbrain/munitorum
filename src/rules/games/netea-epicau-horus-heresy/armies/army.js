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

  validate (list, t, isAllied) {
    if (!isAllied) {
      list.clearErrors()
    }

    this.validations.forEach(validation => validation.init())

    const test = (detachment) => {
      if (!isAllied) {
        detachment.clearErrors()
      }

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
      ally.clearErrors()

      ally.lineDetachments.forEach(detachment => {
        detachment.clearErrors()
      })
      ally.supportDetachments.forEach(detachment => {
        detachment.clearErrors()
      })
      ally.lordsOfWar.forEach(detachment => {
        detachment.clearErrors()
      })

      this.validations.forEach(validation => {
        validation.walkAlly(ally)
      })
    })

    let globalErrors = false

    const errors = this.validations.reduce((acc, curr) => {
      const errs = curr.collect(list, t)

      if (Array.isArray(errs)) {
        return acc.concat(errs)
      } else if (errs === true) {
        globalErrors = true
      }

      return acc
    }, [])

    list.allies.forEach(ally => {
      const allyErrors = ally.army.validate(ally, t, true)

      globalErrors = globalErrors || Boolean(allyErrors.length)
    })

    if (!isAllied && !errors.length && globalErrors) {
      errors.push(
        t('list-has-errors')
      )
    }

    errors.forEach(error => {
      list.addError(error)
    })

    return errors
  }

  getStrategyRating (list) {
    return 1
  }
}
