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
  IgnoreCover,
  SlowFiring,
  FixedForwardFireArc,
  TitanKiller
} from '../weapons'
import {
  ReinforcedArmour,
  DemiGod,
  ThickRearArmour,
  Fearless,
  SupremeCommander,
  Inspiring,
  InvulnerableSave,
  CortexController,
  DamageCapacity
} from '../special-rules'
import {
  LegionTerminatorSquad,
  LegionMedusa,
  LegionWhirlwind,
  LegionBasilisk,
  LegionFellblade,
  LegionUnit,
  LegionPrimarchUnit,
  LegionDreadnought
} from './space-marine-legion'
import MultipleChoiceUnit from './multiple-choice-unit'
import withType from '../with-type'

export class IronWarriorsPrimarch extends LegionPrimarchUnit {
  constructor (detachment) {
    super(detachment, 400)

    this.transportType = 'terminator'
    this.rules = [
      new DemiGod(),
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new Fearless(),
      new SupremeCommander(),
      new Inspiring(),
      new InvulnerableSave('6+'),
      new CortexController()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 4,
      ff: 3
    }
    this.weapons = [
      new Weapon('the-logos', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+2'))),
      new Weapon('wrist-cannon',
        new RangedWeapon('15cm', new MultipleShot('2x', new AntiPersonnel('4+'), new AntiTank('4+'))),
        new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1'))
      )
    ]
  }
}

export class IronWarriorsBodyguardSquad extends LegionTerminatorSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 50
    this.min = 3
    this.max = undefined
    this.quantity = 3
  }
}

class IronWarriorsTormentor extends LegionUnit {
  constructor (detachment) {
    super(detachment, 0, 1)

    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(3)
    ]
    this.stats = {
      type: 'WE',
      speed: 20,
      armour: 4,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new Weapon('volcano-cannon', new RangedWeapon('90cm', new AntiPersonnel('2+'), new AntiTank('2+'), new MacroWeapon(), new TitanKiller('D3'), new FixedForwardFireArc())),
      new Weapon('2-twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+'))),
      new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

export class IronWarriorsIronCircle extends LegionDreadnought {
  constructor (detachment) {
    super(detachment)

    this.rules.push(new Fearless())
    this.rules.push(new InvulnerableSave())

    this.cost = 0
    this.min = 4
    this.max = undefined
    this.quantity = 4

    this.weapons = [
      new Weapon('olympia-bolt-cannon', new RangedWeapon('15cm', new AntiPersonnel('3+'), new AntiTank('6+'))),
      new Weapon('graviton-maul', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class IronWarriorsBodyguardUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new IronWarriorsBodyguardSquad(detachment),
      new IronWarriorsTormentor(detachment),
      new IronWarriorsIronCircle(detachment)
    )
  }
}

export class IronWarriorsTyrantSiegeTerminatorSquad extends LegionTerminatorSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 85
    this.min = undefined
    this.max = undefined
    this.quantity = 1
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 3,
      ff: 3
    }
    this.weapons = [
      new Weapon('cyclone-missile-launcher', new RangedWeapon('45cm', new AntiPersonnel('5+'), new AntiTank('5+'), new IgnoreCover())),
      new Weapon('reaper-autocannon', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('4+'), new AntiTank('6+')))),
      new Weapon('power-fists', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class IronWarriorsTerminatorSquad extends LegionTerminatorSquad {
  constructor (detachment) {
    super(detachment)

    this.min = undefined
    this.max = undefined
    this.quantity = 1
  }
}

export class IronWarriorsTerminatorSquadExtra extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new IronWarriorsTerminatorSquad(detachment),
      new IronWarriorsTyrantSiegeTerminatorSquad(detachment)
    )
  }
}

export class IronWarriorsTerminatorSquadUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new IronWarriorsTerminatorSquad(detachment),
      new IronWarriorsTyrantSiegeTerminatorSquad(detachment)

    )
  }
}

export class IronWarriorsIronHavocSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 250, 4)

    this.transportType = 'tactical'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 5,
      ff: 3
    }
    this.weapons = [
      new Weapon('havoc-autocannons', new RangedWeapon('30cm', new MultipleShot('3x', new AntiPersonnel('5+'), new AntiTank('6+')), new IgnoreCover()))
    ]
  }
}

class IronWarriorsMedusa extends LegionMedusa {
  constructor (detachment) {
    super(detachment)

    this.cost = 300
    this.min = 6
    this.quantity = 6
  }
}

class IronWarriorsWhirlwind extends LegionWhirlwind {
  constructor (detachment) {
    super(detachment)

    this.cost = 400
    this.min = 6
    this.quantity = 6
  }
}

class IronWarriorsBasilisk extends LegionBasilisk {
  constructor (detachment) {
    super(detachment)

    this.cost = 500
    this.min = 6
    this.quantity = 6
  }
}

export class IronWarriorsArtilleryUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new IronWarriorsMedusa(detachment),
      new IronWarriorsWhirlwind(detachment),
      new IronWarriorsBasilisk(detachment)
    )
  }
}

class IronWarriorsStormblade extends LegionUnit {
  constructor (detachment) {
    super(detachment, 700, 3)

    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(3)
    ]
    this.stats = {
      type: 'WE',
      speed: 20,
      armour: 4,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new Weapon('plasma-blastgun', new RangedWeapon('45cm', new AntiPersonnel('2+'), new AntiTank('2+'), new MacroWeapon(), new SlowFiring(), new FixedForwardFireArc())),
      new Weapon('sponson-lascannons', new RangedWeapon('45cm', new AntiTank('5+'))),
      new Weapon('2-twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+'))),
      new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

class IronWarriorsFellblade extends LegionFellblade {
  constructor (detachment) {
    super(detachment)

    this.cost = 700
    this.min = 3
    this.quantity = 3
  }
}

export class IronWarriorsSuperHeavyTankSquadronUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new IronWarriorsFellblade(detachment),
      new IronWarriorsStormblade(detachment)
    )
  }
}

withType(IronWarriorsPrimarch)
withType(IronWarriorsBodyguardUnit)
withType(IronWarriorsBodyguardSquad)
withType(IronWarriorsTormentor)
withType(IronWarriorsIronCircle)
withType(IronWarriorsTerminatorSquad)
withType(IronWarriorsTerminatorSquadUnit)
withType(IronWarriorsTyrantSiegeTerminatorSquad)
withType(IronWarriorsTerminatorSquadExtra)
withType(IronWarriorsIronHavocSquad)
withType(IronWarriorsArtilleryUnit)
withType(IronWarriorsMedusa)
withType(IronWarriorsWhirlwind)
withType(IronWarriorsBasilisk)
withType(IronWarriorsSuperHeavyTankSquadronUnit)
withType(IronWarriorsStormblade)
withType(IronWarriorsFellblade)
