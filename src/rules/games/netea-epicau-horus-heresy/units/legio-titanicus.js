import {
  Weapon,
  RangedWeapon,
  MultipleShot,
  AntiPersonnel,
  AntiTank,
  AntiAircraft,
  TitanWeapon,
  BattleTitanWeapons,
  BattleTitanArmWeapons,
  BattleTitanCarapaceWeapons,
  ScoutTitanWeapons,
  MacroWeapon,
  SpecialWeapon,
  TitanKiller,
  SlowFiring,
  ForwardFireArc,
  FixedForwardFireArc,
  BarragePoints,
  SmallArms,
  ExtraAttacks
} from '../weapons'
import {
  ReinforcedArmour,
  Fearless,
  SupremeCommander,
  Inspiring,
  CortexController,
  DamageCapacity,
  CriticalHit,
  Leader,
  Commander,
  SecondaryTargetingProtocols,
  Walker,
  VoidShields,
  Titanic
} from '../special-rules'
import MultipleChoiceUnit from './multiple-choice-unit'
import Unit from './unit'
import withType from '../../../../utils/with-type'

export class LegioTitanicusWarhoundScountTitan extends Unit {
  constructor (detachment) {
    super(detachment, 275, 1)

    this.rules = [
      new DamageCapacity(3),
      new VoidShields(2),
      new Fearless(),
      new ReinforcedArmour(),
      new Walker(),
      new CortexController(),
      new CriticalHit('legio-titanicus-warhound-critical-hit'),
      new Titanic()
    ]
    this.stats = {
      type: 'WE',
      speed: 30,
      armour: 5,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new TitanWeapon(
        'left-arm',
        new ScoutTitanWeapons()
      ),
      new TitanWeapon(
        'right-arm',
        new ScoutTitanWeapons()
      )
    ]
  }
}

export class LegioTitanicusWarhoundScountTitanPackUnit extends LegioTitanicusWarhoundScountTitan {
  constructor (detachment) {
    super(detachment)

    this.cost = 250
  }
}

export class LegioTitanicusReaverBattleTitan extends Unit {
  constructor (detachment) {
    super(detachment, 575, 1)

    this.rules = [
      new DamageCapacity(6),
      new VoidShields(4),
      new Fearless(),
      new ReinforcedArmour(),
      new Walker(),
      new CortexController(),
      new CriticalHit('legio-titanicus-reaver-critical-hit'),
      new Titanic()
    ]
    this.stats = {
      type: 'WE',
      speed: 20,
      armour: 4,
      cc: 3,
      ff: 3
    }
    this.weapons = [
      new TitanWeapon(
        'carapace',
        new ScoutTitanWeapons(),
        new BattleTitanWeapons(),
        new BattleTitanCarapaceWeapons()
      ),
      new TitanWeapon(
        'left-arm',
        new ScoutTitanWeapons(),
        new BattleTitanWeapons(),
        new BattleTitanArmWeapons()
      ),
      new TitanWeapon(
        'right-arm',
        new ScoutTitanWeapons(),
        new BattleTitanWeapons(),
        new BattleTitanArmWeapons()
      )
    ]
  }
}

export class LegioTitanicusWarlordBattleTitan extends Unit {
  constructor (detachment) {
    super(detachment, 725, 1)

    this.rules = [
      new DamageCapacity(8),
      new VoidShields(6),
      new Fearless(),
      new ReinforcedArmour(),
      new Walker(),
      new CortexController(),
      new CriticalHit('legio-titanicus-warlord-critical-hit'),
      new Titanic()
    ]
    this.stats = {
      type: 'WE',
      speed: 15,
      armour: 4,
      cc: 2,
      ff: 3
    }
    this.weapons = [
      new TitanWeapon(
        'left-carapace',
        new ScoutTitanWeapons(),
        new BattleTitanWeapons(),
        new BattleTitanCarapaceWeapons()
      ),
      new TitanWeapon(
        'right-carapace',
        new ScoutTitanWeapons(),
        new BattleTitanWeapons(),
        new BattleTitanCarapaceWeapons()
      ),
      new TitanWeapon(
        'left-arm',
        new ScoutTitanWeapons(),
        new BattleTitanWeapons(),
        new BattleTitanArmWeapons()
      ),
      new TitanWeapon(
        'right-arm',
        new ScoutTitanWeapons(),
        new BattleTitanWeapons(),
        new BattleTitanArmWeapons()
      )
    ]
  }
}

