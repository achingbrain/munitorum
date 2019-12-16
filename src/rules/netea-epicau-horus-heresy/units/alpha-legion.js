import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  FirstStrike,
  Sniper,
  RangedWeapon,
  MultipleShot,
  AntiPersonnel
} from '../weapons'
import {
  ReinforcedArmour,
  DemiGod,
  ThickRearArmour,
  Fearless,
  SupremeCommander,
  Inspiring,
  InvulnerableSave,
  Scout
} from '../special-rules'
import {
  LegionTacticalSquad,
  LegionTerminatorSquad,
  LegionUnit,
  LegionPrimarchUnit
} from './space-marine-legion'
import withType from '../with-type'

export class AlphaLegionPrimarch extends LegionPrimarchUnit {
  constructor (detachment) {
    super(detachment, 450)

    this.transportType = 'tactical'
    this.transportUnits = 2
    this.rules = [
      new DemiGod(),
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new Fearless(),
      new SupremeCommander(),
      new Inspiring(),
      new InvulnerableSave('4+')
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('pale-spear', new AssaultWeapon(new ExtraAttacks('+3'))),
      new Weapon('master-crafted-boltguns', new SmallArms('15cm', new FirstStrike(), new ExtraAttacks('+3')))
    ]
  }
}

export class AlphaLegionBodyguardSquad extends LegionTacticalSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 0
    this.min = 7
    this.max = undefined
    this.quantity = 7
  }
}

export class AlphaLegionLernaeanTerminatorSquad extends LegionTerminatorSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 340
    this.min = 4
    this.max = undefined
    this.quantity = 4
    this.rules.push(
      new Scout()
    )
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 3,
      ff: 3
    }
    this.weapons = [
      new Weapon('power-axes', new AssaultWeapon(new FirstStrike(), new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('volkite-chargers',
        new RangedWeapon('15cm', new MultipleShot('2x', new AntiPersonnel('3+'))),
        new SmallArms('15cm', new ExtraAttacks('+1'))
      )
    ]
  }
}

export class AlphaLegionHeadHunterKillTeamSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 200, 4)

    this.transportType = 'tactical'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('signum-bolt-pistols', new SmallArms('15cm', new Sniper()))
    ]
  }
}

withType(AlphaLegionPrimarch)
withType(AlphaLegionBodyguardSquad)
withType(AlphaLegionLernaeanTerminatorSquad)
withType(AlphaLegionHeadHunterKillTeamSquad)
