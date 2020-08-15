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
  Teleport,
  VoidShields
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
  RangedWeapon,
  AssaultWeapon,
  SmallArms,
  Disrupt,
  Sniper,
  IgnoreCover,
  IndirectFire,
  BarragePoints,
  FixedForwardFireArc,
  SingleShot,
  Feedback,
  ForwardFireArc,
  LeftFireArc,
  RightFireArc,
  PointsModifier,
  Fleshbane,
  Armourbane,
  Siege,
  Lance
} from '../weapons'
import MultipleChoiceUnit from './multiple-choice-unit'
import Unit, { TransportUnit } from './unit'
import ModifierUnit from './modifier-unit'
import SpacecraftUnit from './spacecraft-unit'
import withType from '../with-type'

export class LegionUnit extends Unit {
  getRules () {
    const rules = super.getRules()
    const teleport = this.detachment.units.find(item => item instanceof LegionTeleport)

    if (teleport && (this.stats.type === 'INF' || this.stats.type === 'CH')) {
      return rules.concat(new Teleport())
    }

    return rules
  }
}

export class LegionCharacterUnit extends LegionUnit {
  constructor (detachment, cost) {
    super(detachment, cost, 1)
  }
}

export class LegionPrimarchUnit extends LegionCharacterUnit {
  constructor (detachment, cost) {
    super(detachment, cost, 1)
  }
}

export class LegionArtilleryUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new LegionMedusa(detachment),
      new LegionWhirlwind(detachment),
      new LegionBasilisk(detachment)
    )
  }
}

export class LegionAssaultSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 300, 8)

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
  constructor (detachment) {
    super(detachment, 175, 4)

    this.cost = 175
    this.min = 4
    this.quantity = 4
  }
}

export class LegionAttackBike extends LegionUnit {
  constructor (detachment) {
    super(detachment, 175, 5)

    this.rules = []
    this.stats = {
      type: 'LV',
      speed: 35,
      armour: 4,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

export class LegionBasilisk extends LegionUnit {
  constructor (detachment) {
    super(detachment, 325, 4)

    this.rules = []
    this.stats = {
      type: 'AV',
      speed: 35,
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
  constructor (detachment) {
    super(detachment, 300, 1)

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
      stormEagle: Infinity
    }
    this.rules = [
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

export class LegionBike extends LegionUnit {
  constructor (detachment) {
    super(detachment, 175, 5)

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

export class LegionBreacherSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 300, 8)

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
      new Weapon('melta-cutters', new AssaultWeapon(new Armourbane()))
    ]
  }
}

export class LegionBreacherSupportSquad extends LegionBreacherSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 225
    this.min = 4
    this.quantity = 4
  }
}

export class LegionCaestus extends TransportUnit {
  constructor (detachment) {
    super(detachment, 50)

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
        new RangedWeapon('15cm', new AntiPersonnel('3+'), new AntiTank('3+'), new MacroWeapon()),
        new SmallArms('15cm', new MacroWeapon())
      )
    ]
  }
}

export class LegionCerberus extends LegionUnit {
  constructor (detachment) {
    super(detachment, 150, 1)

    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(2)
    ]
    this.stats = {
      type: 'WE',
      speed: 25,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('neutron-laser-battery', new RangedWeapon('60cm', new MultipleShot('2x', new AntiTank('3+')), new Armourbane(), new Disrupt(), new Feedback(), new FixedForwardFireArc())),
      new Weapon('sponson-lascannons', new RangedWeapon('45cm', new AntiTank('5+')))
    ]
  }
}

export class LegionChampion extends LegionCharacterUnit {
  constructor (detachment) {
    super(detachment, 50, 1)

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
      new Weapon('charnabal-sabre', new AssaultWeapon(new Fleshbane(), new Sniper(), new ExtraAttacks('+1')))
    ]
  }
}

export class LegionChaplain extends LegionCharacterUnit {
  constructor (detachment) {
    super(detachment, 50, 1)

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
      new Weapon('crozius-arcanum', new AssaultWeapon(new Fleshbane(), new ExtraAttacks('+1')))
    ]
  }
}

export class LegionContemptorDreadnoughtTalonUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new LegionContemptorDreadnought(detachment),
      new LegionDeredeoDreadnought(detachment)
    )

    this.transportType = 'dreadnought'
  }
}

export class LegionContemptorDreadnought extends LegionUnit {
  constructor (detachment) {
    super(detachment, 60, 1)

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
        new Weapon('plasma-cannon', new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('5+'), new Fleshbane())),
        new Weapon('heavy-conversion-beamer', new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('6+'), new Disrupt())),
        new Weapon('kheres-assault-cannon', new RangedWeapon('30cm', new AntiPersonnel('4+'), new AntiTank('5+'))),
        new Weapon('twin-linked-autocannon', new RangedWeapon('45cm', new AntiPersonnel('5+'), new AntiTank('6+'))),
        new Weapon('multi-melta', new RangedWeapon('15cm', new AntiPersonnel('5+'), new AntiTank('5+'), new MacroWeapon())),
        new Weapon('twin-linked-lascannon', new RangedWeapon('45cm', new AntiTank('4+')))
      ),
      new MultipleChoiceWeapon(
        new Weapon('close-combat-weapon', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))),
        new Weapon('twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+'))),
        new Weapon('plasma-cannon', new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('5+'), new Fleshbane())),
        new Weapon('heavy-conversion-beamer', new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('6+'), new Disrupt())),
        new Weapon('kheres-assault-cannon', new RangedWeapon('30cm', new AntiPersonnel('4+'), new AntiTank('5+'))),
        new Weapon('twin-linked-autocannon', new RangedWeapon('45cm', new AntiPersonnel('5+'), new AntiTank('6+'))),
        new Weapon('multi-melta', new RangedWeapon('15cm', new AntiPersonnel('5+'), new AntiTank('5+'), new MacroWeapon())),
        new Weapon('twin-linked-lascannon', new RangedWeapon('45cm', new AntiTank('4+')))
      ),
      new OptionalWeapons(
        new Weapon('havoc-launcher', new PointsModifier(5), new RangedWeapon('45cm', new AntiPersonnel('5+')))
      )
    ]
  }
}

export class LegionDamoclesCommandRhino extends LegionUnit {
  constructor (detachment, cost, min, max) {
    super(detachment, cost, min, max)

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

export class LegionDeredeoDreadnought extends LegionUnit {
  constructor (detachment) {
    super(detachment, 100, 1)

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
        new Weapon('hellfire-plasma-cannon', new RangedWeapon('30cm', new AntiPersonnel('4+'), new AntiTank('4+'), new Fleshbane()))
      )
    ]
  }
}

export class LegionDespoilerSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 275, 8)

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
      new Weapon('chainswords-and-bolt-pistols', new AssaultWeapon())
    ]
  }
}

export class LegionTacticalDetachmentUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new LegionTacticalSquad(detachment),
      new LegionDespoilerSquad(detachment)
    )
  }
}

export class LegionDestroyerSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 225, 4)

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
      new Weapon('assault-launcher', new RangedWeapon('15cm', new AntiPersonnel('4+'), new Fleshbane()))
    ]
  }
}

