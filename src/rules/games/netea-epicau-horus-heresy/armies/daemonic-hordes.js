'use strict'

import Army from './army'
import {
  DaemonicHordesWarpRiftDetachment,
  DaemonicHordesKhorneHorde,
  DaemonicHordesNurgleHorde,
  DaemonicHordesSlaaneshHorde,
  DaemonicHordesTzeenchHorde,
  DaemonicHordesKhorneGreaterDaemonHorde,
  DaemonicHordesNurgleGreaterDaemonHorde,
  DaemonicHordesSlaaneshGreaterDaemonHorde,
  DaemonicHordesTzeenchGreaterDaemonHorde,
  DaemonicHordesKhorneFollowers,
  DaemonicHordesNurgleFollowers,
  DaemonicHordesSlaaneshFollowers,
  DaemonicHordesTzeenchFollowers,
  DaemonicHordesChaosFuryFlight,
  DaemonicHordesChaosSpawnPack,
  DaemonicHordesSoulGrinderManiple
} from '../detachments/daemonic-hordes'
import {
  DaemonicHordesFollowerUnit
} from '../units/daemonic-hordes'
import withType from '../../../../utils/with-type'

class DaemonicHordes extends Army {
  constructor () {
    super()

    this.lineDetachments = [
      DaemonicHordesWarpRiftDetachment,
      DaemonicHordesKhorneHorde,
      DaemonicHordesNurgleHorde,
      DaemonicHordesSlaaneshHorde,
      DaemonicHordesTzeenchHorde
    ]
    this.supportDetachments = [
      DaemonicHordesKhorneFollowers,
      DaemonicHordesNurgleFollowers,
      DaemonicHordesSlaaneshFollowers,
      DaemonicHordesTzeenchFollowers,
      DaemonicHordesChaosFuryFlight,
      DaemonicHordesChaosSpawnPack,
      DaemonicHordesSoulGrinderManiple
    ]
    this.lordsOfWar = [
      DaemonicHordesKhorneGreaterDaemonHorde,
      DaemonicHordesNurgleGreaterDaemonHorde,
      DaemonicHordesSlaaneshGreaterDaemonHorde,
      DaemonicHordesTzeenchGreaterDaemonHorde
    ]
  }

  validate (list, t) {
    const errors = super.validate(list, t)
    const types = {
      hordes: {
        khorne: 0,
        nurgle: 0,
        slaanesh: 0,
        tzeench: 0
      },
      followers: {
        khorne: 0,
        nurgle: 0,
        slaanesh: 0,
        tzeench: 0,
        undivided: 0
      },
      greaterDaemons: {
        khorne: 0,
        nurgle: 0,
        slaanesh: 0,
        tzeench: 0
      }
    }
    let overlords = 0

    const test = (detachment) => {
      let followers = 0

      detachment.units.forEach(unit => {
        if (unit instanceof DaemonicHordesFollowerUnit) {
          followers += unit.getQuantity()
        }

        overlords += unit
          .getChosenWeapons()
          .filter(weapon => weapon.name === 'daemonic-overlord')
          .length
      })

      if (followers > 9 && !errors.includes('too-many-daemonic-followers')) {
        errors.push('too-many-daemonic-followers')
      }

      if (detachment instanceof DaemonicHordesKhorneHorde) {
        types.hordes.khorne++
      }

      if (detachment instanceof DaemonicHordesNurgleHorde) {
        types.hordes.nurgle++
      }

      if (detachment instanceof DaemonicHordesSlaaneshHorde) {
        types.hordes.slaanesh++
      }

      if (detachment instanceof DaemonicHordesTzeenchHorde) {
        types.hordes.tzeench++
      }

      if (detachment instanceof DaemonicHordesKhorneGreaterDaemonHorde) {
        types.greaterDaemons.khorne++
      }

      if (detachment instanceof DaemonicHordesNurgleGreaterDaemonHorde) {
        types.greaterDaemons.nurgle++
      }

      if (detachment instanceof DaemonicHordesSlaaneshGreaterDaemonHorde) {
        types.greaterDaemons.slaanesh++
      }

      if (detachment instanceof DaemonicHordesTzeenchGreaterDaemonHorde) {
        types.greaterDaemons.tzeench++
      }

      if (detachment instanceof DaemonicHordesKhorneFollowers) {
        types.followers.khorne++
      }

      if (detachment instanceof DaemonicHordesNurgleFollowers) {
        types.followers.nurgle++
      }

      if (detachment instanceof DaemonicHordesSlaaneshFollowers) {
        types.followers.slaanesh++
      }

      if (detachment instanceof DaemonicHordesTzeenchFollowers) {
        types.followers.tzeench++
      }

      if (detachment instanceof DaemonicHordesChaosFuryFlight) {
        types.followers.undivided++
      }

      if (detachment instanceof DaemonicHordesChaosSpawnPack) {
        types.followers.undivided++
      }

      if (detachment instanceof DaemonicHordesSoulGrinderManiple) {
        types.followers.undivided++
      }
    }

    list.lineDetachments.forEach(test)
    list.supportDetachments.forEach(test)
    list.lordsOfWar.forEach(test)

    const hordesCount = Object.keys(types.hordes)
      .map(key => types.hordes[key])
      .reduce((acc, curr) => acc + curr, 0)

    const followersCount = Object.keys(types.followers)
      .map(key => types.followers[key])
      .reduce((acc, curr) => acc + curr, 0)

    if (followersCount > hordesCount && !errors.includes('not-enough-daemon-hordes')) {
      errors.push('not-enough-daemon-hordes')
    }

    Object.keys(types.greaterDaemons).forEach(type => {
      const count = types.greaterDaemons[type]

      if (count && !types.hordes[type] && !errors.includes('greater-daemons-require-patron-hordes')) {
        errors.push('greater-daemons-require-patron-hordes')
      }
    })

    if (overlords > 1) {
      errors.push('too-many-daemonic-overlords')
    }

    return errors
  }

  getStrategyRating (list) {
    return 2
  }
}

export default withType(DaemonicHordes)
