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

class LegioCustodes extends Army {
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
}

export default withType(LegioCustodes)
