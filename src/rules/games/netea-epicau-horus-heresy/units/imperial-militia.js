import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  FirstStrike,
  Sniper,
  RangedWeapon,
  MultipleShot,
  AntiPersonnel,
  AntiTank,
  MultipleChoiceWeapon,
  TitanKiller,
  IgnoreCover,
  StatsModifier,
  AntiAircraft,
  BarragePoints,
  ForwardFireArc,
  IndirectFire,
  SingleShot,
  Or,
  FixedForwardFireArc,
  RearFireArc,
  Disrupt
} from '../weapons'
import {
  ReinforcedArmour,
  ThickRearArmour,
  InvulnerableSave,
  Scout,
  Skimmer,
  Commander,
  Mounted,
  Walker,
  Infiltrator,
  DamageCapacity,
  CriticalHit,
  SupremeCommander,
  Planetfall,
  ExploratoryAuguryWeb,
  SlowAndSteady,
  PinPointAttack,
  Beserk,
  Inspiring,
  Leader,
  Fearless
} from '../special-rules'
import MultipleChoiceUnit from './multiple-choice-unit'
import TransportUnit from './transport-unit'
import Unit from './unit'
import ModifierUnit from './modifier-unit'
import SpacecraftUnit from './spacecraft-unit'
import withType from '../with-type'

export class ImperialMilitiaProvenance extends ModifierUnit {

}

export class ImperialMilitiaWarriorEliteProvenance extends ImperialMilitiaProvenance {

}

export class ImperialMilitiaSurvivorsOfTheDarkAgeProvenance extends ImperialMilitiaProvenance {

}

export class ImperialMilitiaFeralWarriorsProvenance extends ImperialMilitiaProvenance {

}

export class ImperialMilitiaTraitorsProvenance extends ImperialMilitiaProvenance {

}

export class ImperialMilitiaUnit extends Unit {
  getStats () {
    let stats = super.getStats()

    this.detachment.units.forEach(unit => {
      if (unit instanceof ImperialMilitiaWarriorEliteProvenance) {
        stats = {
          ...stats,
          ff: stats.ff - 1
        }
      }

      if (unit instanceof ImperialMilitiaSurvivorsOfTheDarkAgeProvenance) {
        stats = {
          ...stats,
          armour: stats.armour - 1
        }
      }

      if (unit instanceof ImperialMilitiaFeralWarriorsProvenance) {
        stats = {
          ...stats,
          cc: stats.cc - 1
        }
      }
    })

    return stats
  }

  getRules () {
    let rules = super.getRules()

    this.detachment.units.forEach(unit => {
      if (unit instanceof ImperialMilitiaTraitorsProvenance) {
        rules = rules.concat(new Beserk())
      }
    })

    return rules
  }
}

export class ImperialMilitiaForceCommander extends ImperialMilitiaUnit {
  constructor (detachment) {
    super(detachment, 225, 1)

    this.transportType = 'infantry'
    this.rules = [
      new SupremeCommander(),
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 5,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new Weapon('archaeotech-pistol', new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('plasma-guns', new SmallArms('15cm', new MultipleShot('2x', new AntiPersonnel('5+'), new AntiTank('5+'))))
    ]
  }
}

export class ImperialMilitiaPlatoonCommander extends ImperialMilitiaUnit {
  constructor (detachment) {
    super(detachment, 125, 1)

    this.transportType = 'infantry'
    this.rules = [
      new Commander()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 6,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new Weapon('heavy-stubbers', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('5+'), new AntiAircraft('6+'))))
    ]
  }
}

export class ImperialMilitiaAuxiliaries extends ImperialMilitiaUnit {
  constructor (detachment) {
    super(detachment, 0, 7)

    this.transportType = 'infantry'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 6,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('auxilia-rifles', new StatsModifier({
          cc: 1
        }), new SmallArms('15cm')),
        new Weapon('auxilia-pistols-and-combat-weapons', new StatsModifier({
          ff: 1
        }), new SmallArms('15cm'))
      )
    ]
  }
}

