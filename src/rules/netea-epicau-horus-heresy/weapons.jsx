'use strict'

import React from 'react'

export class MultipleChoiceWeapon {
  constructor (...options) {
    this.options = options
  }
}

export class Weapon {
  constructor (name, ...profiles) {
    this.name = name

    this.pointsModifier = profiles
      .find(profile => profile instanceof PointsModifier)
    this.statsModifier = profiles
      .find(profile => profile instanceof StatsModifier)

    this.profiles = profiles
      .filter(profile => !(profile instanceof PointsModifier) && !(profile instanceof StatsModifier))
  }

  getCost () {
    if (this.pointsModifier) {
      return this.pointsModifier.points
    }

    return 0
  }
}

export class WeaponSet {
  constructor (...options) {
    this.options = options
  }

  getCost () {
    return 0
  }
}

export class StatsModifier {
  constructor (mods) {
    this.mods = mods
  }

  modify (stats) {
    const output = {
      ...stats
    }

    Object.keys(this.mods).forEach(key => {
      output[key] += this.mods[key]
    })

    return output
  }
}

export class PointsModifier {
  constructor (points) {
    this.points = points
  }

  modify (cost) {
    return cost + this.points
  }
}

export class WeaponBlank extends Weapon {
  constructor (name = 'none', ...options) {
    super(name, ...options)
  }
}

export class OptionalWeapons extends MultipleChoiceWeapon {
  constructor (...options) {
    super()

    options.unshift(new WeaponBlank())
    this.options = options
  }
}

export class MultipleShot {
  constructor (quantity, ...firepower) {
    this.type = [quantity].concat(firepower)
  }
}

export class MacroWeapon {
  constructor (toHit) {
    this.type = 'MW' + (toHit ? `(${toHit})` : '')
    this.name = 'macro-weapon'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#macro-weapons'
  }
}

export class TitanKiller {
  constructor (quantity = 1) {
    this.type = `TK(${quantity})`
    this.name = 'titan-killer'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#titan-killers'
  }
}

export class ExtraAttacks {
  constructor (quantity = '+1') {
    this.type = `EA(${quantity})`
    this.name = 'extra-attacks'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#extra-attacks'
  }
}

export class AntiPersonnel {
  constructor (toHit) {
    this.type = `AP(${toHit})`
    this.name = 'anti-personnel'
  }
}

export class AntiTank {
  constructor (toHit) {
    this.type = `AT(${toHit})`
    this.name = 'anti-tank'
  }
}

export class AntiAircraft {
  constructor (toHit) {
    this.type = `AA(${toHit})`
    this.name = 'anti-aircraft'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#anti-aircraft-weapons'
  }
}

export class RangedWeapon {
  constructor (range, ...firepower) {
    this.range = range
    this.firepower = firepower
  }
}

export class AssaultWeapon {
  constructor (...firepower) {
    this.range = 'Base contact'
    this.firepower = firepower
    this.type = '(assault weapons)'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#resolve-attacks'
  }
}

export class SmallArms {
  constructor (range, ...firepower) {
    this.range = range

    if (this.range.substring(0, 1) !== '(') {
      this.range = `(${range})`
    }

    this.firepower = firepower
    this.type = '(small arms)'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#resolve-attacks'
  }
}

export class Disrupt {
  constructor () {
    this.type = 'D'
    this.name = 'disrupt'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#disrupt'
  }
}

export class Sniper {
  constructor () {
    this.type = 'S'
    this.name = 'sniper'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#sniper'
  }
}

export class IgnoreCover {
  constructor () {
    this.type = 'IC'
    this.name = 'ignore-cover'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#ignore-cover'
  }
}

export class Lance {
  constructor () {
    this.type = 'L'
    this.name = 'lance'
    this.title = 'Lance'
    this.text = (
      <>
        A weapon with the Lance special rule is designed to destroy heavily armoured targets.<br /><br />
        An Armoured Vehicle (AV) unit with the Reinforced Armour special rule that is hit by a Lance weapon is not allowed to re-roll its saving throw.<br /><br />
        This special rule does not affect Infantry (INF) or Light Vehicles (LV) units.
      </>
    )
  }
}

export class IndirectFire {
  constructor () {
    this.type = 'Ind'
    this.name = 'indirect-fire'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#indirect-fire'
  }
}

export class BarragePoints {
  constructor (points) {
    this.type = `BP(${points})`
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#barrages'
  }
}

