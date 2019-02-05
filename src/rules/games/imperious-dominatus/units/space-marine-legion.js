'use strict'

import Unit from './unit'
import withType from '../with-type'
import {
  Commander,
  MeltaBombs,
  InvulnerableSave,
  Veteran,
  JumpPacks,
  DeepStrike,
  Stubborn,
  CloseCombatBonus,
  IgnoresCover,
  Volkite
} from '../notes'
import {
  Weapon,
  MultipleChoiceWeapon
} from '../weapons'

export class LegionTacticalCenturionSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new Commander(2),
      new MeltaBombs(),
      new InvulnerableSave(8),
      new Veteran()
    ]
    this.stats = {
      move: 10,
      armour: 4,
      caf: 8
    }
    this.weapons = [
      new Weapon('combi-weapon', {
        sr: 25,
        ad: 2,
        tsm: -1
      })
    ]
  }
}

export class LegionTacticalDecurionSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new Commander(1),
      new MeltaBombs(),
      new InvulnerableSave(8),
      new Veteran()
    ]
    this.stats = {
      move: 10,
      armour: 4,
      caf: 5
    }
    this.weapons = [
      new Weapon('combi-weapon', {
        sr: 25,
        ad: 2,
        tsm: -1
      })
    ]
  }
}

export class LegionTacticalSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [

    ]
    this.stats = {
      move: 10,
      armour: 5,
      caf: 4
    }
    this.weapons = [
      new Weapon('bolters', {
        sr: 25,
        ad: 1,
        tsm: 0
      })
    ]
  }
}

export class LegionTacticalVeteranSquad extends LegionTacticalSquad {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new Veteran()
    ]
  }
}

export class LegionTacticalSupportSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [

    ]
    this.stats = {
      move: 10,
      armour: 5,
      caf: 5
    }
    this.weapons = [
      new Weapon('support-weapons', {
        sr: 25,
        lr: null,
        ad: 1,
        tsm: 0
      })
    ]
  }
}

export class LegionAssaultCenturionSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new Commander(2),
      new MeltaBombs(),
      new InvulnerableSave(8),
      new Veteran(),
      new JumpPacks()
    ]
    this.stats = {
      move: 15,
      armour: 4,
      caf: 8
    }
    this.weapons = [
      new Weapon('combi-weapon', {
        sr: 25,
        ad: 2,
        tsm: -1
      })
    ]
  }
}

export class LegionAssaultDecurionSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new Commander(1),
      new MeltaBombs(),
      new InvulnerableSave(8),
      new Veteran(),
      new JumpPacks()
    ]
    this.stats = {
      move: 15,
      armour: 4,
      caf: 5
    }
    this.weapons = [
      new Weapon('combi-weapon', {
        sr: 25,
        ad: 2,
        tsm: -1
      })
    ]
  }
}

export class LegionAssaultSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new JumpPacks()
    ]
    this.stats = {
      move: 15,
      armour: 5,
      caf: 6
    }
    this.weapons = [
      new Weapon('close-combat-weapons')
    ]
  }
}

export class LegionAssaultVeteranSquad extends LegionAssaultSquad {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new Veteran()
    ]
  }
}

export class LegionAssaultSupportSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new JumpPacks()
    ]
    this.stats = {
      move: 15,
      armour: 5,
      caf: 5
    }
    this.weapons = [
      new Weapon('support-weapons', {
        sr: 25,
        ad: 2,
        tsm: -2
      })
    ]
  }
}

export class LegionDespoilerCenturionSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new Commander(2),
      new MeltaBombs(),
      new InvulnerableSave(8),
      new Veteran()
    ]
    this.stats = {
      move: 10,
      armour: 4,
      caf: 8
    }
    this.weapons = [
      new Weapon('combi-weapon', {
        sr: 25,
        ad: 2,
        tsm: -1
      })
    ]
  }
}

export class LegionDespoilerDecurionSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new Commander(1),
      new MeltaBombs(),
      new InvulnerableSave(8),
      new Veteran()
    ]
    this.stats = {
      move: 10,
      armour: 4,
      caf: 5
    }
    this.weapons = [
      new Weapon('combi-weapon', {
        sr: 25,
        ad: 2,
        tsm: -1
      })
    ]
  }
}

export class LegionDespoilerSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new MeltaBombs()
    ]
    this.stats = {
      move: 10,
      armour: 5,
      caf: 6
    }
    this.weapons = [
      new Weapon('close-combat-weapons')
    ]
  }
}

export class LegionDespoilerVeteranSquad extends LegionDespoilerSquad {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new Veteran()
    ]
  }
}

export class LegionDespoilerSupportSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [

    ]
    this.stats = {
      move: 10,
      armour: 5,
      caf: 5
    }
    this.weapons = [
      new Weapon('support-weapons', {
        sr: 25,
        ad: 1,
        tsm: 0
      })
    ]
  }
}

export class LegionBreacherCenturionSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new Commander(2),
      new MeltaBombs(),
      new InvulnerableSave(8),
      new Veteran()
    ]
    this.stats = {
      move: 10,
      armour: 4,
      caf: 8
    }
    this.weapons = [
      new Weapon('combi-weapon', {
        sr: 25,
        ad: 2,
        tsm: -1
      })
    ]
  }
}

export class LegionBreacherDecurionSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new Commander(1),
      new MeltaBombs(),
      new InvulnerableSave(8),
      new Veteran()
    ]
    this.stats = {
      move: 10,
      armour: 4,
      caf: 5
    }
    this.weapons = [
      new Weapon('combi-weapon', {
        sr: 25,
        ad: 2,
        tsm: -1
      })
    ]
  }
}

