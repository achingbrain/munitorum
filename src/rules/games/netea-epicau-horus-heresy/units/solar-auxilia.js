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
  MultipleChoiceWeapon,
  TitanKiller,
  IgnoreCover,
  StatsModifier,
  AntiAircraft,
  BarragePoints,
  IndirectFire,
  SingleShot,
  Or,
  FixedForwardFireArc,
  RearFireArc,
  Disrupt,
  SlowFiring
} from '../weapons'
import {
  ReinforcedArmour,
  ThickRearArmour,
  InvulnerableSave,
  Scout,
  Skimmer,
  Commander,
  DamageCapacity,
  CriticalHit,
  SupremeCommander,
  Planetfall,
  SlowAndSteady,
  Teleport
} from '../special-rules'
import MultipleChoiceUnit from './multiple-choice-unit'
import Unit, { TransportUnit } from './unit'
import SpacecraftUnit from './spacecraft-unit'
import withType from '../with-type'

export class SolarAuxiliaLordMarshall extends Unit {
  constructor (detachment) {
    super(detachment, 150, 1)

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
      ff: 4
    }
    this.weapons = [
      new Weapon('archaeotech-pistol', new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('volkite-chargers', new SmallArms('15cm', new AntiPersonnel('5+'), new AntiTank('6+')))
    ]
  }
}

export class SolarAuxiliaTacticalCommmandSection extends Unit {
  constructor (detachment) {
    super(detachment, 50, 1)

    this.transportType = 'infantry'
    this.rules = [
      new Commander()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 5,
      cc: 6,
      ff: 7
    }
    this.weapons = [
      new Weapon('plasma-guns', new SmallArms('15cm', new AntiPersonnel('5+'), new AntiTank('5+')))
    ]
  }
}

export class SolarAuxiliaVeletarisStormSection extends Unit {
  constructor (detachment) {
    super(detachment, 150, 7)

    this.transportType = 'infantry'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 5,
      cc: 5,
      ff: 4
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('volkite-chargers', new SmallArms('15cm', new AntiPersonnel('5+'), new AntiTank('6+'))),
        new Weapon('power-axes', new StatsModifier({
          cc: -1,
          ff: 2
        }), new AssaultWeapon(new MacroWeapon()))
      )
    ]
  }
}

export class SolarAuxiliaVeletarisSupportSquad extends SolarAuxiliaVeletarisStormSection {
  constructor (detachment) {
    super(detachment)

    this.cost = 75
    this.min = 4
    this.quantity = 4
  }
}

export class SolarAuxiliaCloseSupportSection extends Unit {
  constructor (detachment) {
    super(detachment, 75, 4)

    this.transportType = 'infantry'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 5,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('flamers',
        new RangedWeapon('15cm', new AntiPersonnel('5+'), new IgnoreCover()),
        new SmallArms('15cm', new IgnoreCover())
      )
    ]
  }
}

export class SolarAuxiliaInfantrySection extends Unit {
  constructor (detachment) {
    super(detachment, 100, 7)

    this.transportType = 'infantry'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 5,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('las-rifles', new SmallArms('15cm'))
    ]
  }
}

class SolarAuxiliaLemanRuss extends Unit {
  constructor (detachment) {
    super(detachment, 350 / 6, 1)

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

class SolarAuxiliaLemanRussDemolisher extends Unit {
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

class SolarAuxiliaCloseSupportLemanRussDemolisher extends SolarAuxiliaLemanRussDemolisher {
  constructor (detachment) {
    super(detachment)

    this.cost = 200 / 3
  }
}

class SolarAuxiliaLemanRussExterminator extends Unit {
  constructor (detachment) {
    super(detachment, 350 / 6, 1)

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

class SolarAuxiliaLemanRussVanquisher extends Unit {
  constructor (detachment) {
    super(detachment, (350 / 6) + 25, 1)

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

class SolarAuxiliaLemanRussIncinerator extends Unit {
  constructor (detachment) {
    super(detachment, 200 / 3, 1)

    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour()
    ]
    this.stats = {
      type: 'AV',
      speed: 20,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('twin-linked-volkite-demi-culverin', new RangedWeapon('45cm', new MultipleShot('2x', new AntiPersonnel('3+'), new AntiTank('5+')))),
      new Weapon('lascannon', new RangedWeapon('45cm', new AntiTank('5+')))
    ]
  }
}

class SolarAuxiliaLemanRussExecutioner extends Unit {
  constructor (detachment) {
    super(detachment, (200 / 3) + 25, 1)

    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour()
    ]
    this.stats = {
      type: 'AV',
      speed: 20,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('twin-linked-autocannon', new RangedWeapon('45cm', new AntiPersonnel('4+'), new AntiTank('5+'))),
      new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

export class SolarAuxiliaCloseSupportTankUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new SolarAuxiliaCloseSupportLemanRussDemolisher(detachment),
      new SolarAuxiliaLemanRussIncinerator(detachment)
    )
  }
}

export class SolarAuxiliaCloseSupportTankUnitWithExecutioner extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new SolarAuxiliaCloseSupportLemanRussDemolisher(detachment),
      new SolarAuxiliaLemanRussIncinerator(detachment),
      new SolarAuxiliaLemanRussExecutioner(detachment)
    )
  }
}

export class SolarAuxiliaBattleTankUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new SolarAuxiliaLemanRuss(detachment),
      new SolarAuxiliaLemanRussExterminator(detachment)
    )
  }
}