// 90 deg forward
export class FixedForwardFireArc {
  constructor () {
    this.type = 'FxF'
    this.name = 'fixed-forward-fire-arc'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#weapon-fire-arcs'
  }
}

export class SingleShot {
  constructor () {
    this.type = 'SS'
    this.name = 'single-shot'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#single-shot'
  }
}

export class Feedback {
  constructor () {
    this.name = 'feedback'
    this.title = 'Feedback'
    this.text = (
      <>
        If a unit firing a weapon with the Feedback special rule fails to cause damage when hitting an enemy unit, roll a D6 for each successful armour save the enemy unit made.<br /><br />
        The firing unit takes a blast marker for each 1 rolled.'
      </>
    )
  }
}

// 180 deg forward
export class ForwardFireArc {
  constructor () {
    this.type = 'FwA'
    this.name = 'forward-fire-arc'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#weapon-fire-arcs'
  }
}

export class LeftFireArc {
  constructor () {
    this.type = 'Left'
    this.name = 'left-fire-arc'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#weapon-fire-arcs'
  }
}

export class RightFireArc {
  constructor () {
    this.type = 'Right'
    this.name = 'right-fire-arc'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#weapon-fire-arcs'
  }
}

export class RearFireArc {
  constructor () {
    this.type = 'Rear'
    this.name = 'rear-fire-arc'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#weapon-fire-arcs'
  }
}

export class FirstStrike {
  constructor () {
    this.type = 'FS'
    this.name = 'first-strike'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#first-strike'
  }
}

export class SlowFiring {
  constructor () {
    this.type = 'Slw'
    this.name = 'slow-firing'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#slow-firing'
  }
}

export class Or {
  constructor () {
    this.type = 'Or'
  }
}

export class SpecialWeapon extends Weapon {
  constructor (name, note) {
    super(name)

    this.note = note
  }
}

export class IgnoreShields {
  constructor () {
    this.type = 'Ignore Shields'
    this.name = 'ignore-shields'
  }
}

export class Fleshbane {
  constructor () {
    this.type = 'Fb'
    this.name = 'fleshbane'
    this.title = 'Fleshbane'
    this.text = (
      <>
        Some weapons utilise ammunition that is exceptionally effective against infantry units or are specifically designed to rend flesh. Ammunition types might include radiological, biological or chemical munitions, while other equipment might entail serrated blades and poison.<br /><br />
        A hit generated from a "Fleshbane" weapon attack reduces the target's saving throw by one (- 1).<br /><br />
        This modifier only applies to a hit generated by the Anti Personnel (AP), Close Combat (CC) or Firefight (FF) to hit value of a "Fleshbane" weapon and that is allocated against Infantry (INF) or (LV) units.<br /><br />
        This effect is ignored when hitting or allocated against Armored Vehicles (AV) or War Engines (WE).
      </>
    )
  }
}

export class Armourbane {
  constructor () {
    this.type = 'Ab'
    this.name = 'armourbane'
    this.title = 'Armorbane'
    this.text = (
      <>
        Armorbane weaponry is tailored for the destruction of Armored Vehicles. Whether high-velocity sabot rounds or super hot plasma, hits generated by Armorbane weapons reduce the target's saving throw by one (-1).<br /><br />
        This modifier only applies to the hits generated using the Anti-Tank (AT), Close Combat (CC) or Firefight (FF) to hit value or the Armorbane weapon and that is allocated against Light Vehicles (LV), Armoured Vehicles (AV) or War Engines (WE).<br /><br />
        This effect is ignored when used against Infantry (INF).
      </>
    )
  }
}

export class Siege {
  constructor () {
    this.type = 'Si'
    this.name = 'siege'
    this.title = 'Siege'
    this.text = (
      <>
        Siege weapons are designed to break fortifications into rubble.<br /><br />
        A weapon with the Siege special rule gains the Macro-Weapon special rule when attacking a 0cm speed unit.<br /><br />
        Otherwise, this special rule has no effect.
      </>
    )
  }
}

export class Singularity {
  constructor () {
    this.type = 'Sg'
    this.name = 'singularity'
    this.title = 'Singularity'
    this.text = (
      <>
        Singularity weapons are capable of generating a continuous discharge of energy.<br /><br />
        When rolling to hit, with a Singularity weapon, any unmodified to hit roll of six (6), generates an additional attack die.<br /><br />
        Successive rolls of a natural six can generate additional dice.
      </>
    )
  }
}

