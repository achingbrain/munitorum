'use strict'

import Army from './army'
import {
  MechanicumTaghmataAdsecularisCovenent,
  MechanicumTaghmataThallaxCohort,
  MechanicumTaghmataUrsaraxCohort,
  MechanicumTaghmataVoraxManiple,
  MechanicumTaghmataCastellaxManiple,
  MechanicumTaghmataThanatarManiple,
  MechanicumTaghmataKriosSquadron,
  MechanicumTaghmataKaracnosSquadron,
  MechanicumTaghmataMyrmidonSect,
  MechanicumTaghmataTarantulaBattery,
  MechanicumTaghmataMinotaurBattery,
  MechanicumTaghmataOrdinatusMinorisTormenta,
  MechanicumTaghmataAvengerWing,
  MechanicumTaghmataPrimarisWing,
  MechanicumTaghmataSuperHeavyTankDestroyer,
  MechanicumTaghmataOrdinatusMajorisDetachment
} from '../detachments/mechanicum-taghmata'
import withType from '../../../../utils/with-type'

class MechanicumTaghmata extends Army {
  constructor () {
    super()

    this.lineDetachments = [
      MechanicumTaghmataAdsecularisCovenent,
      MechanicumTaghmataThallaxCohort,
      MechanicumTaghmataUrsaraxCohort,
      MechanicumTaghmataVoraxManiple,
      MechanicumTaghmataCastellaxManiple
    ]
    this.supportDetachments = [
      MechanicumTaghmataThanatarManiple,
      MechanicumTaghmataKriosSquadron,
      MechanicumTaghmataKaracnosSquadron,
      MechanicumTaghmataMyrmidonSect,
      MechanicumTaghmataTarantulaBattery,
      MechanicumTaghmataMinotaurBattery,
      MechanicumTaghmataOrdinatusMinorisTormenta
    ]
    this.lordsOfWar = [
      MechanicumTaghmataAvengerWing,
      MechanicumTaghmataPrimarisWing,
      MechanicumTaghmataSuperHeavyTankDestroyer,
      MechanicumTaghmataOrdinatusMajorisDetachment
    ]
  }

  validate (list, t) {
    const errors = super.validate(list, t)

    const cost = list.getCost()
    const lordsOfWarCost = list.lordsOfWar.reduce((acc, curr) => {
      return acc + curr.getCost()
    }, 0)

    if (lordsOfWarCost > (cost / 3)) {
      errors.push('too-many-lords-of-war')
    }

    if (list.supportDetachments.length > (list.lineDetachments.length * 3)) {
      errors.push('too-many-support-detachments')
    }

    return errors
  }

  getStrategyRating (list) {
    return 3
  }
}

export default withType(MechanicumTaghmata)
