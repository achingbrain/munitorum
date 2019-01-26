import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  RangedWeapon,
  AntiPersonnel,
  AntiTank,
  MultipleShot,
  IgnoreCover
} from '../weapons'
import {
  ReinforcedArmour,
  DemiGod,
  ThickRearArmour,
  Fearless,
  SupremeCommander,
  Inspiring,
  InvulnerableSave,
  JumpPacks
} from '../special-rules'
import {
  LegionTacticalSquad
} from '../units/space-marine-legion'
import PrimarchUnit from './primarch-unit'
import Unit from './unit'
import withType from '../../../../utils/with-type'

export class UltramarinesPrimarch extends PrimarchUnit {
  constructor () {
    super(450, 1)

    this.transportType = 'tactical'
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
      ff: 4
    }
    this.weapons = [
      new Weapon('hand-of-domninon', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+2'))),
      new Weapon('arbitrator',
        new RangedWeapon('15cm', new MultipleShot('2x', new AntiPersonnel('4+'))),
        new SmallArms('15cm', new ExtraAttacks('+3'))
      )
    ]
  }
}

export class UltramarinesBodyguardSquad extends LegionTacticalSquad {
  constructor () {
    super()

    this.cost = 0
    this.min = 7
    this.max = undefined
    this.quantity = 7
  }
}

export class UltramarinesFulmentarusTerminatorSquad extends Unit {
  constructor () {
    super(85, 4, 6)

    this.transportType = 'terminator'
    this.rules = [
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
      new Weapon('reaper-autocannon', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('4+'), new AntiTank('5+')), new IgnoreCover())),
      new Weapon('cyclone-missile-launcher', new RangedWeapon('45cm', new AntiPersonnel('5+'), new AntiTank('6+'), new IgnoreCover())),
      new Weapon('power-axes', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class UltramarinesLoctarusStormSquad extends Unit {
  constructor () {
    super(300, 6)

    this.transportType = 'assault'
    this.rules = [
      new JumpPacks()
    ]
    this.stats = {
      type: 'INF',
      speed: 35,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('power-weapons', new AssaultWeapon(new MacroWeapon())),
      new Weapon('bolt-pistols', new SmallArms('15cm', new ExtraAttacks('+1')))
    ]
  }
}

export class UltramarinesInvictarusSuzerainSquad extends Unit {
  constructor () {
    super(250, 4)

    this.transportType = 'tactical'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('legatine-axes', new AssaultWeapon(new MacroWeapon())),
      new Weapon('plasma-pistols', new SmallArms('15cm', new MacroWeapon()))
    ]
  }
}

withType(UltramarinesPrimarch)
withType(UltramarinesBodyguardSquad)
withType(UltramarinesFulmentarusTerminatorSquad)
withType(UltramarinesLoctarusStormSquad)
withType(UltramarinesInvictarusSuzerainSquad)
