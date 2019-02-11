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
import withType from '../with-type'

export class LegioCustodesHykanatoiDetachment extends LegioCustodesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegioCustodesHykanatoiUnit(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Carrier(),
        new Teleport()
      ),
      new CommanderOption(
        new CaptainGeneral(),
        new SeniorOfficer()
      )
    )
  }
}

export class LegioCustodesAgamatusDetachment extends LegioCustodesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegioCustodesAgamatus(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new SeniorOfficer()
      )
    )
  }
}

export class LegioCustodesAquilionTerminatorDetachment extends LegioCustodesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegioCustodesAquilionTerminator(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Carrier(),
        new Teleport()
      ),
      new CommanderOption(
        new CaptainGeneral(),
        new SeniorOfficer()
      )
    )
  }
}

export class LegioCustodesEphoroiCustodesDetachment extends LegioCustodesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegioCustodesEphoroiCustodes(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Carrier()
      )
    )
  }
}

export class LegioCustodesSistersOfSilenceDetachment extends LegioCustodesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegioCustodesSistersOfSilence(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Teleport()
      )
    )
  }
}

export class LegioCustodesMorotoiDetachment extends LegioCustodesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegioCustodesDreadnoughtUnit(this),
      new LegioCustodesDreadnoughtUnit(this),
      new LegioCustodesDreadnoughtUnit(this),
      new LegioCustodesDreadnoughtUnit(this)
    )
  }
}

export class LegioCustodesPallasGravAttackSquadron extends LegioCustodesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegioCustodesPallasGravAttackVehicle(this)
    )
  }
}

export class LegioCustodesCaladiusGravTankSquadron extends LegioCustodesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegioCustodesCaladiusGravTank(this)
    )
  }
}

export class LegioCustodesOrionAssaultDropshipSquadron extends LegioCustodesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegioCustodesOrionAssaultDropship(this)
    )
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
