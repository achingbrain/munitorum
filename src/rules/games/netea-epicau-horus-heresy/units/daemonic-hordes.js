import React from 'react'
import InlineButton from '../../../../components/inline-button'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
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
  WeaponBlank,
  FirstStrike
} from '../weapons'
import {
  ReinforcedArmour,
  InvulnerableSave,
  Scout,
  Commander,
  Walker,
  DamageCapacity,
  CriticalHit,
  Leader,
  Fearless,
  JumpPacks,
  Inspiring,
  Beserk,
  Mounted,
  Infiltrator,
  Notes,
  ChaosGate,
  SupremeCommander
} from '../special-rules'
import MultipleChoiceUnit from './multiple-choice-unit'
import Unit from './unit'
import withType from '../../../../utils/with-type'

export class DaemonicHordesFollowerUnit extends Unit {
  getDecreaseUnitQuantity (t, onUpdateUnit) {
    if (this.max === undefined) {
      return null
    }

    return (
      <InlineButton size='small' disabled={this.quantity === this.min} onClick={() => this._decreaseQuantity(onUpdateUnit)}>
        <RemoveIcon />
      </InlineButton>
    )
  }

  getIncreaseUnitQuantity (t, onUpdateUnit) {
    if (this.max === undefined) {
      return null
    }

    const unitCount = this.detachment.units
      .filter(unit => unit instanceof DaemonicHordesFollowerUnit)
      .reduce((acc, curr) => acc + curr.getQuantity(), 0)

    return (
      <InlineButton size='small' disabled={this.quantity === this.max || unitCount >= 9} onClick={() => this._increaseQuantity(onUpdateUnit)}>
        <AddIcon />
      </InlineButton>
    )
  }
}

class DaemonicHordesDaemonicOverlord extends Unit {
  getRules () {
    const rules = super.getRules()
    const weapons = super.getChosenWeapons()

    if (weapons.find(weapon => weapon.name === 'daemonic-overlord')) {
      return rules.concat(new SupremeCommander())
    }

    return rules
  }
}

class DaemonicHordesDaemonPrince extends DaemonicHordesDaemonicOverlord {
  getRules () {
    const rules = super.getRules()
    const weapons = super.getChosenWeapons()

    if (weapons.find(weapon => weapon.name === 'wings')) {
      return rules.concat(new JumpPacks())
    }

    return rules
  }
}