export class SolarAuxiliaBattleTankUnitWithVanquisher extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new SolarAuxiliaLemanRuss(detachment),
      new SolarAuxiliaLemanRussExterminator(detachment),
      new SolarAuxiliaLemanRussVanquisher(detachment)
    )
  }
}

export class SolarAuxiliaInfantrySupportTankUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new SolarAuxiliaLemanRussDemolisher(detachment),
      new SolarAuxiliaMalcadorInfernus(detachment)
    )
  }
}

export class SolarAuxiliaValdor extends Unit {
  constructor (detachment) {
    super(detachment, 250, 3)

    this.rules = [
      new ReinforcedArmour()
    ]
    this.stats = {
      type: 'AV',
      speed: 20,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('neutron-beam-laser', new RangedWeapon('45cm', new MacroWeapon(), new Disrupt())),
      new Weapon('lascannon', new RangedWeapon('45cm', new AntiTank('5+')))
    ]
  }
}

export class SolarAuxiliaOgrynCharoniteSquad extends Unit {
  constructor (detachment) {
    super(detachment, 75, 2)

    this.transportType = 'ogryn'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 3,
      ff: 5
    }
    this.weapons = [
      new Weapon('charonite-claws', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class SolarAuxiliaArvusLighter extends TransportUnit {
  constructor (detachment) {
    super(detachment, 25)

    this.transportTypes = {
      infantry: 2,
      ogryn: 1,
      rapier: 1
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

export class SolarAuxiliaDracosan extends TransportUnit {
  constructor (detachment) {
    super(detachment, 75)

    this.transportTypes = {
      infantry: 4,
      ogryn: 2,
      rapier: 2
    }
    this.rules = [
      new DamageCapacity(2),
      new ReinforcedArmour(),
      new CriticalHit('solar-auxilia-dracosan-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 20,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('twin-linked-lascannon', new RangedWeapon('45cm', new AntiTank('4+')))
    ]
  }
}

export class SolarAuxiliaStormlordTransport extends TransportUnit {
  constructor (detachment) {
    super(detachment, 200)

    this.transportTypes = {
      infantry: 8,
      ogryn: 4,
      rapier: 4
    }
    this.rules = [
      new DamageCapacity(2),
      new ReinforcedArmour(),
      new CriticalHit('solar-auxilia-stormlord-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 15,
      armour: 4,
      cc: 6,
      ff: 3
    }
    this.weapons = [
      new Weapon('vulcan-mega-bolter', new RangedWeapon('45cm', new MultipleShot('3x', new AntiPersonnel('3+'), new AntiTank('5+')), new FixedForwardFireArc())),
      new Weapon('3-twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+'))),
      new Weapon('2-heavy-flamers',
        new RangedWeapon('15cm', new AntiPersonnel('4+'), new IgnoreCover()),
        new SmallArms('15cm', new IgnoreCover())
      )
    ]
  }
}

export class SolarAuxiliaRapier extends Unit {
  constructor (detachment) {
    super(detachment, 100, 4)

    this.transportType = 'rapier'
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
        new Weapon('quad-mortar', new RangedWeapon('45cm', new AntiPersonnel('4+'), new AntiTank('6+'), new IndirectFire())),
        new Weapon('quad-heavy-bolters', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('4+'))))
      )
    ]
  }
}

class SolarAuxiliaEmperorClassBattleship extends SpacecraftUnit {
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

class SolarAuxiliaDauntlessClassLightCruiser extends SpacecraftUnit {
  constructor (detachment) {
    super(detachment, 150, 1)

    this.rules = []
    this.stats = {
      type: 'SC',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('orbital-bombardment', new RangedWeapon('-', new BarragePoints(3), new MacroWeapon())),
      new Weapon('lance-battery', new RangedWeapon('-', new MacroWeapon('2+'), new TitanKiller('D3')))
    ]
  }
}

export class SolarAuxiliaOrbitalSupportUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new SolarAuxiliaEmperorClassBattleship(detachment),
      new SolarAuxiliaDauntlessClassLightCruiser(detachment)
    )
  }
}

