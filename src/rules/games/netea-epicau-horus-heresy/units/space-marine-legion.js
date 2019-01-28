'use strict'

import {
  ReinforcedArmour,
  ThickRearArmour,
  JumpPacks,
  Scout,
  Skimmer,
  ExploratoryAuguryWeb,
  Mounted,
  Infiltrator,
  Inspiring,
  SupremeCommander,
  InvulnerableSave,
  Walker,
  Planetfall,
  Commander,
  Leader,
  DamageCapacity,
  CriticalHit,
  SlowAndSteady,
  PlusTransports
} from '../special-rules'
import {
  MultipleChoiceWeapon,
  Weapon,
  WeaponSet,
  StatsModifier,
  OptionalWeapons,
  MultipleShot,
  MacroWeapon,
  TitanKiller,
  ExtraAttacks,
  AntiPersonnel,
  AntiTank,
  AntiAircraft,
  Radiation,
  RangedWeapon,
  AssaultWeapon,
  SmallArms,
  Disrupt,
  Sniper,
  IgnoreCover,
  Lance,
  IndirectFire,
  BarragePoints,
  FixedForwardFireArc,
  SingleShot,
  Feedback,
  ForwardFireArc,
  LeftFireArc,
  RightFireArc
} from '../weapons'
import MultipleChoiceUnit from './multiple-choice-unit'
import TransportUnit from './transport-unit'
import Unit from './unit'
import SpacecraftUnit from './spacecraft-unit'
import withType from '../../../../utils/with-type'

export class LegionArtilleryUnit extends MultipleChoiceUnit {
  constructor () {
    super(
      new LegionMedusa(),
      new LegionWhirlwind(),
      new LegionBasilisk()
    )
  }
}

export class LegionAssaultSquad extends Unit {
  constructor () {
    super(300, 8)

    this.transportType = 'assault'
    this.rules = [
      new JumpPacks()
    ]
    this.stats = {
      type: 'INF',
      speed: 30,
      armour: 4,
      cc: 3,
      ff: 5
    }
    this.weapons = [
      new Weapon('chainswords', new AssaultWeapon())
    ]
  }
}

export class LegionAssaultSupportSquad extends LegionAssaultSquad {
  constructor () {
    super(175, 4)

    this.cost = 175
    this.min = 4
    this.quantity = 4
  }
}

export class LegionAttackBike extends Unit {
  constructor () {
    super(175, 5)

    this.rules = []
    this.stats = {
      type: 'LV',
      speed: 35,
      armour: 4,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new Weapon('chainswords', new AssaultWeapon()),
      new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

export class LegionBasilisk extends Unit {
  constructor () {
    super(325, 4)

    this.rules = []
    this.stats = {
      type: 'AV',
      speed: 20,
      armour: 5,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('earthshaker-cannon', new RangedWeapon('120cm', new AntiPersonnel('4+'), new AntiTank('4+'), new BarragePoints(1), new IndirectFire())),
      new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

export class LegionBattleBarge extends SpacecraftUnit {
  constructor () {
    super(300, 1)

    this.transportTypes = {
      tactical: 60,
      breacher: 60,
      assault: 60,
      terminator: 60,
      rapier: 60,
      dreadnought: 60,
      bike: 60,
      rhino: 60,
      landRaider: 60,
      thunderhawk: 9,
      stormBird: 4,
      assaultRam: Infinity,
      assaultClaw: Infinity,
      dropPod: Infinity,
      dreadClaw: Infinity,
      stormEagle: Infinity
    }
    this.rules = [
      new Planetfall(),
      new SlowAndSteady()
    ]
    this.stats = {
      type: 'SC',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('orbital-bombardment', new RangedWeapon('-', new BarragePoints(14), new MacroWeapon()))
    ]
  }
}

export class LegionBike extends Unit {
  constructor () {
    super(175, 5)

    this.rules = [
      new Scout(),
      new Mounted()
    ]
    this.stats = {
      type: 'AV',
      speed: 35,
      armour: 4,
      cc: 3,
      ff: 4
    }
    this.weapons = [
      new Weapon('chainswords', new AssaultWeapon())
    ]
  }
}

export class LegionBreacherSquad extends Unit {
  constructor () {
    super(300, 8)

    this.transportType = 'breacher'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('las-cutters', new AssaultWeapon(new Lance()))
    ]
  }
}

export class LegionBreacherSupportSquad extends LegionBreacherSquad {
  constructor () {
    super()

    this.cost = 225
    this.min = 4
    this.quantity = 4
  }
}

export class LegionCaestus extends TransportUnit {
  constructor () {
    super(75)

    this.transportTypes = {
      breacher: 2,
      terminator: 2
    }
    this.rules = [
      new Planetfall(),
      new ReinforcedArmour(),
      new Skimmer()
    ]
    this.stats = {
      type: 'AV',
      speed: 35,
      armour: 5,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('firefury-missile', new RangedWeapon('30cm', new BarragePoints(1), new SingleShot())),
      new Weapon('magna-melta',
        new RangedWeapon('15cm', new MacroWeapon('3+')),
        new SmallArms('15cm', new MacroWeapon())
      )
    ]
  }
}

export class LegionCerberus extends Unit {
  constructor () {
    super(150, 1)

    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(2),
      new CriticalHit('legion-cerberus-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 25,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('neutron-laser-battery', new RangedWeapon('60cm', new MultipleShot('2x', new MacroWeapon('3+')), new Disrupt(), new Feedback(), new FixedForwardFireArc())),
      new Weapon('sponson-lascannons', new RangedWeapon('45cm', new AntiTank('5+')))
    ]
  }
}

export class LegionChampion extends Unit {
  constructor () {
    super(50, 1)

    this.rules = [
      new InvulnerableSave(),
      new Leader()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('charnabal-sabre', new AssaultWeapon(new MacroWeapon(), new Sniper(), new ExtraAttacks('+1')))
    ]
  }
}

export class LegionChaplain extends Unit {
  constructor () {
    super(50, 1)

    this.rules = [
      new InvulnerableSave(),
      new Leader(),
      new Inspiring()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('crozius-arcanum', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class LegionContemptorDreadnoughtTalonUnit extends MultipleChoiceUnit {
  constructor () {
    super(
      new LegionContemptorDreadnought(),
      new LegionDeredeoDreadnought()
    )

    this.transportType = 'dreadnought'
  }
}

export class LegionContemptorDreadnought extends Unit {
  constructor () {
    super(60, 1)

    this.transportType = 'dreadnought'
    this.rules = [
      new Walker(),
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'AV',
      speed: 15,
      armour: 3,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('close-combat-weapon', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))),
        new Weapon('twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+'))),
        new Weapon('plasma-cannon', new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('5+'))),
        new Weapon('heavy-conversion-beamer', new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('6+'), new Disrupt())),
        new Weapon('kheres-assault-cannon', new RangedWeapon('30cm', new AntiPersonnel('4+'), new AntiTank('5+'))),
        new Weapon('twin-linked-autocannon', new RangedWeapon('45cm', new AntiPersonnel('5+'), new AntiTank('6+'))),
        new Weapon('multi-melta', new RangedWeapon('15cm', new MacroWeapon('5+'))),
        new Weapon('twin-linked-lascannon', new RangedWeapon('45cm', new AntiTank('4+')))
      ),
      new MultipleChoiceWeapon(
        new Weapon('close-combat-weapon', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))),
        new Weapon('twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+'))),
        new Weapon('plasma-cannon', new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('5+'))),
        new Weapon('heavy-conversion-beamer', new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('6+'), new Disrupt())),
        new Weapon('kheres-assault-cannon', new RangedWeapon('30cm', new AntiPersonnel('4+'), new AntiTank('5+'))),
        new Weapon('twin-linked-autocannon', new RangedWeapon('45cm', new AntiPersonnel('5+'), new AntiTank('6+'))),
        new Weapon('multi-melta', new RangedWeapon('15cm', new MacroWeapon('5+'))),
        new Weapon('twin-linked-lascannon', new RangedWeapon('45cm', new AntiTank('4+')))
      ),
      new OptionalWeapons(
        new Weapon('havoc-launcher', new RangedWeapon('45cm', new AntiPersonnel('5+')))
      )
    ]
  }

  getCost () {
    const cost = super.getCost()

    // Havoc launcher adds 5 points to cost
    if (this.weaponOptions[2] === 1) {
      return cost + 5
    }

    return cost
  }
}