class LegioTitanicusImperatorSupportTitan extends Unit {
  constructor (detachment) {
    super(detachment, 1350, 1)

    this.rules = [
      new DamageCapacity(12),
      new VoidShields(8),
      new Fearless(),
      new ReinforcedArmour(),
      new Walker(),
      new CortexController(),
      new SecondaryTargetingProtocols(),
      new CriticalHit('legio-titanicus-imperator-critical-hit'),
      new Titanic()
    ]
    this.stats = {
      type: 'WE',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 3
    }
    this.weapons = [
      new Weapon('plasma-annihalator', new RangedWeapon('90cm', new MultipleShot('4x', new MacroWeapon('2+'), new TitanKiller('D3'), new SlowFiring(), new ForwardFireArc()))),
      new Weapon('hellstorm-cannon', new RangedWeapon('60cm', new BarragePoints(10), new ForwardFireArc())),
      new Weapon('defence-laser', new RangedWeapon('90cm', new MacroWeapon('4+'), new AntiAircraft('4+'), new TitanKiller('D3'))),
      new Weapon('4-battle-cannons', new RangedWeapon('75cm', new AntiPersonnel('4+'), new AntiTank('4+'))),
      new Weapon('quake-cannon', new RangedWeapon('90cm', new BarragePoints(3), new MacroWeapon(), new FixedForwardFireArc())),
      new SpecialWeapon('leg-bastions', 'corvus-assault-pod-notes')
    ]
  }
}

class LegioTitanicusWarmongerSupportTitan extends Unit {
  constructor (detachment) {
    super(detachment, 1350, 1)

    this.rules = [
      new DamageCapacity(12),
      new VoidShields(8),
      new Fearless(),
      new ReinforcedArmour(),
      new Walker(),
      new CortexController(),
      new SecondaryTargetingProtocols(),
      new CriticalHit('legio-titanicus-warmonger-critical-hit'),
      new Titanic()
    ]
    this.stats = {
      type: 'WE',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 3
    }
    this.weapons = [
      new Weapon('8-doomstrike-missiles', new RangedWeapon('Unlimited', new MacroWeapon('2+'), new TitanKiller('D6'))),
      new Weapon('vengence-cannon', new RangedWeapon('90cm', new MultipleShot('2x', new MacroWeapon('2+'), new TitanKiller('D3')))),
      new Weapon('4-hydra-autocannon', new RangedWeapon('45cm', new MultipleShot('2x', new AntiPersonnel('4+'), new AntiTank('5+'), new AntiAircraft('5+')))),
      new SpecialWeapon('fire-control-centre', 'fire-control-notes'),
      new Weapon('head-gun', new RangedWeapon('45cm', new AntiPersonnel('4+'), new AntiTank('4+'))),
      new Weapon('tertiary-armament', new SmallArms('15cm', new ExtraAttacks('+2'))),
      new SpecialWeapon('leg-bastions', 'corvus-assault-pod-notes')
    ]
  }
}

export class LegioTitanicusEmperorClassTitanUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new LegioTitanicusImperatorSupportTitan(detachment),
      new LegioTitanicusWarmongerSupportTitan(detachment)
    )
  }
}

export class LegioTitanicusVeteranPrinceps extends Unit {
  constructor (detachment) {
    super(detachment, 25, 1)

    this.rules = [
      new Commander(),
      new Leader()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = []
  }
}

export class LegioTitanicusLegate extends Unit {
  constructor (detachment) {
    super(detachment, 50, 1)

    this.rules = [
      new SupremeCommander()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = []
  }
}

export class LegioTitanicusAirDefence extends Unit {
  constructor (detachment) {
    super(detachment, 50, 1)

    this.rules = []
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('multi-lasers', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('5+'), new AntiTank('6+'), new AntiAircraft('5+'))))
    ]
  }
}

export class LegioTitanicusSacredIcon extends Unit {
  constructor (detachment) {
    super(detachment, 50, 1)

    this.rules = [
      new Inspiring()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = []
  }
}

withType(LegioTitanicusWarhoundScountTitan)
withType(LegioTitanicusWarhoundScountTitanPackUnit)
withType(LegioTitanicusReaverBattleTitan)
withType(LegioTitanicusWarlordBattleTitan)
withType(LegioTitanicusImperatorSupportTitan)
withType(LegioTitanicusWarmongerSupportTitan)
withType(LegioTitanicusEmperorClassTitanUnit)
withType(LegioTitanicusVeteranPrinceps)
withType(LegioTitanicusLegate)
withType(LegioTitanicusAirDefence)
withType(LegioTitanicusSacredIcon)