export class SolarAuxiliaMedusa extends Unit {
  constructor (detachment) {
    super(detachment, 250, 3)

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
        new RangedWeapon('30cm', new MacroWeapon('4+'), new IgnoreCover()),
        new SmallArms('15cm', new MacroWeapon(), new IgnoreCover())
      ),
      new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

class SolarAuxiliaBasilisk extends Unit {
  constructor (detachment) {
    super(detachment, 250, 3)

    this.rules = []
    this.stats = {
      type: 'AV',
      speed: 20,
      armour: 5,
      cc: 6,
      ff: 6
    }
    this.weapons = [
      new Weapon('earthshaker-cannon', new RangedWeapon('120cm', new AntiPersonnel('4+'), new AntiTank('4+'), new Or(), new BarragePoints(1), new IndirectFire())),
      new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

class SolarAuxiliaBombard extends Unit {
  constructor (detachment) {
    super(detachment, 250, 3)

    this.rules = []
    this.stats = {
      type: 'AV',
      speed: 15,
      armour: 5,
      cc: 6,
      ff: 6
    }
    this.weapons = [
      new Weapon('siege-mortar', new RangedWeapon('45cm', new BarragePoints(1), new IndirectFire(), new IgnoreCover())),
      new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

export class SolarAuxiliaArtilleryTankBatteryUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new SolarAuxiliaBasilisk(detachment),
      new SolarAuxiliaBombard(detachment),
      new SolarAuxiliaMedusa(detachment)
    )
  }
}

class SolarAuxiliaMalcador extends Unit {
  constructor (detachment) {
    super(detachment, 70, 1)

    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour()
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
      new Weapon('sponson-autocannons', new RangedWeapon('45cm', new AntiPersonnel('5+'), new AntiTank('6+')))
    ]
  }
}

class SolarAuxiliaMalcadorInfernus extends Unit {
  constructor (detachment) {
    super(detachment, 70, 1)

    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour()
    ]
    this.stats = {
      type: 'AV',
      speed: 20,
      armour: 4,
      cc: 6,
      ff: 3
    }
    this.weapons = [
      new Weapon('infernus-cannon', new RangedWeapon('30cm', new AntiPersonnel('3+'))),
      new Weapon('sponson-autocannons', new RangedWeapon('45cm', new AntiPersonnel('5+'), new AntiTank('6+')))
    ]
  }
}

export class SolarAuxiliaMalcadorUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new SolarAuxiliaMalcador(detachment),
      new SolarAuxiliaMalcadorInfernus(detachment)
    )
  }
}

class SolarAuxiliaBaneblade extends Unit {
  constructor (detachment) {
    super(detachment, 200, 1)

    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(3),
      new CriticalHit('solar-auxilia-baneblade-critical-hit')
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
        new RangedWeapon('30cm', new AntiPersonnel('3+'), new AntiTank('4+'), new IgnoreCover(), new FixedForwardFireArc()),
        new SmallArms('15cm', new IgnoreCover(), new FixedForwardFireArc())
      )
    ]
  }
}