export class LegionDamoclesCommandRhino extends Unit {
  constructor (cost, min, max) {
    super(cost, min, max)

    this.transportTypes = {
      tactical: 2
    }
    this.rules = [
      new Commander()
    ]
    this.stats = {
      type: 'AV',
      speed: 15,
      armour: 6,
      cc: 6,
      ff: 6
    }
    this.weapons = [
      new Weapon('combi-bolter', new SmallArms('15cm'))
    ]
  }
}

export class LegionDeredeoDreadnought extends Unit {
  constructor () {
    super(100, 1)

    this.transportType = 'dreadnought'
    this.rules = [
      new Walker(),
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'AV',
      speed: 15,
      armour: 3,
      cc: 5,
      ff: 3
    }
    this.weapons = [
      new Weapon('twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+'))),
      new Weapon('aiolos-missile-launcher', new RangedWeapon('45cm', new AntiPersonnel('5+'), new AntiTank('6+'), new Disrupt())),
      new Weapon('helitical-targeting-array', new RangedWeapon('30cm', new MultipleShot('2x', new AntiAircraft('5+')))),
      new MultipleChoiceWeapon(
        new Weapon('anvilus-autocannon-battery', new RangedWeapon('45cm', new MultipleShot('2x', new AntiPersonnel('5+'), new AntiTank('2+')))),
        new Weapon('hellfire-plasma-cannon', new RangedWeapon('30cm', new MacroWeapon('4+')))
      )
    ]
  }
}

export class LegionDespoilerSquad extends Unit {
  constructor () {
    super(275, 8)

    this.transportType = 'tactical'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 3,
      ff: 5
    }
    this.weapons = [
      new Weapon('chainswords', new AssaultWeapon())
    ]
  }
}

export class LegionTacticalDetachmentUnit extends MultipleChoiceUnit {
  constructor () {
    super(
      new LegionTacticalSquad(),
      new LegionDespoilerSquad()
    )
  }
}

export class LegionDestroyerSquad extends Unit {
  constructor () {
    super(225, 4)

    this.transportType = 'assault'
    this.rules = [
      new JumpPacks()
    ]
    this.stats = {
      type: 'INF',
      speed: 30,
      armour: 4,
      cc: 3,
      ff: 4
    }
    this.weapons = [
      new Weapon('assault-launcher', new RangedWeapon('15cm', new AntiPersonnel('4+'), new Radiation()))
    ]
  }
}

