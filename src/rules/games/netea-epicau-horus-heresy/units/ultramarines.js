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
  JumpPacks,
  Commander
} from '../special-rules'
import {
  LegionTacticalSquad,
  LegionUnit,
  LegionPrimarchUnit,
  LegionTerminatorSquad,
  LegionRhino
} from '../units/space-marine-legion'
import { TransportUnit, MultipleUnit } from './unit'
import withType from '../with-type'

export class UltramarinesPrimarch extends LegionPrimarchUnit {
  constructor (detachment) {
    super(detachment, 450, 1)

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
  constructor (detachment) {
    super(detachment)

    this.cost = 0
    this.min = 7
    this.max = undefined
    this.quantity = 7
  }
}

export class UltramarinesFulmentarusTerminatorSquad extends LegionTerminatorSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 85
    this.min = 4
    this.max = 6
    this.quantity = 4
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

export class UltramarinesLoctarusStormSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 300, 6)

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

export class UltramarinesInvictarusSuzerainSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 250, 4)

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

export class UltramarinesDamoclesRhino extends TransportUnit {
  constructor (detachment) {
    super(detachment, 0)

    this.transportTypes = {
      tactical: 2
    }
    this.rules = [
      new Commander()
    ]
    this.stats = {
      type: 'AV',
      speed: 30,
      armour: 5,
      cc: 6,
      ff: 6
    }
    this.weapons = [
      new Weapon('combi-bolter', new SmallArms('15cm'))
    ]
  }

  getQuantity () {
    return 1
  }
}

export class UltramarinesRhino extends LegionRhino {
  getQuantity () {
    const quantity = super.getQuantity()
    const damocles = Boolean(
      this.detachment.units.find(unit => unit instanceof UltramarinesDamoclesRhino)
    )

    if (damocles) {
      return quantity - 1
    }

    return quantity
  }
}

export class UltramarinesRhinoTransports extends MultipleUnit {
  constructor () {
    super()

    this.types = [
      UltramarinesDamoclesRhino,
      UltramarinesRhino
    ]
  }
}

withType(UltramarinesPrimarch)
withType(UltramarinesBodyguardSquad)
withType(UltramarinesFulmentarusTerminatorSquad)
withType(UltramarinesLoctarusStormSquad)
withType(UltramarinesInvictarusSuzerainSquad)
withType(UltramarinesDamoclesRhino)
withType(UltramarinesRhino)
withType(UltramarinesRhinoTransports)
