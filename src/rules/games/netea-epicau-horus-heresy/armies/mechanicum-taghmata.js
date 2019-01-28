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
import {
  LordsOfWarLimit,
  SupportDetachmentsLimit
} from '../validations'

export default class MechanicumTaghmata extends Army {
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
    this.validations.push(
      new LordsOfWarLimit(1 / 3),
      new SupportDetachmentsLimit(3)
    )
  }

  getStrategyRating (list) {
    return 3
  }
}

withType(MechanicumTaghmata)