export class ImperialMilitiaFireSupport extends ImperialMilitiaUnit {
  constructor (detachment) {
    super(detachment, 100, 4)

    this.transportType = 'infantry'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 6,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('heavy-stubbers', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('5+'), new AntiAircraft('6+'))))
    ]
  }
}

export class ImperialMilitiaSupportAuxiliaries extends ImperialMilitiaUnit {
  constructor (detachment) {
    super(detachment, 50, 4)

    this.transportType = 'infantry'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 6,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('auxilia-rifles', new StatsModifier({
          cc: 1
        }), new SmallArms('15cm')),
        new Weapon('auxilia-pistols-and-combat-weapons', new StatsModifier({
          ff: 1
        }), new SmallArms('15cm'))
      )
    ]
  }
}

export class ImperialMilitiaReconAuxiliaries extends ImperialMilitiaUnit {
  constructor (detachment) {
    super(detachment, 75, 4)

    this.transportType = 'infantry'
    this.rules = [
      new Scout()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 7,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('sniper-rifles', new RangedWeapon('30cm', new AntiPersonnel('5+'), new Sniper()))
    ]
  }
}

export class ImperialMilitiaOgrynBruteSquad extends ImperialMilitiaUnit {
  constructor (detachment) {
    super(detachment, 150, 4)

    this.transportType = 'ogryn'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 5,
      ff: 4
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('power-weapons', new StatsModifier({
          cc: -1,
          ff: 3
        }), new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))),
        new Weapon('ripper-guns', new SmallArms('15cm', new ExtraAttacks('+1'))),
        new Weapon('chaos-spawn-mutations', new StatsModifier({
          armour: -1,
          cc: -1,
          ff: 3
        }), new AssaultWeapon(new ExtraAttacks('+D3')))
      )
    ]
  }
}

export class ImperialMilitiaLevyAuxiliaries extends ImperialMilitiaUnit {
  constructor (detachment) {
    super(detachment, 100, 10)

    this.transportType = 'infantry'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 7,
      cc: 6,
      ff: 6
    }
    this.weapons = [
      new Weapon('auxilia-weapons', new SmallArms('15cm'))
    ]
  }
}

export class ImperialMilitiaMotorcycleCommander extends ImperialMilitiaUnit {
  constructor (detachment) {
    super(detachment, 175, 1)

    this.rules = [
      new Commander(),
      new Mounted()
    ]
    this.stats = {
      type: 'INF',
      speed: 30,
      armour: 5,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new Weapon('auxilia-pistol-and-combat-weapon', new SmallArms('15cm'))
    ]
  }
}

export class ImperialMilitiaMotorcycle extends ImperialMilitiaUnit {
  constructor (detachment) {
    super(detachment, 0, 7)

    this.rules = [
      new Mounted()
    ]
    this.stats = {
      type: 'INF',
      speed: 30,
      armour: 5,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new Weapon('auxilia-pistols-and-combat-weapons', new SmallArms('15cm'))
    ]
  }
}

export class ImperialMilitiaGrenedier extends ImperialMilitiaUnit {
  constructor (detachment) {
    super(detachment, 175, 8)

    this.transportType = 'infantry'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 5,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new Weapon('lascarbines', new SmallArms('15cm')),
      new Weapon('plasma-guns', new RangedWeapon('15cm', new AntiPersonnel('5+'), new AntiTank('5+')))
    ]
  }
}

export class ImperialMilitiaGorgon extends TransportUnit {
  constructor (detachment) {
    super(detachment, 125)

    this.transportTypes = {
      infantry: 8,
      ogryn: 4
    }
    this.rules = [
      new DamageCapacity(3),
      new ReinforcedArmour(),
      new CriticalHit('imperial-militia-gorgon-critical-hit')
    ]
    this.stats = {
      type: 'AV',
      speed: 20,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('2-twin-linked-autocannon', new RangedWeapon('45cm', new AntiPersonnel('4+'), new AntiTank('5+'))),
      new MultipleChoiceWeapon(
        new Weapon('gorgon-mortars', new RangedWeapon('30cm', new BarragePoints(2), new ForwardFireArc(), new IndirectFire(), new SingleShot())),
        new Weapon('2-twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+')))
      )
    ]
  }
}

