import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms
} from '../weapons'
import {
  ReinforcedArmour,
  DemiGod,
  ThickRearArmour,
  Fearless,
  SupremeCommander,
  Inspiring,
  InvulnerableSave,
  Infiltrator,
  Beserk
} from '../special-rules'
import {
  LegionTerminatorSquad
} from '../units/space-marine-legion'
import PrimarchUnit from './primarch-unit'
import Unit from './unit'
import withType from '../../../../utils/with-type'

export class WorldEatersPrimarch extends PrimarchUnit {
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
      new InvulnerableSave(),
      new Infiltrator()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 3,
      ff: 5
    }
    this.weapons = [
      new Weapon('gorefather-and-gorechild', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('D3+1'))),
      new Weapon('the-spite-furnace',
        new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1'))
      )
    ]
  }
}

export class WorldEatersBodyguardSquad extends LegionTerminatorSquad {
  constructor () {
    super()

    this.cost = 0
    this.min = 3
    this.max = undefined
    this.quantity = 3
  }
}

export class WorldEatersRampagerSquad extends Unit {
  constructor () {
    super(60, 4, 6)

    this.transportType = 'tactical'
    this.rules = [
      new Fearless(),
      new Beserk()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 3,
      ff: 5
    }
    this.weapons = [
      new Weapon('cadere-weapons', new AssaultWeapon(new ExtraAttacks('+1')))
    ]
  }
}

export class WorldEatersRedButcherSquad extends Unit {
  constructor () {
    super(85, 4, 6)

    this.transportType = 'terminator'
    this.rules = [
      new Fearless(),
      new Beserk(),
      new ReinforcedArmour(),
      new ThickRearArmour()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 6
    }
    this.weapons = [
      new Weapon('power-axes', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+2'))),
      new Weapon('combi-bolter', new SmallArms('15cm'))
    ]
  }
}

withType(WorldEatersPrimarch)
withType(WorldEatersBodyguardSquad)
withType(WorldEatersRampagerSquad)
withType(WorldEatersRedButcherSquad)
