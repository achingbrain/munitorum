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
  FixedForwardFireArc,
  RearFireArc,
  Disrupt,
  Lance,
  Fleshbane,
  Singularity
} from '../weapons'
import {
  ReinforcedArmour,
  ThickRearArmour,
  InvulnerableSave,
  Scout,
  Commander,
  Walker,
  DamageCapacity,
  CriticalHit,
  SupremeCommander,
  Leader,
  Fearless,
  Automaton,
  CortexController,
  JumpPacks,
  CyberneticaCortex,
  VoidShields,
  ImplacableAdvance,
  Skimmer
} from '../special-rules'
import MultipleChoiceUnit from './multiple-choice-unit'
import Unit, { TransportUnit } from './unit'
import withType from '../with-type'

export class MechanicumTaghmataTechThrall extends Unit {
  constructor (detachment) {
    super(detachment, 150, 10)

    this.transportType = 'infantry'
    this.rules = [
      new Automaton()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 6,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('las-locks', new SmallArms('15cm'))
    ]
  }
}

export class MechanicumTaghmataTechPriest extends Unit {
  constructor (detachment) {
    super(detachment, 0, 2)

    this.transportType = 'infantry'
    this.rules = [
      new Leader(),
      new CortexController()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new Weapon('2-graviton-guns', new RangedWeapon('15cm', new AntiPersonnel('5+'), new AntiTank('5+'), new Disrupt()))
    ]
  }
}

export class MechanicumTaghmataTechPriestUpgrade extends MechanicumTaghmataTechPriest {
  constructor (detachment) {
    super(detachment)

    this.cost = 25
    this.min = 1
    this.max = 3
    this.quantity = 1
  }
}