export class DaemonicHordesWarpRift extends Unit {
  constructor () {
    super(75, 1)

    this.rules = [
      new Notes(null, 'daemonic-hordes-warp-rift-notes-replaces'),
      new Notes(null, 'daemonic-hordes-warp-rift-notes-effect'),
      new ChaosGate()
    ]
    this.stats = {
      type: '-',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = []
  }
}

class DaemonicHordesHeraldOfKhorne extends DaemonicHordesDaemonicOverlord {
  constructor () {
    super(100, 1)

    this.rules = [
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('daemon-blade', new AssaultWeapon(new ExtraAttacks('+1'), new MacroWeapon())),
      new MultipleChoiceWeapon(
        new WeaponBlank(),
        new WeaponBlank('daemonic-overlord')
      )
    ]
  }
}

class DaemonicHordesDaemonPrinceOfKhorne extends DaemonicHordesDaemonPrince {
  constructor () {
    super(150, 1)

    this.rules = [
      new Commander(),
      new Leader(),
      new Fearless(),
      new ReinforcedArmour(),
      new Inspiring(),
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 3,
      ff: 3
    }
    this.weapons = [
      new Weapon('daemon-weapon', new AssaultWeapon(new ExtraAttacks('+2'), new MacroWeapon())),
      new MultipleChoiceWeapon(
        new WeaponBlank(),
        new WeaponBlank('wings', new StatsModifier({
          speed: 15,
          armour: 1
        }))
      ),
      new MultipleChoiceWeapon(
        new WeaponBlank(),
        new WeaponBlank('daemonic-overlord')
      )
    ]
  }
}

export class DaemonicHordesKhorneHordeLeader extends MultipleChoiceUnit {
  constructor () {
    super(
      new DaemonicHordesHeraldOfKhorne(),
      new DaemonicHordesDaemonPrinceOfKhorne()
    )
  }
}

export class DaemonicHordesBloodletters extends Unit {
  constructor () {
    super(25, 6, 12)

    this.rules = [
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 6
    }
    this.weapons = [
      new Weapon('hellblades', new AssaultWeapon(new ExtraAttacks('+1')))
    ]
  }
}

export class DaemonicHordesFleshHounds extends Unit {
  constructor () {
    super(25, 1, 6)

    this.rules = [
      new InvulnerableSave(),
      new Infiltrator()
    ]
    this.stats = {
      type: 'INF',
      speed: 20,
      armour: 4,
      cc: 4,
      ff: 6
    }
    this.weapons = [
      new Weapon('fangs-and-claws', new AssaultWeapon())
    ]
  }
}

export class DaemonicHordesFleshHoundsFollowerUnit extends DaemonicHordesFollowerUnit {
  constructor () {
    super(25, 3, 9)

    this.rules = [
      new InvulnerableSave(),
      new Infiltrator()
    ]
    this.stats = {
      type: 'INF',
      speed: 20,
      armour: 4,
      cc: 4,
      ff: 6
    }
    this.weapons = [
      new Weapon('fangs-and-claws', new AssaultWeapon())
    ]
  }
}

export class DaemonicHordesBloodcrushers extends Unit {
  constructor () {
    super(50, 1, 6)

    this.rules = [
      new Beserk(),
      new InvulnerableSave(),
      new Mounted(),
      new Walker()
    ]
    this.stats = {
      type: 'INF',
      speed: 20,
      armour: 3,
      cc: 3,
      ff: 6
    }
    this.weapons = [
      new Weapon('juggernaut-charge', new AssaultWeapon(new MacroWeapon()))
    ]
  }
}

export class DaemonicHordesBloodcrushersFollowerUnit extends DaemonicHordesFollowerUnit {
  constructor () {
    super(50, 3, 9)

    this.rules = [
      new Beserk(),
      new InvulnerableSave(),
      new Mounted(),
      new Walker()
    ]
    this.stats = {
      type: 'INF',
      speed: 20,
      armour: 3,
      cc: 3,
      ff: 6
    }
    this.weapons = [
      new Weapon('juggernaut-charge', new AssaultWeapon(new MacroWeapon()))
    ]
  }
}

export class DaemonicHordesSkullCannonOfKhorne extends Unit {
  constructor () {
    super(50, 1, 6)

    this.rules = [
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'LV',
      speed: 20,
      armour: 5,
      cc: 6,
      ff: 6
    }
    this.weapons = [
      new Weapon('skull-cannon', new RangedWeapon('45cm', new AntiPersonnel('3+'), new AntiTank('5+'), new IgnoreCover()))
    ]
  }
}

export class DaemonicHordesSkullCannonOfKhorneFollowerUnit extends DaemonicHordesFollowerUnit {
  constructor () {
    super(50, 3, 9)

    this.rules = [
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'LV',
      speed: 20,
      armour: 5,
      cc: 6,
      ff: 6
    }
    this.weapons = [
      new Weapon('skull-cannon', new RangedWeapon('45cm', new AntiPersonnel('3+'), new AntiTank('5+'), new IgnoreCover()))
    ]
  }
}

export class DaemonicHordesBloodThirster extends Unit {
  constructor () {
    super(200, 1)

    this.rules = [
      new DamageCapacity(3),
      new Commander(),
      new Leader(),
      new ReinforcedArmour(),
      new Beserk(),
      new InvulnerableSave(),
      new Walker(),
      new JumpPacks(),
      new Inspiring(),
      new Fearless(),
      new CriticalHit('daemonic-hordes-greater-daemon-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 20,
      armour: 4,
      cc: 3,
      ff: 6
    }
    this.weapons = [
      new Weapon('axe-of-khorne', new AssaultWeapon(new ExtraAttacks('+1'), new TitanKiller())),
      new Weapon('lash-of-khorne', new AssaultWeapon(new ExtraAttacks('+1'), new MacroWeapon()))
    ]
  }
}

export class DaemonicHordesBloodThirsterHordeUnit extends DaemonicHordesBloodThirster {
  constructor () {
    super()

    this.max = 3
  }
}

export class DaemonicHordesHeraldOfNurgle extends DaemonicHordesDaemonicOverlord {
  constructor () {
    super(100, 1)

    this.rules = [
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('sorcerous-blast', new SmallArms('15cm', new ExtraAttacks('+1'), new MacroWeapon())),
      new MultipleChoiceWeapon(
        new WeaponBlank(),
        new WeaponBlank('daemonic-overlord')
      )
    ]
  }
}

export class DaemonicHordesDaemonPrinceOfNurgle extends DaemonicHordesDaemonPrince {
  constructor () {
    super(150, 1)

    this.rules = [
      new Commander(),
      new Leader(),
      new Fearless(),
      new ReinforcedArmour(),
      new Inspiring(),
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 3,
      ff: 3
    }
    this.weapons = [
      new Weapon('daemon-weapon', new AssaultWeapon(new ExtraAttacks('+2'), new MacroWeapon())),
      new Weapon('warp-blast', new SmallArms('15cm', new ExtraAttacks('+1'), new MacroWeapon())),
      new MultipleChoiceWeapon(
        new WeaponBlank(),
        new WeaponBlank('wings', new StatsModifier({
          speed: 15,
          armour: 1
        }))
      ),
      new MultipleChoiceWeapon(
        new WeaponBlank(),
        new WeaponBlank('daemonic-overlord')
      )
    ]
  }
}

export class DaemonicHordesNurgleHordeLeader extends MultipleChoiceUnit {
  constructor () {
    super(
      new DaemonicHordesHeraldOfNurgle(),
      new DaemonicHordesDaemonPrinceOfNurgle()
    )
  }
}

export class DaemonicHordesPlagueBearers extends Unit {
  constructor () {
    super(25, 6, 12)

    this.rules = [
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 4,
      ff: 6
    }
    this.weapons = [
      new Weapon('plague-swords', new AssaultWeapon())
    ]
  }
}

export class DaemonicHordesNurglings extends Unit {
  constructor () {
    super(25, 1, 6)

    this.rules = [
      new Scout(),
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 5,
      ff: 6
    }
    this.weapons = [
      new Weapon('tiny-sharp-teeth', new AssaultWeapon())
    ]
  }
}

export class DaemonicHordesNurglingsFollowerUnit extends DaemonicHordesFollowerUnit {
  constructor () {
    super(25, 3, 9)

    this.rules = [
      new Scout(),
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 5,
      ff: 6
    }
    this.weapons = [
      new Weapon('tiny-sharp-teeth', new AssaultWeapon())
    ]
  }
}

export class DaemonicHordesBeastsOfNurgle extends Unit {
  constructor () {
    super(50, 1, 6)

    this.rules = [
      new Fearless(),
      new InvulnerableSave(),
      new Mounted(),
      new Walker()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 4,
      ff: 5
    }
    this.weapons = [
      new Weapon('acidic-slime', new AssaultWeapon(new IgnoreCover())),
      new Weapon('cloud-of-flies', new SmallArms('15cm', new IgnoreCover()))
    ]
  }
}

export class DaemonicHordesBeastsOfNurgleFollowerUnit extends DaemonicHordesFollowerUnit {
  constructor () {
    super(50, 3, 9)

    this.rules = [
      new Fearless(),
      new InvulnerableSave(),
      new Mounted(),
      new Walker()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 4,
      ff: 5
    }
    this.weapons = [
      new Weapon('acidic-slime', new AssaultWeapon(new IgnoreCover())),
      new Weapon('cloud-of-flies', new SmallArms('15cm', new IgnoreCover()))
    ]
  }
}

export class DaemonicHordesPlagueDrones extends Unit {
  constructor () {
    super(50, 1, 6)

    this.rules = [
      new InvulnerableSave(),
      new Infiltrator(),
      new Scout(),
      new JumpPacks()
    ]
    this.stats = {
      type: 'LV',
      speed: 20,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('plague-swords', new AssaultWeapon())
    ]
  }
}

export class DaemonicHordesPlagueDronesFollowerUnit extends DaemonicHordesFollowerUnit {
  constructor () {
    super(50, 3, 9)

    this.rules = [
      new InvulnerableSave(),
      new Infiltrator(),
      new Scout(),
      new JumpPacks()
    ]
    this.stats = {
      type: 'LV',
      speed: 20,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('plague-swords', new AssaultWeapon())
    ]
  }
}

export class DaemonicHordesGreatUncleanOne extends Unit {
  constructor () {
    super(200, 1)

    this.rules = [
      new DamageCapacity(4),
      new Commander(),
      new Leader(),
      new ReinforcedArmour(),
      new InvulnerableSave(),
      new Walker(),
      new Inspiring(),
      new Fearless(),
      new CriticalHit('daemonic-hordes-greater-daemon-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('nurgling-swarm', new AssaultWeapon(new ExtraAttacks('+1'))),
      new Weapon('stream-of-corruption',
        new SmallArms('15cm', new IgnoreCover(), new ExtraAttacks('+1')),
        new RangedWeapon('30cm', new BarragePoints(3), new IgnoreCover())
      )
    ]
  }
}

export class DaemonicHordesGreatUncleanOneHordeUnit extends DaemonicHordesGreatUncleanOne {
  constructor () {
    super()

    this.max = 3
  }
}

export class DaemonicHordesHeraldOfSlaanesh extends DaemonicHordesDaemonicOverlord {
  constructor () {
    super(100, 1)

    this.rules = [
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('daemon-blade', new AssaultWeapon(new ExtraAttacks('+1'), new MacroWeapon())),
      new MultipleChoiceWeapon(
        new WeaponBlank(),
        new WeaponBlank('daemonic-overlord')
      )
    ]
  }
}

export class DaemonicHordesDaemonPrinceOfSlaanesh extends DaemonicHordesDaemonPrince {
  constructor () {
    super(150, 1)

    this.rules = [
      new Commander(),
      new Leader(),
      new Fearless(),
      new ReinforcedArmour(),
      new Inspiring(),
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 3,
      ff: 3
    }
    this.weapons = [
      new Weapon('crushing-claws', new AssaultWeapon(new FirstStrike(), new MacroWeapon())),
      new Weapon('sopoforic-musk', new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1'))),
      new MultipleChoiceWeapon(
        new WeaponBlank(),
        new WeaponBlank('wings', new StatsModifier({
          speed: 15,
          armour: 1
        }))
      ),
      new MultipleChoiceWeapon(
        new WeaponBlank(),
        new WeaponBlank('daemonic-overlord')
      )
    ]
  }
}

export class DaemonicHordesSlaaneshHordeLeader extends MultipleChoiceUnit {
  constructor () {
    super(
      new DaemonicHordesHeraldOfSlaanesh(),
      new DaemonicHordesDaemonPrinceOfSlaanesh()
    )
  }
}

export class DaemonicHordesDaemonettes extends Unit {
  constructor () {
    super(25, 6, 12)

    this.rules = [
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 3,
      ff: 6
    }
    this.weapons = [
      new Weapon('talons', new AssaultWeapon(new ExtraAttacks('+1'), new FirstStrike()))
    ]
  }
}

export class DaemonicHordesFiendsOfSlaanesh extends Unit {
  constructor () {
    super(50, 1, 6)

    this.rules = [
      new InvulnerableSave(),
      new Infiltrator(),
      new Scout()
    ]
    this.stats = {
      type: 'INF',
      speed: 20,
      armour: 4,
      cc: 4,
      ff: 6
    }
    this.weapons = [
      new Weapon('rending-claws', new AssaultWeapon(new ExtraAttacks('+1'), new FirstStrike()))
    ]
  }
}

export class DaemonicHordesFiendsOfSlaaneshFollowerUnit extends DaemonicHordesFollowerUnit {
  constructor () {
    super(50, 3, 9)

    this.rules = [
      new InvulnerableSave(),
      new Infiltrator(),
      new Scout()
    ]
    this.stats = {
      type: 'INF',
      speed: 20,
      armour: 4,
      cc: 4,
      ff: 6
    }
    this.weapons = [
      new Weapon('rending-claws', new AssaultWeapon(new ExtraAttacks('+1'), new FirstStrike()))
    ]
  }
}

export class DaemonicHordesSeekersOfSlaanesh extends Unit {
  constructor () {
    super(25, 1, 6)

    this.rules = [
      new FirstStrike(),
      new InvulnerableSave(),
      new Mounted()
    ]
    this.stats = {
      type: 'INF',
      speed: 30,
      armour: 4,
      cc: 4,
      ff: 6
    }
    this.weapons = [
      new Weapon('daemonic-talons', new AssaultWeapon())
    ]
  }
}

export class DaemonicHordesSeekersOfSlaaneshFollowerUnit extends DaemonicHordesFollowerUnit {
  constructor () {
    super(25, 3, 9)

    this.rules = [
      new FirstStrike(),
      new InvulnerableSave(),
      new Mounted()
    ]
    this.stats = {
      type: 'INF',
      speed: 30,
      armour: 4,
      cc: 4,
      ff: 6
    }
    this.weapons = [
      new Weapon('daemonic-talons', new AssaultWeapon())
    ]
  }
}

export class DaemonicHordesSeekerChariot extends Unit {
  constructor () {
    super(50, 1, 6)

    this.rules = [
      new InvulnerableSave(),
      new Walker(),
      new FirstStrike()
    ]
    this.stats = {
      type: 'AV',
      speed: 30,
      armour: 5,
      cc: 3,
      ff: 6
    }
    this.weapons = [
      new Weapon('fleshshredder', new AssaultWeapon(new ExtraAttacks('+1')))
    ]
  }
}

export class DaemonicHordesSeekerChariotFollowerUnit extends DaemonicHordesFollowerUnit {
  constructor () {
    super(50, 3, 9)

    this.rules = [
      new InvulnerableSave(),
      new Walker(),
      new FirstStrike()
    ]
    this.stats = {
      type: 'AV',
      speed: 30,
      armour: 5,
      cc: 3,
      ff: 6
    }
    this.weapons = [
      new Weapon('fleshshredder', new AssaultWeapon(new ExtraAttacks('+1')))
    ]
  }
}

export class DaemonicHordesKeeperOfSecrets extends Unit {
  constructor () {
    super(200, 1)

    this.rules = [
      new DamageCapacity(3),
      new Commander(),
      new Leader(),
      new ReinforcedArmour(),
      new InvulnerableSave(),
      new Walker(),
      new Inspiring(),
      new Fearless(),
      new CriticalHit('daemonic-hordes-greater-daemon-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 15,
      armour: 4,
      cc: 3,
      ff: 4
    }
    this.weapons = [
      new Weapon('lash-of-torment', new AssaultWeapon(new ExtraAttacks('+1'), new TitanKiller())),
      new Weapon('gaze-of-slaanesh', new SmallArms('15cm', new FirstStrike(), new ExtraAttacks('+1'), new MacroWeapon()))
    ]
  }
}

export class DaemonicHordesKeeperOfSecretsHordeUnit extends DaemonicHordesKeeperOfSecrets {
  constructor () {
    super()

    this.max = 3
  }
}

export class DaemonicHordesHeraldOfTzeench extends DaemonicHordesDaemonicOverlord {
  constructor () {
    super(100, 1)

    this.rules = [
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('sorcerous-blast', new SmallArms('15cm', new ExtraAttacks('+1'), new MacroWeapon())),
      new MultipleChoiceWeapon(
        new WeaponBlank(),
        new WeaponBlank('daemonic-overlord')
      )
    ]
  }
}

export class DaemonicHordesDaemonPrinceOfTzeench extends DaemonicHordesDaemonPrince {
  constructor () {
    super(150, 1)

    this.rules = [
      new Commander(),
      new Leader(),
      new Fearless(),
      new ReinforcedArmour(),
      new Inspiring(),
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 3,
      ff: 3
    }
    this.weapons = [
      new Weapon('warm-tempest', new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+2'))),
      new MultipleChoiceWeapon(
        new WeaponBlank(),
        new WeaponBlank('wings', new StatsModifier({
          speed: 15,
          armour: 1
        }))
      ),
      new MultipleChoiceWeapon(
        new WeaponBlank(),
        new WeaponBlank('daemonic-overlord')
      )
    ]
  }
}

export class DaemonicHordesTzeenchHordeLeader extends MultipleChoiceUnit {
  constructor () {
    super(
      new DaemonicHordesHeraldOfTzeench(),
      new DaemonicHordesDaemonPrinceOfTzeench()
    )
  }
}

export class DaemonicHordesHorrorsOfTzeench extends Unit {
  constructor () {
    super(25, 6, 12)

    this.rules = [
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 3
    }
    this.weapons = [
      new Weapon('daemonic-fire', new SmallArms('15cm'))
    ]
  }
}

export class DaemonicHordesFlamersOfTzeench extends Unit {
  constructor () {
    super(25, 1, 6)

    this.rules = [
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
      new Weapon('flames', new SmallArms('15cm', new ExtraAttacks('+1')))
    ]
  }
}

export class DaemonicHordesFlamersOfTzeenchFollowerUnit extends DaemonicHordesFollowerUnit {
  constructor () {
    super(25, 3, 9)

    this.rules = [
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
      new Weapon('flames', new SmallArms('15cm', new ExtraAttacks('+1')))
    ]
  }
}

export class DaemonicHordesScreamersOfTzeench extends Unit {
  constructor () {
    super(25, 1, 6)

    this.rules = [
      new InvulnerableSave(),
      new JumpPacks()
    ]
    this.stats = {
      type: 'INF',
      speed: 30,
      armour: 5,
      cc: 3,
      ff: 6
    }
    this.weapons = [
      new Weapon('fangs-and-claws', new AssaultWeapon())
    ]
  }
}

export class DaemonicHordesScreamersOfTzeenchFollowerUnit extends DaemonicHordesFollowerUnit {
  constructor () {
    super(25, 3, 9)

    this.rules = [
      new InvulnerableSave(),
      new JumpPacks()
    ]
    this.stats = {
      type: 'INF',
      speed: 30,
      armour: 5,
      cc: 3,
      ff: 6
    }
    this.weapons = [
      new Weapon('fangs-and-claws', new AssaultWeapon())
    ]
  }
}

export class DaemonicHordesBurningChariotOfTzeench extends Unit {
  constructor () {
    super(50, 1, 6)

    this.rules = [
      new InvulnerableSave(),
      new Walker(),
      new FirstStrike()
    ]
    this.stats = {
      type: 'AV',
      speed: 30,
      armour: 5,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('exalted-flamer',
        new RangedWeapon('30cm', new MultipleShot('D3x', new AntiTank('5+'))),
        new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1'))
      )
    ]
  }
}

export class DaemonicHordesBurningChariotOfTzeenchFollowerUnit extends DaemonicHordesFollowerUnit {
  constructor () {
    super(50, 3, 9)

    this.rules = [
      new InvulnerableSave(),
      new Walker(),
      new FirstStrike()
    ]
    this.stats = {
      type: 'AV',
      speed: 30,
      armour: 5,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('exalted-flamer',
        new RangedWeapon('30cm', new MultipleShot('D3x', new AntiTank('5+'))),
        new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1'))
      )
    ]
  }
}

export class DaemonicHordesLordOfChange extends Unit {
  constructor () {
    super(200, 1)

    this.rules = [
      new DamageCapacity(3),
      new Commander(),
      new Leader(),
      new ReinforcedArmour(),
      new InvulnerableSave(),
      new Walker(),
      new Inspiring(),
      new Fearless(),
      new JumpPacks(),
      new CriticalHit('daemonic-hordes-greater-daemon-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 30,
      armour: 4,
      cc: 5,
      ff: 3
    }
    this.weapons = [
      new Weapon('bedlam-staff', new AssaultWeapon(new ExtraAttacks('+1'), new MacroWeapon())),
      new Weapon('withering-gaze',
        new SmallArms('15cm', new ExtraAttacks('+1'), new MacroWeapon()),
        new RangedWeapon('45cm', new MultipleShot('2x', new MacroWeapon('3+')))
      )
    ]
  }
}

export class DaemonicHordesLordOfChangeHordeUnit extends DaemonicHordesLordOfChange {
  constructor () {
    super()

    this.max = 3
  }
}

export class DaemonicHordesChaosFury extends Unit {
  constructor () {
    super(25, 1, 3)

    this.rules = [
      new InvulnerableSave(),
      new JumpPacks(),
      new Scout()
    ]
    this.stats = {
      type: 'INF',
      speed: 30,
      armour: 6,
      cc: 4,
      ff: 6
    }
    this.weapons = [
      new Weapon('fangs-and-claws', new AssaultWeapon(new ExtraAttacks('+1'), new MacroWeapon())),
      new Weapon('aerial-assault', new RangedWeapon('30cm', new AntiAircraft('6+')))
    ]
  }
}

export class DaemonicHordesChaosUndividedFuryFlightUnit extends DaemonicHordesChaosFury {
  constructor () {
    super()

    this.min = 6
    this.max = 8
    this.quantity = 6
  }
}

export class DaemonicHordesChaosSpawn extends Unit {
  constructor () {
    super(50, 1, 3)

    this.rules = [
      new InvulnerableSave(),
      new Fearless()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 3,
      ff: 6
    }
    this.weapons = [
      new Weapon('chaos-spawn-mutations', new AssaultWeapon(new ExtraAttacks('+D3')))
    ]
  }
}

export class DaemonicHordesChaosUndividedSpawnPackUnit extends DaemonicHordesChaosSpawn {
  constructor () {
    super()

    this.min = 4
    this.max = 6
    this.quantity = 4
  }
}

export class DaemonicHordesSoulGrinder extends Unit {
  constructor () {
    super(75, 1, 3)

    this.rules = [
      new InvulnerableSave(),
      new Beserk(),
      new Walker()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 3,
      ff: 4
    }
    this.weapons = [
      new Weapon('harvester-claws',
        new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1')),
        new SmallArms('15cm', new ExtraAttacks('+2'))
      ),
      new Weapon('phlegm', new SmallArms('15cm', new ExtraAttacks('+2'))),
      new Weapon('vomit', new RangedWeapon('15cm', new AntiPersonnel('3+'), new IgnoreCover()))
    ]
  }
}

export class DaemonicHordesChaosUndividedSoulGrinderManipleUnit extends DaemonicHordesSoulGrinder {
  constructor () {
    super()

    this.min = 4
    this.max = 6
    this.quantity = 4
  }
}

export class DaemonicHordesChaosAltar extends Unit {
  constructor () {
    super(100, 1)

    this.rules = [
      new DamageCapacity(3),
      new ReinforcedArmour(),
      new InvulnerableSave(),
      new Fearless(),
      new Inspiring(),
      new CriticalHit('daemonic-hords-chaos-altar-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('arcane-tech', new RangedWeapon('45cm', new MultipleShot('D3x', new AntiPersonnel('4+'), new AntiTank('4+'), new AntiAircraft('4+'))))
    ]
  }
}

withType(DaemonicHordesWarpRift)
withType(DaemonicHordesHeraldOfKhorne)
withType(DaemonicHordesDaemonPrinceOfKhorne)
withType(DaemonicHordesKhorneHordeLeader)
withType(DaemonicHordesBloodletters)
withType(DaemonicHordesFleshHounds)
withType(DaemonicHordesFleshHoundsFollowerUnit)
withType(DaemonicHordesBloodcrushers)
withType(DaemonicHordesBloodcrushersFollowerUnit)
withType(DaemonicHordesSkullCannonOfKhorne)
withType(DaemonicHordesSkullCannonOfKhorneFollowerUnit)
withType(DaemonicHordesBloodThirster)
withType(DaemonicHordesBloodThirsterHordeUnit)
withType(DaemonicHordesHeraldOfNurgle)
withType(DaemonicHordesDaemonPrinceOfNurgle)
withType(DaemonicHordesNurgleHordeLeader)
withType(DaemonicHordesPlagueBearers)
withType(DaemonicHordesNurglings)
withType(DaemonicHordesNurglingsFollowerUnit)
withType(DaemonicHordesBeastsOfNurgle)
withType(DaemonicHordesBeastsOfNurgleFollowerUnit)
withType(DaemonicHordesPlagueDrones)
withType(DaemonicHordesPlagueDronesFollowerUnit)
withType(DaemonicHordesGreatUncleanOne)
withType(DaemonicHordesGreatUncleanOneHordeUnit)
withType(DaemonicHordesHeraldOfSlaanesh)
withType(DaemonicHordesDaemonPrinceOfSlaanesh)
withType(DaemonicHordesSlaaneshHordeLeader)
withType(DaemonicHordesDaemonettes)
withType(DaemonicHordesFiendsOfSlaanesh)
withType(DaemonicHordesFiendsOfSlaaneshFollowerUnit)
withType(DaemonicHordesSeekersOfSlaanesh)
withType(DaemonicHordesSeekersOfSlaaneshFollowerUnit)
withType(DaemonicHordesSeekerChariot)
withType(DaemonicHordesSeekerChariotFollowerUnit)
withType(DaemonicHordesKeeperOfSecrets)
withType(DaemonicHordesKeeperOfSecretsHordeUnit)
withType(DaemonicHordesHeraldOfTzeench)
withType(DaemonicHordesDaemonPrinceOfTzeench)
withType(DaemonicHordesTzeenchHordeLeader)
withType(DaemonicHordesHorrorsOfTzeench)
withType(DaemonicHordesFlamersOfTzeench)
withType(DaemonicHordesFlamersOfTzeenchFollowerUnit)
withType(DaemonicHordesScreamersOfTzeench)
withType(DaemonicHordesScreamersOfTzeenchFollowerUnit)
withType(DaemonicHordesBurningChariotOfTzeench)
withType(DaemonicHordesBurningChariotOfTzeenchFollowerUnit)
withType(DaemonicHordesLordOfChange)
withType(DaemonicHordesLordOfChangeHordeUnit)
withType(DaemonicHordesChaosFury)
withType(DaemonicHordesChaosUndividedFuryFlightUnit)
withType(DaemonicHordesChaosSpawn)
withType(DaemonicHordesChaosUndividedSpawnPackUnit)
withType(DaemonicHordesSoulGrinder)
withType(DaemonicHordesChaosUndividedSoulGrinderManipleUnit)
withType(DaemonicHordesChaosAltar)
