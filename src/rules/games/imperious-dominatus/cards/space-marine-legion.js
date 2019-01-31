'use strict'

import Card from './card'
import Section from './section'
import {
  LegionTacticalCenturionSquad,
  LegionTacticalVeteranSquad,
  LegionTacticalDecurionSquad,
  LegionTacticalSquad,
  LegionTacticalSupportSquad,
  LegionAssaultCenturionSquad,
  LegionAssaultVeteranSquad,
  LegionAssaultDecurionSquad,
  LegionAssaultSquad,
  LegionAssaultSupportSquad,
  LegionDespoilerCenturionSquad,
  LegionDespoilerVeteranSquad,
  LegionDespoilerDecurionSquad,
  LegionDespoilerSquad,
  LegionDespoilerSupportSquad,
  LegionBreacherCenturionSquad,
  LegionBreacherVeteranSquad,
  LegionBreacherDecurionSquad,
  LegionBreacherSquad,
  LegionBreacherSupportSquad,
  LegionTerminatorCenturionSquad,
  LegionTerminatorVeteranSquad,
  LegionTerminatorDecurionSquad,
  LegionTerminatorSquad
} from '../units/space-marine-legion'
import withType from '../with-type'

export class LegionTacticalCompany extends Card {
  constructor (list) {
    super(list, 5, 13, 600, 6)

    this.sections.push(
      new Section('legion-command-section', [
        new LegionTacticalCenturionSquad(this, 1),
        new LegionTacticalVeteranSquad(this, 2)
      ]),
      new Section('legion-tactical-detachment', [
        new LegionTacticalDecurionSquad(this, 1),
        new LegionTacticalSquad(this, 4),
        new LegionTacticalSupportSquad(this, 1)
      ]),
      new Section('legion-tactical-detachment', [
        new LegionTacticalDecurionSquad(this, 1),
        new LegionTacticalSquad(this, 4),
        new LegionTacticalSupportSquad(this, 1)
      ]),
      new Section('legion-tactical-detachment', [
        new LegionTacticalDecurionSquad(this, 1),
        new LegionTacticalSquad(this, 4),
        new LegionTacticalSupportSquad(this, 1)
      ])
    )
  }
}

export class LegionAssaultCompany extends Card {
  constructor (list) {
    super(list, 5, 13, 700, 7)

    this.sections.push(
      new Section('legion-command-section', [
        new LegionAssaultCenturionSquad(this, 1),
        new LegionAssaultVeteranSquad(this, 2)
      ]),
      new Section('legion-assault-detachment', [
        new LegionAssaultDecurionSquad(this, 1),
        new LegionAssaultSquad(this, 4),
        new LegionAssaultSupportSquad(this, 1)
      ]),
      new Section('legion-assault-detachment', [
        new LegionAssaultDecurionSquad(this, 1),
        new LegionAssaultSquad(this, 4),
        new LegionAssaultSupportSquad(this, 1)
      ]),
      new Section('legion-assault-detachment', [
        new LegionAssaultDecurionSquad(this, 1),
        new LegionAssaultSquad(this, 4),
        new LegionAssaultSupportSquad(this, 1)
      ])
    )
  }
}

export class LegionDespoilerCompany extends Card {
  constructor (list) {
    super(list, 5, 13, 700, 7)

    this.sections.push(
      new Section('legion-command-section', [
        new LegionDespoilerCenturionSquad(this, 1),
        new LegionDespoilerVeteranSquad(this, 2)
      ]),
      new Section('legion-despoiler-detachment', [
        new LegionDespoilerDecurionSquad(this, 1),
        new LegionDespoilerSquad(this, 4),
        new LegionDespoilerSupportSquad(this, 1)
      ]),
      new Section('legion-despoiler-detachment', [
        new LegionDespoilerDecurionSquad(this, 1),
        new LegionDespoilerSquad(this, 4),
        new LegionDespoilerSupportSquad(this, 1)
      ]),
      new Section('legion-despoiler-detachment', [
        new LegionDespoilerDecurionSquad(this, 1),
        new LegionDespoilerSquad(this, 4),
        new LegionDespoilerSupportSquad(this, 1)
      ])
    )
  }
}