export class ScoutTitanWeapons {
  constructor () {
    this.options = [
      new Weapon('vulcan-mega-bolter', new RangedWeapon('45cm', new MultipleShot('4x', new AntiPersonnel('3+'), new AntiTank('5+')))),
      new Weapon('plasma-blastgun', new RangedWeapon('45cm', new MultipleShot('2x', new MacroWeapon('2+')), new SlowFiring())),
      new Weapon('turbolaser-destructor', new PointsModifier(25), new RangedWeapon('60cm', new MultipleShot('4x', new AntiPersonnel('5+'), new AntiTank('3+')))),
      new Weapon('inferno-gun', new RangedWeapon('30cm', new BarragePoints(3), new IgnoreCover()))
    ]
  }
}

export class BattleTitanWeapons {
  constructor () {
    this.options = [
      new Weapon('apocalypse-missile-launcher',
        new PointsModifier(25),
        new RangedWeapon('60cm', new BarragePoints(3), new Disrupt())
      ),
      new SpecialWeapon('corvus-assault-pod', 'corvus-assault-pod-notes'),
      new Weapon('gatling-blaster',
        new PointsModifier(25),
        new RangedWeapon('60cm', new MultipleShot('4x', new AntiPersonnel('4+'), new AntiTank('4+')))
      ),
      new Weapon('laser-blaster',
        new PointsModifier(50),
        new RangedWeapon('60cm', new MultipleShot('6x', new AntiPersonnel('5+'), new AntiTank('3+')))
      ),
      new Weapon('laser-burner',
        new SmallArms('15cm', new ExtraAttacks('+2')),
        new AssaultWeapon(new ExtraAttacks('+4'))
      ),
      new Weapon('melta-cannon',
        new PointsModifier(50),
        new RangedWeapon('30cm', new MacroWeapon('2+'), new TitanKiller('D3')),
        new SmallArms('15cm', new ExtraAttacks('+1'), new TitanKiller('D6'))
      ),
      new Weapon('quake-cannon',
        new PointsModifier(75),
        new RangedWeapon('90cm', new BarragePoints(3), new MacroWeapon())
      ),
      new Weapon('plasma-cannon',
        new PointsModifier(25),
        new RangedWeapon('60cm', new MultipleShot('3x', new MacroWeapon('2+')), new SlowFiring())
      ),
      new Weapon('plasma-destructor',
        new PointsModifier(75),
        new RangedWeapon('75cm', new MultipleShot('5x', new MacroWeapon('2+')), new SlowFiring())
      ),
      new Weapon('volcano-cannon',
        new PointsModifier(50),
        new RangedWeapon('90cm', new MacroWeapon('2+'), new TitanKiller('D3'))
      )
    ]
  }
}

export class BattleTitanCarapaceWeapons {
  constructor () {
    this.options = [
      new SpecialWeapon('carapace-landing-pad', 'carapace-landing-pad-notes'),
      new Weapon('support-missile-vortex',
        new PointsModifier(75),
        new RangedWeapon('Unlimited', new BarragePoints(3), new MacroWeapon(), new TitanKiller(), new IgnoreCover(), new SingleShot(), new IndirectFire())
      ),
      new Weapon('support-missile-warp',
        new PointsModifier(75),
        new RangedWeapon('Unlimited', new MacroWeapon('2+'), new TitanKiller('D3'), new IgnoreShields(), new SingleShot(), new IndirectFire())
      ),
      new Weapon('support-missile-deathstrike',
        new PointsModifier(75),
        new RangedWeapon('Unlimited', new MacroWeapon('2+'), new TitanKiller('D6'), new SingleShot(), new IndirectFire())
      ),
      new Weapon('support-missile-barrage',
        new PointsModifier(75),
        new RangedWeapon('Unlimited', new BarragePoints(10), new Disrupt(), new SingleShot(), new IndirectFire())
      )
    ]
  }
}

export class BattleTitanArmWeapons {
  constructor () {
    this.options = [
      new Weapon('close-combat-weapon',
        new PointsModifier(25), new AssaultWeapon(new ExtraAttacks('+3'), new TitanKiller('D3'))
      )
    ]
  }
}

export class TitanWeapon extends MultipleChoiceWeapon {
  constructor (mount, ...types) {
    super()

    this.mount = mount
    this.options = types.reduce((acc, curr) => {
      return acc.concat(curr.options)
    }, [])
  }
}