export class LegionDreadnought extends LegionUnit {
  constructor (detachment) {
    super(detachment, 50, 1)

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
  constructor (detachment) {
    super(detachment, 0)

    this.transportTypes = {
      tactical: 2,
      breacher: 2,
      assault: 2,
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
}

export class LegionFalchion extends LegionUnit {
  constructor (detachment) {
    super(detachment, 300, 1)

    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(4)
    ]
    this.stats = {
      type: 'WE',
      speed: 20,
      armour: 4,
      cc: 6,
      ff: 6
    }
    this.weapons = [
      new Weapon('twin-linked-volcano-cannon', new RangedWeapon('90cm', new AntiPersonnel('2+'), new AntiTank('2+'), new MacroWeapon(), new TitanKiller('D3+1'), new FixedForwardFireArc())),
      new Weapon('sponson-quad-lascannons', new RangedWeapon('45cm', new MultipleShot('2x', new AntiTank('4+'))))
    ]
  }
}

export class LegionFellblade extends LegionUnit {
  constructor (detachment) {
    super(detachment, 250, 1)

    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(4)
    ]
    this.stats = {
      type: 'WE',
      speed: 20,
      armour: 4,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new Weapon('fellblade-cannon', new RangedWeapon('75cm', new AntiPersonnel('2+'), new AntiTank('2+'), new MacroWeapon(), new TitanKiller())),
      new Weapon('sponson-quad-lascannons', new RangedWeapon('45cm', new MultipleShot('2x', new AntiTank('4+')), new Armourbane())),
      new Weapon('twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('3+'), new FixedForwardFireArc())),
      new Weapon('demolisher-cannon', new RangedWeapon('30cm', new AntiPersonnel('3+'), new AntiTank('4+'), new Disrupt(), new IgnoreCover(), new FixedForwardFireArc()))
    ]
  }
}

export class LegionGunship extends LegionUnit {
  constructor (detachment) {
    super(detachment, 300, 2)

    this.rules = [
      new ReinforcedArmour()
    ]
    this.stats = {
      type: 'AC',
      speed: 'fighter-bomber',
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

export class LegionGlaive extends LegionUnit {
  constructor (detachment) {
    super(detachment, 250, 1)

    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new DamageCapacity(4)
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

export class LegionHeavySupportSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 50, 1, 4)

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

export class LegionJavelinAttackSpeeder extends LegionUnit {
  constructor (detachment) {
    super(detachment, 50, 1)

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
  constructor (detachment) {
    super(detachment, 75)

    this.transportTypes = {
      tactical: 4,
      breacher: 4,
      assault: 4,
      terminator: 2,
      rapier: 4,
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
      new Weapon('storm-launcher', new RangedWeapon('30cm', new MultipleShot('3x', new AntiPersonnel('5+'), new AntiTank('5+')), new SingleShot())),
      new Weapon('melta-ram', new AssaultWeapon(new MacroWeapon())),
      new Weapon('heat-blast', new SmallArms('15cm', new IgnoreCover()))
    ]
  }
}

export class LegionLandRaiderAchillesTransport extends LegionUnit {
  constructor (detachment) {
    super(detachment, 100, 1)

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
          new RangedWeapon('15cm', new AntiPersonnel('4+'), new AntiTank('4+'), new MacroWeapon()),
          new SmallArms('15cm', new MacroWeapon())
        ),
        new Weapon('sponson-twin-linked-volkite-culverins', new RangedWeapon('45cm', new AntiPersonnel('4+'), new Disrupt()))
      )
    ]
  }
}

export class LegionLandRaiderAchilles extends LegionUnit {
  constructor (detachment) {
    super(detachment, 105, 1)

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
  constructor (detachment) {
    super(detachment,
      new LegionLandRaiderPhobos(detachment),
      new LegionLandRaiderAchilles(detachment)
    )

    this.transportType = 'landRaider'
  }
}

export class LegionLandRaiderPhobosTransport extends TransportUnit {
  constructor (detachment) {
    super(detachment, 75)

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
      new Weapon('sponson-twin-linked-lascannons', new RangedWeapon('45cm', new AntiTank('4+'))),
      new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }

  getQuantity () {
    return super.getQuantity() - this.detachment.units
      .filter(item => item.type === LegionLandRaiderAchillesTransport.type)
      .length
  }
}

export class LegionLandRaiderPhobos extends LegionUnit {
  constructor (detachment) {
    super(detachment, 80, 1)

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
      new Weapon('sponson-twin-linked-lascannons', new RangedWeapon('45cm', new AntiTank('4+'))),
      new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

export class LegionLandRaiderProteusSquadronUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new LegionLandRaiderProteus(detachment),
      new LegionLandRaiderAchilles(detachment)
    )

    this.transportType = 'landRaider'
  }
}

export class LegionLandRaiderProteusTransport extends TransportUnit {
  constructor (detachment) {
    super(detachment, 75)

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
      new Weapon('sponson-twin-linked-lascannons', new RangedWeapon('45cm', new AntiTank('4+')))
    ]
  }

  getQuantity () {
    return super.getQuantity() - this.detachment.units
      .filter(item => item.type === LegionLandRaiderAchillesTransport.type)
      .length
  }
}

export class LegionLandRaiderProteus extends LegionUnit {
  constructor (detachment) {
    super(detachment, 80, 1)

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
      new Weapon('sponson-twin-linked-lascannons', new RangedWeapon('45cm', new AntiTank('4+')))
    ]
  }
}

export class LegionLandSpeeder extends LegionUnit {
  constructor (detachment) {
    super(detachment, 40, 1)

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
          new RangedWeapon('15cm', new AntiPersonnel('5+'), new AntiTank('5+'), new MacroWeapon()),
          new SmallArms('15cm', new MacroWeapon())
        ),
        new WeaponSet(
          new Weapon('plasma-cannon', new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('5+'), new Fleshbane())),
          new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+')))
        )
      )
    ]
  }
}

