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
    this.link = 'http://tp.net-armageddon.org/tournament-pack#reinforced-armour'
  }
}

export class ThickRearArmour {
  constructor () {
    this.name = 'thick-rear-armour'
    this.link = 'http://tp.net-armageddon.org/tournament-pack#thick-rear-armour'
  }
}

export class JumpPacks {
  constructor () {
    this.name = 'jump-packs'
    this.link = 'http://tp.net-armageddon.org/tournament-pack#jump-packs'
  }
}

export class Scout {
  constructor () {
    this.name = 'scout'
    this.link = 'http://tp.net-armageddon.org/tournament-pack#scouts'
  }
}

export class Skimmer {
  constructor () {
    this.name = 'skimmer'
    this.link = 'http://tp.net-armageddon.org/tournament-pack#skimmers'
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
    this.link = 'http://tp.net-armageddon.org/tournament-pack#mounted'
  }
}

export class Infiltrator {
  constructor () {
    this.name = 'infiltrator'
    this.link = 'http://tp.net-armageddon.org/tournament-pack#infiltrators'
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
    this.link = 'http://tp.net-armageddon.org/tournament-pack#fearless'
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
    this.link = 'http://tp.net-armageddon.org/tournament-pack#supreme-commanders'
  }
}

export class Inspiring {
  constructor () {
    this.name = 'inspiring'
    this.link = 'http://tp.net-armageddon.org/tournament-pack#inspiring'
  }
}

export class InvulnerableSave {
  constructor (amount) {
    this.name = 'invulnerable-save'
    this.type = `Invulnerable Save${amount ? `(${amount})` : ''}`
    this.link = 'http://tp.net-armageddon.org/tournament-pack#invulnerable-saves'
  }
}

export class InvulnerableSaveCCOnly {
  constructor (amount) {
    this.name = 'invulnerable-save-cc-only'
    this.type = `Invulnerable Save Against CC Generated Hits${amount ? ` (${amount})` : ''}`
    this.link = 'http://tp.net-armageddon.org/tournament-pack#invulnerable-saves'
  }
}

export class Walker {
  constructor () {
    this.name = 'walker'
    this.link = 'http://tp.net-armageddon.org/tournament-pack#walkers'
  }
}

export class Planetfall {
  constructor () {
    this.name = 'planetfall'
    this.link = 'http://tp.net-armageddon.org/tournament-pack#planetfall'
  }
}

export class Commander {
  constructor () {
    this.name = 'commander'
    this.link = 'http://tp.net-armageddon.org/tournament-pack#commanders'
  }
}

export class Leader {
  constructor () {
    this.name = 'leader'
    this.link = 'http://tp.net-armageddon.org/tournament-pack#leaders'
  }
}

export class DamageCapacity {
  constructor (capacity) {
    this.type = `Damage Capacity(${capacity})`
    this.link = 'http://tp.net-armageddon.org/tournament-pack#war-engine-damage-capacity'
  }
}

export class CriticalHit extends Notes {
  constructor (effect) {
    super('critical-hit', effect, 'http://tp.net-armageddon.org/tournament-pack#critical-hits')
  }
}

export class SlowAndSteady {
  constructor () {
    this.name = 'slow-and-steady'
    this.link = 'http://tp.net-armageddon.org/tournament-pack#slow-and-steady'
  }
}

export class PlusTransports {

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

export class Singularity {
  constructor () {
    this.name = 'singularity'
    this.link = 'http://epicau.com/mw/index.php/Mechanicum_Taghmata#Special_Rules'
  }
}

export class Fortifications {
  constructor () {
    this.name = 'fortifications'
    this.link = 'http://tp.net-armageddon.org/tournament-pack#terrain-effects'
  }
}

export class VoidShields {
  constructor (num) {
    this.name = 'void-shields'
    this.type = `Void Shields(${num})`
    this.link = 'http://tp.net-armageddon.org/tournament-pack#imperial-void-shields'
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
    this.link = 'http://tp.net-armageddon.org/tournament-pack#pin-point-attacks'
  }
}

export class ImplacableAdvance {
  constructor () {
    this.name = 'implacable-advance'
    this.link = 'http://tp.net-armageddon.org/tournament-pack#implacable-advance'
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
    this.link = 'http://tp.net-armageddon.org/tournament-pack#teleport'
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
