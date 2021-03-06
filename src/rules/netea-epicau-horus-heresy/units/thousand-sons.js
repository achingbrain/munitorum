import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  Sniper,
  RangedWeapon,
  AntiPersonnel,
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
  Scout,
  Infiltrator
} from '../special-rules'
import {
  LegionUnit,
  LegionPrimarchUnit,
  LegionTerminatorSquad
} from './space-marine-legion'
import withType from '../with-type'

export class ThousandSonsPrimarch extends LegionPrimarchUnit {
  constructor (detachment) {
    super(detachment, 450, 1)

    this.transportType = 'terminator'
    this.rules = [
      new DemiGod(),
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new Fearless(),
      new SupremeCommander(),
      new Inspiring(),
      new InvulnerableSave('5+')
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 3
    }
    this.weapons = [
      new Weapon('blade-of-ahn-nunurta', new AssaultWeapon(new MacroWeapon())),
      new Weapon('psyfire-serpenta',
        new RangedWeapon('30cm', new AntiPersonnel('4+'), new AntiTank('4+'), new MacroWeapon()),
        new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+2'))
      )
    ]
  }
}

export class ThousandSonsSekhmetTerminatorSquad extends LegionTerminatorSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 340
    this.min = 4
    this.max = undefined
    this.quantity = 4
    this.rules.push(new InvulnerableSave('5+'))
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 3,
      ff: 3
    }
    this.weapons = [
      new Weapon('force-weapons', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('force-blast', new SmallArms('15cm', new MacroWeapon()))
    ]
  }
}

export class ThousandSonsBodyguardSquad extends ThousandSonsSekhmetTerminatorSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 0
    this.min = 3
    this.max = undefined
    this.quantity = 3
  }
}

export class ThousandSonsAmmitaraIntercessorSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 275, 4)

    this.transportType = 'tactical'
    this.rules = [
      new Scout(),
      new Infiltrator(),
      new InvulnerableSave('6+')
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('sniper-rifles', new RangedWeapon('30cm', new AntiPersonnel('4+'), new Sniper()))
    ]
  }
}

export class ThousandSonsKhenetaiBladesSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 225, 4)

    this.transportType = 'tactical'
    this.rules = [
      new InvulnerableSave('6+')
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 7
    }
    this.weapons = [
      new Weapon('force-blades', new AssaultWeapon(new ExtraAttacks('+2')))
    ]
  }
}

withType(ThousandSonsPrimarch)
withType(ThousandSonsBodyguardSquad)
withType(ThousandSonsSekhmetTerminatorSquad)
withType(ThousandSonsAmmitaraIntercessorSquad)
withType(ThousandSonsKhenetaiBladesSquad)