export class ImperialMilitiaArvusLighter extends TransportUnit {
  constructor (detachment) {
    super(detachment, 25)

    this.transportTypes = {
      infantry: 2,
      ogryn: 1
    }
    this.rules = [
      new Skimmer(),
      new Planetfall()
    ]
    this.stats = {
      type: 'AV',
      speed: 30,
      armour: 5,
      cc: 7,
      ff: 6
    }
    this.weapons = [
      new Weapon('multi-laser', new SmallArms('15cm'))
    ]
  }
}

export class ImperialMilitiaRhino extends TransportUnit {
  constructor (detachment) {
    super(detachment, 12.5)

    this.transportTypes = {
      infantry: 2,
      ogryn: 1
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

export class ImperialMilitiaLandRaiderProteus extends TransportUnit {
  constructor (detachment) {
    super(detachment, 50)

    this.transportTypes = {
      infantry: 2,
      ogryn: 1
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
}

class ImperialMilitiaEmperorClassBattleship extends SpacecraftUnit {
  constructor (detachment) {
    super(detachment, 300, 1)

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
      new Weapon('orbital-bombardment', new RangedWeapon('-', new BarragePoints(8), new MacroWeapon()))
    ]
  }
}

class ImperialMilitiaDauntlessClassLightCruiser extends SpacecraftUnit {
  constructor (detachment) {
    super(detachment, 150, 1)

    this.rules = [
      new PinPointAttack()
    ]
    this.stats = {
      type: 'SC',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('orbital-bombardment', new RangedWeapon('-', new BarragePoints(3), new MacroWeapon())),
      new Weapon('pin-point-attack', new RangedWeapon('-', new MacroWeapon('2+'), new TitanKiller('D3')))
    ]
  }
}

export class ImperialMilitiaOrbitalSupportUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new ImperialMilitiaEmperorClassBattleship(detachment),
      new ImperialMilitiaDauntlessClassLightCruiser(detachment)
    )
  }
}

export class ImperialMilitiaCavalryAuxiliary extends Unit {
  constructor (detachment) {
    super(detachment, 175, 6)

    this.transportType = 'infantry'
    this.rules = [
      new Infiltrator(),
      new Mounted(),
      new Scout()
    ]
    this.stats = {
      type: 'INF',
      speed: 20,
      armour: 6,
      cc: 4,
      ff: 6
    }
    this.weapons = [
      new Weapon('power-lances', new AssaultWeapon(new FirstStrike(), new ExtraAttacks('+1')))
    ]
  }
}

class ImperialMilitiaBasiliskArtilleryCarriage extends Unit {
  constructor (detachment) {
    super(detachment, 200, 3)

    this.rules = []
    this.stats = {
      type: 'LV',
      speed: 0,
      armour: 5,
      cc: 6,
      ff: 6
    }
    this.weapons = [
      new Weapon('earthshaker-cannon', new RangedWeapon('120cm', new AntiPersonnel('4+'), new AntiTank('4+'), new Or(), new BarragePoints(1), new IndirectFire())),
      new Weapon('crew-lascarbines', new SmallArms('15cm'))
    ]
  }
}

class ImperialMilitiaMedusaArtilleryCarriage extends Unit {
  constructor (detachment) {
    super(detachment, 200, 3)

    this.rules = []
    this.stats = {
      type: 'LV',
      speed: 0,
      armour: 5,
      cc: 6,
      ff: 6
    }
    this.weapons = [
      new Weapon('medusa-siege-gun', new RangedWeapon('30cm', new MacroWeapon('4+'), new IgnoreCover())),
      new Weapon('crew-lascarbines', new SmallArms('15cm'))
    ]
  }
}

export class ImperialMilitiaHeavyOrdnanceBatteryUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new ImperialMilitiaBasiliskArtilleryCarriage(detachment),
      new ImperialMilitiaMedusaArtilleryCarriage(detachment)
    )
  }
}