export class LegionDreadclaw extends TransportUnit {
  constructor () {
    super(50)

    this.transportTypes = {
      tactical: 2,
      breacher: 2,
      assault: 2,
      terminator: 1,
      rapier: 1,
      dreadnought: 1
    }
    this.rules = [
      new Planetfall()
    ]
    this.stats = {
      type: 'Special',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [

    ]
  }

  getCost () {
    const plusTransport = this.detachment.rules.find(rule => rule instanceof PlusTransports)

    // detachments with the PlusTransports special rule can have rhinos or drop pods/dread claws for free
    if (plusTransport) {
      return 0
    }

    return this.cost
  }
}

export class LegionDreadnought extends Unit {
  constructor () {
    super(50, 1)

    this.transportType = 'dreadnought'
    this.rules = [
      new Walker()
    ]
    this.stats = {
      type: 'AV',
      speed: 15,
      armour: 3,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new WeaponSet(
          new Weapon('twin-linked-lascannon', new RangedWeapon('45cm', new AntiTank('4+'))),
          new Weapon('twin-linked-missile-launcher', new StatsModifier({
            cc: 1
          }), new RangedWeapon('45cm', new AntiPersonnel('4+'), new AntiTank('5+')))
        ),
        new WeaponSet(
          new Weapon('twin-linked-autocannon', new RangedWeapon('45cm', new AntiPersonnel('4+'), new AntiTank('5+'))),
          new Weapon('power-fist', new StatsModifier({
            ff: 1
          }), new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1')))
        )
      )
    ]
  }
}

export class LegionDropPod extends TransportUnit {
  constructor () {
    super(50)

    this.transportTypes = {
      tactical: 2,
      breacher: 2,
      assault: 2,
      terminator: 1,
      rapier: 1,
      dreadnought: 1
    }
    this.rules = [
      new Planetfall()
    ]
    this.stats = {
      type: 'Special',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('deathstorm-bombardment', new RangedWeapon('15cm', new AntiPersonnel('5+'), new AntiTank('5+')))
    ]
  }

  getCost () {
    const plusTransport = this.detachment.rules.find(rule => rule instanceof PlusTransports)

    // detachments with the PlusTransports special rule can have rhinos or drop pods/dread claws for free
    if (plusTransport) {
      return 0
    }

    return this.cost
  }
}

export class LegionFalchion extends Unit {
  constructor () {
    super(300, 1)

    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(4),
      new CriticalHit('legion-falchion-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 20,
      armour: 4,
      cc: 6,
      ff: 6
    }
    this.weapons = [
      new Weapon('twin-linked-volcano-cannon', new RangedWeapon('90cm', new MacroWeapon('3+'), new TitanKiller('D3+1'), new FixedForwardFireArc())),
      new Weapon('sponson-quad-lascannons', new RangedWeapon('45cm', new MultipleShot('2x', new AntiTank('4+'))))
    ]
  }
}

export class LegionFellblade extends Unit {
  constructor () {
    super(300, 1)

    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(4),
      new CriticalHit('legion-fellblade-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 20,
      armour: 4,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new Weapon('fellblade-cannon', new RangedWeapon('75cm', new MacroWeapon('2+'), new TitanKiller())),
      new Weapon('sponson-quad-lascannons', new RangedWeapon('45cm', new MultipleShot('2x', new AntiTank('4+')))),
      new Weapon('twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('3+'), new FixedForwardFireArc())),
      new Weapon('demolisher-cannon', new RangedWeapon('30cm', new AntiPersonnel('3+'), new AntiTank('4+'), new Disrupt(), new IgnoreCover(), new FixedForwardFireArc()))
    ]
  }
}

export class LegionFireRaptorGunship extends Unit {
  constructor () {
    super(300, 2)

    this.rules = [
      new ReinforcedArmour()
    ]
    this.stats = {
      type: 'AC',
      speed: 0,
      armour: 5,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('twin-linked-avenger-bolt-cannon', new RangedWeapon('30cm', new AntiPersonnel('2+'), new AntiTank('5+'), new FixedForwardFireArc())),
      new Weapon('hellstrike-missile-pod', new RangedWeapon('45cm', new MultipleShot('2x', new AntiTank('4+')), new ForwardFireArc())),
      new MultipleChoiceWeapon(
        new Weapon('sponson-quad-heavy-bolters', new RangedWeapon('15cm', new AntiPersonnel('4+'), new AntiAircraft('6+'), new LeftFireArc(), new RightFireArc())),
        new Weapon('sponson-reaper-autocannons', new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('6+'), new LeftFireArc(), new RightFireArc()))
      )
    ]
  }
}

export class LegionGlaive extends Unit {
  constructor () {
    super(300, 1)

    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new DamageCapacity(4),
      new CriticalHit('legion-glaive-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 20,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('volkite-carronade',
        new RangedWeapon('45cm', new MultipleShot('4x', new AntiPersonnel('3+'), new AntiTank('5+')), new Disrupt(), new IgnoreCover()),
        new SmallArms('15cm', new IgnoreCover())
      ),
      new Weapon('sponson-quad-lascannons', new RangedWeapon('45cm', new MultipleShot('2x', new AntiTank('4+')))),
      new Weapon('twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('3+'), new FixedForwardFireArc()))
    ]
  }
}

export class LegionHeavySupportSquad extends Unit {
  constructor () {
    super(50, 1, 4)

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
      new Weapon('heavy-weapons', new RangedWeapon('45cm', new MultipleShot('2x', new AntiPersonnel('5+'), new AntiTank('6+')))),
      new Weapon('flak-missiles', new RangedWeapon('30cm', new AntiAircraft('6+')))
    ]
  }
}

