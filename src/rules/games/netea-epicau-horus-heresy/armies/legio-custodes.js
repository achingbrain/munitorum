'use strict'

import Army from './army'
import {
  LegioCustodesHykanatoiDetachment,
  LegioCustodesAgamatusDetachment,
  LegioCustodesAquilionTerminatorDetachment,
  LegioCustodesEphoroiCustodesDetachment,
  LegioCustodesSistersOfSilenceDetachment,
  LegioCustodesMorotoiDetachment,
  LegioCustodesPallasGravAttackSquadron,
  LegioCustodesCaladiusGravTankSquadron,
  LegioCustodesOrionAssaultDropshipSquadron
} from '../detachments/legio-custodes'
import withType from '../../../../utils/with-type'

export default class LegioCustodes extends Army {
  constructor () {
    super()

    this.lineDetachments = [
      LegioCustodesHykanatoiDetachment,
      LegioCustodesAgamatusDetachment
    ]
    this.supportDetachments = [
      LegioCustodesAquilionTerminatorDetachment,
      LegioCustodesEphoroiCustodesDetachment,
      LegioCustodesSistersOfSilenceDetachment,
      LegioCustodesMorotoiDetachment,
      LegioCustodesPallasGravAttackSquadron,
      LegioCustodesCaladiusGravTankSquadron
    ]
    this.lordsOfWar = [
      LegioCustodesOrionAssaultDropshipSquadron
    ]
  }

  getStrategyRating (list) {
    return 5
  }
}

withType(LegioCustodes)