class ImperialMilitiaMalcador extends Unit {
  constructor (detachment) {
    super(detachment, 50, 1)

    this.rules = [
      new ReinforcedArmour()
    ]
    this.stats = {
      type: 'AV',
      speed: 15,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('battle-cannon', new RangedWeapon('75cm', new AntiPersonnel('4+'), new AntiTank('4+'))),
      new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+'))),
      new Weapon('sponson-lascannons', new RangedWeapon('45cm', new AntiTank('5+')))
    ]
  }
}

class ImperialMilitiaMalcadorAnnihalator extends Unit {
  constructor (detachment) {
    super(detachment, 50, 1)

    this.rules = [
      new ReinforcedArmour()
    ]
    this.stats = {
      type: 'AV',
      speed: 15,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('twin-linked-lascannon', new RangedWeapon('45cm', new AntiTank('4+'))),
      new Weapon('demolisher-cannon',
        new RangedWeapon('30cm', new AntiPersonnel('3+'), new AntiTank('4+'), new IgnoreCover(), new Disrupt()),
        new SmallArms('15cm', new IgnoreCover())
      ),
      new Weapon('sponson-lascannons', new RangedWeapon('45cm', new AntiTank('5+')))
    ]
  }
}

export class ImperialMilitiaMalcadorUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new ImperialMilitiaMalcador(detachment),
      new ImperialMilitiaMalcadorAnnihalator(detachment)
    )
  }
}

export class ImperialMilitiaRapier extends Unit {
  constructor (detachment) {
    super(detachment, 100, 4)

    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 10,
      armour: 6,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('laser-destroyer', new RangedWeapon('45cm', new AntiPersonnel('6+'), new AntiTank('4+'))),
        new Weapon('quad-mortar', new RangedWeapon('45cm', new AntiPersonnel('5+'), new AntiTank('6+'), new IndirectFire(), new Disrupt())),
        new Weapon('quad-heavy-bolters', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('4+'))))
      )
    ]
  }
}

export class ImperialMilitiaSentinel extends Unit {
  constructor (detachment) {
    super(detachment, 100, 4)

    this.rules = [
      new Scout(),
      new Walker()
    ]
    this.stats = {
      type: 'LV',
      speed: 20,
      armour: 6,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('multi-laser',
        new AssaultWeapon(new AntiPersonnel('5+')),
        new SmallArms('15cm')
      )
    ]
  }
}

class ImperialMilitiaBaneblade extends Unit {
  constructor (detachment) {
    super(detachment, 300, 1)

    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(3),
      new CriticalHit('imperial-militia-baneblade-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 15,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('baneblade-cannon', new RangedWeapon('75cm', new AntiPersonnel('3+'), new AntiTank('3+'))),
      new Weapon('3-twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+'))),
      new Weapon('autocannon', new RangedWeapon('45cm', new AntiPersonnel('5+'), new AntiTank('6+'))),
      new Weapon('sponson-lascannons', new RangedWeapon('45cm', new AntiTank('5+'))),
      new Weapon('demolisher-cannon',
        new RangedWeapon('30cm', new AntiPersonnel('3+'), new AntiTank('4+'), new IgnoreCover(), new Disrupt(), new FixedForwardFireArc()),
        new SmallArms('15cm', new IgnoreCover())
      )
    ]
  }
}

class ImperialMilitiaStormhammer extends Unit {
  constructor (detachment) {
    super(detachment, 300, 1)

    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(3),
      new CriticalHit('imperial-militia-stormhammer-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 15,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('stormhammer-cannon', new RangedWeapon('60cm', new AntiPersonnel('3+'), new AntiTank('3+'))),
      new Weapon('6-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('5+'))),
      new Weapon('lascannon', new RangedWeapon('45cm', new AntiTank('5+'))),
      new Weapon('2-battlecannon', new RangedWeapon('75cm', new AntiPersonnel('3+'), new AntiTank('4+'), new FixedForwardFireArc()))
    ]
  }
}

export class ImperialMilitiaSuperHeavyTankUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new ImperialMilitiaBaneblade(detachment),
      new ImperialMilitiaStormhammer(detachment)
    )
  }
}