class SolarAuxiliaShadowsword extends Unit {
  constructor (detachment) {
    super(detachment, 200, 1)

    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(3),
      new CriticalHit('solar-auxilia-shadowsword-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 15,
      armour: 4,
      cc: 6,
      ff: 6
    }
    this.weapons = [
      new Weapon('volcano-cannon', new RangedWeapon('90cm', new MacroWeapon('2+'), new TitanKiller('D3'), new FixedForwardFireArc())),
      new Weapon('2-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('5+')))
    ]
  }
}

class SolarAuxiliaStormblade extends Unit {
  constructor (detachment) {
    super(detachment, 200, 1)

    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(3),
      new CriticalHit('solar-auxilia-stormblade-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 15,
      armour: 4,
      cc: 6,
      ff: 6
    }
    this.weapons = [
      new Weapon('plasma-blastgun', new RangedWeapon('45cm', new MultipleShot('2x', new MacroWeapon('2+'), new SlowFiring(), new FixedForwardFireArc()))),
      new Weapon('2-twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+'))),
      new Weapon('sponson-lascannons', new RangedWeapon('45cm', new AntiTank('4+'))),
      new Weapon('heavy-bolter', new RangedWeapon('30cm', new AntiPersonnel('5+'), new FixedForwardFireArc()))
    ]
  }
}

class SolarAuxiliaStormhammer extends Unit {
  constructor (detachment) {
    super(detachment, 200, 1)

    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(3),
      new CriticalHit('solar-auxilia-stormhammer-critical-hit')
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

class SolarAuxiliaStormlord extends Unit {
  constructor (detachment) {
    super(detachment, 200, 1)

    this.rules = [
      new DamageCapacity(2),
      new ReinforcedArmour(),
      new CriticalHit('solar-auxilia-stormlord-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 15,
      armour: 4,
      cc: 6,
      ff: 3
    }
    this.weapons = [
      new Weapon('vulcan-mega-bolter', new RangedWeapon('45cm', new MultipleShot('3x', new AntiPersonnel('3+'), new AntiTank('5+')), new FixedForwardFireArc())),
      new Weapon('3-twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+'))),
      new Weapon('sponson-lascannons', new RangedWeapon('45cm', new AntiTank('4+')))
    ]
  }
}

class SolarAuxiliaStormsword extends Unit {
  constructor (detachment) {
    super(detachment, 200, 1)

    this.rules = [
      new DamageCapacity(2),
      new ReinforcedArmour(),
      new CriticalHit('solar-auxilia-stormsword-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 15,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('stormsword-siege-cannon', new RangedWeapon('30cm', new BarragePoints(3), new Disrupt(), new IgnoreCover())),
      new Weapon('2-twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+')))

    ]
  }
}

export class SolarAuxiliaSuperHeavyTankUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new SolarAuxiliaBaneblade(detachment),
      new SolarAuxiliaShadowsword(detachment),
      new SolarAuxiliaStormblade(detachment),
      new SolarAuxiliaStormhammer(detachment),
      new SolarAuxiliaStormlord(detachment),
      new SolarAuxiliaStormsword(detachment)
    )
  }
}

class SolarAuxiliaBanebladeSquadronUnit extends SolarAuxiliaBaneblade {
  constructor (detachment) {
    super(detachment)

    this.cost = 500
    this.min = 3
    this.quantity = 3
  }
}

class SolarAuxiliaShadowswordSquadronUnit extends SolarAuxiliaShadowsword {
  constructor (detachment) {
    super(detachment)

    this.cost = 500
    this.min = 3
    this.quantity = 3
  }
}

class SolarAuxiliaStormbladeSquadronUnit extends SolarAuxiliaStormblade {
  constructor (detachment) {
    super(detachment)

    this.cost = 500
    this.min = 3
    this.quantity = 3
  }
}

class SolarAuxiliaStormhammerSquadronUnit extends SolarAuxiliaStormhammer {
  constructor (detachment) {
    super(detachment)

    this.cost = 500
    this.min = 3
    this.quantity = 3
  }
}

class SolarAuxiliaStormlordSquadronUnit extends SolarAuxiliaStormlord {
  constructor (detachment) {
    super(detachment)

    this.cost = 500
    this.min = 3
    this.quantity = 3
  }
}

class SolarAuxiliaStormswordSquadronUnit extends SolarAuxiliaStormsword {
  constructor (detachment) {
    super(detachment)

    this.cost = 500
    this.min = 3
    this.quantity = 3
  }
}

export class SolarAuxiliaSuperHeavyTankSquadronUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new SolarAuxiliaBanebladeSquadronUnit(detachment),
      new SolarAuxiliaShadowswordSquadronUnit(detachment),
      new SolarAuxiliaStormbladeSquadronUnit(detachment),
      new SolarAuxiliaStormhammerSquadronUnit(detachment),
      new SolarAuxiliaStormlordSquadronUnit(detachment),
      new SolarAuxiliaStormswordSquadronUnit(detachment)
    )
  }
}