export class LegionLeviathanDreadnought extends LegionUnit {
  constructor (detachment) {
    super(detachment, 100, 1)

    this.transportType = 'dreadnought'
    this.rules = [
      new Walker(),
      new ReinforcedArmour(),
      new InvulnerableSave('6+')
    ]
    this.stats = {
      type: 'AV',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('siege-claw', new AssaultWeapon(new Armourbane(), new Siege())),
        new Weapon('siege-drill', new AssaultWeapon(new Armourbane(), new Siege(), new ExtraAttacks('+2'))),
        new Weapon('cyclonic-melta-lance',
          new RangedWeapon('15cm', new AntiPersonnel('5+'), new AntiTank('3+'), new MacroWeapon('5+')),
          new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1'))
        ),
        new Weapon('storm-cannon', new SmallArms('15cm', new AntiPersonnel('4+'), new AntiTank('5+'))),
        new Weapon('grav-flux-bombard', new RangedWeapon('15cm', new AntiPersonnel('3+'), new AntiTank('3+'), new Disrupt()))
      ),
      new MultipleChoiceWeapon(
        new Weapon('siege-claw', new AssaultWeapon(new Armourbane(), new Siege())),
        new Weapon('siege-drill', new AssaultWeapon(new Armourbane(), new Siege(), new ExtraAttacks('+2'))),
        new Weapon('cyclonic-melta-lance',
          new RangedWeapon('15cm', new AntiPersonnel('5+'), new AntiTank('3+'), new MacroWeapon('5+')),
          new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1'))
        ),
        new Weapon('storm-cannon', new SmallArms('15cm', new AntiPersonnel('4+'), new AntiTank('5+'))),
        new Weapon('grav-flux-bombard', new RangedWeapon('15cm', new AntiPersonnel('3+'), new AntiTank('3+'), new Disrupt()))
      )
    ]
  }
}

export class LegionLeviathanSupportDreadnought extends LegionLeviathanDreadnought {
  constructor (detachment) {
    super(detachment)

    this.cost = 75
  }
}

export class LegionLibrarian extends LegionCharacterUnit {
  constructor (detachment) {
    super(detachment, 50, 1)

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

export class LegionLieutenantCommander extends LegionCharacterUnit {
  constructor (detachment) {
    super(detachment, 50, 1)

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
      new Weapon('paragon-blade', new AssaultWeapon(new Fleshbane(), new ExtraAttacks('+1')))
    ]
  }
}

export class LegionLordCommander extends LegionCharacterUnit {
  constructor (detachment) {
    super(detachment, 100, 1)

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
      new Weapon('paragon-blade', new AssaultWeapon(new Fleshbane(), new ExtraAttacks('+1')))
    ]
  }
}

