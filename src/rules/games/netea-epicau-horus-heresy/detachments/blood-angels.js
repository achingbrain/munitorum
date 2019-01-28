import {
  TransportOption,
  DropAssault,
  AssaultClaw
} from '../upgrades'
import {
  BloodAngelsPrimarch,
  BloodAngelsBodyguardSquad
} from '../units/blood-angels'
import {
  Unique
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../../../../utils/with-type'

export class BloodAngelsPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new BloodAngelsPrimarch(this),
      new BloodAngelsBodyguardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultClaw()
      )
    )
    this.setConstraints(
      new Unique()
    )
  }
}

withType(BloodAngelsPrimarchDetachment)