export class LegionBreacherCompany extends Card {
  constructor (list) {
    super(list, 5, 13, 800, 8)

    this.sections.push(
      new Section('legion-command-section', [
        new LegionBreacherCenturionSquad(this, 1),
        new LegionBreacherVeteranSquad(this, 2)
      ]),
      new Section('legion-breacher-detachment', [
        new LegionBreacherDecurionSquad(this, 1),
        new LegionBreacherSquad(this, 4),
        new LegionBreacherSupportSquad(this, 1)
      ]),
      new Section('legion-breacher-detachment', [
        new LegionBreacherDecurionSquad(this, 1),
        new LegionBreacherSquad(this, 4),
        new LegionBreacherSupportSquad(this, 1)
      ]),
      new Section('legion-breacher-detachment', [
        new LegionBreacherDecurionSquad(this, 1),
        new LegionBreacherSquad(this, 4),
        new LegionBreacherSupportSquad(this, 1)
      ])
    )
  }
}

export class LegionBattleCompany extends Card {
  constructor (list) {
    super(list, 5, 13, 650, 7)

    this.sections.push(
      new Section('legion-command-section', [
        new LegionTacticalCenturionSquad(this, 1),
        new LegionTacticalVeteranSquad(this, 2)
      ]),
      new Section('legion-tactical-detachment', [
        new LegionTacticalDecurionSquad(this, 1),
        new LegionTacticalSquad(this, 4),
        new LegionTacticalSupportSquad(this, 1)
      ]),
      new Section('legion-assault-detachment', [
        new LegionAssaultDecurionSquad(this, 1),
        new LegionAssaultSquad(this, 4),
        new LegionAssaultSupportSquad(this, 1)
      ]),
      new Section('legion-breacher-detachment', [
        new LegionBreacherDecurionSquad(this, 1),
        new LegionBreacherSquad(this, 4),
        new LegionBreacherSupportSquad(this, 1)
      ])
    )
  }
}

export class LegionTerminatorCompany extends Card {
  constructor (list) {
    super(list, 5, 11, 950, 10)

    this.sections.push(
      new Section('command-section', [
        new LegionTerminatorCenturionSquad(this, 1),
        new LegionTerminatorVeteranSquad(this, 2)
      ]),
      new Section('legion-terminator-detachment', [
        new LegionTerminatorDecurionSquad(this, 1),
        new LegionTerminatorSquad(this, 4)
      ]),
      new Section('legion-terminator-detachment', [
        new LegionTerminatorDecurionSquad(this, 1),
        new LegionTerminatorSquad(this, 4)
      ]),
      new Section('legion-terminator-detachment', [
        new LegionTerminatorDecurionSquad(this, 1),
        new LegionTerminatorSquad(this, 4)
      ])
    )
  }
}

export class LegionDreadnoughtCompany extends Card {
  constructor (list) {
    super(list, 5, 6, 650, 6)
  }
}

export class LegionJavelinCompany extends Card {
  constructor (list) {
    super(list, 5, 11, 900, 9)
  }
}

export class LegionJetbikeCompany extends Card {
  constructor (list) {
    super(list, 5, 11, 600, 6)
  }
}

export class LegionLandspeederCompany extends Card {
  constructor (list) {
    super(list, 5, 11, 800, 8)
  }
}

export class LegionBikeCompany extends Card {
  constructor (list) {
    super(list, 5, 11, 550, 6)
  }
}

export class LegionCerberusCompany extends Card {
  constructor (list) {
    super(list, 5, 6, 950, 10)
  }
}

export class LegionLandRaiderCompany extends Card {
  constructor (list) {
    super(list, 5, 6, 850, 9)
  }
}

export class LegionPredatorCompany extends Card {
  constructor (list) {
    super(list, 5, 6, 550, 6)
  }
}

export class LegionPredatorAssaultCompany extends Card {
  constructor (list) {
    super(list, 5, 6, 500, 5)
  }
}

export class LegionSicaranCompany extends Card {
  constructor (list) {
    super(list, 5, 6, 450, 5)
  }
}

export class LegionSicaranStrikeCompany extends Card {
  constructor (list) {
    super(list, 5, 6, 550, 6)
  }
}

export class LegionVindicatorCompany extends Card {
  constructor (list) {
    super(list, 5, 6, 400, 4)
  }
}

export class LegionArtilleryCompany extends Card {
  constructor (list) {
    super(list, 5, 6, 550, 6)
  }
}

export class LegionFalchionCompany extends Card {
  constructor (list) {
    super(list, 5, 2, 850, 9)
  }
}

export class LegionFellbladeCompany extends Card {
  constructor (list) {
    super(list, 5, 2, 1000, 10)
  }
}

