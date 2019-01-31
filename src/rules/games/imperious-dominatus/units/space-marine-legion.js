'use strict'

import Unit from './unit'
import withType from '../with-type'
import {
  Commander,
  MeltaBombs,
  InvulnerableSave,
  Veteran,
  JumpPacks
} from '../notes'

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
      caf: 8,
      sr: 25,
      lr: null,
      ad: 2,
      tsm: -1
    }
    this.weapons = [
      'combi-weapon'
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
      caf: 5,
      sr: 25,
      lr: null,
      ad: 2,
      tsm: -1
    }
    this.weapons = [
      'combi-weapon'
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
      caf: 4,
      sr: 25,
      lr: -1,
      ad: 1,
      tsm: 0
    }
    this.weapons = [
      'bolters'
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
      caf: 5,
      sr: 25,
      lr: -1,
      ad: 1,
      tsm: 0
    }
    this.weapons = [
      'support-weapons'
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
      caf: 8,
      sr: 25,
      lr: null,
      ad: 2,
      tsm: -1
    }
    this.weapons = [
      'combi-weapon'
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
      caf: 5,
      sr: 25,
      lr: null,
      ad: 2,
      tsm: -1
    }
    this.weapons = [
      'combi-weapon'
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
      caf: 6,
      sr: null,
      lr: null,
      ad: null,
      tsm: null
    }
    this.weapons = [
      'close-combat-weapons'
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

    ]
    this.stats = {
      move: 15,
      armour: 5,
      caf: 5,
      sr: 25,
      lr: null,
      ad: 2,
      tsm: -2
    }
    this.weapons = [
      'support-weapons'
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
      caf: 8,
      sr: 25,
      lr: null,
      ad: 2,
      tsm: -1
    }
    this.weapons = [
      'combi-weapon'
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
      caf: 5,
      sr: 25,
      lr: null,
      ad: 2,
      tsm: -1
    }
    this.weapons = [
      'combi-weapon'
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
      caf: 6,
      sr: null,
      lr: null,
      ad: null,
      tsm: null
    }
    this.weapons = [
      'close-combat-weapons'
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
      caf: 5,
      sr: 25,
      lr: null,
      ad: 1,
      tsm: 0
    }
    this.weapons = [
      'support-weapons'
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
      caf: 8,
      sr: 25,
      lr: null,
      ad: 2,
      tsm: -1
    }
    this.weapons = [
      'combi-weapon'
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
      caf: 5,
      sr: 25,
      lr: null,
      ad: 2,
      tsm: -1
    }
    this.weapons = [
      'combi-weapon'
    ]
  }
}

export class LegionBreacherSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [

    ]
    this.stats = {
      move: 10,
      armour: 5,
      caf: 4,
      sr: 25,
      lr: -1,
      ad: 1,
      tsm: 0
    }
    this.weapons = [
      'bolters'
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

    ]
    this.stats = {
      move: 10,
      armour: 5,
      caf: 4,
      sr: 25,
      lr: -1,
      ad: 1,
      tsm: 0
    }
    this.weapons = [
      'bolters'
    ]
  }
}

export class LegionTerminatorCenturionSquad extends Unit {
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
      caf: 8,
      sr: 25,
      lr: null,
      ad: 2,
      tsm: -1
    }
    this.weapons = [
      'combi-weapon'
    ]
  }
}

export class LegionTerminatorDecurionSquad extends Unit {
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
      caf: 5,
      sr: 25,
      lr: null,
      ad: 2,
      tsm: -1
    }
    this.weapons = [
      'combi-weapon'
    ]
  }
}

export class LegionTerminatorSquad extends Unit {
  constructor (card, quantity) {
    super(card, quantity)

    this.notes = [

    ]
    this.stats = {
      move: 10,
      armour: 5,
      caf: 4,
      sr: 25,
      lr: -1,
      ad: 1,
      tsm: 0
    }
    this.weapons = [
      'bolters'
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