export class LegionJavelinAttackSpeeder extends Unit {
  constructor () {
    super(50, 1)

    this.rules = [
      new Scout(),
      new Skimmer()
    ]
    this.stats = {
      type: 'LV',
      speed: 35,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('twin-linked-lascannon', new RangedWeapon('45cm', new AntiTank('4+'))),
        new Weapon('twin-linked-cyclone-missile-launcher', new RangedWeapon('45cm', new AntiPersonnel('3+'), new AntiTank('5+')))
      ),
      new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

export class LegionKharybdis extends TransportUnit {
  constructor () {
    super(100)

    this.transportTypes = {
      tactical: 4,
      breacher: 4,
      assault: 4,
      terminator: 2,
      rapier: 1,
      dreadnought: 1
    }
    this.rules = [
      new Planetfall(),
      new ReinforcedArmour(),
      new Skimmer()
    ]
    this.stats = {
      type: 'AV',
      speed: 35,
      armour: 4,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new Weapon('storm-launcher', new RangedWeapon('30cm', new MultipleShot('3x', new AntiPersonnel('5+'), new AntiTank('5+')))),
      new Weapon('melta-ram', new AssaultWeapon(new MacroWeapon())),
      new Weapon('heat-blast', new SmallArms('15cm', new IgnoreCover()))
    ]
  }
}

export class LegionLandRaiderAchillesTransport extends Unit {
  constructor () {
    super(100, 1)

    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour()
    ]
    this.transportTypes = {
      tactical: 2,
      breacher: 2,
      terminator: 1
    }
    this.stats = {
      type: 'AV',
      speed: 25,
      armour: 3,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('achilles-quad-mortar', new RangedWeapon('45cm', new AntiPersonnel('4+'), new AntiTank('4+'))),
      new MultipleChoiceWeapon(
        new Weapon('sponson-twin-linked-multi-meltas',
          new RangedWeapon('15cm', new MacroWeapon('4+')),
          new SmallArms('15cm', new MacroWeapon())
        ),
        new Weapon('sponson-twin-linked-volkite-culverins', new RangedWeapon('45cm', new AntiPersonnel('4+'), new Disrupt()))
      )
    ]
  }
}

export class LegionLandRaiderAchilles extends Unit {
  constructor () {
    super(105, 1)

    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour()
    ]
    this.stats = {
      type: 'AV',
      speed: 25,
      armour: 3,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('achilles-quad-mortar', new RangedWeapon('45cm', new AntiPersonnel('4+'), new AntiTank('4+'))),
      new MultipleChoiceWeapon(
        new Weapon('sponson-twin-linked-multi-meltas',
          new RangedWeapon('15cm', new MacroWeapon('4+')),
          new SmallArms('15cm', new MacroWeapon())
        ),
        new Weapon('sponson-twin-linked-volkite-culverins', new RangedWeapon('45cm', new AntiPersonnel('4+'), new Disrupt()))
      )
    ]
  }
}

export class LegionLandRaiderPhobosSquadronUnit extends MultipleChoiceUnit {
  constructor () {
    super(
      new LegionLandRaiderPhobos(),
      new LegionLandRaiderAchilles()
    )

    this.transportType = 'landRaider'
  }
}

export class LegionLandRaiderPhobosTransport extends TransportUnit {
  constructor () {
    super(75)

    this.transportTypes = {
      tactical: 2,
      breacher: 2,
      terminator: 1
    }
    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour()
    ]
    this.stats = {
      type: 'AV',
      speed: 25,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('sponson-twin-linked-lascannons', new RangedWeapon('45cm', new MultipleShot('2x', new AntiTank('4+')))),
      new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }

  getQuantity () {
    return super.getQuantity() - this.detachment.units
      .filter(item => item.type === LegionLandRaiderAchillesTransport.type)
      .length
  }
}

export class LegionLandRaiderPhobos extends Unit {
  constructor () {
    super(80, 1)

    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour()
    ]
    this.stats = {
      type: 'AV',
      speed: 25,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('sponson-twin-linked-lascannons', new RangedWeapon('45cm', new MultipleShot('2x', new AntiTank('4+')))),
      new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

export class LegionLandRaiderProteusSquadronUnit extends MultipleChoiceUnit {
  constructor () {
    super(
      new LegionLandRaiderProteus(),
      new LegionLandRaiderAchilles()
    )

    this.transportType = 'landRaider'
  }
}

export class LegionLandRaiderProteusTransport extends TransportUnit {
  constructor () {
    super(75)

    this.achilles = []
    this.maxAchilles = 2
    this.transportTypes = {
      tactical: 2,
      breacher: 2,
      terminator: 1
    }
    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new ExploratoryAuguryWeb()
    ]
    this.stats = {
      type: 'AV',
      speed: 25,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('sponson-twin-linked-lascannons', new RangedWeapon('45cm', new MultipleShot('2x', new AntiTank('4+'))))
    ]
  }

  getQuantity () {
    return super.getQuantity() - this.detachment.units
      .filter(item => item.type === LegionLandRaiderAchillesTransport.type)
      .length
  }
}

export class LegionLandRaiderProteus extends Unit {
  constructor () {
    super(80, 1)

    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new ExploratoryAuguryWeb()
    ]
    this.stats = {
      type: 'AV',
      speed: 25,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('sponson-twin-linked-lascannons', new RangedWeapon('45cm', new MultipleShot('2x', new AntiTank('4+'))))
    ]
  }
}

export class LegionLandSpeeder extends Unit {
  constructor (cost, min, max) {
    super(40, 1)

    this.rules = [
      new Scout(),
      new Skimmer()
    ]
    this.stats = {
      type: 'LV',
      speed: 35,
      armour: 5,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('multi-melta',
          new RangedWeapon('15cm', new MacroWeapon('5+')),
          new SmallArms('15cm', new MacroWeapon())
        ),
        new WeaponSet(
          new Weapon('plasma-cannon', new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('5+'))),
          new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+')))
        )
      )
    ]
  }
}

