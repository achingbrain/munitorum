import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  RangedWeapon,
  MultipleShot,
  AntiPersonnel,
  AntiTank,
  Lance,
  AntiAircraft
} from '../weapons'
import {
  ReinforcedArmour,
  DemiGod,
  ThickRearArmour,
  Fearless,
  SupremeCommander,
  Inspiring,
  InvulnerableSave,
  VoidShields,
  ExploratoryAuguryWeb,
  Fortifications,
  CriticalHit,
  DamageCapacity
} from '../special-rules'
import {
  LegionTacticalSquad,
  LegionFellblade,
  LegionUnit,
  LegionPrimarchUnit
} from './space-marine-legion'
import withType from '../../../../utils/with-type'

export class ImperialFistsPrimarch extends LegionPrimarchUnit {
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
      cc: 4,
      ff: 3
    }
    this.weapons = [
      new Weapon('storms-teeth', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('the-voice-of-terra',
        new RangedWeapon('15cm', new MultipleShot('2x', new AntiPersonnel('4+'))),
        new SmallArms('15cm', new ExtraAttacks('+3'))
      )
    ]
  }
}

export class ImperialFistsBodyguardSquad extends LegionTacticalSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 0
    this.min = 7
    this.max = undefined
    this.quantity = 7
  }
}

export class ImperialFistsPhalanxWarderSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 350, 8)

    this.transportType = 'breacher'
    this.rules = [
      new Fearless()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('las-cutters', new AssaultWeapon(new Lance())),
      new Weapon('bolters', new SmallArms('15cm'))
    ]
  }
}

export class ImperialFistsTemplarBrethrenSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 350, 6)

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
      new Weapon('power-weapons', new AssaultWeapon(new MacroWeapon()))
    ]
  }
}

export class ImperialFistsFellblade extends LegionFellblade {
  constructor (detachment) {
    super(detachment)

    this.cost = 700
    this.min = 3
    this.quantity = 3
  }
}

export class ImperialFistsCastellumStronghold extends LegionUnit {
  constructor (detachment) {
    super(detachment, 250, 1)

    this.transportTypes = {
      tactical: 8,
      breacher: 8,
      assault: 8,
      terminator: 4
    }
    this.rules = [
      new DamageCapacity(3),
      new VoidShields(2),
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new InvulnerableSave(),
      new Fearless(),
      new ExploratoryAuguryWeb(),
      new Fortifications(),
      new CriticalHit('imperial-fists-castellum-stronghold-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 0,
      armour: 3,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('2-hyperios-battery', new RangedWeapon('30cm', new AntiAircraft('6+'))),
      new Weapon('2-twin-linked-lascannons', new RangedWeapon('45cm', new AntiTank('4+')))
    ]
  }
}

export class ImperialFistsPrimusRedoubt extends LegionUnit {
  constructor (detachment) {
    super(detachment, 300, 1)

    this.transportTypes = {
      tactical: 10,
      breacher: 10,
      assault: 10,
      terminator: 5
    }
    this.rules = [
      new DamageCapacity(3),
      new VoidShields(2),
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new InvulnerableSave(),
      new Fearless(),
      new ExploratoryAuguryWeb(),
      new Fortifications(),
      new CriticalHit('imperial-fists-primus-redoubt-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 0,
      armour: 3,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('2-hyperios-battery', new RangedWeapon('30cm', new AntiAircraft('6+'))),
      new Weapon('turbolaser-destructor', new RangedWeapon('60cm', new MultipleShot('4x', new AntiPersonnel('5+'), new AntiTank('3+'))))
    ]
  }
}

withType(ImperialFistsPrimarch)
withType(ImperialFistsBodyguardSquad)
withType(ImperialFistsPhalanxWarderSquad)
withType(ImperialFistsTemplarBrethrenSquad)
withType(ImperialFistsFellblade)
withType(ImperialFistsCastellumStronghold)
withType(ImperialFistsPrimusRedoubt)