export class SolarAuxiliaTarantula extends Unit {
  constructor (detachment) {
    super(detachment, 100, 4)

    this.rules = [
      new Scout(),
      new Teleport()
    ]
    this.stats = {
      type: 'LV',
      speed: 0,
      armour: 6,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+')))
    ]
  }
}

export class SolarAuxiliaTarantulaHyperios extends Unit {
  constructor (detachment) {
    super(detachment, 100, 4)

    this.rules = [
      new Scout(),
      new Teleport()
    ]
    this.stats = {
      type: 'LV',
      speed: 0,
      armour: 6,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('hyperios-launcher', new RangedWeapon('30cm', new AntiAircraft('4+')))
    ]
  }
}

export class SolarAuxiliaAvengerStrikeFighter extends Unit {
  constructor (detachment) {
    super(detachment, 250, 2)

    this.rules = []
    this.stats = {
      type: 'AC',
      speed: 'fighter-bomber',
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

export class SolarAuxiliaPrimarisStrikeFighter extends Unit {
  constructor (detachment) {
    super(detachment, 225, 2)

    this.rules = []
    this.stats = {
      type: 'AC',
      speed: 'fighter',
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

withType(SolarAuxiliaLordMarshall)
withType(SolarAuxiliaTacticalCommmandSection)
withType(SolarAuxiliaVeletarisStormSection)
withType(SolarAuxiliaInfantrySection)
withType(SolarAuxiliaInfantrySupportTankUnit)
withType(SolarAuxiliaLemanRuss)
withType(SolarAuxiliaLemanRussDemolisher)
withType(SolarAuxiliaLemanRussExterminator)
withType(SolarAuxiliaLemanRussVanquisher)
withType(SolarAuxiliaLemanRussIncinerator)
withType(SolarAuxiliaLemanRussExecutioner)
withType(SolarAuxiliaBattleTankUnit)
withType(SolarAuxiliaBattleTankUnitWithVanquisher)
withType(SolarAuxiliaCloseSupportTankUnit)
withType(SolarAuxiliaCloseSupportTankUnitWithExecutioner)
withType(SolarAuxiliaMalcador)
withType(SolarAuxiliaMalcadorInfernus)
withType(SolarAuxiliaMalcadorUnit)
withType(SolarAuxiliaOgrynCharoniteSquad)
withType(SolarAuxiliaVeletarisSupportSquad)
withType(SolarAuxiliaCloseSupportSection)
withType(SolarAuxiliaArvusLighter)
withType(SolarAuxiliaDracosan)
withType(SolarAuxiliaStormlordTransport)
withType(SolarAuxiliaRapier)
withType(SolarAuxiliaEmperorClassBattleship)
withType(SolarAuxiliaDauntlessClassLightCruiser)
withType(SolarAuxiliaOrbitalSupportUnit)
withType(SolarAuxiliaMedusa)
withType(SolarAuxiliaBasilisk)
withType(SolarAuxiliaBombard)
withType(SolarAuxiliaArtilleryTankBatteryUnit)
withType(SolarAuxiliaSuperHeavyTankUnit)
withType(SolarAuxiliaBaneblade)
withType(SolarAuxiliaShadowsword)
withType(SolarAuxiliaStormblade)
withType(SolarAuxiliaStormhammer)
withType(SolarAuxiliaStormlord)
withType(SolarAuxiliaStormsword)
withType(SolarAuxiliaSuperHeavyTankSquadronUnit)
withType(SolarAuxiliaBanebladeSquadronUnit)
withType(SolarAuxiliaShadowswordSquadronUnit)
withType(SolarAuxiliaStormbladeSquadronUnit)
withType(SolarAuxiliaStormhammerSquadronUnit)
withType(SolarAuxiliaStormlordSquadronUnit)
withType(SolarAuxiliaStormswordSquadronUnit)
withType(SolarAuxiliaValdor)
withType(SolarAuxiliaTarantula)
withType(SolarAuxiliaTarantulaHyperios)
withType(SolarAuxiliaAvengerStrikeFighter)
withType(SolarAuxiliaPrimarisStrikeFighter)
