import {
  TransportOption,
  Teleport,
  CommanderOption,
  Carrier,
  CaptainGeneral,
  SeniorOfficer
} from '../upgrades'
import {
  LegioCustodesHykanatoiUnit,
  LegioCustodesAgamatus,
  LegioCustodesAquilionTerminator,
  LegioCustodesEphoroiCustodes,
  LegioCustodesSistersOfSilence,
  LegioCustodesDreadnoughtUnit,
  LegioCustodesPallasGravAttackVehicle,
  LegioCustodesCaladiusGravTank,
  LegioCustodesOrionAssaultDropship
} from '../units/legio-custodes'
import LegioCustodesDetachment from './legio-custodes-detachment'
import withType from '../../../../utils/with-type'

export class LegioCustodesHykanatoiDetachment extends LegioCustodesDetachment {
  constructor () {
    super([
      new LegioCustodesHykanatoiUnit()
    ], [
      new TransportOption(
        new Carrier(),
        new Teleport()
      ),
      new CommanderOption(
        new CaptainGeneral(),
        new SeniorOfficer()
      )
    ])
  }
}

export class LegioCustodesAgamatusDetachment extends LegioCustodesDetachment {
  constructor () {
    super([
      new LegioCustodesAgamatus()
    ], [
      new CommanderOption(
        new SeniorOfficer()
      )
    ])
  }
}

export class LegioCustodesAquilionTerminatorDetachment extends LegioCustodesDetachment {
  constructor () {
    super([
      new LegioCustodesAquilionTerminator()
    ], [
      new TransportOption(
        new Carrier(),
        new Teleport()
      ),
      new CommanderOption(
        new CaptainGeneral(),
        new SeniorOfficer()
      )
    ])
  }
}

export class LegioCustodesEphoroiCustodesDetachment extends LegioCustodesDetachment {
  constructor () {
    super([
      new LegioCustodesEphoroiCustodes()
    ], [
      new TransportOption(
        new Carrier(),
        new Teleport()
      )
    ])
  }
}

export class LegioCustodesSistersOfSilenceDetachment extends LegioCustodesDetachment {
  constructor () {
    super([
      new LegioCustodesSistersOfSilence()
    ], [
      new TransportOption(
        new Teleport()
      )
    ])
  }
}

export class LegioCustodesMorotoiDetachment extends LegioCustodesDetachment {
  constructor () {
    super([
      new LegioCustodesDreadnoughtUnit(),
      new LegioCustodesDreadnoughtUnit(),
      new LegioCustodesDreadnoughtUnit(),
      new LegioCustodesDreadnoughtUnit()
    ])
  }
}

export class LegioCustodesPallasGravAttackSquadron extends LegioCustodesDetachment {
  constructor () {
    super([
      new LegioCustodesPallasGravAttackVehicle()
    ])
  }
}

export class LegioCustodesCaladiusGravTankSquadron extends LegioCustodesDetachment {
  constructor () {
    super([
      new LegioCustodesCaladiusGravTank()
    ])
  }
}

export class LegioCustodesOrionAssaultDropshipSquadron extends LegioCustodesDetachment {
  constructor () {
    super([
      new LegioCustodesOrionAssaultDropship()
    ])
  }
}

withType(LegioCustodesHykanatoiDetachment)
withType(LegioCustodesAgamatusDetachment)
withType(LegioCustodesAquilionTerminatorDetachment)
withType(LegioCustodesEphoroiCustodesDetachment)
withType(LegioCustodesSistersOfSilenceDetachment)
withType(LegioCustodesMorotoiDetachment)
withType(LegioCustodesPallasGravAttackSquadron)
withType(LegioCustodesCaladiusGravTankSquadron)
withType(LegioCustodesOrionAssaultDropshipSquadron)
