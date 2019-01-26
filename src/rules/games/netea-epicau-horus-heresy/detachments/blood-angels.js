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
  constructor () {
    super([
      new BloodAngelsPrimarch(),
      new BloodAngelsBodyguardSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultClaw()
      )
    ], [
      new Unique()
    ])
  }
}

withType(BloodAngelsPrimarchDetachment)
