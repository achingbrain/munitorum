import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  FirstStrike,
  Fleshbane
} from '../weapons'
import {
  JumpPacks,
  ReinforcedArmour,
  DemiGod,
  ThickRearArmour,
  Fearless,
  SupremeCommander,
  Inspiring,
  InvulnerableSave,
  Infiltrator,
  ATalentForMurder
} from '../special-rules'
import {
  LegionTacticalSquad,
  LegionUnit,
  LegionPrimarchUnit
} from './space-marine-legion'
import withType from '../with-type'

export class NightLordsPrimarch extends LegionPrimarchUnit {
  constructor (detachment) {
    super(detachment, 450)

    this.transportType = 'tactical'
    this.rules = [
      new DemiGod(),
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new Fearless(),
      new SupremeCommander(),
      new Inspiring(),
      new InvulnerableSave('5+'),
      new Infiltrator(),
      new ATalentForMurder()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 3,
      ff: 4
    }
    this.weapons = [
      new Weapon('mercy-and-forgiveness', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+2'))),
      new Weapon('the-widowmakers',
        new SmallArms('15cm', new FirstStrike(), new ExtraAttacks('+2'))
      )
    ]
  }
}

export class NightLordsBodyguardSquad extends LegionTacticalSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 0
    this.min = 7
    this.max = undefined
    this.quantity = 7
  }
}

export class NightLordsNightRaptorSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 225, 4)

    this.transportType = 'assault'
    this.rules = [
      new JumpPacks()
    ]
    this.stats = {
      type: 'INF',
      speed: 35,
      armour: 4,
      cc: 3,
      ff: 5
    }
    this.weapons = [
      new Weapon('power-weapons', new AssaultWeapon(new Fleshbane()))
    ]
  }
}

export class NightLordsTerrorSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 250, 6)

    this.transportType = 'tactical'
    this.rules = [
      new Infiltrator(),
      new ATalentForMurder()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 3,
      ff: 3
    }
    this.weapons = [
      new Weapon('chainglaives', new AssaultWeapon(new ExtraAttacks('+1'))),
      new Weapon('bolt-pistols', new SmallArms('15cm'))
    ]
  }
}

withType(NightLordsPrimarch)
withType(NightLordsBodyguardSquad)
withType(NightLordsNightRaptorSquad)
withType(NightLordsTerrorSquad)
