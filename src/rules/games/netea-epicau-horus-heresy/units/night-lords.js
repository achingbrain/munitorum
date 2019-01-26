import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  FirstStrike
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
  Infiltrator
} from '../special-rules'
import {
  LegionTacticalSquad
} from '../units/space-marine-legion'
import PrimarchUnit from './primarch-unit'
import Unit from './unit'
import withType from '../../../../utils/with-type'

export class NightLordsPrimarch extends PrimarchUnit {
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
      new InvulnerableSave(),
      new Infiltrator()
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
  constructor () {
    super()

    this.cost = 0
    this.min = 7
    this.max = undefined
    this.quantity = 7
  }
}

export class NightLordsNightRaptorSquad extends Unit {
  constructor () {
    super(225, 4)

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
      new Weapon('power-weapons', new AssaultWeapon(new MacroWeapon()))
    ]
  }
}

export class NightLordsTerrorSquad extends Unit {
  constructor () {
    super(250, 6)

    this.transportType = 'tactical'
    this.rules = [
      new Infiltrator()
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
