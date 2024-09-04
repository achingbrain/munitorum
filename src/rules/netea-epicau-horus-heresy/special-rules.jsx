'use strict'

import React from 'react'

export class Notes {
  constructor (name, notes, link) {
    this.name = name
    this.notes = notes
    this.link = link
  }
}

export class ReinforcedArmour {
  constructor () {
    this.name = 'reinforced-armour'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#reinforced-armour'
  }
}

export class ThickRearArmour {
  constructor () {
    this.name = 'thick-rear-armour'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#thick-rear-armour'
  }
}

export class JumpPacks {
  constructor () {
    this.name = 'jump-packs'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#jump-packs'
  }
}

export class Scout {
  constructor () {
    this.name = 'scout'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#scouts'
  }
}

export class Skimmer {
  constructor () {
    this.name = 'skimmer'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#skimmers'
  }
}

export class ExploratoryAuguryWeb {
  constructor () {
    this.name = 'exploratory-augury-web'
    this.title = 'Exploratory Augury Web'
    this.text = (
      <>
         Friendly units entering play via the Teleport special rule within 15cm of a friendly unit with the Exploratory Augury Web do not roll for blast markers.
      </>
    )
  }
}

export class Mounted {
  constructor () {
    this.name = 'mounted'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#mounted'
  }
}

export class Infiltrator {
  constructor () {
    this.name = 'infiltrator'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#infiltrators'
  }
}

export class DemiGod {
  constructor () {
    this.name = 'demi-god'
    this.title = 'Demi God'
    this.text = (
      <>
        A Demi-God unit has three wounds similar to a WE, however, a Demi-God wound capacity has a number of differences to that of a WE:
        <ul>
          <li>It must maintain a 5cm unit coherency with its formation unless it possesses the Scout special rule</li>
          <li>It can be allocated hits up to its starting wound capacity</li>
          <li>It requires two blast markers to be considered suppressed or broken</li>
          <li>A Demi-God that loses a damage point does not incur a blast marker, however, when a Demi-God's wounds are reduced to zero, the Demi-God unit is destroyed and all friendly formation within 30cm receive two blast markers</li>
          <li>It does not suffer critical hits when it loses a wound and cannot barge other units like a WE. A Demi-God does not roll a number of hit dice equal to its wounds like a WE and cannot elect to use its FF or CC value like a WE</li>
          <li>It counts as the same unit type as their retinue for transport capacity purposes</li>
        </ul>
      </>
    )
  }
}

export class Fearless {
  constructor () {
    this.name = 'fearless'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#fearless'
  }
}

export class Berserk {
  constructor () {
    this.name = 'berserk'
    this.title = 'Berserk'
    this.text = (
      <>
        Some units are taken with a blood rage before or during a battle, this fury makes them nearly uncontrollable, thirsting for wanton death and destruction.<br /><br />
        A unit with the Berserk characteristic may double it's movement distance when conducting an Engage order.
      </>
    )
  }
}

export class SupremeCommander {
  constructor () {
    this.name = 'supreme-commander'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#supreme-commanders'
  }
}

export class Inspiring {
  constructor () {
    this.name = 'inspiring'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#inspiring'
  }
}

export class InvulnerableSave {
  constructor (amount) {
    this.name = 'invulnerable-save'
    this.type = `Invulnerable Save${amount ? `(${amount})` : ''}`
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#invulnerable-saves'
  }
}

export class InvulnerableSaveCCOnly {
  constructor (amount) {
    this.name = 'invulnerable-save-cc-only'
    this.type = `Invulnerable Save Against CC Generated Hits${amount ? ` (${amount})` : ''}`
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#invulnerable-saves'
  }
}

export class Walker {
  constructor () {
    this.name = 'walker'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#walkers'
  }
}

export class Planetfall {
  constructor () {
    this.name = 'planetfall'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#planetfall'
  }
}

export class Commander {
  constructor () {
    this.name = 'commander'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#commanders'
  }
}

export class Leader {
  constructor () {
    this.name = 'leader'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#leaders'
  }
}

export class DamageCapacity {
  constructor (capacity) {
    this.type = `Damage Capacity(${capacity})`
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#war-engine-damage-capacity'
  }
}

export class CriticalHit extends Notes {
  constructor (effect) {
    super('critical-hit', effect, 'https://tp.net-armageddon.org/tournament-pack/#critical-hits')
  }
}

export class SlowAndSteady {
  constructor () {
    this.name = 'slow-and-steady'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#slow-and-steady'
  }
}

export class CortexController {
  constructor () {
    this.name = 'cortex-controller'
    this.title = 'Cortex Controller'
    this.text = (
      <>
        Allows any formation containing units with the Cybernetica Cortex rule to operate normally, for the purpose of selecting an action and activating, as long as that formations has a unit within 15cm of a unit with this special rule.
      </>
    )
  }
}

export class Automaton {
  constructor () {
    this.name = 'automaton'
    this.title = 'Automaton'
    this.text = (
      <>
         A formation does not receive a Blast marker when a unit with automaton is destroyed, this includes the extra Blast marker from the first casualty of a crossfire and for units destroyed for being out of formation after a move.<br /><br />
         Automaton units hit by a weapon with disrupt do take a Blast marker however. If a hit is inflicted on an automaton unit because it is in a broken formation which is receiving a Blast marker (see Blast Markers and Broken Formations) then it may attempt to save normally.
      </>
    )
  }
}

