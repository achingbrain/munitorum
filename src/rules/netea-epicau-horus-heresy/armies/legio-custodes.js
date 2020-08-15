'use strict'

import Army from './army'
import {
  LegioCustodesHykanatoiDetachment,
  LegioCustodesAgamatusDetachment,
  LegioCustodesAquilionTerminatorDetachment,
  LegioCustodesEphoroiCustodesDetachment,
  LegioCustodesVenatariDetachment,
  LegioCustodesSistersOfSilenceDetachment,
  LegioCustodesMorotoiDetachment,
  LegioCustodesPallasGravAttackSquadron,
  LegioCustodesCaladiusGravTankSquadron,
  LegioCustodesOrionAssaultDropshipSquadron,
  LegioCustodesAresStrikeSquadron
} from '../detachments/legio-custodes'
import {
  LordsOfWarLimit,
  SupportDetachmentsLimit,
  AllUnitsMustHaveTeleportAbility
} from '../validations'
import withType from '../with-type'

export default class LegioCustodes extends Army {
  constructor (game) {
    super(game, 'legio-custodes')

    this.lineDetachments = [
      LegioCustodesHykanatoiDetachment,
      LegioCustodesAgamatusDetachment
    ]
    this.supportDetachments = [
      LegioCustodesAquilionTerminatorDetachment,
      LegioCustodesEphoroiCustodesDetachment,
      LegioCustodesVenatariDetachment,
      LegioCustodesSistersOfSilenceDetachment,
      LegioCustodesMorotoiDetachment,
      LegioCustodesPallasGravAttackSquadron,
      LegioCustodesCaladiusGravTankSquadron
    ]
    this.lordsOfWar = [
      LegioCustodesOrionAssaultDropshipSquadron,
      LegioCustodesAresStrikeSquadron
    ]
    this.validations.push(
      new LordsOfWarLimit(1 / 3),
      new SupportDetachmentsLimit(3),
      new AllUnitsMustHaveTeleportAbility()
    )

    this.colour = '#bd8301'
  }

  getStrategyRating (list) {
    return 5
  }
}

withType(LegioCustodes)
