import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  RangedWeapon,
  AntiPersonnel,
  MultipleShot,
  AntiTank
} from '../weapons'
import {
  ReinforcedArmour,
  DemiGod,
  ThickRearArmour,
  Fearless,
  SupremeCommander,
  Inspiring,
  InvulnerableSave,
  Ferocity
} from '../special-rules'
import PrimarchUnit from './primarch-unit'
import Unit from './unit'
import withType from '../../../../utils/with-type'

export class SpaceWolvesPrimarch extends PrimarchUnit {
  constructor () {
    super(450, 1)

    this.transportType = 'terminator'
    this.rules = [
      new DemiGod(),
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new Fearless(),
      new SupremeCommander(),
      new Inspiring(),
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 3,
      ff: 3
    }
    this.weapons = [
      new Weapon('mjalnar', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+3'))),
      new Weapon('wolves-of-fenrir', new AssaultWeapon(new ExtraAttacks('+2'))),
      new Weapon('bolt-pistol', new SmallArms('15cm', new ExtraAttacks('+1')))
    ]
  }
}

export class SpaceWolvesGreySlayerSquad extends Unit {
  constructor () {
    super(300, 8)

    this.transportType = 'tactical'
    this.rules = [
      new Ferocity()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 3,
      ff: 4
    }
    this.weapons = [
      new Weapon('chainswords', new AssaultWeapon()),
      new Weapon('bolt-pistols', new SmallArms('15cm'))
    ]
  }
}

export class SpaceWolvesDeathswornSquad extends Unit {
  constructor () {
    super(250, 4)

    this.transportType = 'tactical'
    this.rules = [
      new Ferocity(),
      new Fearless()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 3,
      ff: 5
    }
    this.weapons = [
      new Weapon('power-axes', new AssaultWeapon(new MacroWeapon())),
      new Weapon('bolt-pistols', new SmallArms('15cm'))
    ]
  }
}

export class SpaceWolvesVaragyrWolfGuardSquad extends Unit {
  constructor () {
    super(340, 4)

    this.transportType = 'terminator'
    this.rules = [
      new Ferocity(),
      new ReinforcedArmour(),
      new ThickRearArmour()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 3,
      ff: 3
    }
    this.weapons = [
      new Weapon('frost-weapons', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('reaper-autocannon', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('4+'), new AntiTank('6+'))))
    ]
  }
}

export class SpaceWolvesBodyguardSquad extends SpaceWolvesVaragyrWolfGuardSquad {
  constructor () {
    super()

    this.cost = 0
    this.min = 3
    this.max = undefined
    this.quantity = 3
  }
}

withType(SpaceWolvesPrimarch)
withType(SpaceWolvesBodyguardSquad)
withType(SpaceWolvesGreySlayerSquad)
withType(SpaceWolvesDeathswornSquad)
withType(SpaceWolvesVaragyrWolfGuardSquad)