export class CyberneticaCortex {
  constructor () {
    this.name = 'cybernetica-cortex'
    this.title = 'Cybernetica Cortex'
    this.text = (
      <>
        Formations containing units with the Cybernetica Cortex rule suffer a -1 initiative penalty and may not perform March or Overwatch actions, if there are no friendly units with the Cortex Controller special rule within 15 cm of the formation.
      </>
    )
  }
}

export class Fortifications {
  constructor () {
    this.name = 'fortifications'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#terrain-effects'
  }
}

export class VoidShields {
  constructor (num) {
    this.name = 'void-shields'
    this.type = `Void Shields(${num})`
    this.title = 'Void Shields'
    this.text = (
      <>
        Some units are protected by void shield generators.<br /><br />
        Each void shield will stop one point of damage and then go down. Do not make armour saves for damage stopped by void shields, nor allocate blast markers.<br /><br />
        Once all of the shields have been knocked down, the unit may be damaged normally and you may make saving throws against any hits that are allocated.<br /><br />
        Hits from close combat ignore void shields but units using their firefight value must first knock down any shields before they can damage the unit.<br /><br />
        Void shields that have been knocked down can be repaired. A unit can repair one downed void shield in the end phase of each turn.<br /><br />
        In addition, if a unit regroups it can use the dice roll to either repair a void shield or remove blast markers (e.g., if you rolled a 2 you could repair 2 shields, remove 2 blast markers or repair 1 shield and remove 1 blast marker).
      </>
    )
  }
}

export class Ferocity {
  constructor () {
    this.name = 'ferocity'
    this.title = 'Ferocity'
    this.text = (
      <>
        Some units are eager to engage an enemy in close quarters.<br /><br />
        A unit with the special rule, Ferocity, may add a single 5cm range increase to their countercharge move during an assault.
      </>
    )
  }
}

export class SecondaryTargetingProtocols {
  constructor () {
    this.name = 'secondary-targeting-protocols'
    this.title = 'Secondary Targeting Protocols'
    this.text = (
      <>
        The description of this rule is missing from the Epic AU PDF
      </>
    )
  }
}

export class Titanic extends Notes {
  constructor () {
    super(null, 'titanic')
  }
}

export class PinPointAttack {
  constructor () {
    this.name = 'pin-point-attack'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#pin-point-attacks'
  }
}

export class ImplacableAdvance {
  constructor () {
    this.name = 'implacable-advance'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#implacable-advance'
  }
}

export class IonShield {
  constructor (num) {
    this.name = 'ion-shield'
    this.type = `Ion Shield(${num})`
    this.title = 'Ion Shield'
    this.text = (
      <>
        Grants a 4+ save vs Normal, MW & TK shooting and FF hits.<br /><br />
        Each point of TK damage must be saved.<br /><br />
        Failed saves may use RA rerolls against the Knights armour if not negated by TK, MW or Lance special rules.<br /><br />
        May not be used in a crossfire.
      </>
    )
  }
}

export class IonGauntlet {
  constructor () {
    this.name = 'ion-gauntlet'
    this.title = 'Ion Gauntlet'
    this.text = (
      <>
        Grants a 4+ save vs Normal, MW & TK shooting and FF hits and a 5+ save against Normal, MW and TK CC hits.<br /><br />
        Each point of TK damage must be saved.<br /><br />
        Failed saves may use RA re-rolls against the Knights armour if not negated by TK, MW or Lance special rules.<br /><br />
        May not be used in a crossfire.
      </>
    )
  }
}

export class Teleport {
  constructor () {
    this.name = 'teleport'
    this.link = 'https://tp.net-armageddon.org/tournament-pack/#teleport'
  }
}

export class Instability {
  constructor () {
    this.name = 'instability'
    this.title = 'Instability'
    this.text = (
      <>
        The power of the Warp is fickle and unpredictable, even for those born of its seething currents.<br /><br />
        Any Daemonic Hordes detachment that fails an initiative test, for any reason, immediately loses 1D3 Lesser Daemons (INF).<br /><br />
        These losses do not cause any Blast markers, though the detachment may break if this causes them to have more Blast markers than units.<br /><br />
        Detachments without Lesser Daemons (INF) are still subject to this rule though, in practice, it has no effect on them.
      </>
    )
  }
}

export class ChaosGate {
  constructor () {
    this.name = 'chaos-gate'
    this.title = 'Chaos Gate'
    this.text = (
      <>
        Chaos Gates are breaches in the walls of reality that allow the forces of Chaos direct access from their foul realms.<br /><br />
        A Chaos Gate included in the army allows the Chaos player to pick up to three other detachments, and keep them within the Warp instead of deploying them normally.<br /><br />
        Any detachments that are kept within the Warp may enter play via the Chaos Gate, by taking an action that allows them to make a move, and then measuring their first move from the centre of the Chaos Gate objective marker.<br /><br />
        No more than one detachment may travel through a Chaos Gate each turn.
      </>
    )
  }
}

export class Brutal {
  constructor () {
    this.name = 'brutal'
    this.title = 'Brutal'
    this.text = (
      <>
        After a formation with a unit(s) that are Brutal win an assault, but before hack downs are calculated, it gains an additional hit for the purposes of calculating hack downs.<br /><br />
        This bonus does not contribute to determining the winner of an assault, the unit is simply more effective at cutting/gunning down fleeing troops.
      </>
    )
  }
}
