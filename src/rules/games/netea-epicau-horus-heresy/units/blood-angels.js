import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  FirstStrike,
  Sniper
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
  LegionAssaultSquad,
  LegionPrimarchUnit
} from '../units/space-marine-legion'
import withType from '../with-type'

export class BloodAngelsPrimarch extends LegionPrimarchUnit {
  constructor (detachment) {
    super(detachment, 450, 1)

    this.transportType = 'assault'
    this.rules = [
      new DemiGod(),
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new Fearless(),
      new SupremeCommander(),
      new Inspiring(),
      new InvulnerableSave(),
      new JumpPacks()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 2,
      ff: 3
    }
    this.weapons = [
      new Weapon('the-spear-of-telesto', new AssaultWeapon(new FirstStrike(), new MacroWeapon(), new ExtraAttacks('+1'), new Sniper())),
      new Weapon('archaeotech-pistol', new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class BloodAngelsBodyguardSquad extends LegionAssaultSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 0
    this.min = 5
    this.max = undefined
    this.quantity = 5
  }
}

withType(BloodAngelsPrimarch)
withType(BloodAngelsBodyguardSquad)