export class LegionMastodon extends TransportUnit {
  constructor (detachment) {
    super(detachment, 200)

    this.transportTypes = {
      tactical: 8,
      breacher: 8,
      terminator: 4,
      dreadnought: 2
    }
    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new DamageCapacity(4),
      new VoidShields(2)
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
      new Weapon('sponson-heavy-flamers', new RangedWeapon('15cm', new AntiPersonnel('4+'), new LeftFireArc(), new RightFireArc(), new IgnoreCover())),
      new Weapon('skyreaper-battery', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('4+'), new AntiTank('4+'), new AntiAircraft('5+'))))
    ]
  }
}

export class LegionMedusa extends LegionUnit {
  constructor (detachment) {
    super(detachment, 250, 4)

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
        new RangedWeapon('30cm', new MacroWeapon(), new AntiPersonnel('4+'), new AntiTank('4+'), new IndirectFire()),
        new SmallArms('15cm', new MacroWeapon())
      ),
      new Weapon('heavy-bolter',
        new RangedWeapon('30cm', new AntiPersonnel('5+'))
      )
    ]
  }
}

export class LegionOutriderUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new LegionAttackBike(detachment),
      new LegionBike(detachment)
    )
  }
}

export class LegionPredatorExecutioner extends LegionUnit {
  constructor (detachment) {
    super(detachment, 80, 1)

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
        new Weapon('plasma-destroyer', new RangedWeapon('45cm', new AntiPersonnel('4+'), new AntiTank('4+'), new Fleshbane())),
        new Weapon('heavy-conversion-beamer', new RangedWeapon('75cm', new AntiTank('2+')))
      ),
      new Weapon('sponson-lascannons', new RangedWeapon('45cm', new AntiTank('5+')))
    ]
  }
}

export class LegionPredatorInfernus extends LegionUnit {
  constructor (detachment) {
    super(detachment, 80, 1)

    this.rules = []
    this.stats = {
      type: 'AV',
      speed: 30,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('magma-melta', new RangedWeapon('15cm', new AntiPersonnel('3+'), new AntiTank('3+'), new MacroWeapon())),
      new Weapon('sponson-heavy-bolters', new SmallArms('15cm', new AntiPersonnel('5+')))
    ]
  }
}

export class LegionPredatorStrikeSquadronUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new LegionPredator(detachment),
      new LegionPredatorInfernus(detachment),
      new LegionPredatorExecutioner(detachment),
      new LegionWhirlwindScorpius(detachment)
    )
  }
}

export class LegionPredator extends LegionUnit {
  constructor (detachment) {
    super(detachment, 60, 1)

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
        new Weapon('sponson-lascannons', new RangedWeapon('45cm', new AntiTank('5+'))),
        new Weapon('sponson-heavy-flamers', new StatsModifier({
          ff: -2
        }), new SmallArms('15cm', new AntiPersonnel('4+'), new IgnoreCover('5+')))
      )
    ]
  }
}

export class LegionRapier extends LegionUnit {
  constructor (detachment) {
    super(detachment, 50, 1)

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
  constructor (detachment) {
    super(detachment)

    this.cost = 40
  }
}

export class LegionReconnaissanceSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 150, 4)

    this.transportType = 'tactical'
    this.rules = [
      new Scout(),
      new Infiltrator()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 5
    }
    this.weapons = [
      new Weapon('sniper-rifles', new RangedWeapon('30cm', new AntiPersonnel('5+'), new Sniper(), new Fleshbane()))
    ]
  }
}

export class LegionRhino extends TransportUnit {
  constructor (detachment) {
    super(detachment, 0)

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

export class LegionScimitarJetbike extends LegionUnit {
  constructor (detachment) {
    super(detachment, 175, 5)

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
      new Weapon('plasma-cannon', new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('5+'), new Fleshbane()))
    ]
  }
}

export class LegionSicaranBattleTankSquadronUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new LegionSicaran(detachment),
      new LegionSicaranVenator(detachment),
      new LegionSicaranOmega(detachment)
    )

    this.types[0].cost = 75
  }
}

export class LegionSicaranOmega extends LegionUnit {
  constructor (detachment) {
    super(detachment, 75, 1)

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
      new Weapon('omega-plasma-array', new RangedWeapon('30cm', new MultipleShot('x2', new AntiTank('3+'), new Armourbane(), new Lance()))),
      new Weapon('sponson-lascannons', new RangedWeapon('45cm', new AntiTank('5+')))
    ]
  }
}