export class MechanicumTaghmataArchmagosPrime extends Unit {
  constructor (detachment) {
    super(detachment, 100, 1)

    this.rules = [
      new SupremeCommander(),
      new ReinforcedArmour(),
      new InvulnerableSave(),
      new CortexController()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('power-weapons', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class MechanicumTaghmataMagosPrime extends Unit {
  constructor (detachment) {
    super(detachment, 50, 1)

    this.rules = [
      new Commander(),
      new InvulnerableSave(),
      new CortexController()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('power-weapons', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class MechanicumTaghmataThallax extends Unit {
  constructor (detachment) {
    super(detachment, 300, 6)

    this.transportType = 'robot'
    this.rules = [
      new JumpPacks()
    ]
    this.stats = {
      type: 'INF',
      speed: 30,
      armour: 3,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('multi-melta',
        new RangedWeapon('15cm', new MacroWeapon('5+')),
        new SmallArms('15cm', new MacroWeapon())
      )
    ]
  }
}

export class MechanicumTaghmataUrsarax extends Unit {
  constructor (detachment) {
    super(detachment, 250, 6)

    this.transportType = 'robot'
    this.rules = [
      new JumpPacks()
    ]
    this.stats = {
      type: 'INF',
      speed: 30,
      armour: 3,
      cc: 4,
      ff: 6
    }
    this.weapons = [
      new Weapon('lightning-claws', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+2')))
    ]
  }
}

export class MechanicumTaghmataVorax extends Unit {
  constructor (detachment) {
    super(detachment, 250, 6)

    this.rules = [
      new CyberneticaCortex(),
      new Fearless(),
      new Scout(),
      new Walker()
    ]
    this.stats = {
      type: 'LV',
      speed: 20,
      armour: 4,
      cc: 4,
      ff: 5
    }
    this.weapons = [
      new Weapon('rotor-cannons', new RangedWeapon('30cm', new AntiPersonnel('4+')))
    ]
  }
}

export class MechanicumTaghmataCastellax extends Unit {
  constructor (detachment) {
    super(detachment, 275, 5)

    this.rules = [
      new CyberneticaCortex(),
      new Fearless(),
      new InvulnerableSave(),
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
      new Weapon('mauler-bolt-cannon', new RangedWeapon('30cm', new AntiPersonnel('4+'), new AntiTank('+6'))),
      new Weapon('power-blade', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class MechanicumTaghmataThanatar extends Unit {
  constructor (detachment) {
    super(detachment, 200, 3)

    this.rules = [
      new CyberneticaCortex(),
      new Fearless(),
      new InvulnerableSave(),
      new ReinforcedArmour(),
      new Walker()
    ]
    this.stats = {
      type: 'AV',
      speed: 15,
      armour: 4,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('hellex-plasma-mortar', new RangedWeapon('30cm', new BarragePoints(1), new IndirectFire(), new IgnoreCover())),
        new Weapon('sollex-heavy-lascannon', new RangedWeapon('60cm', new AntiTank('4+')))
      ),
      new Weapon('twin-linked-mauler-bolt-cannons', new RangedWeapon('30cm', new AntiPersonnel('3+'), new AntiTank('+6')))
    ]
  }
}

export class MechanicumTaghmataThanatarUpgrade extends MechanicumTaghmataThanatar {
  constructor (detachment) {
    super(detachment)

    this.cost = 75
    this.min = 1
    this.max = 3
    this.quantity = 1
  }
}

export class MechanicumTaghmataKrios extends Unit {
  constructor (detachment) {
    super(detachment, 60, 1)

    this.rules = [
      new InvulnerableSave(),
      new ReinforcedArmour(),
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
      new MultipleChoiceWeapon(
        new Weapon('lightning-cannon', new RangedWeapon('45cm', new MacroWeapon('5+'))),
        new Weapon('pulsar-fusil', new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('3+')))
      )
    ]
  }
}

export class MechanicumTaghmataKriosUpgrade extends MechanicumTaghmataKrios {
  constructor (detachment) {
    super(detachment)

    this.cost = 50
    this.min = 1
    this.quantity = 1
  }
}

export class MechanicumTaghmataKaracnos extends Unit {
  constructor (detachment) {
    super(detachment, 300, 4)

    this.rules = [
      new InvulnerableSave(),
      new ReinforcedArmour(),
      new Walker()
    ]
    this.stats = {
      type: 'AV',
      speed: 25,
      armour: 4,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new Weapon('karacnos-mortar-battery', new RangedWeapon('45cm', new BarragePoints(1), new IgnoreCover(), new Fleshbane())),
      new Weapon('lighting-blaster-sentinels', new RangedWeapon('15cm', new AntiPersonnel('5+'), new Disrupt())),
      new Weapon('shock-ram', new AssaultWeapon(new Disrupt()))
    ]
  }
}

class MechanicumTaghmataMyrmidonSecutors extends Unit {
  constructor (detachment) {
    super(detachment, 300, 6)

    this.transportType = 'robot'
    this.rules = [
      new ImplacableAdvance()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 5,
      ff: 4
    }
    this.weapons = [
      new Weapon('power-axes', new AssaultWeapon(new ExtraAttacks('+1'))),
      new Weapon('volkite-chargers', new SmallArms('15cm', new ExtraAttacks('+1')))
    ]
  }
}

class MechanicumTaghmataMyrmidonDestructors extends Unit {
  constructor (detachment) {
    super(detachment, 300, 6)

    this.transportType = 'robot'
    this.rules = [
      new ImplacableAdvance()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 5,
      ff: 4
    }
    this.weapons = [
      new Weapon('power-fists', new AssaultWeapon(new MacroWeapon())),
      new Weapon('volkite-culverins', new RangedWeapon('45cm', new AntiPersonnel('4+'), new AntiTank('6+'), new Disrupt()))
    ]
  }
}

export class MechanicumTaghmataMyrmidonUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new MechanicumTaghmataMyrmidonSecutors(detachment),
      new MechanicumTaghmataMyrmidonDestructors(detachment)
    )
  }
}

class MechanicumTaghmataTarantula extends Unit {
  constructor (detachment) {
    super(detachment, 125, 5)

    this.rules = [
      new Automaton()
    ]
    this.stats = {
      type: 'LV',
      speed: 0,
      armour: 6,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('twin-linked-lascannon', new StatsModifier({
          ff: 1
        }), new RangedWeapon('45cm', new AntiTank('4+'))),
        new Weapon('twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+')))
      )
    ]
  }
}

class MechanicumTaghmataHyperios extends Unit {
  constructor (detachment) {
    super(detachment, 125, 5)

    this.rules = [
      new Automaton()
    ]
    this.stats = {
      type: 'LV',
      speed: 0,
      armour: 6,
      cc: 6,
      ff: 6
    }
    this.weapons = [
      new Weapon('hyperios-launcher', new RangedWeapon('30cm', new AntiTank('6+'), new AntiAircraft('4+')))
    ]
  }
}

export class MechanicumTaghmataTarantulaUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new MechanicumTaghmataTarantula(detachment),
      new MechanicumTaghmataHyperios(detachment)
    )
  }
}

export class MechanicumTaghmataMinotaur extends Unit {
  constructor (detachment) {
    super(detachment, 350, 3)

    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour()
    ]
    this.stats = {
      type: 'AV',
      speed: 15,
      armour: 4,
      cc: 6,
      ff: 6
    }
    this.weapons = [
      new Weapon('minotaur-earthshaker-cannons', new RangedWeapon('90cm', new BarragePoints(2), new IndirectFire()))
    ]
  }
}

export class MechanicumTaghmataOrdinatusMinoris extends Unit {
  constructor (detachment) {
    super(detachment, 500, 3)

    this.rules = [
      new DamageCapacity(2),
      new VoidShields(1),
      new ReinforcedArmour(),
      new CriticalHit('mechanicum-taghmata-ordinatus-minoris-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 20,
      armour: 5,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('bellacosa-volcano-cannon', new RangedWeapon('90cm', new MacroWeapon('2+'), new TitanKiller('D3'), new FixedForwardFireArc())),
        new Weapon('ulator-sonic-destroyer', new RangedWeapon('75cm', new BarragePoints(3), new Disrupt(), new Lance(), new FixedForwardFireArc()))
      ),
      new Weapon('3-volkite-culverins', new RangedWeapon('45cm', new AntiPersonnel('4+'), new AntiTank('6+'), new Disrupt()))
    ]
  }
}

export class MechanicumTaghmataAvengerStrikeFighter extends Unit {
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

export class MechanicumTaghmataPrimarisStrikeFighter extends Unit {
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

export class MechanicumTaghmataFalchion extends Unit {
  constructor (detachment) {
    super(detachment, 300, 1)

    this.rules = [
      new ReinforcedArmour(),
      new DamageCapacity(3),
      new CriticalHit('mechanicum-taghmata-falchion-critical-hit')
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

export class MechanicumTaghmataOrdinatusMajoris extends Unit {
  constructor (detachment) {
    super(detachment, 450, 1)

    this.rules = [
      new DamageCapacity(2),
      new VoidShields(1),
      new ReinforcedArmour(),
      new CriticalHit('mechanicum-taghmata-ordinatus-majoris-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 20,
      armour: 5,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('sonic-disruptor', new RangedWeapon('100cm', new BarragePoints(10), new IgnoreCover(), new Disrupt(), new FixedForwardFireArc())),
        new Weapon('6-golgothan-missiles', new RangedWeapon('Unlimited', new BarragePoints(2), new MacroWeapon(), new IndirectFire(), new SingleShot(), new FixedForwardFireArc())),
        new Weapon('nova-cannon', new RangedWeapon('100cm', new MultipleShot('3x', new MacroWeapon('3+'), new TitanKiller('D3'), new Singularity(), new FixedForwardFireArc())))
      ),
      new Weapon('3-volkite-culverins', new RangedWeapon('45cm', new AntiPersonnel('4+'), new AntiTank('6+'), new Disrupt())),
      new Weapon('2-twin-linked-lascannons', new RangedWeapon('45cm', new AntiTank('4+')))
    ]
  }
}

export class MechanicumTaghmataScyllax extends Unit {
  constructor (detachment) {
    super(detachment, 50, 1, 4)

    this.transportType = 'infantry'
    this.rules = [
      new CyberneticaCortex(),
      new Fearless()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('mechadendrite-array', new AssaultWeapon(new Singularity()))
    ]
  }
}

export class MechanicumTaghmataTriaros extends TransportUnit {
  constructor (detachment) {
    super(detachment, 75)

    this.transportTypes = {
      robot: 2,
      infantry: 4
    }
    this.rules = [
      new InvulnerableSave(),
      new ReinforcedArmour(),
      new Walker()
    ]
    this.stats = {
      type: 'AV',
      speed: 25,
      armour: 4,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new Weapon('twin-linked-mauler-bolt-cannons', new RangedWeapon('30cm', new AntiPersonnel('3+'), new AntiTank('6+'))),
      new Weapon('shock-ram', new AssaultWeapon())
    ]
  }
}

export class MechanicumTaghmataLandRaider extends TransportUnit {
  constructor (detachment) {
    super(detachment, 75)

    this.transportTypes = {
      robot: 1,
      infantry: 2
    }
    this.rules = [
      new InvulnerableSave(),
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
      new MultipleChoiceWeapon(
        new Weapon('sponson-twin-linked-lascannons', new RangedWeapon('45cm', new AntiTank('4+'))),
        new Weapon('sponson-flamestorm-cannons', new StatsModifier({
          ff: -1
        }), new RangedWeapon('15cm', new AntiPersonnel('3+'), new IgnoreCover())),
        new Weapon('sponson-twin-linked-multi-meltas', new RangedWeapon('15cm', new MacroWeapon('4+')))
      ),
      new Weapon('twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+')))
    ]
  }
}

export class MechanicumTaghmataVultaraxStratosAutomata extends Unit {
  constructor (detachment) {
    super(detachment, 250, 6, 6)

    this.rules = [
      new Skimmer()
    ]
    this.stats = {
      type: 'INF',
      speed: 30,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('vultarax-arc-blaster', new RangedWeapon('15cm', new AntiPersonnel('5+'), new AntiTank('4+'))),
      new Weapon('2x-setheno-havoc-launcher', new RangedWeapon('30cm', new AntiPersonnel('4+'), new AntiTank('6+'), new IgnoreCover()))
    ]
  }
}

withType(MechanicumTaghmataTechThrall)
withType(MechanicumTaghmataTechPriest)
withType(MechanicumTaghmataTechPriestUpgrade)
withType(MechanicumTaghmataArchmagosPrime)
withType(MechanicumTaghmataMagosPrime)
withType(MechanicumTaghmataThallax)
withType(MechanicumTaghmataUrsarax)
withType(MechanicumTaghmataVorax)
withType(MechanicumTaghmataCastellax)
withType(MechanicumTaghmataThanatar)
withType(MechanicumTaghmataThanatarUpgrade)
withType(MechanicumTaghmataKrios)
withType(MechanicumTaghmataKriosUpgrade)
withType(MechanicumTaghmataKaracnos)
withType(MechanicumTaghmataMyrmidonUnit)
withType(MechanicumTaghmataMyrmidonSecutors)
withType(MechanicumTaghmataMyrmidonDestructors)
withType(MechanicumTaghmataTarantulaUnit)
withType(MechanicumTaghmataTarantula)
withType(MechanicumTaghmataHyperios)
withType(MechanicumTaghmataMinotaur)
withType(MechanicumTaghmataOrdinatusMinoris)
withType(MechanicumTaghmataAvengerStrikeFighter)
withType(MechanicumTaghmataPrimarisStrikeFighter)
withType(MechanicumTaghmataFalchion)
withType(MechanicumTaghmataOrdinatusMajoris)
withType(MechanicumTaghmataScyllax)
withType(MechanicumTaghmataTriaros)
withType(MechanicumTaghmataLandRaider)
withType(MechanicumTaghmataVultaraxStratosAutomata)