class ImperialMilitiaBanebladePlatoon extends ImperialMilitiaBaneblade {
  constructor (detachment) {
    super(detachment)

    this.cost = 500
    this.min = 3
    this.quantity = 3
  }
}

class ImperialMilitiaStormhammerPlatoon extends ImperialMilitiaStormhammer {
  constructor (detachment) {
    super(detachment)

    this.cost = 500
    this.min = 3
    this.quantity = 3
  }
}

export class ImperialMilitiaSuperHeavyTankPlatoonUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new ImperialMilitiaBanebladePlatoon(detachment),
      new ImperialMilitiaStormhammerPlatoon(detachment)
    )
  }
}

class ImperialMilitiaLemanRuss extends Unit {
  constructor (detachment) {
    super(detachment, 50, 1)

    this.rules = [
      new ReinforcedArmour()
    ]
    this.stats = {
      type: 'AV',
      speed: 25,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('battle-cannon', new RangedWeapon('75cm', new AntiPersonnel('4+'), new AntiTank('4+'))),
      new Weapon('lascannon', new RangedWeapon('45cm', new AntiTank('5+'))),
      new Weapon('sponson-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

class ImperialMilitiaLemanRussDemolisher extends Unit {
  constructor (detachment) {
    super(detachment, 50, 1)

    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour()
    ]
    this.stats = {
      type: 'AV',
      speed: 25,
      armour: 4,
      cc: 6,
      ff: 3
    }
    this.weapons = [
      new Weapon('demolisher-cannon',
        new RangedWeapon('30cm', new AntiPersonnel('3+'), new AntiTank('4+'), new IgnoreCover(), new Disrupt(), new FixedForwardFireArc()),
        new SmallArms('15cm', new IgnoreCover())
      ),
      new Weapon('lascannon', new RangedWeapon('45cm', new AntiTank('5+'))),
      new Weapon('sponson-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

class ImperialMilitiaLemanRussExterminator extends Unit {
  constructor (detachment) {
    super(detachment, 50, 1)

    this.rules = [
      new ReinforcedArmour()
    ]
    this.stats = {
      type: 'AV',
      speed: 25,
      armour: 4,
      cc: 6,
      ff: 3
    }
    this.weapons = [
      new Weapon('twin-linked-autocannon', new RangedWeapon('45cm', new AntiPersonnel('4+'), new AntiTank('5+'))),
      new Weapon('lascannon', new RangedWeapon('45cm', new AntiTank('5+'))),
      new Weapon('sponson-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

class ImperialMilitiaLemanRussVanquisher extends Unit {
  constructor (detachment) {
    super(detachment, 75, 1)

    this.rules = [
      new ReinforcedArmour()
    ]
    this.stats = {
      type: 'AV',
      speed: 25,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('vanquisher-cannon', new RangedWeapon('75cm', new AntiPersonnel('4+'), new AntiTank('2+'))),
      new Weapon('lascannon', new RangedWeapon('45cm', new AntiTank('5+'))),
      new Weapon('sponson-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

export class ImperialMilitiaBattleTankUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new ImperialMilitiaLemanRuss(detachment),
      new ImperialMilitiaLemanRussDemolisher(detachment),
      new ImperialMilitiaLemanRussExterminator(detachment)
    )
  }
}

export class ImperialMilitiaBattleTankUnitWithVanquisher extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new ImperialMilitiaLemanRuss(detachment),
      new ImperialMilitiaLemanRussDemolisher(detachment),
      new ImperialMilitiaLemanRussExterminator(detachment),
      new ImperialMilitiaLemanRussVanquisher(detachment)
    )
  }
}

export class ImperialMilitiaAvengerStrikeFighter extends Unit {
  constructor (detachment) {
    super(detachment, 250, 2)

    this.rules = []
    this.stats = {
      type: 'AC',
      speed: 0,
      armour: 5,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('avenger-cannon', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('4+'), new AntiTank('2+')), new FixedForwardFireArc())),
      new Weapon('sponson-lascannons', new RangedWeapon('30cm', new AntiTank('5+'), new AntiAircraft('5+'), new FixedForwardFireArc())),
      new Weapon('heavy-stubber', new RangedWeapon('30cm', new AntiAircraft('6+'), new RearFireArc()))
    ]
  }
}

export class ImperialMilitiaPrimarisStrikeFighter extends Unit {
  constructor (detachment) {
    super(detachment, 225, 2)

    this.rules = []
    this.stats = {
      type: 'AC',
      speed: 0,
      armour: 6,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('kraken-heavy-missiles', new RangedWeapon('30cm', new AntiTank('4+'), new SingleShot(), new FixedForwardFireArc())),
      new Weapon('sponson-lascannons', new RangedWeapon('30cm', new AntiTank('5+'), new AntiAircraft('5+'), new FixedForwardFireArc())),
      new Weapon('sponson-autocannons', new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('6+'), new AntiAircraft('5+'), new FixedForwardFireArc()))
    ]
  }
}

export class ImperialMilitiaDisciplineMaster extends Unit {
  constructor (detachment) {
    super(detachment, 0, 1)

    this.rules = [
      new Inspiring(),
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
      new Weapon('power-weapon', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class ImperialMilitiaRoguePsyker extends Unit {
  constructor (detachment) {
    super(detachment, 0, 1)

    this.rules = [
      new Inspiring(),
      new Fearless()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('psychic-bolt', new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

withType(ImperialMilitiaForceCommander)
withType(ImperialMilitiaPlatoonCommander)
withType(ImperialMilitiaAuxiliaries)
withType(ImperialMilitiaFireSupport)
withType(ImperialMilitiaSupportAuxiliaries)
withType(ImperialMilitiaReconAuxiliaries)
withType(ImperialMilitiaOgrynBruteSquad)
withType(ImperialMilitiaLevyAuxiliaries)
withType(ImperialMilitiaMotorcycleCommander)
withType(ImperialMilitiaMotorcycle)
withType(ImperialMilitiaGrenedier)
withType(ImperialMilitiaGorgon)
withType(ImperialMilitiaArvusLighter)
withType(ImperialMilitiaRhino)
withType(ImperialMilitiaLandRaiderProteus)
withType(ImperialMilitiaEmperorClassBattleship)
withType(ImperialMilitiaDauntlessClassLightCruiser)
withType(ImperialMilitiaOrbitalSupportUnit)
withType(ImperialMilitiaCavalryAuxiliary)
withType(ImperialMilitiaBasiliskArtilleryCarriage)
withType(ImperialMilitiaMedusaArtilleryCarriage)
withType(ImperialMilitiaHeavyOrdnanceBatteryUnit)
withType(ImperialMilitiaMalcador)
withType(ImperialMilitiaMalcadorAnnihalator)
withType(ImperialMilitiaMalcadorUnit)
withType(ImperialMilitiaRapier)
withType(ImperialMilitiaSentinel)
withType(ImperialMilitiaSuperHeavyTankUnit)
withType(ImperialMilitiaBaneblade)
withType(ImperialMilitiaStormhammer)
withType(ImperialMilitiaSuperHeavyTankPlatoonUnit)
withType(ImperialMilitiaBanebladePlatoon)
withType(ImperialMilitiaStormhammerPlatoon)
withType(ImperialMilitiaBattleTankUnit)
withType(ImperialMilitiaBattleTankUnitWithVanquisher)
withType(ImperialMilitiaLemanRuss)
withType(ImperialMilitiaLemanRussDemolisher)
withType(ImperialMilitiaLemanRussExterminator)
withType(ImperialMilitiaLemanRussVanquisher)
withType(ImperialMilitiaAvengerStrikeFighter)
withType(ImperialMilitiaPrimarisStrikeFighter)
withType(ImperialMilitiaDisciplineMaster)
withType(ImperialMilitiaRoguePsyker)
withType(ImperialMilitiaWarriorEliteProvenance)
withType(ImperialMilitiaSurvivorsOfTheDarkAgeProvenance)
withType(ImperialMilitiaFeralWarriorsProvenance)
withType(ImperialMilitiaTraitorsProvenance)