export class LegionSicaranVenator extends LegionUnit {
  constructor (detachment) {
    super(detachment, 75, 1)

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
      new Weapon('neutron-beam', new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('4+'), new Armourbane(), new Disrupt(), new FixedForwardFireArc())),
      new Weapon('sponson-lascannons', new RangedWeapon('45cm', new AntiTank('5+')))
    ]
  }
}

export class LegionSicaran extends LegionUnit {
  constructor (detachment) {
    super(detachment, 80, 1)

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
  constructor (detachment) {
    super(detachment,
      new LegionStrikeCruiser(detachment),
      new LegionBattleBarge(detachment)
    )
  }
}

export class LegionSpartan extends TransportUnit {
  constructor (detachment) {
    super(detachment, 125)

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

export class LegionStormEagleAttackShip extends LegionUnit {
  constructor (detachment) {
    super(detachment, 125, 1, 3)

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
      speed: 'fighter-bomber',
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

export class LegionStormbird extends LegionUnit {
  constructor (detachment) {
    super(detachment, 450, 1)

    this.transportTypes = {
      tactical: 10,
      breacher: 10,
      assault: 10,
      terminator: 5,
      dreadnought: 5,
      outrider: 10
    }
    this.rules = [
      new DamageCapacity(4),
      new Planetfall(),
      new ReinforcedArmour()
    ]
    this.stats = {
      type: 'AC/WE',
      speed: 'bomber',
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('dreadstrike-missile-array', new RangedWeapon('45cm', new MultipleShot('4x', new AntiTank('4+')))),
      new Weapon('4-twin-linked-lascannons', new RangedWeapon('30cm', new AntiTank('4+'), new AntiAircraft('4+'))),
      new Weapon('3-twin-linked-heavy-bolters', new RangedWeapon('15cm', new AntiPersonnel('4+'), new FixedForwardFireArc()))
    ]
  }
}

export class LegionStrikeCruiser extends SpacecraftUnit {
  constructor (detachment) {
    super(detachment, 200, 1)

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
      stormEagle: Infinity
    }
    this.rules = []
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
  constructor (detachment) {
    super(detachment,
      new LegionTyphon(detachment),
      new LegionCerberus(detachment)
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
  constructor (detachment) {
    super(detachment,
      new LegionFellblade(detachment),
      new LegionGlaive(detachment)
    )
  }
}

export class LegionTacticalSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 275, 8)

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
      new Weapon('bolters', new SmallArms('15cm'))
    ]
  }
}

export class LegionTacticalSupportSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 50, 1, 4)

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
      new Weapon('special-weapons',
        new RangedWeapon('15cm', new MultipleShot('2x', new AntiPersonnel('4+')), new IgnoreCover()),
        new SmallArms('15cm', new IgnoreCover(), new ExtraAttacks('+1'))
      )
    ]
  }
}

export class LegionTeleport extends ModifierUnit {
  constructor (detachment) {
    super(detachment, 50)
  }
}

export class LegionTerminatorSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 75, 4, 6)

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

export class LegionThunderhawkGunship extends LegionUnit {
  constructor (detachment) {
    super(detachment, 250, 1)

    this.transportTypes = {
      tactical: 8,
      breacher: 8,
      assault: 8,
      terminator: 4,
      outrider: 5
    }
    this.rules = [
      new DamageCapacity(2),
      new Planetfall(),
      new ReinforcedArmour()
    ]
    this.stats = {
      type: 'AC/WE',
      speed: 'bomber',
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('thunderhawk-cannon', new RangedWeapon('60cm', new AntiPersonnel('3+'), new AntiTank('3+'))),
        new Weapon('thunderhawk-laser-destroyer', new RangedWeapon('45cm', new MultipleShot('2x', new AntiPersonnel('6+'), new AntiTank('3+')), new Armourbane(), new FixedForwardFireArc()))
      ),
      new Weapon('twin-linked-lascannon', new RangedWeapon('45cm', new AntiTank('4+'), new AntiAircraft('5+'), new FixedForwardFireArc())),
      new Weapon('2-twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+'), new FixedForwardFireArc())),
      new Weapon('twin-linked-heavy-bolters', new RangedWeapon('15cm', new AntiPersonnel('4+'), new LeftFireArc())),
      new Weapon('twin-linked-heavy-bolters', new RangedWeapon('15cm', new AntiPersonnel('4+'), new RightFireArc()))
    ]
  }
}