export class LegionGlaiveCompany extends Card {
  constructor (list) {
    super(list, 5, 2, 700, 7)
  }
}

export class LegionMalcadorCompany extends Card {
  constructor (list) {
    super(list, 5, 4, 550, 6)
  }
}

export class LegionStormbladeCompany extends Card {
  constructor (list) {
    super(list, 5, 2, 450, 5)
  }
}

export class LegionTyphonCompany extends Card {
  constructor (list) {
    super(list, 5, 4, 650, 7)
  }
}

export class LegionTacticalGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 23, 1100, 11)
  }
}

export class LegionAssaultGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 23, 1250, 13)
  }
}

export class LegionDespoilerGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 23, 1250, 13)
  }
}

export class LegionBreacherGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 23, 1500, 15)
  }
}

export class LegionBattleGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 23, 1200, 12)
  }
}

export class LegionTerminatorGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 19, 1750, 18)
  }
}

export class LegionDreadnoughtGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 11, 1150, 12)
  }
}

export class LegionJavelinGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 21, 1800, 18)
  }
}

export class LegionJetbikeGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 21, 1150, 16)
  }
}

export class LegionLandspeederGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 21, 1600, 16)
  }
}

export class LegionBikeGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 21, 1050, 11)
  }
}

export class LegionCerberusGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 11, 1900, 19)
  }
}

export class LegionLandRaiderGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 11, 1700, 17)
  }
}

export class LegionPredatorGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 11, 1050, 11)
  }
}

export class LegionPredatorAssaultGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 6, 950, 10)
  }
}

export class LegionSicaranGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 11, 850, 9)
  }
}

export class LegionSicaranStrikeGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 6, 1000, 10)
  }
}

export class LegionVindicatorGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 11, 800, 8)
  }
}

export class LegionArtilleryGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 11, 1050, 11)
  }
}

export class LegionFalchionGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 4, 1600, 16)
  }
}

export class LegionFellbladeGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 4, 1900, 19)
  }
}

export class LegionGlaiveGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 4, 1300, 13)
  }
}

export class LegionMalcadorGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 4, 750, 8)
  }
}

export class LegionStormbladeGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 4, 750, 8)
  }
}

export class LegionTyphonGrandCompany extends Card {
  constructor (list) {
    super(list, 5, 8, 900, 9)
  }
}

withType(LegionTacticalCompany)
withType(LegionAssaultCompany)
withType(LegionDespoilerCompany)
withType(LegionBreacherCompany)
withType(LegionBattleCompany)
withType(LegionTerminatorCompany)
withType(LegionDreadnoughtCompany)
withType(LegionJavelinCompany)
withType(LegionJetbikeCompany)
withType(LegionLandspeederCompany)
withType(LegionBikeCompany)
withType(LegionCerberusCompany)
withType(LegionLandRaiderCompany)
withType(LegionPredatorCompany)
withType(LegionPredatorAssaultCompany)
withType(LegionSicaranCompany)
withType(LegionSicaranStrikeCompany)
withType(LegionVindicatorCompany)
withType(LegionArtilleryCompany)
withType(LegionFalchionCompany)
withType(LegionFellbladeCompany)
withType(LegionGlaiveCompany)
withType(LegionMalcadorCompany)
withType(LegionStormbladeCompany)
withType(LegionTyphonCompany)
withType(LegionTacticalGrandCompany)
withType(LegionAssaultGrandCompany)
withType(LegionDespoilerGrandCompany)
withType(LegionBreacherGrandCompany)
withType(LegionBattleGrandCompany)
withType(LegionTerminatorGrandCompany)
withType(LegionDreadnoughtGrandCompany)
withType(LegionJavelinGrandCompany)
withType(LegionJetbikeGrandCompany)
withType(LegionLandspeederGrandCompany)
withType(LegionBikeGrandCompany)
withType(LegionCerberusGrandCompany)
withType(LegionLandRaiderGrandCompany)
withType(LegionPredatorGrandCompany)
withType(LegionPredatorAssaultGrandCompany)
withType(LegionSicaranGrandCompany)
withType(LegionSicaranStrikeGrandCompany)
withType(LegionVindicatorGrandCompany)
withType(LegionArtilleryGrandCompany)
withType(LegionFalchionGrandCompany)
withType(LegionFellbladeGrandCompany)
withType(LegionGlaiveGrandCompany)
withType(LegionMalcadorGrandCompany)
withType(LegionStormbladeGrandCompany)
withType(LegionTyphonGrandCompany)