export class LegionBreacherSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new InvulnerableSave(8)
    ]
    this.stats = {
      move: 10,
      armour: 4,
      caf: 4
    }
    this.weapons = [
      new Weapon('bolters', {
        sr: 25,
        ad: 1,
        tsm: 0
      })
    ]
  }
}

export class LegionBreacherVeteranSquad extends LegionBreacherSquad {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new Veteran()
    ]
  }
}

export class LegionBreacherSupportSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new InvulnerableSave(8)
    ]
    this.stats = {
      move: 10,
      armour: 5,
      caf: 5
    }
    this.weapons = [
      new Weapon('support-weapons', {
        sr: 25,
        ad: 1,
        tsm: 0
      })
    ]
  }
}

export class LegionTerminatorCenturionSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new Commander(2),
      new MeltaBombs(),
      new InvulnerableSave(6),
      new Veteran(),
      new DeepStrike(),
      new Stubborn(),
      new CloseCombatBonus(1)
    ]
    this.stats = {
      move: 10,
      armour: 3,
      caf: 8
    }
    this.weapons = [
      new Weapon('combi-weapon', {
        sr: 25,
        ad: 2,
        tsm: -1
      })
    ]
  }
}

export class LegionTerminatorDecurionSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new Commander(1),
      new MeltaBombs(),
      new InvulnerableSave(6),
      new Veteran(),
      new DeepStrike(),
      new Stubborn(),
      new CloseCombatBonus(1)
    ]
    this.stats = {
      move: 10,
      armour: 3,
      caf: 6
    }
    this.weapons = [
      new Weapon('combi-weapon', {
        sr: 25,
        ad: 2,
        tsm: -1
      })
    ]
  }
}

export class LegionTerminatorSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new InvulnerableSave(8),
      new DeepStrike(),
      new CloseCombatBonus(1)
    ]
    this.stats = {
      move: 10,
      armour: 3,
      caf: 7
    }
    this.weapons = [
      new Weapon('combi-bolters', {
        sr: 25,
        ad: 2,
        tsm: -1
      }),
      new Weapon('chainfists')
    ]
  }
}

export class LegionTerminatorVeteranSquad extends LegionTerminatorSquad {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new Veteran()
    ]
  }
}

export class LegionContemptorDreadnoughtType1 extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new InvulnerableSave(8)
    ]
    this.stats = {
      move: 15,
      armour: 3,
      caf: 10
    }
    this.weapons = [
      new Weapon('close-combat-weapon'),
      new Weapon('multi-melta', {
        sr: 25,
        ad: 1,
        tsm: -3
      }),
      new MultipleChoiceWeapon(
        new Weapon('antipersonnel', {
          sr: 25,
          ad: 2,
          tsm: -1
        }),
        new Weapon('heavy-flamer', {
          sr: 10,
          ad: 2,
          tsm: -1
        }, [
          new IgnoresCover()
        ])
      )
    ]
  }
}

export class LegionContemptorDreadnoughtType2 extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new InvulnerableSave(8)
    ]
    this.stats = {
      move: 15,
      armour: 3,
      caf: 7
    }
    this.weapons = [
      new Weapon('twin-linked-autocannon', {
        sr: 25,
        lr: 50,
        ad: 4,
        tsm: -2
      }),
      new Weapon('twin-linked-volkie-culverin', {
        sr: 25,
        ad: 1,
        tsm: -1
      }, [
        new Volkite()
      ])
    ]
  }
}

export class LegionContemptorDreadnoughtType3 extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new InvulnerableSave(8)
    ]
    this.stats = {
      move: 15,
      armour: 3,
      caf: 7
    }
    this.weapons = [
      new Weapon('twin-linked-lascannon', {
        sr: 25,
        lr: 50,
        ad: 2,
        tsm: -3
      }),
      new Weapon('kheres-pattern-assault-cannon', {
        sr: 25,
        ad: 3,
        tsm: -1
      })
    ]
  }
}

export class LegionContemptorDreadnoughtType4 extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [
      new InvulnerableSave(8)
    ]
    this.stats = {
      move: 15,
      armour: 3,
      caf: 7
    }
    this.weapons = [
      new Weapon('twin-linked-lascannon', {
        sr: 25,
        lr: 50,
        ad: 2,
        tsm: -3
      }),
      new Weapon('heavy-conversion-beamer', {
        sr: 35,
        lr: 70,
        ad: 2,
        tsm: -3
      })
    ]
  }
}

withType(LegionTacticalCenturionSquad)
withType(LegionTacticalDecurionSquad)
withType(LegionTacticalSquad)
withType(LegionTacticalVeteranSquad)
withType(LegionTacticalSupportSquad)
withType(LegionAssaultCenturionSquad)
withType(LegionAssaultDecurionSquad)
withType(LegionAssaultSquad)
withType(LegionAssaultVeteranSquad)
withType(LegionAssaultSupportSquad)
withType(LegionDespoilerCenturionSquad)
withType(LegionDespoilerDecurionSquad)
withType(LegionDespoilerSquad)
withType(LegionDespoilerVeteranSquad)
withType(LegionDespoilerSupportSquad)
withType(LegionBreacherCenturionSquad)
withType(LegionBreacherDecurionSquad)
withType(LegionBreacherSquad)
withType(LegionBreacherVeteranSquad)
withType(LegionBreacherSupportSquad)
withType(LegionTerminatorCenturionSquad)
withType(LegionTerminatorDecurionSquad)
withType(LegionTerminatorSquad)
withType(LegionTerminatorVeteranSquad)
withType(LegionContemptorDreadnoughtType1)
withType(LegionContemptorDreadnoughtType2)
withType(LegionContemptorDreadnoughtType3)
withType(LegionContemptorDreadnoughtType4)