export class LegionThunderhawkTransporter extends LegionUnit {
  constructor (detachment) {
    super(detachment, 100, 1, 3)

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
      new ReinforcedArmour()
    ]
    this.stats = {
      type: 'AC/WE',
      speed: 'bomber',
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('2-twin-linked-heavy-bolters', new RangedWeapon('15cm', new AntiPersonnel('4+'), new AntiAircraft('5+')))
    ]
  }
}

export class LegionTyphon extends LegionUnit {
  constructor (detachment) {
    super(detachment, 150, 1)

    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(2)
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

export class LegionVindicatorLaserDestroyer extends LegionUnit {
  constructor (detachment) {
    super(detachment, 70, 1)

    this.rules = [
      new Walker()
    ]
    this.stats = {
      type: 'AV',
      speed: 25,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('laser-destroyer-array', new RangedWeapon('60cm', new AntiPersonnel('6+'), new AntiTank('3+'), new Armourbane()))
    ]
  }
}

export class LegionVindicatorSquadronUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new LegionVindicator(detachment),
      new LegionVindicatorLaserDestroyer(detachment)
    )
  }
}

export class LegionVindicator extends LegionUnit {
  constructor (detachment) {
    super(detachment, 50, 1)

    this.rules = [
      new Walker()
    ]
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
  constructor (detachment) {
    super(detachment)

    this.quantity = 2
    this.min = 2
    this.max = 4
  }
}

export class LegionWhirlwindHyperios extends LegionUnit {
  constructor (detachment) {
    super(detachment, 75, 1)

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

export class LegionWhirlwindScorpius extends LegionUnit {
  constructor (detachment) {
    super(detachment, 80, 1)

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

export class LegionWhirlwind extends LegionUnit {
  constructor (detachment) {
    super(detachment, 300, 4)

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

export class LegionXiphonInterceptor extends LegionUnit {
  constructor (detachment) {
    super(detachment, 250, 2)

    this.rules = []
    this.stats = {
      type: 'AC',
      speed: 'fighter',
      armour: 5,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('2-twin-linked-lascannons', new RangedWeapon('30cm', new AntiTank('4+'), new AntiAircraft('5+'), new FixedForwardFireArc())),
      new Weapon('rotary-missile-launcher', new RangedWeapon('45cm', new AntiTank('5+'), new FixedForwardFireArc()))
    ]
  }
}

export class LegionArquitorBombard extends LegionUnit {
  constructor (detachment) {
    super(detachment, 250, 2)

    this.rules = [
      new ReinforcedArmour()
    ]
    this.stats = {
      type: 'AV',
      speed: 35,
      armour: 6,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('spicular-rocket-system', new RangedWeapon('30cm', new MultipleShot('D3', new AntiPersonnel('5+'), new AntiTank('5+')))),
      new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

export class LegionSabreStrikeTank extends LegionUnit {
  constructor (detachment) {
    super(detachment, 275, 4)

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
      new Weapon('volkite-saker', new RangedWeapon('15cm', new MultipleShot('2x', new AntiPersonnel('3+'), new Fleshbane(), new FixedForwardFireArc()))),
      new Weapon('sabre-missiles', new RangedWeapon('30cm', new AntiTank('4+'), new FixedForwardFireArc()))
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
withType(LegionDreadnought)
withType(LegionDropPod)
withType(LegionFalchion)
withType(LegionFellblade)
withType(LegionGunship)
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
withType(LegionArquitorBombard)
withType(LegionSabreStrikeTank)
