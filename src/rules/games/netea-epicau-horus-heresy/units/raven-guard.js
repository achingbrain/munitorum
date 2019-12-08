import {
  Weapon,
  AssaultWeapon,
  ExtraAttacks,
  SmallArms,
  FirstStrike,
  Sniper,
  RangedWeapon,
  AntiPersonnel,
  BarragePoints,
  Disrupt,
  FixedForwardFireArc,
  AntiTank,
  AntiAircraft,
  Armourbane,
  Fleshbane
} from '../weapons'
import {
  ReinforcedArmour,
  DemiGod,
  ThickRearArmour,
  Fearless,
  SupremeCommander,
  Inspiring,
  InvulnerableSave,
  Scout,
  Infiltrator,
  JumpPacks
} from '../special-rules'
import {
  LegionAssaultSquad,
  LegionUnit,
  LegionPrimarchUnit
} from '../units/space-marine-legion'
import withType from '../with-type'

export class RavenGuardPrimarch extends LegionPrimarchUnit {
  constructor (detachment) {
    super(detachment, 400)

    this.transportType = 'assault'
    this.rules = [
      new DemiGod(),
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new Fearless(),
      new SupremeCommander(),
      new Inspiring(),
      new InvulnerableSave(),
      new Infiltrator(),
      new JumpPacks()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 3,
      ff: 4
    }
    this.weapons = [
      new Weapon('power-whip', new AssaultWeapon(new FirstStrike(), new Fleshbane(), new ExtraAttacks('+2'))),
      new Weapon('modified-archeotech-pistols', new SmallArms('15cm', new FirstStrike(), new Fleshbane(), new ExtraAttacks('+1')))
    ]
  }
}

export class RavenGuardBodyguardSquad extends LegionAssaultSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 0
    this.min = 5
    this.max = undefined
    this.quantity = 5
  }
}

export class RavenGuardDarkFuryAssaultSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 250, 4)

    this.transportType = 'assault'
    this.rules = [
      new Scout()
    ]
    this.stats = {
      type: 'INF',
      speed: 35,
      armour: 4,
      cc: 3,
      ff: 5
    }
    this.weapons = [
      new Weapon('lightning-claws', new AssaultWeapon(new FirstStrike(), new ExtraAttacks('+1')))
    ]
  }
}

export class RavenGuardMorDeythanStrikeSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 225, 4)

    this.transportType = 'tactical'
    this.rules = [
      new Scout()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 3
    }
    this.weapons = [
      new Weapon('sniper-rifles', new RangedWeapon('30cm', new AntiPersonnel('5+'), new Sniper())),
      new Weapon('combi-weapons', new SmallArms('15cm', new FirstStrike()))
    ]
  }
}

export class RavenGuardDarkwingPatternStormEagle extends LegionUnit {
  constructor (detachment) {
    super(detachment, 125, 1, 3)

    this.transportTypes = {
      tactical: 3,
      breacher: 3,
      assault: 3,
      terminator: 1
    }
    this.rules = [
      new ReinforcedArmour(),
      new InvulnerableSave('6+')
    ]
    this.stats = {
      type: 'AC',
      speed: 0,
      armour: 5,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('eclipse-missiles', new RangedWeapon('45cm', new BarragePoints(1), new Disrupt(), new FixedForwardFireArc())),
      new Weapon('2-twin-linked-lascannons', new RangedWeapon('45cm', new AntiTank('4+'), new AntiAircraft('5+'), new Armourbane(), new FixedForwardFireArc())),
      new Weapon('twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+')))
    ]
  }
}

withType(RavenGuardPrimarch)
withType(RavenGuardBodyguardSquad)
withType(RavenGuardDarkFuryAssaultSquad)
withType(RavenGuardMorDeythanStrikeSquad)
withType(RavenGuardDarkwingPatternStormEagle)
