'use strict'

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
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#reinforced-armour'
  }
}

export class ThickRearArmour {
  constructor () {
    this.name = 'thick-rear-armour'
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#thick-rear-armour'
  }
}

export class JumpPacks {
  constructor () {
    this.name = 'jump-packs'
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#jump-packs'
  }
}

export class Scout {
  constructor () {
    this.name = 'scout'
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#scouts'
  }
}

export class Skimmer {
  constructor () {
    this.name = 'skimmer'
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#skimmers'
  }
}

export class ExploratoryAuguryWeb {
  constructor () {
    this.name = 'exploratory-augury-web'
    this.link = 'http://epicau.com/mw/index.php/Special_Rules'
  }
}

export class Mounted {
  constructor () {
    this.name = 'mounted'
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#mounted'
  }
}

export class Infiltrator {
  constructor () {
    this.name = 'infiltrator'
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#infiltrators'
  }
}

export class DemiGod {
  constructor () {
    this.name = 'demi-god'
    this.link = 'http://epicau.com/mw/index.php/Special_Rules'
  }
}

export class Fearless {
  constructor () {
    this.name = 'fearless'
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#fearless'
  }
}

export class Beserk {
  constructor () {
    this.name = 'beserk'
    this.link = 'http://epicau.com/mw/index.php/Special_Rules'
  }
}

export class SupremeCommander {
  constructor () {
    this.name = 'supreme-commander'
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#supreme-commanders'
  }
}

export class Inspiring {
  constructor () {
    this.name = 'inspiring'
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#inspiring'
  }
}

export class InvulnerableSave {
  constructor (amount) {
    this.name = 'invulnerable-save'
    this.type = `Invulnerable Save${amount ? `(${amount})` : ''}`
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#invulnerable-saves'
  }
}

export class InvulnerableSaveCCOnly {
  constructor (amount) {
    this.name = 'invulnerable-save-cc-only'
    this.type = `Invulnerable Save Against CC Generated Hits${amount ? ` (${amount})` : ''}`
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#invulnerable-saves'
  }
}

export class Walker {
  constructor () {
    this.name = 'walker'
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#walkers'
  }
}

export class Planetfall {
  constructor () {
    this.name = 'planetfall'
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#planetfall'
  }
}

export class Commander {
  constructor () {
    this.name = 'commander'
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#commanders'
  }
}

export class Leader {
  constructor () {
    this.name = 'leader'
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#leaders'
  }
}

export class DamageCapacity {
  constructor (capacity) {
    this.type = `Damage Capacity(${capacity})`
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#war-engine-damage-capacity'
  }
}

export class CriticalHit extends Notes {
  constructor (effect) {
    super('critical-hit', effect, 'https://www.net-armageddon.org/tp/tournament-pack/#critical-hits')
  }
}

export class SlowAndSteady {
  constructor () {
    this.name = 'slow-and-steady'
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#slow-and-steady'
  }
}

export class CortexController {
  constructor () {
    this.name = 'cortex-controller'
    this.link = 'http://epicau.com/mw/index.php/Mechanicum_Taghmata#Special_Rules'
  }
}

export class Automaton {
  constructor () {
    this.name = 'automaton'
    this.link = 'http://epicau.com/mw/index.php/Mechanicum_Taghmata#Special_Rules'
  }
}

export class CyberneticaCortex {
  constructor () {
    this.name = 'cybernetica-cortex'
    this.link = 'http://epicau.com/mw/index.php/Mechanicum_Taghmata#Special_Rules'
  }
}

export class Fortifications {
  constructor () {
    this.name = 'fortifications'
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#terrain-effects'
  }
}

export class VoidShields {
  constructor (num) {
    this.name = 'void-shields'
    this.type = `Void Shields(${num})`
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#imperial-void-shields'
  }
}

export class Ferocity {
  constructor () {
    this.name = 'ferocity'
    this.link = 'http://epicau.com/mw/index.php/Special_Rules'
  }
}

export class SecondaryTargetingProtocols {
  constructor () {
    this.name = 'secondary-targeting-protocols'
    this.link = 'http://epicau.com/mw/index.php/Legio_Titanicus#Special_Rules'
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
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#pin-point-attacks'
  }
}

export class ImplacableAdvance {
  constructor () {
    this.name = 'implacable-advance'
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#implacable-advance'
  }
}

export class IonShield {
  constructor (num) {
    this.name = 'ion-shield'
    this.type = `Ion Shield(${num})`
    this.link = 'http://epicau.com/mw/index.php/Knight_Household#Special_Rules'
  }
}

export class IonGauntlet {
  constructor () {
    this.name = 'ion-gauntlet'
    this.link = 'http://epicau.com/mw/index.php/Knight_Household#Special_Rules'
  }
}

export class Teleport {
  constructor () {
    this.name = 'teleport'
    this.link = 'https://www.net-armageddon.org/tp/tournament-pack/#teleport'
  }
}

export class Instability {
  constructor () {
    this.name = 'instability'
    this.link = 'http://epicau.com/mw/index.php/Daemonic_Hordes#Special_Rules'
  }
}

export class ChaosGate {
  constructor () {
    this.name = 'chaos-gate'
    this.link = 'http://epicau.com/mw/index.php/Daemonic_Hordes#Special_Rules'
  }
}

export class ATalentForMurder {
  constructor () {
    this.name = 'a-talent-for-murder'
    this.link = 'http://epicau.com/mw/index.php/Special_Rules'
  }
}
