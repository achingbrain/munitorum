import {
  TransportOption,
  DropAssault,
  AssaultClaw,
  HeavyTransport,
  Teleport,
  CommanderOption,
  Centurion,
  Praetor
} from '../upgrades'
import {
  WhiteScarsPrimarch,
  WhiteScarsBodyguardSquad,
  WhiteScarsOutriderUnit,
  WhiteScarsScimitarJetbike
} from '../units/white-scars'
import {
  Unique
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../../../../utils/with-type'

export class WhiteScarsPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new WhiteScarsPrimarch(this),
      new WhiteScarsBodyguardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultClaw(),
        new HeavyTransport(),
        new Teleport()
      )
    )
    this.setConstraints(
      new Unique()
    )
  }
}

export class WhiteScarsOutriderDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new WhiteScarsOutriderUnit(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Praetor(),
        new Centurion()
      )
    )
  }
}

export class WhiteScarsSkyHunterAttackSquadron extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new WhiteScarsScimitarJetbike(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Praetor(),
        new Centurion()
      )
    )
  }
}

withType(WhiteScarsPrimarchDetachment)
withType(WhiteScarsOutriderDetachment)
withType(WhiteScarsSkyHunterAttackSquadron)