export class LegionLeviathanDreadnought extends Unit {
  constructor () {
    super(100, 1)

    this.transportType = 'dreadnought'
    this.rules = [
      new Walker(),
      new ReinforcedArmour(),
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'AV',
      speed: 15,
      armour: 3,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('siege-claw', new AssaultWeapon(new MacroWeapon())),
        new Weapon('siege-drill', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+2'))),
        new Weapon('cyclonic-melta-lance', new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1'))),
        new Weapon('storm-cannon', new SmallArms('15cm', new AntiPersonnel('4+'), new AntiTank('5+'))),
        new Weapon('grav-flux-bombard', new RangedWeapon('15cm', new AntiPersonnel('3+'), new AntiTank('3+'), new Disrupt()))
      ),
      new MultipleChoiceWeapon(
        new Weapon('siege-claw', new AssaultWeapon(new MacroWeapon())),
        new Weapon('siege-drill', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+2'))),
        new Weapon('cyclonic-melta-lance', new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1'))),
        new Weapon('storm-cannon', new SmallArms('15cm', new AntiPersonnel('4+'), new AntiTank('5+'))),
        new Weapon('grav-flux-bombard', new RangedWeapon('15cm', new AntiPersonnel('3+'), new AntiTank('3+'), new Disrupt()))
      )
    ]
  }
}

export class LegionLeviathanSupportDreadnought extends LegionLeviathanDreadnought {
  constructor () {
    super()

    this.cost = 75
  }
}

export class LegionLibrarian extends Unit {
  constructor () {
    super(50, 1)

    this.rules = [
      new InvulnerableSave(),
      new Leader()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('force-weapon', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('smite', new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class LegionLieutenantCommander extends Unit {
  constructor () {
    super(50, 1)

    this.rules = [
      new InvulnerableSave(),
      new Commander()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('paragon-blade', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class LegionLordCommander extends Unit {
  constructor () {
    super(100, 1)

    this.rules = [
      new InvulnerableSave(),
      new SupremeCommander()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('paragon-blade', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class LegionMastodon extends TransportUnit {
  constructor () {
    super(200)

    this.transportTypes = {
      tactical: 8,
      breacher: 8,
      terminator: 4,
      dreadnought: 2
    }
    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(2),
      new ThickRearArmour(),
      new CriticalHit('legion-mastodon-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 20,
      armour: 4,
      cc: 5,
      ff: 4
    }
    this.weapons = [
      new Weapon('siege-melta-array', new SmallArms('15cm', new ExtraAttacks('+1'), new MacroWeapon())),
      new Weapon('sponson-lascannons', new RangedWeapon('45cm', new AntiTank('5+'), new LeftFireArc(), new RightFireArc())),
      new Weapon('sponson-heavy-flamers', new RangedWeapon('15cm', new AntiPersonnel('4+'), new LeftFireArc(), new RightFireArc())),
      new Weapon('skyreaper-battery', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('4+'), new AntiTank('4+'), new AntiAircraft('5+'))))
    ]
  }
}

export class LegionMedusa extends Unit {
  constructor () {
    super(250, 4)

    this.rules = []
    this.stats = {
      type: 'AV',
      speed: 20,
      armour: 5,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('medusa-siege-cannon',
        new RangedWeapon('30cm', new MacroWeapon('4+'), new IgnoreCover(), new IndirectFire()),
        new SmallArms('15cm', new MacroWeapon(), new IgnoreCover())
      ),
      new Weapon('heavy-bolter',
        new RangedWeapon('30cm', new AntiPersonnel('5+'))
      )
    ]
  }
}

export class LegionOutriderUnit extends MultipleChoiceUnit {
  constructor () {
    super(
      new LegionAttackBike(),
      new LegionBike()
    )
  }
}

export class LegionPredatorExecutioner extends Unit {
  constructor () {
    super(80, 1)

    this.rules = []
    this.stats = {
      type: 'AV',
      speed: 30,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('plasma-destroyer', new RangedWeapon('45cm', new MacroWeapon('4+'))),
        new Weapon('heavy-conversion-beamer', new RangedWeapon('75cm', new AntiTank('2+')))
      ),
      new Weapon('sponson-lascannons', new RangedWeapon('15cm', new AntiPersonnel('5+')))
    ]
  }
}

export class LegionPredatorInfernus extends Unit {
  constructor () {
    super(80, 1)

    this.rules = []
    this.stats = {
      type: 'AV',
      speed: 30,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('magma-melta', new RangedWeapon('15cm', new MacroWeapon('3+'))),
      new Weapon('sponson-heavy-bolters', new SmallArms('15cm', new AntiPersonnel('5+')))
    ]
  }
}

export class LegionPredatorStrikeSquadronUnit extends MultipleChoiceUnit {
  constructor () {
    super(
      new LegionPredator(),
      new LegionPredatorInfernus(),
      new LegionPredatorExecutioner(),
      new LegionWhirlwindScorpius()
    )
  }
}

export class LegionPredator extends Unit {
  constructor () {
    super(60, 1)

    this.rules = []
    this.stats = {
      type: 'AV',
      speed: 30,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('twin-linked-lascannon', new RangedWeapon('45cm', new AntiTank('4+'))),
        new Weapon('predator-cannon', new RangedWeapon('45cm', new AntiPersonnel('5+'), new AntiTank('5+'))),
        new Weapon('flamestorm-cannon', new RangedWeapon('30cm', new AntiPersonnel('3+'), new IgnoreCover()))
      ),
      new MultipleChoiceWeapon(
        new Weapon('sponson-heavy-bolters', new StatsModifier({
          ff: -2
        }), new SmallArms('15cm', new AntiPersonnel('5+'))),
        new Weapon('sponson-lascannons', new RangedWeapon('15cm', new AntiPersonnel('5+'))),
        new Weapon('sponson-heavy-flamers', new StatsModifier({
          ff: -2
        }), new SmallArms('15cm', new AntiPersonnel('4+'), new IgnoreCover('5+')))
      )
    ]
  }
}

export class LegionRapier extends Unit {
  constructor () {
    super(50, 1)

    this.transportType = 'rapier'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 10,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('laser-destroyer', new RangedWeapon('45cm', new AntiPersonnel('6+'), new AntiTank('4+'))),
        new Weapon('quad-mortar', new RangedWeapon('45cm', new AntiPersonnel('5+'), new AntiTank('6+'), new IndirectFire(), new Disrupt())),
        new Weapon('quad-heavy-bolters', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('4+')))),
        new Weapon('graviton-cannon', new RangedWeapon('45cm', new AntiPersonnel('5+'), new AntiTank('5+'), new Disrupt()))
      )
    ]
  }
}

export class LegionRapierSupport extends LegionRapier {
  constructor () {
    super()

    this.cost = 40
  }
}

export class LegionReconnaissanceSquad extends Unit {
  constructor () {
    super(150, 4)

    this.transportType = 'tactical'
    this.rules = [
      new Scout(),
      new Infiltrator(),
      new PlusTransports()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 5
    }
    this.weapons = [
      new Weapon('sniper-rifles', new SmallArms('30cm', new AntiPersonnel('5+'), new Sniper()))
    ]
  }
}

export class LegionRhino extends TransportUnit {
  constructor () {
    super(0)

    this.transportTypes = {
      tactical: 2
    }
    this.rules = []
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
}

export class LegionScimitarJetbike extends Unit {
  constructor () {
    super(175, 5)

    this.rules = [
      new Skimmer()
    ]
    this.stats = {
      type: 'LV',
      speed: 35,
      armour: 5,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new Weapon('plasma-cannon', new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('5+')))
    ]
  }
}

export class LegionSicaranBattleTankSquadronUnit extends MultipleChoiceUnit {
  constructor () {
    super(
      new LegionSicaran(),
      new LegionSicaranVenator(),
      new LegionSicaranOmega()
    )

    this.types[0].cost = 75
  }
}

export class LegionSicaranOmega extends Unit {
  constructor () {
    super(75, 1)

    this.rules = [
      new ReinforcedArmour()
    ]
    this.stats = {
      type: 'AV',
      speed: 35,
      armour: 5,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('omega-plasma-array', new RangedWeapon('30cm', new MultipleShot('x2', new AntiTank('3+')))),
      new Weapon('sponson-lascannons', new RangedWeapon('45cm', new AntiTank('5+')))
    ]
  }
}

export class LegionSicaranVenator extends Unit {
  constructor () {
    super(75, 1)

    this.rules = [
      new ReinforcedArmour()
    ]
    this.stats = {
      type: 'AV',
      speed: 35,
      armour: 5,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('neutron-beam', new RangedWeapon('30cm', new MacroWeapon('4+'), new Disrupt(), new FixedForwardFireArc())),
      new Weapon('sponson-lascannons', new RangedWeapon('45cm', new AntiTank('5+')))
    ]
  }
}

export class LegionSicaran extends Unit {
  constructor () {
    super(80, 1)

    this.rules = [
      new ReinforcedArmour()
    ]
    this.stats = {
      type: 'AV',
      speed: 35,
      armour: 5,
      cc: 6,
      ff: 3
    }
    this.weapons = [
      new Weapon('accelerator-cannon', new RangedWeapon('45cm', new MultipleShot('2x', new AntiPersonnel('4'), new AntiTank('5')))),
      new Weapon('3-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

export class LegionSpacecraftUnit extends MultipleChoiceUnit {
  constructor () {
    super(
      new LegionStrikeCruiser(),
      new LegionBattleBarge()
    )
  }
}

export class LegionSpartan extends TransportUnit {
  constructor () {
    super(125)

    this.transportTypes = {
      tactical: 4,
      breacher: 4,
      terminator: 2
    }
    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(2),
      new ThickRearArmour(),
      new CriticalHit('legion-spartan-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 25,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('sponson-quad-lascannons', new RangedWeapon('45cm', new MultipleShot('2x', new AntiTank('4+')))),
      new Weapon('twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+')))
    ]
  }
}

export class LegionStormEagleAttackShip extends Unit {
  constructor () {
    super(125, 1, 3)

    this.transportTypes = {
      tactical: 4,
      breacher: 4,
      assault: 4,
      terminator: 2
    }
    this.rules = [
      new DamageCapacity(1),
      new Planetfall(),
      new ReinforcedArmour()
    ]
    this.stats = {
      type: 'AC/WE',
      speed: 0,
      armour: 5,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('hellstrike-missile-pod', new RangedWeapon('45cm', new MultipleShot('2x', new AntiTank('4+')))),
      new Weapon('vengeance-launcher', new RangedWeapon('45cm', new BarragePoints(1), new FixedForwardFireArc())),
      new Weapon('twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+'), new AntiAircraft('5+')))
    ]
  }
}

export class LegionStormbird extends Unit {
  constructor () {
    super(450, 1)

    this.transportTypes = {
      tactical: 16,
      breacher: 16,
      assault: 16,
      terminator: 8,
      dreadnought: 8
    }
    this.rules = [
      new DamageCapacity(4),
      new Planetfall(),
      new ReinforcedArmour(),
      new CriticalHit('legion-stormbird-critical-hit')
    ]
    this.stats = {
      type: 'AC/WE',
      speed: 0,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('dreadstrike-missile-array', new RangedWeapon('45cm', new MultipleShot('6x', new AntiTank('4+')), new SingleShot())),
      new Weapon('4-twin-linked-lascannons', new RangedWeapon('30cm', new AntiTank('4+'), new AntiAircraft('4+'))),
      new Weapon('3-twin-linked-heavy-bolters', new RangedWeapon('15cm', new AntiPersonnel('4+'), new FixedForwardFireArc()))
    ]
  }
}

export class LegionStrikeCruiser extends SpacecraftUnit {
  constructor () {
    super(200, 1)

    this.transportTypes = {
      tactical: 20,
      breacher: 20,
      assault: 20,
      terminator: 20,
      rapier: 20,
      dreadnought: 20,
      bike: 20,
      rhino: 20,
      landRaider: 20,
      thunderhawk: 6,
      stormBird: 2,
      assaultRam: Infinity,
      assaultClaw: Infinity,
      dropPod: Infinity,
      dreadClaw: Infinity,
      stormEagle: Infinity
    }
    this.rules = [
      new Planetfall()
    ]
    this.stats = {
      type: 'SC',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('orbital-bombardment', new RangedWeapon('-', new BarragePoints(5), new MacroWeapon()))
    ]
  }
}

export class LegionSuperHeavyTankBatteryUnit extends MultipleChoiceUnit {
  constructor () {
    super(
      new LegionTyphon(),
      new LegionCerberus()
    )

    this.types[0].cost = 400
    this.types[0].min = 3
    this.types[0].quantity = 3

    this.types[1].cost = 400
    this.types[1].min = 3
    this.types[1].quantity = 3
  }
}

export class LegionSuperHeavyTankUnit extends MultipleChoiceUnit {
  constructor () {
    super(
      new LegionFellblade(),
      new LegionGlaive()
    )
  }
}

export class LegionTacticalSquad extends Unit {
  constructor () {
    super(275, 8)

    this.transportType = 'tactical'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 5
    }
    this.weapons = [
      new Weapon('bolters', new SmallArms('15cm'))
    ]
  }
}

export class LegionTacticalSupportSquad extends Unit {
  constructor () {
    super(50, 1, 4)

    this.transportType = 'tactical'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 5
    }
    this.weapons = [
      new Weapon('special-weapons',
        new RangedWeapon('15cm', new MultipleShot('2x', new AntiPersonnel('4+')), new IgnoreCover()),
        new SmallArms('15cm', new IgnoreCover(), new ExtraAttacks('+1'))
      )
    ]
  }
}

export class LegionTeleport extends TransportUnit {
  constructor () {
    super(50)

    this.transportTypes = {
      terminator: Infinity
    }
    this.rules = []
    this.stats = {}
    this.weapons = []
  }

  getCost () {
    return this.cost
  }

  getQuantity () {
    return NaN
  }
}

export class LegionTerminatorSquad extends Unit {
  constructor () {
    super(75, 4, 6)

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
      new Weapon('power-fists', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('reaper-autocannon', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('4+'), new AntiTank('6+'))))
    ]
  }
}

export class LegionThunderhawkGunship extends Unit {
  constructor () {
    super(250, 1)

    this.transportTypes = {
      tactical: 4,
      breacher: 4,
      assault: 4,
      terminator: 2
    }
    this.rules = [
      new DamageCapacity(2),
      new Planetfall(),
      new ReinforcedArmour(),
      new CriticalHit('legion-thunderhawk-gunship-critical-hit')
    ]
    this.stats = {
      type: 'AC/WE',
      speed: 0,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('thunderhawk-cannon', new RangedWeapon('60cm', new AntiPersonnel('3+'), new AntiTank('3+'))),
        new Weapon('thunderhawk-laser-destroyer', new RangedWeapon('45cm', new MultipleShot('2x', new AntiPersonnel('6+'), new AntiTank('3+')), new FixedForwardFireArc()))
      ),
      new Weapon('2-twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+'), new FixedForwardFireArc())),
      new Weapon('twin-linked-heavy-bolters', new RangedWeapon('15cm', new AntiPersonnel('4+'), new LeftFireArc())),
      new Weapon('twin-linked-heavy-bolters', new RangedWeapon('15cm', new AntiPersonnel('4+'), new RightFireArc()))
    ]
  }
}

export class LegionThunderhawkTransporter extends Unit {
  constructor () {
    super(250, 1, 3)

    this.transportTypes = {
      rhino: 2,
      medusa: 2,
      basilisk: 2,
      sicaran: 2,
      predator: 2,
      vindicator: 2,
      landRaider: 1
    }
    this.rules = [
      new DamageCapacity(2),
      new Planetfall(),
      new ReinforcedArmour(),
      new CriticalHit('legion-thunderhawk-transporter-critical-hit')
    ]
    this.stats = {
      type: 'AC/WE',
      speed: 0,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('2-twin-linked-heavy-bolters', new RangedWeapon('15cm', new AntiPersonnel('4+'), new AntiAircraft('5+')))
    ]
  }
}

export class LegionTyphon extends Unit {
  constructor () {
    super(150, 1)

    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(2),
      new CriticalHit('legion-typhon-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 25,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('dreadhammer-siege-cannon',
        new RangedWeapon('45cm', new BarragePoints('3'), new IndirectFire(), new IgnoreCover(), new FixedForwardFireArc()),
        new SmallArms('15cm', new IgnoreCover())
      ),
      new Weapon('sponson-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

export class LegionVindicatorLaserDestroyer extends Unit {
  constructor () {
    super(70, 1)

    this.rules = []
    this.stats = {
      type: 'AV',
      speed: 25,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('laser-destroyer-array', new RangedWeapon('60cm', new AntiPersonnel('6+'), new AntiTank('3+')))
    ]
  }
}

export class LegionVindicatorSquadronUnit extends MultipleChoiceUnit {
  constructor () {
    super(
      new LegionVindicator(),
      new LegionVindicatorLaserDestroyer()
    )
  }
}

export class LegionVindicator extends Unit {
  constructor () {
    super(50, 1)

    this.rules = []
    this.stats = {
      type: 'AV',
      speed: 25,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('demolisher-cannon',
        new RangedWeapon('30cm', new AntiPersonnel('3+'), new AntiTank('4+'), new IgnoreCover()),
        new SmallArms('15cm', new IgnoreCover())
      )
    ]
  }
}

export class LegionVindicatorSquadronVindicator extends LegionVindicator {
  constructor () {
    super()

    this.min = 2
    this.max = 4
  }
}

export class LegionWhirlwindHyperios extends Unit {
  constructor () {
    super(75, 1)

    this.rules = []
    this.stats = {
      type: 'AV',
      speed: 30,
      armour: 5,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('hyperios-launcher', new RangedWeapon('60cm', new AntiTank('4+'), new AntiAircraft('4+')))
    ]
  }
}

export class LegionWhirlwindScorpius extends Unit {
  constructor () {
    super(80, 1)

    this.rules = []
    this.stats = {
      type: 'AV',
      speed: 30,
      armour: 5,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('scorpius-multi-launcher', new RangedWeapon('45cm', new MultipleShot('2x', new AntiPersonnel('5+'), new AntiTank('5+')), new IndirectFire()))
    ]
  }
}

export class LegionWhirlwind extends Unit {
  constructor () {
    super(300, 4)

    this.rules = []
    this.stats = {
      type: 'AV',
      speed: 30,
      armour: 5,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('vengence-castellan-missiles', new RangedWeapon('45cm', new BarragePoints(1), new IgnoreCover(), new IndirectFire()))
    ]
  }
}

export class LegionXiphonInterceptor extends Unit {
  constructor () {
    super(250, 2)

    this.rules = []
    this.stats = {
      type: 'AC',
      speed: 0,
      armour: 5,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('2-twin-linked-lascannons', new RangedWeapon('30cm', new AntiTank('4+'), new AntiAircraft('5+'), new FixedForwardFireArc())),
      new Weapon('rotary-missile-launcher', new RangedWeapon('45cm', new AntiTank('5+'), new AntiAircraft('5+'), new FixedForwardFireArc()))
    ]
  }
}

withType(LegionArtilleryUnit)
withType(LegionAssaultSquad)
withType(LegionAssaultSupportSquad)
withType(LegionAttackBike)
withType(LegionBasilisk)
withType(LegionBattleBarge)
withType(LegionBike)
withType(LegionBreacherSquad)
withType(LegionBreacherSupportSquad)
withType(LegionCaestus)
withType(LegionCerberus)
withType(LegionChampion)
withType(LegionChaplain)
withType(LegionContemptorDreadnoughtTalonUnit)
withType(LegionContemptorDreadnought)
withType(LegionDamoclesCommandRhino)
withType(LegionDeredeoDreadnought)
withType(LegionDespoilerSquad)
withType(LegionDestroyerSquad)
withType(LegionDreadclaw)
withType(LegionDreadnought)
withType(LegionDropPod)
withType(LegionFalchion)
withType(LegionFellblade)
withType(LegionFireRaptorGunship)
withType(LegionGlaive)
withType(LegionHeavySupportSquad)
withType(LegionJavelinAttackSpeeder)
withType(LegionKharybdis)
withType(LegionLandRaiderAchillesTransport)
withType(LegionLandRaiderAchilles)
withType(LegionLandRaiderPhobosSquadronUnit)
withType(LegionLandRaiderPhobosTransport)
withType(LegionLandRaiderPhobos)
withType(LegionLandRaiderProteusSquadronUnit)
withType(LegionLandRaiderProteusTransport)
withType(LegionLandRaiderProteus)
withType(LegionLandSpeeder)
withType(LegionLeviathanDreadnought)
withType(LegionLeviathanSupportDreadnought)
withType(LegionLibrarian)
withType(LegionLieutenantCommander)
withType(LegionLordCommander)
withType(LegionMastodon)
withType(LegionMedusa)
withType(LegionOutriderUnit)
withType(LegionPredatorExecutioner)
withType(LegionPredatorInfernus)
withType(LegionPredatorStrikeSquadronUnit)
withType(LegionPredator)
withType(LegionRapierSupport)
withType(LegionRapier)
withType(LegionReconnaissanceSquad)
withType(LegionRhino)
withType(LegionScimitarJetbike)
withType(LegionSicaranBattleTankSquadronUnit)
withType(LegionSicaranOmega)
withType(LegionSicaranVenator)
withType(LegionSicaran)
withType(LegionSpacecraftUnit)
withType(LegionSpartan)
withType(LegionStormEagleAttackShip)
withType(LegionStormbird)
withType(LegionStrikeCruiser)
withType(LegionSuperHeavyTankBatteryUnit)
withType(LegionSuperHeavyTankUnit)
withType(LegionTacticalSquad)
withType(LegionTacticalSupportSquad)
withType(LegionTeleport)
withType(LegionTerminatorSquad)
withType(LegionThunderhawkGunship)
withType(LegionThunderhawkTransporter)
withType(LegionTyphon)
withType(LegionVindicatorLaserDestroyer)
withType(LegionVindicatorSquadronUnit)
withType(LegionVindicatorSquadronVindicator)
withType(LegionVindicator)
withType(LegionWhirlwindHyperios)
withType(LegionWhirlwindScorpius)
withType(LegionWhirlwind)
withType(LegionXiphonInterceptor)
withType(LegionTacticalDetachmentUnit)
